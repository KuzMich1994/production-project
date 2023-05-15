import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import Text, { TextAlign } from 'shared/ui/text/text';
import s from './article-image-block-component.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

function ArticleImageBlockComponent({ className, block }: ArticleImageBlockComponentProps): JSX.Element {
  return (
    <div className={classNames(s.articleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title} className={s.img} />
      {
        block.title && (
          <Text text={block.title} align={TextAlign.CENTER} />
        )
      }
    </div>
  );
}

export default memo(ArticleImageBlockComponent);
