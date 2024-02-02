import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { useAppDispatch } from 'services/store.ts';
import { setCredentials } from 'features/auth/authSlice.ts';
import { User } from 'services/users/users.types.ts';
import { RequireAuth } from 'hoc/RequireAuth.tsx';

const HomePage = lazy(() => import('pages/HomePage'));
const BookmarksPage = lazy(() => import('pages/BookmarksPage'));
const TvShowsPage = lazy(() => import('pages/TvShowsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const { id, email } = jwtDecode(token) as User;
      const stateObj = { user: { id, email }, error: null };
      dispatch(setCredentials(stateObj));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <Suspense>
                <HomePage />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="/tvshows"
          element={
            <RequireAuth>
              <Suspense>
                <TvShowsPage />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <RequireAuth>
              <Suspense>
                <BookmarksPage />
              </Suspense>
            </RequireAuth>
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
