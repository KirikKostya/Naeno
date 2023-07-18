import React from 'react'
import UpNavigation from './UpNavigation';
import Footer from './Footer';
import InfoPaths from './InfoPaths';
import Questions from './Questions';

const Main: React.FC = () => {
  return (
    <>
      <UpNavigation />
      <Questions />
      <InfoPaths />
      <Footer />
    </>
  )
}

export default Main;