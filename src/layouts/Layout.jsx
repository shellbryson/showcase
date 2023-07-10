import React from 'react';
import { Outlet } from "react-router-dom";

// Contexts
import { useApp } from '../contexts/AppContext';

// Components
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ZoneButton from '../components/ZoneButton';
import Chronology from '../components/Chronology';

// Styles
import './Layout.scss';

// Assets
import PortraitImage from '../assets/Portrait-web.png';

export default function Layout() {

  const { isBackgroundFade } = useApp();

  const fade = isBackgroundFade ? 'fade' : '';

  return (
    <div className={`layout ${fade}`}>
      <div className="layout__bg_base">
        <div className="layout__bg layout__bg_1_0"></div>
        <div className="layout__bg layout__bg_1_1"></div>
        <div className="layout__bg layout__bg_1_2"></div>
        <div className="layout__bg layout__bg_1_3"></div>
        <div className="layout__bg layout__bg_2_0"></div>
        <div className="layout__bg layout__bg_2_1"></div>
        <div className="layout__bg layout__bg_2_2"></div>
        <div className="layout__bg layout__bg_2_3"></div>
      </div>

      <div className="layout__portrait">
        <img src={PortraitImage} alt="Portrait" className="layout__portrait-image" />
      </div>

      <Outlet />

      <div className="layout__bottom">
        <Logo size="small" path="about" />
      </div>

      <Chronology />
      <Navigation />
    </div>
  )
}