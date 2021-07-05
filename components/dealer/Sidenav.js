import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import {logout, isAuth} from "../../actions/auth";
import Router, {withRouter} from "next/router";
import {API_NAME} from '../../config';
import dynamic from 'next/dynamic';


const styleChange = (router,key) => {
  if (router.pathname === key){
    return {backgroundColor: 'black', transition: "0.5s ease"}
  }else{
    return;
  }
}

const Sidenav = ({router}) => {



  return (
      <div className="main-menu">
      <ul>
          <section className="logo">
            <h4 style={{marginTop: '35px'}}><strong>{API_NAME}</strong></h4>
          </section><br/>
          <section className="home">
            <li className="menu-item" style={styleChange(router, "/dealer")}>
                <a href="/dealer"><i className="fas fa-home"></i></a>&nbsp;&nbsp;&nbsp;
                <span className="items" >
                  <Link href="/dealer" >
                      <a style={{color: 'blue', fontWeight: '700'}}>
                        Dashboard
                      </a>
                  </Link>
                </span>
              </li>
          </section>
          <section className="links">
              <li className="menu-item" style={styleChange(router, "/dealer/profile")}>
                <i className="fas fa-user"></i>&nbsp;&nbsp;&nbsp;
                <span className="items">
                  <Link href="/dealer/profile">
                    <a style={{color: 'blue', fontWeight: '700'}}>
                      Profile
                    </a>
                  </Link>
                </span>
              </li>
              <li className="menu-item" style={styleChange(router, "/dealer/category")}>
                <i className="fas fa-layer-group"></i>&nbsp;&nbsp;&nbsp;
                <span className="items">
                  <Link href='/dealer/category'>
                    <a style={{color: 'blue', fontWeight: '700'}}>
                      Available Categories 
                    </a>
                  </Link>
                </span>
              </li>
              <li className="menu-item" style={styleChange(router, "/dealer/category/create")}>
                <i className="fas fa-layer-group"></i>&nbsp;&nbsp;&nbsp;
                <span className="items">
                  <Link href='/dealer/category/create'>
                    <a style={{color: 'blue', fontWeight: '700'}}>
                      Add New Category 
                    </a>
                  </Link>
                </span>
              </li>
              <li className="menu-item" style={styleChange(router, "/dealer/brand")}>
                <i className="fas fa-layer-group"></i>&nbsp;&nbsp;&nbsp;
                <span className="items">
                  <Link href='/dealer/brand'>
                    <a style={{color: 'blue', fontWeight: '700'}}>
                      Available Brands 
                    </a>
                  </Link>
                </span>
              </li>
              <li className="menu-item" style={styleChange(router, "/dealer/brand/create")}>
                <i className="fas fa-layer-group"></i>&nbsp;&nbsp;&nbsp;
                <span className="items">
                  <Link href='/dealer/brand/create'>
                    <a style={{color: 'blue', fontWeight: '700'}}>
                      Add New Brand
                    </a>
                  </Link>
                </span>
              </li>
              <li className="menu-item" onClick={() => logout(() => {Router.replace('/')})}>
                <i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;&nbsp;
                <span className="items">
                      Logout
                </span>
              </li>
              
          </section>
          
          <section className="profile_content">

          </section>
      </ul>
  </div>
    );
  
};

 
export default withRouter(Sidenav);