import React from 'react';
import Surprise from '../../../ui/Svg/Surprise';
import BoxSvg from '../../../ui/Svg/BoxSvg';
import EcologySvg from '../../../ui/Svg/EcologySvg';
import styles from './InfoPaths.module.css';

const InfoPaths: React.FC = () => {
  return (
    <main className={styles.infoContainer}>
        <article className={styles.paths}>
            <div className={styles.path}>
                <Surprise />
                <p>Наши изделия отлично подойдут для подарка близким, коллегам и всем неравнодушным к красивому и практичному.</p>
            </div>
            <div className={styles.path}>
                <EcologySvg />
                <p>Используем только качественные заготовки, поэтому переживать насчет безопасности не стоит.</p>
            </div>
            <div className={styles.path}>
                <BoxSvg />
                <p>Мы отправлем наши изделия по всей Беларуси, а также возможна отправка в другие страны (условия уточняйте).</p> 
            </div>
        </article>
    </main>    
  )
}

export default InfoPaths;