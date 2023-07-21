import React from 'react';
import CartOfWork from './CartOfWork';
import Board from '../Svg/BoardSvg';
import { popularProducts as items } from '../Products';
import './Styles/PopularOrders.css';

const PopularOrders: React.FC = () => {
  return (
    <>
        <h2 className='headerPopularOrders'>Популярные товары :<span style={{position: 'absolute', opacity: '0.3'}}> <Board /> </span></h2>
        <div className='popularOrdersContainer'>
            {
                items.map((item)=>(
                    <CartOfWork key={item.id} item={item}/>
                ))
            }
        </div>
    </>
  )
}

export default PopularOrders;