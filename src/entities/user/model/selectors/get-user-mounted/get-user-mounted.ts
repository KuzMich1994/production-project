import { StateSchema } from 'app/providers/store-provider';

export const getUserMounted = (state: StateSchema) => state.user._mounted;
