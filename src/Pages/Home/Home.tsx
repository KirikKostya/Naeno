import React from 'react';
import PopularOrders from './popularOrders/PopularOrders';
import UpNavigation from './navigation/UpNavigation';
import InfoPaths from './infoPath/InfoPaths';
import Questions from './questions/Questions';
import Footer from './footer/Footer';

const Main: React.FC = () => {
  return (
    <>
      <UpNavigation />
      <PopularOrders />
      <Questions />
      <InfoPaths />
      <Footer />
    </>
  )
}

export default Main;