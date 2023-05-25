import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import Input from 'shared/ui/input/input';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import s from './add-comment-form.module.scss';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/add-comment-form-slice';
import { getCommentFormError, getCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { sendComment } from '../../model/services/send-comment/send-comment';

interface AddCommentFormProps {
  className?: string;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

function AddCommentForm({ className }: AddCommentFormProps): JSX.Element {
  const { t } = useTranslation();
  const text = useSelector(getCommentFormText);
  const error = useSelector(getCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendComment = useCallback(() => {
    dispatch(sendComment());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducerList={reducers}>
      <div className={classNames(s.addCommentForm, {}, [className])}>
        <Input
          className={s.input}
          placeholder={t('Введите текст комментария').toString()}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendComment}
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
}

export default memo(AddCommentForm);
