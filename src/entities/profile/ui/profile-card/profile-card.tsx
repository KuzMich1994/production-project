import { classNames, Mods } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/text/text';
import Input from 'shared/ui/input/input';
import { Loader } from 'shared/ui/loader/loader';
import { Avatar } from 'shared/ui/avatar/avatar';
import { Currency, CurrencySelect } from 'entities/currency';
import { Country } from 'entities/country/model/types/country';
import { CountrySelect } from 'entities/country';
import s from './profile-card.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export function ProfileCard(props: ProfileCardProps): JSX.Element {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeLastName,
    onChangeFirstName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [s.editing]: !readonly,
  };

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
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля').toString()}
          text={t('Попробуйте обновить страницу').toString()}
        />
      </div>
    );
  }

  return (
    <div className={classNames(s.profileCard, mods, [className])}>
      <div className={s.data}>
        {
          data?.avatar && (
            <div className={s.avatarContainer}>
              <Avatar src={data.avatar} alt={data.username} size={150} />
            </div>
          )
        }
        <Input
          readonly={readonly}
          value={data?.first}
          placeholder={t('Ваше имя').toString()}
          className={s.input}
          onChange={onChangeFirstName}
        />
        <Input
          readonly={readonly}
          value={data?.lastName}
          placeholder={t('Ваша фамилия').toString()}
          className={s.input}
          onChange={onChangeLastName}
        />
        <Input
          readonly={readonly}
          value={String(data?.age)}
          placeholder={t('Ваш возраст').toString()}
          className={s.input}
          onChange={onChangeAge}
        />
        <Input
          readonly={readonly}
          value={data?.city}
          placeholder={t('Ваш город').toString()}
          className={s.input}
          onChange={onChangeCity}
        />
        <Input
          readonly={readonly}
          value={data?.username}
          placeholder={t('Ваш username').toString()}
          className={s.input}
          onChange={onChangeUsername}
        />
        <Input
          readonly={readonly}
          value={data?.avatar}
          placeholder={t('Ваш аватар').toString()}
          className={s.input}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={s.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={s.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
}
