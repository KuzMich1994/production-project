import { DropdownDirection } from '../../../types/ui';
import s from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': s.optionsTopLeft,
  'bottom left': s.optionsBottomLeft,
  'top right': s.optionsTopRight,
  'bottom right': s.optionsBottomRight,
};
