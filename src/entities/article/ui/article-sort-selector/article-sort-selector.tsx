import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import { SelectOption, Select } from '@/shared/ui/select';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '../../model/consts/consts';
import s from './article-sort-selector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

function ArticleSortSelector(props: ArticleSortSelectorProps): JSX.Element {
  const {
    className,
    onChangeSort,
    sort,
    onChangeOrder,
    order,
  } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t],
  );

  // lesson 59, 29:26

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('дате создания'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам'),
      },
    ],
    [t],
  );

  return (
    <div className={classNames(s.articleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        label={t('Сортировать по').toString()}
        options={sortFieldOptions}
        onChange={onChangeSort}
        value={sort}
      />
      <Select<SortOrder>
        options={orderOptions}
        label={t('по').toString()}
        value={order}
        onChange={onChangeOrder}
        className={s.order}
      />
    </div>
  );
}

export default memo(ArticleSortSelector);
