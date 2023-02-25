import { Story } from '@storybook/react';
import { Theme } from 'app/providers/theme-provider';

export function ThemeDecorator(theme: Theme) {
  return function (StoryComponent: Story) {
    return (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    );
  };
}
