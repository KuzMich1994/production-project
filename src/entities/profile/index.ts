import { ProfileCard } from 'entities/profile/ui/profile-card/profile-card';
import { fetchProfileData } from './model/services/fetch-profile-data/fetch-profile-data';
import { ProfileSchema, Profile } from './model/types/profile';
import { profileReducer, profileActions } from './model/slice/profile-slice';
import { getProfileError } from './model/selectors/get-profile-error/get-profile-error';
import { getProfileIsLoading } from './model/selectors/get-profile-is-loading/get-profile-is-loading';
import { getProfileData } from './model/selectors/get-profile-data/get-profile-data';

export {
  Profile,
  ProfileSchema,
  profileReducer,
  profileActions,
  fetchProfileData,
  ProfileCard,
  getProfileError,
  getProfileData,
  getProfileIsLoading,
};
