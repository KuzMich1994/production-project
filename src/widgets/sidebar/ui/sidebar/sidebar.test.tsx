import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/sidebar';
import { renderComponent } from 'shared/lib/tests/render-component/render-component';

describe('sidebar', () => {
  test('test render', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle ', () => {
    renderComponent(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
