import { classNames } from 'shared/lib/class-names/class-names';
import Page from 'widgets/page/page';
import { VStack } from 'shared/ui/stack';
import { EditableProfileCard } from 'features/editable-profile-card';
import { useParams } from 'react-router-dom';
import Text from 'shared/ui/text/text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
  className?: string;
}

function ProfilePage({ className }: ProfilePageProps): JSX.Element {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation('profile');

  if (!id) {
    return <Text text={t('Профиль не найден').toString()} />;
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
}

export default ProfilePage;
