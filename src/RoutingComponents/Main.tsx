import React from 'react'
import UpNavigation from '../Components/UpNavigation';
import Footer from '../Components/Footer';
import InfoPaths from '../Components/InfoPaths';
import Questions from '../Components/Questions';
import PopularOrders from '../Components/PopularOrders';

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