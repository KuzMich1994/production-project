import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import s from './star-rating.module.scss';
import Icon from '@/shared/ui/icon/icon';
import StarIcon from '@/shared/assets/icons/star-20-20.svg';

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

function StarRating(props: StarRatingProps) {
  const {
    className,
    selectedStars = 0,
    size = 30,
    onSelect,
  } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(0);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(s.starRating, {}, [className])}>
      {
        stars.map((star) => (
          <Icon
            width={size}
            height={size}
            Svg={StarIcon}
            key={star}
            className={classNames(
              s.starIcon,
              {
                [s.hovered]: currentStarsCount >= star,
                [s.selected]: isSelected,
              },
              [],
            )}
            onMouseLeave={onLeave}
            onMouseEnter={onHover(star)}
            onClick={onClick(star)}
          />
        ))
      }
    </div>
  );
}

export default memo(StarRating);
