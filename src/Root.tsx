import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { GlobalStateProvider } from './Store/Store';
import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './modules/HomePage/HomePage';
import { ScrollToTop } from './ScrollToTop';
import { NewsPage } from './modules/NewsPage/NewsPage';
import { TeamPage } from './modules/TeamPage';

export const Root = () => (
  <Router>
    <GlobalStateProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="team" element={<TeamPage />} />
          {/* <Route path="contacts" element={<ContactsPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </GlobalStateProvider>
  </Router>
);
