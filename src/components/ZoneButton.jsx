import React from 'react';
import { Link } from "react-router-dom";

import './ZoneButton.scss';

export default function ZoneButton({ settings }) {

  return (
    <div className={`zone-button ${settings.placement} ${settings.color}`}>
      <div className="zone-button__content">
        <h2><Link to={settings.path}>{settings.title}</Link></h2>
      </div>
    </div>
  )

}