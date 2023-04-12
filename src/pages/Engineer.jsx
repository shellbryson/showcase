import React, { useEffect } from 'react';

// Contexts
import { useApp } from '../contexts/AppContext';

// Components
import Page from '../layouts/Page';

export default function Engineer() {

  const { setBackgroundFade } = useApp();

  useEffect(() => {
    setBackgroundFade(true);
  }, []);

  return (
    <Page>
      <h1 className="small">Software Engineer</h1>
      <p>Front end engineering</p>
      <p>Vanilla JavaScript</p>
      <p>React + CRA / Vite</p>
      <p>Shopify</p>
      <p>CSS / SCSS</p>
    </Page>
  )
}