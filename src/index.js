import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='' element={<HomePage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
