import EditableProfileCard from './ui/editable-profile-card/editable-profile-card';
import { ProfileSchema } from './model/types/editable-profile-card-schema';
import { profileReducer } from './model/slice/profile-slice';

export {
  EditableProfileCard,
  type ProfileSchema,
  profileReducer,
};
export { ValidateProfileError } from './model/consts/consts';
