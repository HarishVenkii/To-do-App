import React, {useEffect} from 'react';
import Home from './compent/Home.js';
import About from './compent/About.js';
import Features from './compent/Features.js';
import {Routes, Route} from 'react-router-dom';
import LoginSignupContainer from './compent/LoginSignupContainer/LoginSignupContainer.js';
import Task from './compent/Task/Task'
import Nav from './compent/Nav.js'
import { useDispatch} from "react-redux"
import {authActions} from "./store"
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{ 
    const id = sessionStorage.getItem("id");
    if(id){
      dispatch(authActions.login());}  
  }, []);
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/login" element={<LoginSignupContainer/>} />
      <Route path="/Task" element={<Task />} />
    </Routes>
    
    </>
  );
}

export default App;
