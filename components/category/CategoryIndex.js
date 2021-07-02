import React from 'react'
import Link from 'next/link'

const CategoryIndex = () => {
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
                </div>
            </div>
        </>
    )
}

export default CategoryIndex
