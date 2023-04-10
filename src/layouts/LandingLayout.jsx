import React from 'react';
import { Link } from "react-router-dom";

export default function LandingLayout() {

  return (
    <div className="App">
      <h1>Shell Bryson</h1>
      <p>Building...</p>
      <Link to="about">About</Link>
    </div>
  )
}