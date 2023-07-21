import React from 'react';
import UpNavigation from '../Components/UpNavigation';
import { products } from '../Products';
import CartOfWork from '../Components/CartOfWork';
import './Styles/Catalog.css';

const Catalog: React.FC = () => {
  return (
    <>
        <UpNavigation />
        <h2 className='catalogHeader'>Каталог товаров :</h2>
        <div className='catalogContainer'>
          {
            products.map(item=>item.items).flat().map(type=>(
              <CartOfWork key={type.id} item={type}/>
            ))
          }
        </div>
    </>
  )
}

export default Catalog;