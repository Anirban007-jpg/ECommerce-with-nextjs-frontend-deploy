import {withRouter} from "next/router";
import Router from 'next/router';
import Link from 'next/link';
import {API_NAME} from '../config.js';
import nProgress from 'nprogress';
import "../node_modules/nprogress/nprogress.css";
import {isAuth, logout} from "../actions/auth";

Router.onRouteChangeStart = url => nProgress.start();
Router.onRouteChangeComplete = url => nProgress.done();
Router.onRouteChangeError = url => nProgress.done();



const styleChange = (router,key) => {
    if (router.pathname === key){
      return {color:"#03fc90" , fontWeight: '500', fontWeight:'bolder', fontSize: '20px'}
    }else{
      return {color:"Black" , fontWeight: '500', fontSize: '16px', fontWeight:'700'}
    }
}

const Navbar = ({router}) => {

    return (
      <div style={{margin: '0px', padding: '0px'}}>
          <nav className="navbar navbar-expand-lg" style={{backgroundImage: 'linear-gradient(-90deg,#d38312,#a83279)'}}>
            <div className="container-fluid">
              {!isAuth() && (
                  <Link className="navbar-brand" href="/" >
                  <strong>
                    <a style={{fontSize: '30px',color: "black"}}>{API_NAME}</a>
                  </strong>
                </Link>
              )}
  
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fa fa-bars" style={{marginBottom: '3rem'}}></i></span>
              {/* <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span> */}
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           
            {isAuth() && (
              <li className="nav-item">
                <span className="nav-link" style={{cursor: 'pointer', color: "black"}} onClick={() => logout(() => {Router.push('/')})} href="">
                  <strong>
                    Logout
                  </strong>  
                </span>  
              </li>
            )}
        

            {!isAuth() && (
              <>
              
              
              <li className="nav-item" >
                   <Link className="nav-link" href="/about">
                        <a style={styleChange(router,"/about")}>About Us</a> 
                    </Link>
                </li>
               <li className="nav-item" >
                   <Link className="nav-link" href="/contact">
                        <a style={styleChange(router,"/contact")}>Contact Us</a> 
                    </Link>
                </li>
               <li className="nav-item" >
                   <Link className="nav-link" href="/register">
                        <a style={styleChange(router,"/register")}>Register</a> 
                    </Link>
                </li>
                <li className="nav-item" >
                   <Link className="nav-link" href="/login">
                        <a style={styleChange(router,"/login")}>Login</a> 
                    </Link>
                </li>
                                  
              </>      
                              
            )}
            </ul>
            </div>
            </div>    
          </nav>
          </div>
    )
}

export default withRouter(Navbar);
