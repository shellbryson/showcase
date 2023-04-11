import React from 'react';

// Components
import Logo from '../components/Logo';

// Styles
import './LandingLayout.scss';

// Assets
import Portrait from '../components/Portrait';

export default function LandingLayout() {

  return (
    <>
      <div className="landing__bg_one"></div>
      <div className="landing__bg_two"></div>
      <Portrait />

      <div className="landing__content">
        <h1>Shell Bryson</h1>
      </div>

      <div className="landing__bottom">
        <Logo />
      </div>
    </>
  )
}