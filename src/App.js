import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Head from './Head';
import Rout from './Rout';
import Home from './Home';
import Footer from './Footer';
import Try from './Try';
import Try1 from './Try1';

import Products from './Products';
import {BrowserRouter as Router} from 'react-router-dom'
class App extends React.Component{
  render(){
    return(
        <div className="app">
          <BrowserRouter >

        <Head/>
       <Rout/>
                  <Routes>
        <Route exact path="/" component={<Home/} />

        <Route path='/Products' component={<Products />} />
        <Route path='/Try' component={<Try />} />
        <Route path='/Try1' component={<Try1 />} />

        </Routes>
        <Footer></Footer>
        </BrowserRouter>
         
        </div>
   
    );
  }
}

export default App;
