import { useTheme } from 'app/providers/theme-provider';
import { classNames } from 'shared/lib/class-names/class-names';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/modal/modal';

function App(): JSX.Element {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <button onClick={() => setIsOpen(true)}>toggle</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur iure laudantium libero maiores minus perspiciatis vero! Architecto explicabo impedit incidunt?
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
