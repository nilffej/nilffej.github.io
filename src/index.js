import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/Homepage/HomePage';
import Bartending from './components/Bartending/Bartending';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='' element={<HomePage />} />
      <Route path='bartending' element={<Bartending />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
