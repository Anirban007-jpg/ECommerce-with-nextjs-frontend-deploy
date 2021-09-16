import React from 'react'
import { API } from '../../config'
import moment from 'moment'

const ProductDetail = ({product}) => {
    const {photos, _id, product_name,Model_Number,product_price,product_color,product_size,product_quantity,category,brand,shipping,entry_on,product_description,product_sold} = product; 
    const {category_name} = category;
    const {brand_name} = brand;
    return (
        <>
          <div className="container" style={{marginLeft: '17rem'}}>
            <h1 style={{textDecoration: 'underline', textAlign: 'center'}}>PRODUCT PICS:</h1><hr/>
            
            <div className="row"> 
                {photos.map((photo,i) => (
                        <div className="col-md-4" key={_id}>
                            <div>
                                <img src={`${API}/product/${_id}/${photo.photoName}`} style={{height: '20rem', width:'20rem',border: '5px solid grey',borderRadius: '20rem'}} /><hr/>
                                <p style={{textAlign: 'center'}}>Picture #{i+1}</p>
                            </div>
                        </div>
                ))}    
            </div><hr/>
            <div className="container" style={{marginLeft: '-0.5rem', paddingRight: '2rem',heigth: '120rem', width: '70rem'}}>
                    <div className="row">
                        <h1 style={{textAlign: 'center',textDecoration: 'underline'}}>PRODUCT DETAIL:</h1><br/><br/><br/>
                        <br/>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope='col'>Product Name</th>
                                    <th scope='col'>Model Number</th>
                                    <th scope='col'>Product Price</th>
                                    <th scope='col'>Product Color</th>
                                    <th scope='col'>Product Quantity</th>
                                    <th scope='col'>Product Size</th>
                                    <th scope='col'>Product Category</th>
                                    <th scope='col'>Product Brand</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{textAlign: 'center', fontWeight: '800'}}>{product_name}</td>
                                    <td style={{textAlign: 'center', fontWeight: '800'}}>{Model_Number}</td>
                                    <td style={{textAlign: 'center', fontWeight: '800'}}>${product_price}</td>
                                    <td style={{textAlign: 'center', fontWeight: '800'}}>{product_color}</td>
                                    <td style={{textAlign: 'center', fontWeight: '800'}}>{product_quantity-product_sold}</td>
                                    <td style={{textAlign: 'center', fontWeight: '800'}}>{product_size}</td>
                                    <td style={{textAlign: 'center', fontWeight: '800'}}>{category_name}</td>
                                    <td style={{textAlign: 'center', fontWeight: '800'}}>{brand_name}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <br/>
                    <div class="row">
                        <h1 style={{textDecoration: 'underline', textAlign: 'center'}}>PRODUCT DESCRIPTION:</h1><hr/>

                        
                            <div className="row">
                                {product_description}
                            </div><br/><br/>
                        
                    </div>
                    <div class="row">
                        <h1 style={{textDecoration: 'underline', textAlign: 'center'}}>OTHER INFORMATION:</h1><hr/>

                            <div className="row">
                                <p><strong>PRODUCT SOLD TILL NOW:</strong>&nbsp;&nbsp;{product_sold}</p>
                                <p><strong>SHIPPING STATUS:</strong>&nbsp;&nbsp;{shipping}</p>
                                <p><strong>PRODUCT ADDED BY DEALER ON :</strong>&nbsp;&nbsp;{moment(entry_on).format('Do MMMM YYYY, h:mm:ss a')}</p>
                                <p><strong>AVAILABILITY:</strong>&nbsp;&nbsp;NO</p>
                                <p><strong>PRODUCTS LEFT:</strong>&nbsp;&nbsp;{product_quantity-product_sold}</p>
                            </div>
                    </div>
            </div>    
          </div>  
        </>
    )
}

export default ProductDetail
