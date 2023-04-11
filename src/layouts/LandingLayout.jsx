import React from 'react';

// Components
import Logo from '../components/Logo';

// Styles
import './LandingLayout.scss';

// Assets
import PortraitImage from '../assets/Portrait-web.png';

export default function LandingLayout() {

  return (
    <div className="landing">
      <div className="landing__bg_base">
        <div className="landing__bg landing__bg_1_0"></div>
        <div className="landing__bg landing__bg_1_1"></div>
        <div className="landing__bg landing__bg_1_2"></div>
        <div className="landing__bg landing__bg_1_3"></div>
        <div className="landing__bg landing__bg_2_0"></div>
        <div className="landing__bg landing__bg_2_1"></div>
        <div className="landing__bg landing__bg_2_2"></div>
        <div className="landing__bg landing__bg_2_3"></div>
      </div>

      <div className="landing__portrait">
        <img src={PortraitImage} alt="Portrait" className="landing__portrait-image" />
      </div>

      <div className="landing__content">
        <h1>Shell Bryson</h1>
      </div>

      <div className="landing__bottom">
        <Logo />
      </div>
    </div>
  )
}