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
import s from './profile-page-header.module.scss';

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
    <div className={classNames(s.profilePageHeader, {}, [className])}>
      <Text title={t('Профиль').toString()} />
      {
        canEdit && (
          <div className={s.buttonsContainer}>
            {
              readonly ? (
                <Button
                  className={s.editBtn}
                  theme={ButtonTheme.OUTLINE}
                  onClick={onEdit}
                >
                  {t('Редактировать')}
                </Button>
              ) : (
                <>
                  <Button
                    className={classNames(s.btn, {}, [s.editBtn])}
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCanselEdit}
                  >
                    {t('Отменить')}
                  </Button>
                  <Button
                    className={classNames(s.btn, {}, [s.saveBtn])}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}
                  >
                    {t('Сохранить')}
                  </Button>
                </>
              )
            }
          </div>
        )
      }
    </div>
  );
}
