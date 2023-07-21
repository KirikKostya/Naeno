import React from 'react'
import Router from '../Router/Router';
import './Style/App.css';

const App:React.FC = () => {
  return (
    <div className='app' id='main'>
      <Router />
    </div>
  )
}

export default App;
