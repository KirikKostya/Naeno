import React, { useState } from 'react';
import UpNavigation from '../../Components/UpNavigation';
import Footer from '../../Components/Footer';
import MastercardSvg from '../../ui/Svg/MastercardSvg';
import EuroPostSvg from '../../ui/Svg/EuroPostSvg';
import BelPostSvg from '../../ui/Svg/BelPostSvg';
import VisaSvg from '../../ui/Svg/VisaSvg';
import { Modal } from 'antd';
import styles from './Delivery.module.css';

const Delivery: React.FC = () => {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
        <UpNavigation />
        <div className={styles.howMakeOrder}>
          <header id={styles.header}>Как оформить заказ ?</header>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span>1</span>
              <p>Определиться с понравившемся товаром.</p>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.step}>
              <span>2</span>
              <p>Связаться с нами</p>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.step}>
              <span>3</span>
              <p>Оплатить его по нашим инстукциям</p>
            </div>
          </div>
        </div>
        <div className={styles.paymentMethods}>
          <header>Способы оплаты</header>
          <div className={styles.methods}>
            <span>Банковскими картами</span>
            <div className={styles.cardTypes}>
              <VisaSvg />
              <MastercardSvg />
            </div>
            <p id={styles.par}>
              Если вам не подходит этот способ, напишите<br/>
              нам и мы обязательно что-нибудь придумаем.
            </p>
            <p onClick={()=>setIsOpenModal(true)} id={styles.contact}>Связаться</p>
          </div>
        </div>
        <div className={styles.deliveryCondition}>
          <header>Условия доставки</header>
          <div className={styles.condition}>
            <p>
              Все товары, доступные к заказу, будут отправлены<br/>
              в течении 1-2 дней после 100% предоплаты
            </p>
            <div className={styles.deliveryMethods}>
              <p>По Беларуси:</p>
              <div className={styles.icons}>
                <EuroPostSvg/>
                <BelPostSvg />
              </div>
            </div>
          </div>
        </div>
        <Modal open={isOpenModal} title={'Связаться с нами'} onCancel={()=>setIsOpenModal(false)} okButtonProps={{style: {display: 'none'}}} cancelButtonProps={{style: {display: 'none'}}}>
          <p className={styles.contactItem}>Mail: kirik.kostya@list.ru</p>
          <p className={styles.contactItem}>+ 375 29 237 6490</p>
          <p className={styles.contactItem}><a target='_blank' href='https://www.instagram.com/nanoepoxywood/'>Instagram</a></p>
        </Modal>
        <Footer />
    </>
  )
}

export default Delivery