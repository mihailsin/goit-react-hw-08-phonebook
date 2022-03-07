import { React } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth-selectors';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'views/Home';
import Navigation from 'components/Navigation';
import Register from 'views/Register';
import Login from 'views/Login';
import Contacts from 'views/Contacts';

import './App.css';

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
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
