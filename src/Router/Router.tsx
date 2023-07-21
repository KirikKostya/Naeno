import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../RoutingComponents/Main';
import Catalog from '../RoutingComponents/Catalog';
import BrandHistory from '../RoutingComponents/BrandHistory';
import Delivery from '../RoutingComponents/Delivery';
import Return from '../RoutingComponents/Return';

const Router:React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/catalog' element={<Catalog />}/>
            <Route path='/brandHistory' element={<BrandHistory />}/>
            <Route path='/delivery' element={<Delivery />}/>
            <Route path='/return' element={<Return />}/>
        </Routes>
    </BrowserRouter>        
  )
}

export default Router;