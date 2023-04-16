
import './App.css';

import React ,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
   BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useEffect } from 'react';
const App =()=> {

 const apiKey="97ef0f49835b4d629716231db5e69718"

  const [progress,setProgress]=useState(0)


  
    return (
      <div>
        
        <BrowserRouter>
       <Navbar/>
       <LoadingBar
       height={3}
        color='#f11946'
        progress={progress}
        
      />
             <Routes>
             <Route  path="/general" element={ <News apikey={apiKey} setProgress={setProgress} key="general" pagesize={6} category={"general"}/>}/>
            
            
                  <Route  path="/business" element={ <News apikey={apiKey} setProgress={setProgress}    key="business" pagesize={6} category={"business"}/>} />
                  <Route  path="/sports" element={<News apikey={apiKey} setProgress={setProgress}       key="sports"   pagesize={6} category={"sports"}/>} />
                  <Route  path="/technology" element={<News apikey={apiKey} setProgress={setProgress}   key="technology" pagesize={6} category={"technology"}/>} />
                 <Route   path="/entertainment" element={<News apikey={apiKey} setProgress={setProgress} key="entertainment" pagesize={6} category={"entertainment"}/>} />  
                  <Route  path="/health" element={<News apikey={apiKey} setProgress={setProgress}       key="health"    pagesize={6} category={"health"}/>} /> 
                  <Route  path="/science" element={<News apikey={apiKey} setProgress={setProgress}      key="science" pagesize={6} category={"science"}/>} /> 
       
          
        </Routes>
             </BrowserRouter>
      </div>
     
      
    )
  
}
export default App


