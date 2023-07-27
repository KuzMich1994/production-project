import { memo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { classNames } from '@/shared/lib/class-names/class-names';
import Text from '@/shared/ui/text/text';
import { ArticleTextBlock } from '../../model/types/article';
import s from './article-text-block-component.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

function ArticleTextBlockComponent({ className, block }: ArticleTextBlockComponentProps): JSX.Element {
  return (
    <div className={classNames(s.articleTextBlockComponent, {}, [className])}>
      {
        block.title && (
          <Text title={block.title} className={s.title} />
        )
      }
      {
        block.paragraphs.map((paragraph) => (
          <Text text={paragraph} key={nanoid()} className={s.paragraph} />
        ))
      }
    </div>
  );
}

export default memo(ArticleTextBlockComponent);
