import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollapsibleExample from './navbar.js';
import HomePage from './HomePage/homePage';
import ContactUs from './ContactUs/contactUs';

function App() {
  return (
    <Router>
      <CollapsibleExample />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;

