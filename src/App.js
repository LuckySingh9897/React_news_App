
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
   BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
       <Navbar/>
             <Routes>
             <Route  path="/general" element={ <News key="general" pagesize={6} category={"general"}/>}/>
            
            
                  <Route  path="/business" element={ <News    key="business" pagesize={6} category={"business"}/>} />
                  <Route  path="/sports" element={<News       key="sports"   pagesize={6} category={"sports"}/>} />
                  <Route  path="/technology" element={<News   key="technology" pagesize={6} category={"technology"}/>} />
                 <Route   path="/entertainment" element={<News key="entertainment" pagesize={6} category={"entertainment"}/>} />  
                  <Route  path="/health" element={<News       key="health"    pagesize={6} category={"health"}/>} /> 
                  <Route  path="/science" element={<News      key="science" pagesize={6} category={"science"}/>} /> 
       
          
        </Routes>
             </BrowserRouter>
      </div>
     
      
    )
  }
}



