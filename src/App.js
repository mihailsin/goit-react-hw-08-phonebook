import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoggedIn, getUserName } from 'redux/auth-selectors';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useGetCurrentUserQuery } from 'redux/userApi';
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
  // const PublicRoute = ({children}) => {

  // }
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
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
