import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/text/text';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { getUserAuthData } from 'entities/user';
import { HStack } from 'shared/ui/stack';

interface ProfilePageHeaderProps {
  className?: string;
}

export function ProfilePageHeader({ className }: ProfilePageHeaderProps): JSX.Element {
  const { t } = useTranslation();

  const readonly = useSelector(getProfileReadonly);
  const profileData = useSelector(getProfileData);
  const authData = useSelector(getUserAuthData);
  const canEdit = profileData?.id === authData?.id;

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCanselEdit = useCallback(() => {
    dispatch(profileActions.canselEditProfile());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max align="center" justify="between" className={classNames('', {}, [className])}>
      <Text title={t('Профиль').toString()} />
      {
        canEdit && (
          <HStack gap="8" align="center" justify="start">
            {
              readonly ? (
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onEdit}
                >
                  {t('Редактировать')}
                </Button>
              ) : (
                <>
                  <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCanselEdit}
                  >
                    {t('Отменить')}
                  </Button>
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}
                  >
                    {t('Сохранить')}
                  </Button>
                </>
              )
            }
          </HStack>
        )
      }
    </HStack>
  );
}
