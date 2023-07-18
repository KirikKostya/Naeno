import React from 'react';
import './Styles/InfoPaths.css';
import Surprise from '../Svg/Surprise';
import BoxSvg from '../Svg/BoxSvg';
import EcologySvg from '../Svg/EcologySvg';

const InfoPaths: React.FC = () => {
  return (
    <div className='infoContainer'>
        <div className='paths'>
            <div className='path'>
                <Surprise />
                <p>Наши изделия отлично подойдут для подарка близким, коллегам и всем неравнодушным к красивому и практичному.</p>
            </div>
            <div className='path'>
                <EcologySvg />
                <p>Используем только качественные заготовки, поэтому переживать насчет безопасности не стоит.</p>
            </div>
            <div className='path'>
                <BoxSvg />
                <p>Мы отправлем наши изделия по всей Беларуси, а также возможна отправка в другие страны (условия уточняйте).</p> 
            </div>
        </div>
    </div>    
  )
}

export default InfoPaths;