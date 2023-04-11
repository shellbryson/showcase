import React from 'react';
import { Link } from "react-router-dom";

import './Navigation.scss';
import LogoImage from '../assets/logo.svg';

export default function Navigation() {

  return (
    <div className="navigation">
      <Link to="engineer">
        Engineer
      </Link>
      <Link to="writer">
        Writer
      </Link>
      <Link to="/">
        Home
      </Link>
    </div>
  )
}