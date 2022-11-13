import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className='body'></div>
    </BrowserRouter>
  );
}

export default App;
