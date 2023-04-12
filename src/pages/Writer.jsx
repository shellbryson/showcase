import React, { useEffect } from 'react';

// Contexts
import { useApp } from '../contexts/AppContext';

// Components
import Page from '../layouts/Page';

export default function Writer() {

  const { setBackgroundFade } = useApp();

  useEffect(() => {
    setBackgroundFade(true);
  }, []);

  return (
    <Page>
      <h1 className="small">Writer</h1>
      <p>Science Fiction and Fantasy writer</p>
      <p>Founding member of <a href="https://edinburghsff.com/">Edinburgh SFF</a></p>
    </Page>
  )
}