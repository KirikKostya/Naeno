import React from 'react';
import Board from '../ui/Svg/BoardSvg';
import { popularProducts as items } from '../Products';
import Card from '../ui/Card/Card';
import './Styles/PopularOrders.css';

const PopularOrders: React.FC = () => {
  return (
    <>
        <h2 className='headerPopularOrders'>Популярные товары :<span style={{position: 'absolute', opacity: '0.3'}}> <Board /> </span></h2>
        <div className='popularOrdersContainer'>
            {
                items.map((item)=>(
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
    </>
  )
}

export default PopularOrders;