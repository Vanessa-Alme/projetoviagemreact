import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Contato from './Pages/Contato/Contato';
import Destinos from './Pages/Destinos/Destinos';
import Promo from './Pages/Promo/Promo';





ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/Contato" exact element={<Contato/>}></Route>
        <Route path="/Destinos" exact element={<Destinos/>}></Route>
        <Route path="/Promo" exact element={<Promo/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



