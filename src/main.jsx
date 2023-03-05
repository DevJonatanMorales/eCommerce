import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";

import './main.css'
import App from './App'

import { Header } from './components/Header'
import { CarucelBanner } from './components/CarucelBanner';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <Header/>
    <CarucelBanner/>
    <App/>
  </React.StrictMode>,
)
