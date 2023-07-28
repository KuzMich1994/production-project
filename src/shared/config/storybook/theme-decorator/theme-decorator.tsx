import { Story } from '@storybook/react';
// eslint-disable-next-line kuzmich-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/theme-provider';
import { Theme } from '@/shared/const/theme';

export function ThemeDecorator(theme: Theme) {
  return function (StoryComponent: Story) {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    );
  };
}
