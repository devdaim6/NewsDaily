import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import News from "./components/News"
import { Route,BrowserRouter,Routes } from 'react-router-dom';
export default class App extends Component {
  api="b4d793ce0b0c4844b2757d0ea9801f54";
  render() {
    
    return (
      <>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/news' element={  <News search={"kashmir"}/>}/>
   
      </Routes>
      </BrowserRouter>
    
     
      </>
    )
  }
}
