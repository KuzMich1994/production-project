import { StateSchema } from 'app/providers/store-provider';

export const getCommentFormText = (state: StateSchema) => state.addCommentForm?.text;
export const getCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
export const getCommentFormIsLoading = (state: StateSchema) => state.addCommentForm?.isLoading;
