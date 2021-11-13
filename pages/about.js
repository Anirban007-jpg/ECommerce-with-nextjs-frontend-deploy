import Layout  from "../components/Layout"
import React from "react"
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../config";
// import MyCarousel from '../components/corousel/corousal';
// import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import ImageSlider from '../components/corousel/ImageSlider'
import { Card } from "react-bootstrap";


const about = () => {

    const head = () => (
        <Head>
            <title>About Us Page | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}/about`} />
            <meta property="og:title" content={`About Us Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the landing Page" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/about`} />
            <meta property="og:site_name" content={`${API_NAME}`} />
            <meta property="og:image:secure_url" />
            <meta property="og:image:type" content={"image/jpg"} />
        </Head>
    )

    return (
        <React.Fragment>
            {head()}
           
            <Layout>
              <br/><br/>
              {/* <ImageSlider /> */}
                <Carousel fade>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1251&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1251&q=80"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br/><br/>
          <h2 style={{marginLeft: '5rem', fontWeight:'bolder', textAlign: 'center', textDecoration: 'underline', fontSize: '70px'}}>ABOUT AMAZONIA</h2>
          <br/><hr/>
          <Card style={{marginLeft: '8rem', marginRight: '8rem', height: '10rem'}}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Text>
                        <p style={{fontWeight: 'bolder', fontSize: '16px', color: '#5c6369'}}>This is e-commerce website where one can buy products as well as resell their old produtcs by uploading images similar to that of olx and
                        this website will also offer products to choose from wide range of brands.</p>
                        <h5 style={{fontWeight: 'bold', fontSize: '20px', textDecoration: 'underline', color: '#1a82db'}}>BENEFITS OF AMAZONIA:</h5>                         
                    </Card.Text>
                </Card.Body>
          </Card>
            </Layout> 
            <footer className="page-footer" style={{backgroundColor: '#757575', marginTop:'50px'}}>
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
  
// $('#carouselExampleIndicators').each(function() {
//   $(this).carousel({
//       interval: false
//   });
// });

export default about