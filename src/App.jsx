import './App.scss';
import React from 'react';
import { Routes, Route, } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

// Layouts
import AdminLayout from './layouts/AdminLayout';
import Layout from './layouts/Layout';

// Pages
import Signin from './pages/Signin';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Engineer from './pages/Engineer';
import Writer from './pages/Writer';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="signin" element={<Signin />} />
          <Route path="engineer" element={<Engineer />} />
          <Route path="writer" element={<Writer />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Welcome />} />
        </Route>
      </Routes>
      <Analytics />
    </div>
  )
}

export default App;
