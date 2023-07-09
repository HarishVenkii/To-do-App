import {useRef, useState} from "react";
//import TaskList from 'D:\VENKAT\Documents\VIT M.TECH\Ethnus MERN\Final projects\home-page\src/compent/TaskList.js';
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

//importing its css
import "./LoginSignupContainer.css";


const LoginSignupContainer = () => {
   // defining state to make sure if login or signup is clicked or visible or active
   const [login, setLogin] = useState(true);

   //creating reference for login-signup-container
   const loginSignupContainerRef = useRef(null);
   
   const handleClick = () => {
    setLogin(!login);

    // using useRef we can do DOM manpulation
    loginSignupContainerRef.current.classList.toggle("active");

   };

    return(
       <div className="login-signup-container" ref={loginSignupContainerRef}>
          <Login />  
        <div className="side-div">
          <button type="button" onClick={handleClick}>  {Login ? "Signup" : "Login"}</button>
          </div>
         <Signup />
       
       </div>
    );
};

export default LoginSignupContainer;