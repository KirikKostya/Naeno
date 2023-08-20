import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.mainFooterField}>
            <img className={styles.logo2} src={require('../../../ui/Photos/LOGO-2.png')} alt='logo2' />
            <div className={styles.footerInfo}>
                <div className={styles.list}>
                    <h5>Каталог :</h5>
                    <li>Столы</li>
                    <li>Досточка</li>
                    <li>Часы</li>
                </div>
                <div className={styles.list}>
                    <h5>Для покупателей :</h5>
                    <li><NavLink className={({isActive})=> isActive ? `${styles.footerNavLink} ${styles.activeFooter}` : styles.footerNavLink} to={'/delivery'}>Доставка и получение</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? `${styles.footerNavLink} ${styles.activeFooter}` : styles.footerNavLink} to={'/return'}>Возврат</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? `${styles.footerNavLink} ${styles.activeFooter}` : styles.footerNavLink} to={'/questions'}>Частые вопросы</NavLink></li>
                </div>
                <div className={styles.list}>
                    <h5>Контакты :</h5>
                    <li>Mail</li>
                    <li>+ 375 29 237 6490</li>
                    <li><a className={styles.footerNavLink} target='_blank' href='https://www.instagram.com/nanoepoxywood/'>Instagram</a></li>
                </div>
            </div>
        </div>
        <a href='https://multisports.by/info/politika-konfidentsialnosti' target='_blank' className={`${styles.footerNavLink} ${styles.privacyPolicy}`} >Политика конфиденциальности</a>
    </footer>
  )
}

export default Footer;


