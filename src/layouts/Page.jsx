import React from 'react';

import './Page.scss';

export default function Page({ children }) {

  return (
    <div className="page">
      {children}
    </div>
  )
}