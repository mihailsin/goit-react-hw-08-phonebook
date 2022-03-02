import { React } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Register from 'views/Register';
import Login from 'views/Login';
import Contacts from 'views/Contacts';

import './App.css';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
};

export default App;
