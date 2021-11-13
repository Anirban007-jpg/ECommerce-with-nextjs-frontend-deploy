import React,{useEffect} from 'react'
import { isAuth } from '../../../actions/auth';
import Dashboard from '../../../components/dealer/Dashboard';
import {getCookie,logout} from '../../../actions/auth';
import Router, {withRouter} from 'next/router';
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../../../config";
import {ReadCategory} from '../../../actions/category';
import moment from 'moment';

const read = ({router, category}) => {

    const slug = category.slug;

    const head = () => (
        <Head>
            <title>PRODUCT BRAND PAGE | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}/dealer/brand/${slug}`} />
            <meta property="og:title" content={`Product Brand Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the Brand Management Page of dealer" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/dealer/brand/${slug}`} />
            <meta property="og:site_name" content={`${API_NAME}`} />
            <meta property="og:image:secure_url" />
            <meta property="og:image:type" content={"image/jpg"} />
        </Head>
    )

    useEffect(() => {
        if (!isAuth()){
          Router.push('/');
      }
    
    },[])

  
    // page protection 2nd phase
        if (isAuth() && isAuth().role === 'Customer'){
            Router.push('/customer',null,{shallow:true});
        }
        else  if (isAuth() && isAuth().role === 'Shopper'){
            Router.push('/shopper');
        }
        else  if (isAuth() && isAuth().role === 'Admin'){
            Router.push('/admin');
        }
   

        return (
        <React.Fragment>
        {head()}
          <Dashboard>
              <div className="canvas" style={{height: "300px"}}>
                      <h1 className="heading1">Category Management</h1>
                      <p className="lead text-white font-weight-bold"><strong>Category Description</strong></p>
              </div><br/>
              <div style={{marginLeft:'15rem'}}>
                  <div className="row">
                      <div className="col-md-12">
                        <h4><strong>Category Name : {category.category_name}</strong></h4><br/>
                        <p>Category Created on : {moment(category.created_on).fromNow()}</p>
                      </div>
                  </div>
              </div>
          </Dashboard> 
            
            <footer className="page-footer" style={{backgroundColor: '#757575'}}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text"></h5>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text"></h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright" style={{backgroundColor: '#212121'}}>
            <div className="container">
            © 2021 Copyright Amazonia
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        </React.Fragment>
    )
}

read.getInitialProps = ({query}) => {
    return ReadCategory(query.slug).then(data => {
        if (data.error){
            console.log(data.error)
        }else {
            return {
                category: data.category
            }
        }
    })
}

export default withRouter(read)
