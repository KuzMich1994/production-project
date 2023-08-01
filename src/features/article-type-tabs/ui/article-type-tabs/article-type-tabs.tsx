import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import { TabItem, Tabs } from '@/shared/ui/tabs';
import { ArticleType } from '@/entities/article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

function ArticleTypeTabs(props: ArticleTypeTabsProps): JSX.Element {
  const { className, value, onChangeType } = props;

  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все статьи'),
    },
    {
      value: ArticleType.IT,
      content: t('Айти'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука'),
    },
  ], [t]);

  const onTabClick = useCallback((tab: TabItem<ArticleType>) => {
    onChangeType(tab.value);
  }, [onChangeType]);

  return (
    <Tabs<ArticleType>
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
}

export default memo(ArticleTypeTabs);
