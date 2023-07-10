import React, { useEffect } from 'react';

// Contexts
import { useApp } from '../contexts/AppContext';

// Components
import Page from '../layouts/Page';


export default function Welcome() {

  const { setShowingChronology } = useApp();

  useEffect(() => {
    setShowingChronology(false);
  }, []);

  return (
    <Page>
      <h1 className='text-5xl	'>Shell Bryson</h1>
    </Page>
  )
}