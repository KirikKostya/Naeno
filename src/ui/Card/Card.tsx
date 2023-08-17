import React from 'react';
import Price from '../Card/price/Price';
import Header from './header/Header';
import Slider from '../Card/slider/Slider';
import { IItem } from '../../Products';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';

interface ICartOfWorkProps{
    item: IItem
}
const CartOfWork: React.FC<ICartOfWorkProps> = (props) => {

    const { item } = props;

    const nav = useNavigate();

  return (
    <div className={styles.cartContainer}>
        <Slider icons={item.icons} />
        <div onClick={()=>nav(`/cardDetails/${item.id}`)} className={styles.info}>
          <Header name={item.name} />
          <Price price={item.price} />
        </div>
    </div>
  )
}

export default CartOfWork;