import { lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const LibraryPage = lazy(() => import('../pages/LibraryPage/LibraryPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ReadingPage = lazy(() => import('../pages/ReadingPage/ReadingPage'));
const RecommendedPage = lazy(
  () => import('../pages/RecommendedPage/RecommendedPage'),
);
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

const App: React.FC = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/recommended" element={<RecommendedPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
