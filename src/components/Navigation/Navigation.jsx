import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to="register">Register</Link>
        <Link to="login">Login</Link>
        <Link to="contacts">Contacts</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
