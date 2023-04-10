import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/profile/model/selectors/get-profile-data/get-profile-data';
import { getProfileIsLoading } from 'entities/profile/model/selectors/get-profile-is-loading/get-profile-is-loading';
import { getProfileError } from 'entities/profile/model/selectors/get-profile-error/get-profile-error';
import Text from 'shared/ui/text/text';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import Input from 'shared/ui/input/input';
import s from './profile-card.module.scss';

interface ProfileCardProps {
  className?: string;
}

export function ProfileCard({ className }: ProfileCardProps): JSX.Element {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

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
