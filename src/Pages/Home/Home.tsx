import React from 'react';
import PopularOrders from '../../Components/PopularOrders';
import UpNavigation from '../../Components/UpNavigation';
import InfoPaths from '../../Components/InfoPaths';
import Questions from '../../Components/Questions';
import Footer from '../../Components/Footer';

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