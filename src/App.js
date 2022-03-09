import { React, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth-selectors';
import { Routes, Route, Navigate } from 'react-router-dom';
import Fallback from 'components/Fallback';
import './App.css';

const About = lazy(() => import('views/About'));
const Register = lazy(() => import('views/Register'));
const Login = lazy(() => import('views/Login'));
const Contacts = lazy(() => import('views/Contacts'));
const Navigation = lazy(() => import('components/Navigation'));

const App = () => {
  const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return isLoggedIn ? children : <Navigate to="/login" />;
  };
  const PublicRoute = ({ children }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return isLoggedIn ? <Navigate to="/contacts" /> : children;
  };
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <Navigation />
        <Routes>
          <Route
            path="about"
            element={
              <PublicRoute>
                <About />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
