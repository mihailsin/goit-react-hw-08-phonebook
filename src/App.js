import { React } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Contacts from 'views/Contacts';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Navigation />;
      <Route path="/" element={<Contacts />} />
    </Routes>
  );
};

export default App;
