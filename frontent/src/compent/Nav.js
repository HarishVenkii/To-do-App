import React from 'react';
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import {useSelector} from "react-redux";
import { useDispatch} from "react-redux"
import {authActions} from "../store"

function Nav() {
    const isLoggedIn = useSelector((state)=> state.isLoggedIn);
    const dispatch = useDispatch();
const logout=()=>{
    sessionStorage.clear("id");
    dispatch(authActions.logout())
}
  return (
      <>
    <div className="container-xxl bg-white p-0">
        {/* <!-- Navbar & Hero Start --> */}
        <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm" id="navbar">
                <a href="" className="navbar-brand p-0">                   
                    <img src="Home-page-assets/img/logo.png" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <Link to="/" className="nav-item nav-link ">Home</Link>
                        
                        <Link to="/features" className="nav-item nav-link">Features</Link>
                        <Link to="/about" className="nav-item nav-link">About us</Link>
                        <Link to="/Task" className="nav-item nav-link">Tasks </Link>
                    </div>{!isLoggedIn && <Link to="/login" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Log In</Link>}
                    {isLoggedIn && <div className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block" onClick={logout}>Log Out</div>}
                    
                </div>
            </nav>

        </div>
        </div>        
        {/* <!-- Navbar & Hero End --> */}
        </>
        );
}

export default Nav;