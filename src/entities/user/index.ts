import { getUserMounted } from 'entities/user/model/selectors/get-user-mounted/get-user-mounted';
import { userActions, userReducer } from './model/slice/user-slice';
import { User, UserSchema } from './model/types/user';
import { getUserAuthData } from './model/selectors/get-user-auth-data/get-user-auth-data';

export {
  userActions,
  userReducer,
  User,
  UserSchema,
  getUserAuthData,
  getUserMounted,
};
