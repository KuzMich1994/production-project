import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import Code from '@/shared/ui/code/code';
import s from './article-code-block-component.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

function ArticleCodeBlockComponent({ className, block }: ArticleCodeBlockComponentProps): JSX.Element {
  return (
    <div className={classNames(s.articleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
}

export default memo(ArticleCodeBlockComponent);
