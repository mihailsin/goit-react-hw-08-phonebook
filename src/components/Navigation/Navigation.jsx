import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link>Register</Link>
        <Link>Login</Link>
        <Link>Contacts</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
