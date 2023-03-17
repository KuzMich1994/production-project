import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export function Portal({ element = document.body, children }: PortalProps): JSX.Element {
  return (
    createPortal(children, element)
  );
}
