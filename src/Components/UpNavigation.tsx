import React, { useEffect, useState } from 'react';
import './Styles/UpNavigation.css';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { CaretDownFilled, FolderOpenFilled, HomeFilled, PlusCircleOutlined, QuestionCircleOutlined, ReadOutlined, RetweetOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setUpNavGroupState } from '../ReduxToolkit/Slices';
import { IInitialState } from '../ReduxToolkit/Interfaces';


const UpNavigation: React.FC = () => {

  const dispatch = useDispatch();

  const upNavGroupState = useSelector((state: IInitialState)=>state.upNavGroupState);
  const [iconState, setIconState] = useState<string>('');
  const [activeInlineMenu, setActiveInlineMenu] = useState<boolean>(false);

  const items = [
    {
      label: <NavLink 
                to={'/'} 
                onClick={()=>{
                  dispatch(setUpNavGroupState(''))
                }}
                className={
                  ({ isActive }) =>
                    {
                      if(isActive){
                        setIconState('main');
                        return 'active';
                      }
                      return ''
                    }
                }>
                  Главная
              </NavLink>,
      key: 'main',
      icon: <HomeFilled className={iconState === 'main' ? 'active' : ''}/>,
    },
    {
      label: <NavLink 
                to={'/catalog'} 
                onClick={()=>{
                  setIconState('catalog');
                  dispatch(setUpNavGroupState(''))
                }}
                className={
                  ({ isActive }) =>
                    {
                      if(isActive){
                        setIconState('catalog');
                        return 'active';
                      }
                      return ''
                    }
                }>
                  Каталог
              </NavLink>,
      key: 'catalog',
      icon: <FolderOpenFilled className={iconState === 'catalog' ? 'active' : ''}/>,
    },
    {
      label: <span className={upNavGroupState}>Для пользователя</span>,
      key: 'SubMenu',
      icon: <CaretDownFilled className={upNavGroupState} />,
      children: [
        {
          type: 'group',
          children: [
            {
              label: <NavLink 
                        to={'/delivery'} 
                        onClick={()=>{
                          setIconState('delivery');
                          dispatch(setUpNavGroupState('active'))
                        }}
                        className={
                          ({ isActive }) =>
                            {
                              if(isActive){
                                setIconState('delivery');
                                return 'active';
                              }
                              return ''
                            }
                        }>
                          Доставка и получение
                      </NavLink>,
              key: 'delivery',
              icon: <PlusCircleOutlined className={iconState === 'delivery' ? 'active' : ''}/>
            },
            {
              label: <NavLink 
                        to={'/return'} 
                        onClick={()=>{
                          setIconState('return');
                          dispatch(setUpNavGroupState('active'))
                        }}
                        className={
                          ({ isActive }) =>
                            {
                              if(isActive){
                                setIconState('return');
                                return 'active';
                              }
                              return ''
                            }
                        }>
                          Возврат
                      </NavLink>,
              key: 'return',
              icon: <RetweetOutlined className={iconState === 'return' ? 'active' : ''}/>
            },
            {
              label: <Link to='questions' activeClass={'active'}>Частые вопросы</Link>,
              key: 'questions',
              icon: <QuestionCircleOutlined />
            },
          ],
        },
      ],
    }
  ];

  
  return (
    <>
      <div className='upNavContainer'>
        <div className='fillUpNav'>
            <img className='logo' src={require('../Photos/LOGO-3.png')} alt='photo'/>
            <nav className='navField'>
              <div 
                className='hamburger' 
                onClick={() => setActiveInlineMenu(!activeInlineMenu)}
              > ☰ </div>
              <Menu items={items} mode='horizontal' className='menu menuHorizontal' />
            </nav>
        </div>
      </div>
      <Menu items={items} mode='inline' className={`menu menuInline ${activeInlineMenu ? 'open' : ''}`} />
    </>
  )
}

export default UpNavigation;