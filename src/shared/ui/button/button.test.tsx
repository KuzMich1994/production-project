import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './button';

describe('button', () => {
  test('Get button by text', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Get button by class of theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
