import EditableProfileCard from './ui/editable-profile-card/editable-profile-card';
import { ProfileSchema } from './model/types/editable-profile-card-schema';
import { profileReducer } from './model/slice/profile-slice';

export {
  EditableProfileCard,
  ProfileSchema,
  profileReducer,
};
export { ValidateProfileError } from 'features/editable-profile-card/model/types/editable-profile-card-schema';
