import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import Input from 'shared/ui/input/input';
import s from './login-form.module.scss';

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(s.loginForm, {}, [className])}
    >
      <Input
        autofocus
        placeholder={t('Введите username')}
        type="text"
        className={s.input}
      />
      <Input
        placeholder={t('Введите пароль')}
        type="text"
        className={s.input}
      />
      <Button className={s.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
}
