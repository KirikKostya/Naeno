import React from 'react';
import './Styles/Footer.css';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
        <div className='mainFooterField'>
            <img className='logo2' src={require('../ui/Photos/LOGO-2.png')} alt='logo2' />
            <div className='footerInfo'>
                <div className='list'>
                    <h5>Каталог :</h5>
                    <li>Столы</li>
                    <li>Досточка</li>
                    <li>Часы</li>
                </div>
                <div className='list'>
                    <h5>Для покупателей :</h5>
                    <li><NavLink className={({isActive, isPending})=>isPending ? 'footerNavLink' : isActive ? 'footerNavLink activeFooter' : 'footerNavLink'} to={'/delivery'}>Доставка и получение</NavLink></li>
                    <li><NavLink className={({isActive, isPending})=>isPending ? 'footerNavLink' : isActive ? 'footerNavLink activeFooter' : 'footerNavLink'} to={'/return'}>Возврат</NavLink></li>
                    <li><NavLink className={({isActive, isPending})=>isPending ? 'footerNavLink' : isActive ? 'footerNavLink activeFooter' : 'footerNavLink'} to={'/questions'}>Частые вопросы</NavLink></li>
                </div>
                <div className='list'>
                    <h5>Контакты :</h5>
                    <li>Mail</li>
                    <li>+ 375 29 237 6490</li>
                    <li><a className='footerNavLink' target='_blank' href='https://www.instagram.com/nanoepoxywood/'>Instagram</a></li>
                </div>
            </div>
        </div>
        <a href='https://multisports.by/info/politika-konfidentsialnosti' target='_blank' className='footerNavLink privacyPolicy' >Политика конфиденциальности</a>
    </footer>
  )
}

export default Footer;

