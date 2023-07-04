import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import Input from 'shared/ui/input/input';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { HStack } from 'shared/ui/stack';
import s from './add-comment-form.module.scss';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/add-comment-form-slice';
import { getCommentFormText } from '../../model/selectors/addCommentFormSelectors';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

function AddCommentForm({ className, onSendComment }: AddCommentFormProps): JSX.Element {
  const { t } = useTranslation();
  const text = useSelector(getCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducerList={reducers}>
      <HStack align="center" justify="between" className={classNames(s.addCommentForm, {}, [className])}>
        <Input
          className={s.input}
          placeholder={t('Введите текст комментария').toString()}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
}

export default memo(AddCommentForm);
