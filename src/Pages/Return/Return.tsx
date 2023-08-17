import React from 'react';
import UpNavigation from '../../Components/UpNavigation';
import Footer from '../../Components/Footer';
import TwigSvg from '../../ui/Svg/TwigSvg';
import styles from './Return.module.css';

const Return: React.FC= () => {
  return (
    <>
      <UpNavigation />
      <div className={styles.returnContainer}>
        <div className={styles.returnConditions}>
          <h2>Условия возврата</h2>
          <p>
            Если товар был оплачен банковской картой через сайт, то возврат <br/>осуществляется на карту, с которой была произведена оплата. Срок<br/>
            поступления денежных средств на карту - от 3 до 30 дней с момента<br/> осуществления возврата Продавцом.
          </p>
        </div>
        <div className={styles.consumerRights}>
          <div className={styles.lawsAndList}>
            <p className={styles.law}>
              Согласно Закону Республики Беларусь <br/>
              <span> «О защите прав потребителей» (ч. 1 ст. 28) </span><br/>
              покупатель имеет право в течение 14 дней<br/> с момента получения сделать возврат, если:
            </p>
            <ul className={styles.listOfTypes}>
              <li>Товар не подошел по форме,</li>
              <li>Товар не подошел по габаритам,</li>
              <li>Товар не подошел по фасону,</li>
              <li>Товар не подошел по расцветке,</li>
              <li>Товар не подошел по размеру,</li>
              <li>Товар не подошел по комплектации.</li>
            </ul>
          </div>
          <p className={styles.paragraph}>
            При условии, что товар не был в употреблении, сохранены его<br/>
            товарный вид и потребительские свойства, есть доказательства<br/>
            факта приобретения этого товара у данного продавца.<br/>
            Товар, выполненный по индивидуальному запросу (не стандартный<br/>
            размер, модель, или цвет) обмену и возврату не подлежит!
          </p>
        </div>
      </div>
      <div className={styles.returnGoodsOfGoodQuality}>
        <div className={styles.headerAndAddress}>
          <h2>Возврат товара<br/> надлежащего качества</h2>
          <div className={styles.addressToReturn}>
            Адрес для отправки :<br/>
            <span>УКАЗАТЬ СВОЙ АДРЕС</span><br/>
            Стоимость пересылки возврата товара<br/>
            надлежащего качества оплачивает покупатель.<br/>
            Замена товара или возврат денежных средств<br/>
            будет осуществлен в течение 30 дней после<br/>
            получения возврата. Возможные способы<br/>
            возврата: банковский перевод по указанным<br/>
            реквизитам или почтовый перевод.
          </div>
        </div>
        <div className={styles.returnSteps}>
          <div className={styles.step}>
            <header>
              <span id={styles.numb}>1</span>
              <p>
                Свяжитесь с нами,
                сообщите причину, обсудите<br/> 
                возможные варианты возврата
              </p>
            </header>
            <span id={styles.description}>
              Нам важно, чтобы клиент остался доволен<br/> 
              покупкой. Мы всегда готовы идти на встречу<br/> 
              и найти вариант, который устроит обе стороны.
            </span>
          </div>
          <div className={styles.step}>
            <header>
              <span id={styles.numb}>2</span>
              <p>
                Вышлете товар в оригинальной
                упаковке<br/> и имеющий товарный 
                вид.
              </p>
            </header>
            <span id={styles.description}>
              Отправка заказа за счет покупателя.<br/>
              После отправки сообщите нам на электронную<br/>
              почту <i>kirik.kostya@list.ru</i> номер почтового<br/>
              идентификатора своей посылки, который будет<br/>
              указан на вашей почтовой квитанции<br/>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.returnGoodsOfBadQuality}>
        <div style={{position: 'absolute', left: '125px', marginBottom:'100px',  zIndex: -1, opacity: 0.4}}>
          <TwigSvg />
        </div>
        <h2>Возврат товара<br/> ненадлежащего качества</h2>
        <div className={styles.rools}>
          <p>
            Если вы получили товар ненадлежащего качества (скрытый брак) –<br/>
            пришлите нам на электронную почту 
            <span> kirik.kostya@list.ru </span> <br/>
            фотографию товара, на которой виден брак/дефект. После этого с<br/>
            Вами свяжется наш менеджер и согласует процесс возврата/обмена<br/>
            данного товара. В случае необходимости возврата товара нам,<br/>
            стоимость пересылки оплачивает продавец<br/>
          </p>
          <div className={styles.note}>
            <p>Примечание</p>
            По истечении 14 дневного срока с момента<br/>
            покупки, товар возврату и обмену не подлежит   
          </div>
        </div>
      </div>
      <Footer />  
    </>
  )
}

export default Return;