
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
   BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {

 apiKey="97ef0f49835b4d629716231db5e69718"

  state={
    progress:0
  }
setProgress=(progress)=>{
  this.setState({
    progress:progress
  })
}

  render() {
    return (
      <div>
        
        <BrowserRouter>
       <Navbar/>
       <LoadingBar
       height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
             <Routes>
             <Route  path="/general" element={ <News apikey={this.apiKey} setProgress={this.setProgress} key="general" pagesize={6} category={"general"}/>}/>
            
            
                  <Route  path="/business" element={ <News apikey={this.apiKey} setProgress={this.setProgress}    key="business" pagesize={6} category={"business"}/>} />
                  <Route  path="/sports" element={<News apikey={this.apiKey} setProgress={this.setProgress}       key="sports"   pagesize={6} category={"sports"}/>} />
                  <Route  path="/technology" element={<News apikey={this.apiKey} setProgress={this.setProgress}   key="technology" pagesize={6} category={"technology"}/>} />
                 <Route   path="/entertainment" element={<News apikey={this.apiKey} setProgress={this.setProgress} key="entertainment" pagesize={6} category={"entertainment"}/>} />  
                  <Route  path="/health" element={<News apikey={this.apiKey} setProgress={this.setProgress}       key="health"    pagesize={6} category={"health"}/>} /> 
                  <Route  path="/science" element={<News apikey={this.apiKey} setProgress={this.setProgress}      key="science" pagesize={6} category={"science"}/>} /> 
       
          
        </Routes>
             </BrowserRouter>
      </div>
     
      
    )
  }
}



