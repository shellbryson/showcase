import React from 'react';

// Components
import Page from '../layouts/Page';

export default function About() {

  return (
    <Page>
      <h1 className="small">About</h1>
      <p>App + Design by Shell Bryson <a href="https://twitter.com/shellbryson">@shellbryson</a></p>
      <p>React + Vite</p>
      <p>Portrait photo by <a href="http://www.steve-reid.co.uk/">Steve Reid Photography</a></p>
    </Page>
  )
}