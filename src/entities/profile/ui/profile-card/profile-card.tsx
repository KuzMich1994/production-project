import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/class-names/class-names';
import Text, { TextAlign, TextTheme } from '@/shared/ui/text/text';
import Input from '@/shared/ui/input/input';
import { Loader } from '@/shared/ui/loader/loader';
import { Avatar } from '@/shared/ui/avatar/avatar';
import { Currency, CurrencySelect } from '@/entities/currency';
import { Country } from '@/entities/country/model/types/country';
import { CountrySelect } from '@/entities/country';
import { HStack, VStack } from '@/shared/ui/stack';
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
      <HStack max justify="center" className={classNames(s.profileCard, { [s.loading]: true }, [className])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack max justify="center" className={classNames(s.profileCard, { [s.error]: true }, [className])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля').toString()}
          text={t('Попробуйте обновить страницу').toString()}
        />
      </HStack>
    );
  }

  return (
    <VStack max gap="16" className={classNames(s.profileCard, mods, [className])}>
      {
        data?.avatar && (
          <HStack max justify="center" className={s.avatarContainer}>
            <Avatar src={data.avatar} alt={data.username} size={150} />
          </HStack>
        )
      }
      <Input
        readonly={readonly}
        value={data?.first}
        placeholder={t('Ваше имя').toString()}
        className={s.input}
        onChange={onChangeFirstName}
        data-testid="ProfileCard.FirstName"
      />
      <Input
        readonly={readonly}
        value={data?.lastName}
        placeholder={t('Ваша фамилия').toString()}
        className={s.input}
        onChange={onChangeLastName}
        data-testid="ProfileCard.LastName"
      />
      <Input
        readonly={readonly}
        value={String(data?.age)}
        placeholder={t('Ваш возраст').toString()}
        className={s.input}
        onChange={onChangeAge}
        data-testid="ProfileCard.Age"
      />
      <Input
        readonly={readonly}
        value={data?.city}
        placeholder={t('Ваш город').toString()}
        className={s.input}
        onChange={onChangeCity}
        data-testid="ProfileCard.City"
      />
      <Input
        readonly={readonly}
        value={data?.username}
        placeholder={t('Ваш username').toString()}
        className={s.input}
        onChange={onChangeUsername}
        data-testid="ProfileCard.Username"
      />
      <Input
        readonly={readonly}
        value={data?.avatar}
        placeholder={t('Ваш аватар').toString()}
        className={s.input}
        onChange={onChangeAvatar}
        data-testid="ProfileCard.Avatar"
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
    </VStack>
  );
}
