import React from 'react';
import Card from '../../../ui/Card/Card';
import Board from '../../../ui/Svg/BoardSvg';
import { popularProducts as items } from '../../../Products';
import styles from './PopularOrders.module.css';

const PopularOrders: React.FC = () => {
  return (
    <>
        <h2 className={styles.headerPopularOrders}>
          Популярные товары :
          <span> 
            <Board /> 
          </span>
        </h2>
        <div className={styles.popularOrdersContainer}>
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