import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/sidebar';
import { renderWithTranslations } from 'shared/lib/render-with-translations/render-with-translations';

describe('sidebar', () => {
  test('test render', () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle ', () => {
    renderWithTranslations(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('sidebar_collapsed');
  });
});
