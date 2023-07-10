import React from 'react';
import { Link } from "react-router-dom";

import { useApp } from '../contexts/AppContext';

export default function Navigation() {

  const { setBackgroundFade, isBackgroundFade } = useApp();

  const handleOnClickHome = () => {
    setBackgroundFade(false);
  }

  const handleOnClickLink = () => {
    setBackgroundFade(true);
  }

  return (
    <div className="flex justify-center z-50 absolute top-2 gap-2 w-screen">
      <Link to="engineer" onClick={ handleOnClickLink }>
        Engineer
      </Link>
      <Link to="writer" onClick={ handleOnClickLink }>
        Writer
      </Link>
      <Link to="/" onClick={ handleOnClickHome }>
        Home
      </Link>
    </div>
  )
}