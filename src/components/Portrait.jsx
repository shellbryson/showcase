import React from 'react';

import './Portrait.scss';
import PortraitImage from '../assets/Portrait-web.png';

export default function Portrait() {

  return (
    <div className="portrait">
      <img src={PortraitImage} alt="Portrait" className="portrait__image" />
    </div>
  )
}