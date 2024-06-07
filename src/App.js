import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Suites from './componentes/Suites'
import LoginForm from './componentes/LoginForm';
import Saibamais from './componentes/Saibamais';
import Cardapio from './componentes/cardapio';
import Footer1 from './componentes/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
        <div className="App">
                     <br />
    <Navbar />

          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/suites' element={<Suites />} />
            <Route path='/form' element={ <LoginForm/>} />
            <Route path='/saibamais' element={ <Saibamais/>} />
            <Route path='/cardapio' element={ <Cardapio/>} />


          </Routes>
          </BrowserRouter>
     <Footer1 />
        </div>
      );
    
    }
    export default App;


