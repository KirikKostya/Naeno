import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Main from '../Pages/Home/Home';
import Catalog from '../Pages/Catalog/Catalog';
import Delivery from '../Pages/Delivery/Delivery';
import Return from '../Pages/Return/Return';
import CardDetails from '../Pages/CardDetails/CardDetails';

const Router:React.FC = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='*' element={<h2>Not found</h2>} />
            <Route path='/' element={<Main />}/>
            <Route path='/cardDetails/:id' element={<CardDetails />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/delivery' element={<Delivery />}/>
            <Route path='/return' element={<Return />}/>
        </Routes>
    </HashRouter>        
  )
}

export default Router;