import { StateSchema } from 'app/providers/store-provider';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileValidateErrors } from './get-profile-validate-errors';

describe('getProfileValidateErrorsTest', () => {
  test('should return profile validate errors', () => {
    const validateErrors: ValidateProfileError[] = [
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.NO_DATA,
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_AGE,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
