import React from 'react'
import Link from 'next/link'
import moment from 'moment';
import {isAuth} from '../../actions/auth';

const BrandIndex = ({brands}) => {

    const showallBrands = () => {
        return brands.map((brand, i) => (
            <div class="row" key={i}>
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{brand.brand_name}</span>
                  <p>Created {moment(brand.created_on).fromNow()} </p>
                </div>
                <div class="card-action">
                  <a href="#">Read More</a>
                    <a href="">Update Brand</a>
                  {isAuth() && isAuth() !== false && isAuth().role === 'Admin' && (
                      <a href="">Delete Brand</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))     
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    {isAuth() && isAuth() !== false && isAuth().role === 'Dealer' && (
                            <button className="btn btn-primary" style={{display: 'block', width:"100%", height:"3.5rem", borderRadius: '15rem', border: '2px solid grey'}}>
                            <Link href="category/create">
                                <a style={{color: "white"}}>
                                    Create Brand
                                </a>
                            </Link>
                        </button>
                    )}
                </div><br/>
                <div className="row">
                    {showallBrands()}<br/>
                </div>
            </div>
        </>
    )
}

export default BrandIndex
