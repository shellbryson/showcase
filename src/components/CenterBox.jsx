import React from 'react';

import './CenterBox.scss';

export default function CenterBox({ children }) {

  return (
    <div className="centerbox">
      {children}
    </div>
  )
}