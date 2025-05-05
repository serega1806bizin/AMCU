import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { GlobalStateProvider } from './Store/Store';
import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './modules/HomePage/HomePage';
import { ScrollToTop } from './ScrollToTop';
import { NewsPage } from './modules/NewsPage/NewsPage';
import { TeamPage } from './modules/TeamPage';
import { S9 } from './modules/HomePage/Sections/s9';

export const Root = () => (
  <Router>
    <GlobalStateProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="contacts" element={<S9 background="#c7f860" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </GlobalStateProvider>
  </Router>
);
