import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './components/Home';
import Page1 from './assets/pages/page-1';
import Page2 from './assets/pages/page-2';
import { BrowserRouter, Route, Router} from 'react-router-dom';



function App() {
  
  return (
    <>
    <Home/>
    <Page1/>
    <Page2/>
    </>
  )
}


export default App
