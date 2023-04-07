import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import Input from 'shared/ui/input/input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'app/providers/store-provider';
import { Text, TextTheme } from 'shared/ui/text/text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { getLoginUsername } from '../../model/selectors/get-login-username/get-login-username';
import { getLoginPassword } from '../../model/selectors/get-login-password/get-login-password';
import { getLoginIsLoading } from '../../model/selectors/get-login-is-loading/get-login-is-loading';
import { getLoginError } from '../../model/selectors/get-login-error/get-login-error';
import { loginByUsername } from '../../model/services/login-by-username/login-by-username';
import s from './login-form.module.scss';
import { loginActions, loginReducer } from '../../model/slice/login-slice';

interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducerList = {
  login: loginReducer,
};

function LoginForm({ className }: LoginFormProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducerList={initialReducers}>
      <div
        className={classNames(s.loginForm, {}, [className])}
      >
        <Text title={t('Форма авторизации')} />
        {
          error && (
            <Text text={t('Вы ввели не верный логин или пароль')} theme={TextTheme.ERROR} />
          )
        }
        <Input
          autofocus
          placeholder={t('Введите username')}
          type="text"
          className={s.input}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          placeholder={t('Введите пароль')}
          type="text"
          className={s.input}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          disabled={isLoading}
          theme={ButtonTheme.OUTLINE}
          className={s.loginBtn}
          onClick={onLoginClick}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
}

export default memo(LoginForm);
