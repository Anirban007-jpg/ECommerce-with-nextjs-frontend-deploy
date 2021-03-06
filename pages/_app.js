import App from 'next/app';

// const withCSS = require('@zeit/next-css')

// module.exports = withCSS({
//   cssModules: true  // After true than use import statement in next.js
// })



import "../static/css/global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../static/css/SideNav.css';
// import '../static/css/SideNav.css';
import "../static/css/form.css";



function MyApp({ Component, pageProps }) {
    return (
        <>
            <ToastContainer position="top-center" />
            <Component {...pageProps} />
        </>
    )
  }
  
//   // Only uncomment this method if you have blocking data requirements for
//   // every single page in your application. This disables the ability to
//   // perform automatic static optimization, causing every page in your app to
//   // be server-side rendered.
//   //
//   MyApp.getInitialProps = async (appContext) => {
//     // calls page's `getInitialProps` and fills `appProps.pageProps`
//     const appProps = await App.getInitialProps(appContext);
  
//     return { ...appProps }
//   }
  
  export default MyApp;