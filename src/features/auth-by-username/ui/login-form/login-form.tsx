import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import Input from 'shared/ui/input/input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'app/providers/store-provider';
import { Text, TextTheme } from 'shared/ui/text/text';
import { loginByUsername } from '../../model/services/login-by-username/login-by-username';
import { getLoginState } from '../../model/selectors/get-login-state/get-login-state';
import s from './login-form.module.scss';
import { loginActions } from '../../model/slice/login-slice';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

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
  );
});
