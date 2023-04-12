import React from 'react';
import { Link } from "react-router-dom";

import './Logo.scss';
import LogoImage from '../assets/logo.svg';

export default function Logo({ size, path }) {

  return (
    <div className={`logo ${size}`}>
      <Link to={path}>
        <img src={LogoImage} alt="Logo" />
      </Link>
    </div>
  )
}