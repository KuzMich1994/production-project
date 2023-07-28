import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/class-names';
import { getUserAuthData } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { HStack } from '@/shared/ui/stack';
import { Text } from '@/shared/ui/text';
import { ButtonTheme, Button } from '@/shared/ui/button';
import { updateProfileData } from '../../model/services/update-profile-data/update-profile-data';
import { profileActions } from '../../model/slice/profile-slice';
import { getProfileReadonly } from '../../model/selectors/get-profile-readonly/get-profile-readonly';
import { getProfileData } from '../../model/selectors/get-profile-data/get-profile-data';

interface EditableProfileCardHeaderProps {
  className?: string;
}

function EditableProfileCardHeader({ className }: EditableProfileCardHeaderProps): JSX.Element {
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
                  data-testid="EditableProfileCardHeader.EditButton"
                >
                  {t('Редактировать')}
                </Button>
              ) : (
                <>
                  <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCanselEdit}
                    data-testid="EditableProfileCardHeader.CanselButton"
                  >
                    {t('Отменить')}
                  </Button>
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}
                    data-testid="EditableProfileCardHeader.SaveButton"
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

export default memo(EditableProfileCardHeader);
