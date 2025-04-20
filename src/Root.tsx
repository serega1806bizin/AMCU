import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { GlobalStateProvider } from './Store/Store';
import { NotFoundPage } from './components/NotFoundPage';
import { ConstructorPage } from './modules/ConstructorPage';

export const Root = () => (
  <Router>
    <GlobalStateProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="news">
            {/* <Route index element={<ProductPage />} /> */}
          </Route>
          <Route path="about-us">
            <Route index element={<ConstructorPage />} />
          </Route>
          <Route path="contacts">
            <Route index element={<ConstructorPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </GlobalStateProvider>
  </Router>
);
