import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { IItem } from '../Products';
import { Image } from 'antd';
import './Styles/CartOfWork.css';

interface ICartOfWorkProps{
    item: IItem
}
const CartOfWork: React.FC<ICartOfWorkProps> = (props) => {

    const { item } = props;

    //make examination and return true images from DB-API
    const getImageFromAPI = (photoList: string[]) => {
        return (photoList === null || photoList == undefined || photoList.length === 0) 
        ? require('../Photos/somethingWentWrong.png')
            : photoList[0]
    }

  return (
    <div className='cartContainer'>
        {
            item.icons[0] === null || item.icons.length == 0
            ? <Image src={getImageFromAPI(item.icons)} width={'190px'} height={'150px'} fallback={require('../Photos/somethingWentWrong.png')}/>
              : <Carousel className='carouselContainer' autoPlay={false} cycleNavigation={false} navButtonsAlwaysVisible={false} navButtonsProps={{style: {width: '35px', height: '35px', display: `${item.icons.length <= 1 ? 'none' : 'flex'}`}}}>
                  {
                    item.icons.map(photo=>(
                      <Image key={photo} src={photo}className='imageAntd' fallback={require('../Photos/somethingWentWrong.png')}/>
                    ))
                  }
                </Carousel>
        }
        <header>{item.name}</header>
        <span>{item.price} BYN</span>
    </div>
  )
}

export default CartOfWork;