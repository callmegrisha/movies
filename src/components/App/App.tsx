import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
const HomePage = lazy(() => import('pages/HomePage'));
const BookmarksPage = lazy(() => import('pages/BookmarksPage'));
const TvShowsPage = lazy(() => import('pages/TvShowsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/tvshows"
          element={
            <Suspense>
              <TvShowsPage />
            </Suspense>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <Suspense>
              <BookmarksPage />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/register"
        element={
          <Suspense>
            <RegisterPage />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense>
            <LoginPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
