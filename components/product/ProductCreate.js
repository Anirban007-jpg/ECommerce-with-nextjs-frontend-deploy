import {useEffect, useState} from 'react'
import { ListCategories } from '../../actions/category'
import {ListBrands} from '../../actions/brand';
import { getCookie } from '../../actions/auth';
import {CreateProduct} from '../../actions/product';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';

const ProductCreate = () => {

    const [values,setValues] = useState({
        brand: '',
        category: '',
        product_name: '',
        Model_Number: '',
        product_description: '',
        product_color: '',
        product_size: '',
        product_quantity: 0,
        product_sold: 0,
        product_price: 0,
        product_country: '',
        shipping: '', 
        success: '',
        error: ''
    })

    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [loading,setLoading] = useState(false);
    
    useEffect(() => {
        init()
        initBrands()
    }, [])

    const {brand, category,success, error, product_name, product_description, product_color, product_size, product_quantity, product_sold, Model_Number, shipping, product_price, product_country} = values;

    const token = getCookie('token');

    const init = () => {
        ListCategories().then(data => {
            if (data.error){
                console.log(data.error);
            }else{
                setCategories(data.categories);
            }
        })
    }

    
    const initBrands = () => {
        ListBrands(token).then(data => {
            if (data.error){
                console.log(data.error);
            }else{
                setBrands(data.brands);
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        CreateProduct(token, values).then(data => {
            if (data.error){
                setValues({...values, error: data.error, success: ''});
                setLoading(false);
            }else{
                setValues({
                    ...values, 
                    error: '', 
                    success: data.message,   
                    brand: '',
                    category: '',
                    product_name: '',
                    Model_Number: '',
                    product_description: '',
                    product_color: '',
                    product_size: '',
                    product_quantity: 0,
                    product_sold: 0,
                    product_price: 0,
                    product_country: '',
                    shipping: ''
                });
                setLoading(false);
            }
        })
    }
    

    const handleChange = (e) => {
        setValues({...values, error: '', success: '', [e.target.name]: e.target.value })
        // console.log(e.target.name, ' ------- ', e.target.value)
    }

    return (
       <>
       <div>
            {error  ? (<Alert variant="filled" severity="error" style={{paddingLeft:'20rem', paddingRight:'15rem', width: '50%', marginLeft:'29rem'}}><strong>{error}</strong></Alert>) : ''}
            {success ?  (<Alert variant="filled" severity="success" style={{paddingLeft:'15rem', paddingRight:'15rem', width: '50%', marginLeft:'25rem'}}><strong>{success}</strong></Alert>) : ''}        
       </div><br/>
        <div className="row">
            <div className="col-md-12" style={{marginLeft: '2rem'}}><br/>
                <h1 style={{textAlign: 'center', textDecoration:'underline'}}><strong>FILL UP THE FORM TO CREATE PRODUCT</strong></h1><hr/>
                <form onSubmit={handleSubmit}>
                    {/* <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Brand:</label><br/>
                        <select name="brand" className="form-control" onChange={handleChange}>
                            <option>Please select</option>
                            {brands.map(b => <option key={b.slug} value={b.brand_name}>{b.brand_name}</option>)}
                        </select>
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Category:</label><br/>
                        <select name="category" className="form-control" onChange={handleChange}>
                            <option>Please select</option>
                            {categories.map(c => <option key={c.slug} value={c.category_name}>{c.category_name}</option>)}
                        </select>
                    </div><br/> */}
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Product Name:</label><br/>
                        <input type="text" name="product_name" className="form-control" value={product_name} onChange={handleChange} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Model Number:</label><br/>
                        <input type="text" name="Model_Number" className="form-control" value={Model_Number} onChange={handleChange} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Product Description:</label><br/><br/>
                        <textarea type="text" name="product_description" className="form-control" value={product_description} onChange={handleChange} rows='1000' style={{height: '20rem'}}></textarea>
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Product Color:</label><br/>
                        <input type="text" name="product_color" className="form-control" value={product_color} onChange={handleChange} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Product Size:</label><br/>
                        <input type="text" name="product_size" className="form-control" value={product_size} onChange={handleChange} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Product Available Only In:</label><br/>
                        <input type="text" name="product_country" className="form-control" value={product_country} onChange={handleChange} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>No Of Products Available:</label><br/>
                        <input type="number" name="product_quantity" className="form-control" value={product_quantity} onChange={handleChange} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Products Sold:</label><br/>
                        <input type="number" name="product_sold" className="form-control" value={product_sold} onChange={handleChange} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Products Price:</label><br/>
                        <input type="number" name="product_price" className="form-control" value={product_price} onChange={handleChange} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Shipping:</label><br/>
                        <select name="shipping" className="form-control" onChange={handleChange}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <hr/>
                    {loading ? (
                        <>
                            <LinearProgress color="secondary" />
                        </>
                    ) :
                    (
                        <div>
                            <button type="submit" className="btn btn-raised btn-primary" style={{display: 'block', width: '100%', border: '1px solid grey', borderRadius: '15rem', height: '3rem'}}>Create Product</button><br/>
                            <button type="reset" className="btn btn-raised btn-danger" style={{background:'red', display: 'block', width: '100%', border: '1px solid grey', borderRadius: '15rem', height: '3rem'}}>Reset</button>
                        </div>
                    )}
                    
               </form>
            </div>
        </div>
       </>
    )
}

export default ProductCreate
