import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/class-names';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { getUserMounted, userActions } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { useTheme } from '@/app/providers/theme-provider';

function App(): JSX.Element {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const mounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {mounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
