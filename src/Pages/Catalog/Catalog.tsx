import React from 'react';
import UpNavigation from '../../Components/UpNavigation';
import { products } from '../../Products';
import Card from '../../ui/Card/Card';
import styles from './Catalog.module.css';

const Catalog: React.FC = () => {
  return (
    <>
        <UpNavigation />
        <h2 className={styles.catalogHeader}>Каталог товаров :</h2>
        <div className={styles.catalogContainer}>
          {
            products.map(item=>item.items).flat().map(type=>(
              <Card key={type.id} item={type}/>
            ))
          }
        </div>
    </>
  )
}

export default Catalog;