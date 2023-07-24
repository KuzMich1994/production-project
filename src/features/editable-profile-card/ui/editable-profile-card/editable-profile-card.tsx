import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect/use-initial-effect';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { classNames } from 'shared/lib/class-names/class-names';
import Text, { TextTheme } from 'shared/ui/text/text';
import { ProfileCard } from 'entities/profile';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { VStack } from 'shared/ui/stack';
import EditableProfileCardHeader from '../editable-profile-card-header/editable-profile-card-header';
import { getProfileIsLoading } from '../../model/selectors/get-profile-is-loading/get-profile-is-loading';
import { getProfileError } from '../../model/selectors/get-profile-error/get-profile-error';
import { getProfileForm } from '../../model/selectors/get-profile-form/get-profile-form';
import { getProfileReadonly } from '../../model/selectors/get-profile-readonly/get-profile-readonly';
import { getProfileValidateErrors } from '../../model/selectors/get-profile-validate-errors/get-profile-validate-errors';
import { fetchProfileData } from '../../model/services/fetch-profile-data/fetch-profile-data';
import { profileActions, profileReducer } from '../../model/slice/profile-slice';
import { ValidateProfileError } from '../../model/consts/consts';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const reducers: ReducerList = {
  profile: profileReducer,
};

function EditableProfileCard(props: EditableProfileCardProps): JSX.Element {
  const { className, id } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorsTranslates = {
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_AGE]: t('Не корректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Не корректный регион'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера при сохранении'),
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastName: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value?.replace(/\D+/gm, '') || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value?: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducerList={reducers}>
      <EditableProfileCardHeader />
      <VStack gap="8" max className={classNames('', {}, [className])}>
        {
          validateErrors?.length
            ? validateErrors.map((err) => (
              <Text
                key={err}
                theme={TextTheme.ERROR}
                text={validateErrorsTranslates[err]}
                data-testid="EditableProfileCard.Error"
              />
            )) : null
        }
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  );
}

export default memo(EditableProfileCard);
