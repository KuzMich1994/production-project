import { ComponentType, lazy } from 'react';
import { AddCommentFormProps } from 'features/add-comment-form/ui/add-comment-form/add-comment-form';

export const AddCommentFormAsync = lazy<ComponentType<AddCommentFormProps>>(() => import('./add-comment-form'));
