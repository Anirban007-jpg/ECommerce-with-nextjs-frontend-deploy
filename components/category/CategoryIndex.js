import React from 'react'
import Link from 'next/link'
import moment from 'moment';

const CategoryIndex = ({categories}) => {

    const showallCategories = () => {
        return categories.map((category, i) => (
            <div class="row" key={i}>
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{category.category_name}</span>
                  <p>Created {moment(category.created_on).fromNow()} </p>
                </div>
                <div class="card-action">
                  <a href="#">Read More</a>
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
                    <button className="btn btn-primary" style={{display: 'block', width:"100%", height:"3.5rem", borderRadius: '15rem', border: '2px solid grey'}}>
                        <Link href="category/create">
                            <a style={{color: "white"}}>
                                Create Category
                            </a>
                        </Link>
                    </button>
                </div><br/><br/>
                <div className="row">
                    {showallCategories()}<br/>
                </div>
            </div>
        </>
    )
}

export default CategoryIndex
