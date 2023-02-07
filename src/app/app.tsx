import {useTheme} from 'app/providers/theme-provider';
import {classNames} from 'shared/lib/class-names/class-names';
import './styles/index.scss';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/navbar';

function App(): JSX.Element {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <button
        onClick={toggleTheme}
      >
        Switch theme
      </button>
      <AppRouter/>
    </div>
  );
}

export default App;
