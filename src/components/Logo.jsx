import React from 'react';

import './Logo.scss';
import LogoImage from '../assets/logo.svg';

export default function Logo() {

  return (
    <div className="logo">
      <img src={LogoImage} alt="Logo" />
    </div>
  )
}