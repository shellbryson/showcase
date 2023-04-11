import React from 'react';
import { Link } from "react-router-dom";

import './Logo.scss';
import LogoImage from '../assets/logo.svg';

export default function Logo() {

  return (
    <div className="logo">
      <Link to="about">
        <img src={LogoImage} alt="Logo" />
      </Link>
    </div>
  )
}