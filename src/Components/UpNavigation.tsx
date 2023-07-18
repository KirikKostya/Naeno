import React from 'react';
import './Styles/UpNavigation.css';
import { NavLink } from 'react-router-dom';

const UpNavigation: React.FC = () => {
  return (
    <div className='upNavContainer'>
        <div className='fillUpNav'>
            <img className='logo' src={require('../Photos/NaenoLogo.png')} alt='photo'/>
            <div className='navField'>
                <NavLink className='navLink' to={''}>Каталог</NavLink>
                <NavLink className='navLink' to={''}>История бренда</NavLink>
                <NavLink className='navLink' to={''}>Способ заказа</NavLink>
                <NavLink className='navLink' to={''}>Связаться с нами</NavLink>
            </div>
        </div>
    </div>
  )
}

export default UpNavigation;