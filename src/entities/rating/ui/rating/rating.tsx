import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/class-names/class-names';
import Card from '@/shared/ui/card/card';
import { HStack, VStack } from '@/shared/ui/stack';
import Text from '@/shared/ui/text/text';
import StarRating from '@/shared/ui/star-rating/star-rating';
import { Modal } from '@/shared/ui/modal/modal';
import Input from '@/shared/ui/input/input';
import Button, { ButtonSize, ButtonTheme } from '@/shared/ui/button/button';
import Drawer from '@/shared/ui/drawer/drawer';

interface RatingProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCansel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

function Rating(props: RatingProps): JSX.Element {
  const {
    className,
    onCansel,
    feedbackTitle,
    onAccept,
    hasFeedback,
    title,
    rate = 0,
  } = props;

  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const canselHandler = useCallback(() => {
    setIsModalOpen(false);
    onCansel?.(starsCount);
  }, [onCansel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')} />
    </>
  );

  return (
    <Card className={className} fullWidth>
      <VStack gap="8" align="center" max>
        <Text title={starsCount ? t('Спасибо за оценку!') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>

      <BrowserView>
        <Modal
          lazy
          isOpen={isModalOpen}
          onClose={canselHandler}
        >
          <VStack max gap="32">
            {modalContent}
            <HStack gap="16" align="center" justify="end">
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={canselHandler}
              >
                {t('Отменить')}
              </Button>
              <Button
                onClick={acceptHandler}
              >
                {t('Отправить')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer
          lazy
          isOpen={isModalOpen}
          onClose={canselHandler}
        >
          <VStack gap="32">
            {modalContent}
            <Button
              onClick={acceptHandler}
              buttonSize={ButtonSize.L}
              fullWidth
            >
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
}

export default memo(Rating);
