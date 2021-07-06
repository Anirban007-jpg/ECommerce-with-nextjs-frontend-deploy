import React from 'react'
import Link from 'next/link'
import moment from 'moment';
import {isAuth} from '../../actions/auth';

const BrandIndex = ({brands}) => {

    const showallBrands = () => {
        return brands.map((brand, i) => (
            <div className="row" key={i}>
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{brand.brand_name}</span>
                  <p>Created {moment(brand.created_on).fromNow()} </p>
                </div>
                <div className="card-action">
                  <Link href={`brand/${brand.slug}`}>
                    <a>
                      Description
                    </a>
                  </Link>
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
