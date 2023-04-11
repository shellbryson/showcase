import './App.scss';
import React from 'react';
import { Routes, Route, } from "react-router-dom";

// Layouts
import Layout from './layouts/Layout';

// Pages
import Welcome from './pages/Welcome';
import About from './pages/About';
import Engineer from './pages/Engineer';
import Writer from './pages/Writer';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="engineer" element={<Engineer />} />
          <Route path="writer" element={<Writer />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Welcome />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
