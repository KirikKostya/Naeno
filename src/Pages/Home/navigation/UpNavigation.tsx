import React, { useState } from 'react';
import Data  from '../../../data/data';
import { Menu } from 'antd';
import styles from './UpNav.module.css';

const UpNavigation: React.FC = () => {

  const [activeInlineMenu, setActiveInlineMenu] = useState<boolean>(false);
  const {items, filtersItems, iconState} = Data();
  
  return (
    <React.Fragment>
      <nav className={styles.upNavContainer}>
        <div className={styles.fillUpNav}>
            <img className={styles.logo} src={require('../../../ui/Photos/LOGO-3.png')} alt='photo'/>
            <div className={styles.navField}>
              <button className={styles.hamburger} onClick={()=>setActiveInlineMenu(prev=>!prev)}> ☰ </button>
              <Menu items={iconState === 'main' ? items : filtersItems} mode='horizontal' className={`${styles.menu} ${styles.menuHorizontal}`} />
            </div>
        </div>
      </nav>
      <Menu items={iconState === 'main' ? items : filtersItems} mode='inline' className={`${styles.menu} ${styles.menuInline} ${activeInlineMenu ? styles.open : ''}`} />
    </React.Fragment>
  )
}

export default UpNavigation;