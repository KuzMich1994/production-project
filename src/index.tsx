import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/theme-provider';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { StoreProvider } from 'app/providers/store-provider';
import App from './app/app';
import './app/styles/index.scss';
import 'shared/config/i18n/i18n';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Контейнер root не найден. Не удалось вмонтировать реакт приложение');
}

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
