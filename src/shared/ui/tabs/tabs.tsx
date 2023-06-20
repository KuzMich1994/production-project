import { classNames } from 'shared/lib/class-names/class-names';
import { ReactNode, useCallback } from 'react';
import Card, { CardTheme } from 'shared/ui/card/card';
import { nanoid } from '@reduxjs/toolkit';
import s from './tabs.module.scss';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: TabItem<T>) => void;
}

function Tabs<T extends string>(props: TabsProps<T>): JSX.Element {
  const {
    className,
    tabs,
    onTabClick,
    value,
  } = props;

  const clickHandle = useCallback((tab: TabItem<T>) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(s.tabs, {}, [className])}>
      {
        tabs.map((tab) => (
          <Card
            theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
            key={nanoid()}
            className={s.tab}
            onClick={clickHandle(tab)}
          >
            {tab.content}
          </Card>
        ))
      }
    </div>
  );
}

export default Tabs;
