import React from 'react';
import styles from './Price.module.css';

interface IPrice{
    price: number
}
const Price:React.FC<IPrice> = ({ price }) => {
  return (
    <span className={styles.price}>{price} BYN</span>
  )
}

export default React.memo(Price);