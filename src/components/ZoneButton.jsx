import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import './ZoneButton.scss';

export default function ZoneButton({ settings }) {

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(settings.path);
  }

  return (
    <div className={`zone-button ${settings.placement} ${settings.color}`} onClick={ handleOnClick }>
      <div className="zone-button__content">
        <p>{settings.title}</p>
      </div>
    </div>
  )

}