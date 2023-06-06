import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import TileIcon from 'shared/assets/icons/tile.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import Icon from 'shared/ui/icon/icon';
import { ArticleView } from '../../model/types/article';
import s from './article-view-selector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.TILE,
    icon: TileIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

function ArticleViewSelector(props: ArticleViewSelectorProps): JSX.Element {
  const {
    className,
    onViewClick,
    view,
  } = props;

  const onClickHandler = (newView: ArticleView) => () => {
    onViewClick(newView);
  };

  return (
    <div className={classNames(s.articleViewSelector, {}, [className])}>
      {
        viewTypes.map((viewType) => (
          <Button
            theme={ButtonTheme.CLEAR}
            onClick={onClickHandler(viewType.view)}
          >
            <Icon
              Svg={viewType.icon}
              className={classNames('', { [s.selected]: viewType.view === view })}
            />
          </Button>
        ))
      }
    </div>
  );
}

export default memo(ArticleViewSelector);
