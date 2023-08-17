import React from 'react';
import { Image } from 'antd';
import Carousel from 'react-material-ui-carousel';
import styles from './Slider.module.css';

interface ISlider{
    icons: string[]
}
const Slider:React.FC<ISlider> = ({icons}) => {
    
    //make examination and return true images from DB-API
    const getImageFromAPI = (photoList: string[]) => {
        return (photoList === null || photoList == undefined || photoList.length === 0) 
        ? require('../../Photos/somethingWentWrong.png')
            : photoList[0]
    }

  return (
    <>
        {
            icons[0] === null || icons.length == 0
            ? <Image src={getImageFromAPI(icons)} width={'190px'} height={'150px'} fallback={require('../../Photos/somethingWentWrong.png')}/>
              : <Carousel className={styles.carouselContainer} autoPlay={false} cycleNavigation={false} navButtonsAlwaysVisible={false} navButtonsProps={{style: {width: '35px', height: '35px', display: `${icons.length <= 1 ? 'none' : 'flex'}`}}}>
                  {
                    icons.map(photo=>(
                      <Image key={photo} src={photo} className={styles.imageAntd} width={'100%'} fallback={require('../../Photos/somethingWentWrong.png')} />
                    ))
                  }
                </Carousel>
        }
    </>
  )
}

export default React.memo(Slider);