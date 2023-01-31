import {Route, Routes} from 'react-router-dom';
import {MainPageAsync} from '../../pages/main-page/main-page-async';
import {AboutAsync} from '../../pages/about/about-async';
import {Suspense} from 'react';
import {useTheme} from '../../theme/use-theme';
import {classNames} from '../../helpers/class-names/class-names';

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
          <Route path={'/'} element={<MainPageAsync/>} />
          <Route path={'/about'} element={<AboutAsync/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
