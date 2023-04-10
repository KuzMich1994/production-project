import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import Text, { TextTheme } from 'shared/ui/text/text';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import Input from 'shared/ui/input/input';
import { Loader } from 'shared/ui/loader/loader';
import s from './profile-card.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
}

export function ProfileCard({
  className, data, isLoading, error,
}: ProfileCardProps): JSX.Element {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(s.profileCard, { [s.loading]: true }, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(s.profileCard, { [s.error]: true }, [className])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля').toString()}
          text={t('Попробуйте обновить страницу').toString()}
        />
      </div>
    );
  }

  return (
    <div className={classNames(s.profileCard, {}, [className])}>
      <div className={s.header}>
        <Text title={t('Профиль').toString()} />
        <Button
          className={s.editBtn}
          theme={ButtonTheme.OUTLINE}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <div className={s.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя').toString()}
          className={s.input}
        />
        <Input
          value={data?.lastName}
          placeholder={t('Ваша фамилия').toString()}
          className={s.input}
        />
      </div>
    </div>
  );
}
