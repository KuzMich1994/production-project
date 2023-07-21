import { Profile } from 'entities/profile';
import { ValidateProfileError } from '../../types/editable-profile-card-schema';

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    first, lastName, age, country,
  } = profile;

  const errors: ValidateProfileError[] = [];

  if (!first || !lastName) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(Number(age))) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
