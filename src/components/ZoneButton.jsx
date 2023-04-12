import React from 'react';
import { Link } from "react-router-dom";

import './ZoneButton.scss';

// Contexts
//import { appVersion } from '../contexts/AppContext';

export default function ZoneButton({ settings }) {

  return (
    <div className={`zone-button ${settings.placement} ${settings.color}`}>
      <div className="zone-button__content">
        <p><Link to={settings.path}>{settings.title}</Link></p>
      </div>
    </div>
  )

}