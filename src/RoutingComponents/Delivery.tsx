import React, { useState } from 'react';
import UpNavigation from '../Components/UpNavigation';
import Footer from '../Components/Footer';
import VisaSvg from '../Svg/VisaSvg';
import MastercardSvg from '../Svg/MastercardSvg';
import './Styles/Delivery.css';
import { Modal } from 'antd';
import BelPostSvg from '../Svg/BelPostSvg';
import EuroPostSvg from '../Svg/EuroPostSvg';

const Delivery: React.FC = () => {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
        <UpNavigation />
        <div className='howMakeOrder'>
          <header id='header'>Как оформить заказ ?</header>
          <div className='steps'>
            <div className='step'>
              <span>1</span>
              <p>Определиться с понравившемся товаром.</p>
            </div>
            <hr className='hr'/>
            <div className='step'>
              <span>2</span>
              <p>Связаться с нами</p>
            </div>
            <hr className='hr'/>
            <div className='step'>
              <span>3</span>
              <p>Оплатить его по нашим инстукциям</p>
            </div>
          </div>
        </div>
        <div className='paymentMethods'>
          <header>Способы оплаты</header>
          <div className='methods'>
            <span>Банковскими картами</span>
            <div className='cardTypes'>
              <VisaSvg />
              <MastercardSvg />
            </div>
            <p id='par'>
              Если вам не подходит этот способ, напишите<br/>
              нам и мы обязательно что-нибудь придумаем.
            </p>
            <p onClick={()=>setIsOpenModal(true)} id='contact'>Связаться</p>
          </div>
        </div>
        <div className='deliveryCondition'>
          <header>Условия доставки</header>
          <div className='condition'>
            <p>
              Все товары, доступные к заказу, будут отправлены<br/>
              в течении 1-2 дней после 100% предоплаты
            </p>
            <div className='deliveryMethods'>
              <p>По Беларуси:</p>
              <div className='icons'>
                <EuroPostSvg/>
                <BelPostSvg />
              </div>
            </div>
          </div>
        </div>
        <Modal open={isOpenModal} title={'Связаться с нами'} onCancel={()=>setIsOpenModal(false)} okButtonProps={{style: {display: 'none'}}} cancelButtonProps={{style: {display: 'none'}}}>
          <p className='contactItem'>Mail: kirik.kostya@list.ru</p>
          <p className='contactItem'>+ 375 29 237 6490</p>
          <p className='contactItem'><a target='_blank' href='https://www.instagram.com/nanoepoxywood/'>Instagram</a></p>
        </Modal>
        <Footer />
    </>
  )
}

export default Delivery