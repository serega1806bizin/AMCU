import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';

export const App = () => {
  return (
    <>
      <Header />
      <div
        className="brb"
        data-barba="container"
        data-barba-namespace="main"
        data-ptype="/"
      >
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <Menu />
    </>
  );
};
