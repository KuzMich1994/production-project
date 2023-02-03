import {Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import {useTheme} from 'app/providers/theme-provider';
import {classNames} from 'shared/lib/class-names/class-names';
import './styles/index.scss';
import {AboutPage} from 'pages/about';
import {MainPage} from 'pages/main-page';

function App(): JSX.Element {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button
        onClick={toggleTheme}
      >
        Switch theme
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage/>} />
          <Route path={'/about'} element={<AboutPage/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
