import React from 'react';
import { Link } from "react-router-dom";

import './LandingLayout.scss';

export default function LandingLayout() {

  return (
    <div className="App">
      <div className="landing-bg_one"></div>
      <div className="landing-bg_two"></div>

      <div className="landing-content">
        <h1>Shell Bryson</h1>
        <p>Building...</p>
        <Link to="about">About</Link>
      </div>
    </div>
  )
}