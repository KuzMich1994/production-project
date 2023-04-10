import { classNames } from 'shared/lib/class-names/class-names';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  ProfileCard,
  profileReducer,
} from 'entities/profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { useSelector } from 'react-redux';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

function ProfilePage({ className }: ProfilePageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducerList={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard
          data={data}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
