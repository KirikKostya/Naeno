import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../Components/Main';

const Router:React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />}/>
        </Routes>
    </BrowserRouter>        
  )
}

export default Router;