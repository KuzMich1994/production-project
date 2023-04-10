import { ProfileCard } from 'entities/profile/ui/profile-card/profile-card';
import { fetchProfileData } from './model/services/fetch-profile-data/fetch-profile-data';
import { ProfileSchema, Profile } from './model/types/profile';
import { profileReducer, profileActions } from './model/slice/profile-slice';

export {
  Profile,
  ProfileSchema,
  profileReducer,
  profileActions,
  fetchProfileData,
  ProfileCard,
};
