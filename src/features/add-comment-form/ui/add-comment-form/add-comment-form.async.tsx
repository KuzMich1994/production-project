import { ComponentType, lazy } from 'react';
import { AddCommentFormProps } from './add-comment-form';

export const AddCommentFormAsync = lazy<ComponentType<AddCommentFormProps>>(() => import('./add-comment-form'));
