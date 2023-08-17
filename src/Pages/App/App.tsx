import React from 'react';
import Router from '../../Router/Router';
import styles from './App.module.css';

const App:React.FC = () => {
  return (
    <div className={styles.app} id='main'>
      <Router />
    </div>
  )
}

export default App;
