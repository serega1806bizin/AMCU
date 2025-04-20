import './utils/font-styles.scss';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <>
        <div
          className="brb"
          data-barba="container"
          data-barba-namespace="main"
          data-ptype="/"
        >
          <main className="main">
            <Outlet />
          </main>
          <Footer />
        </div>
      </>
    </div>
  );
};
