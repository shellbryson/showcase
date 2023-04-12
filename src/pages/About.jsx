import React, { useEffect } from 'react';

// Contexts
import { useApp } from '../contexts/AppContext';

// Components
import Page from '../layouts/Page';

export default function About() {

  const { appVersion, setBackgroundFade } = useApp();

  useEffect(() => {
    setBackgroundFade(true);
  }, []);

  return (
    <Page>
      <h1 className="small">About</h1>
      <p>App + Design by Shell Bryson <a href="https://twitter.com/shellbryson">@shellbryson</a></p>
      <p>React + Vite</p>
      <div className="page__section">
        <p className="tiny">Portrait photo by <a href="http://www.steve-reid.co.uk/">Steve Reid Photography</a></p>
        <p className="tiny">Version {appVersion}</p>
      </div>
    </Page>
  )
}