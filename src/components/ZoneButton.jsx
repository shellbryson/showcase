import React from 'react';
import { Link } from "react-router-dom";

import { useSetBackgroundFade } from '../contexts/AppContext';

import './ZoneButton.scss';

export default function ZoneButton({ settings }) {

  const { setBackgroundFade, isBackgroundFade } = useSetBackgroundFade();

  const handleOnClick = () => {
    setBackgroundFade(true);
  }

  return (
    <div className={`zone-button ${settings.placement} ${settings.color}`}>
      <div className="zone-button__content" onClick={handleOnClick}>
        <h2><Link to={settings.path}>{settings.title}</Link></h2>
      </div>
    </div>
  )

}