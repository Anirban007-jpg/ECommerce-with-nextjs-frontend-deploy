import {useEffect, useState} from 'react'
import { ListCategories } from '../../actions/category'
import {ListBrands} from '../../actions/brand';
import { getCookie } from '../../actions/auth';
import {CreateProduct} from '../../actions/product';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';
import FormData from 'form-data';



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
        shipping: '', 
        success: '',
        error: '',
        photos: []
    })

    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [loading,setLoading] = useState(false);
    const [formData,setFormData] = useState(new FormData());
    
    useEffect(() => {
        init()
        initBrands()
    }, [])

    const {brand, category,photos,success, error, product_name, product_description, product_color, product_size, product_quantity, product_sold, Model_Number, shipping, product_price} = values;

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

    
    const handleChange = name => (e) => {
        const value = name === "photos" ? Array.from(e.target.files) : e.target.value;
        if (name === "photos") {
            value.forEach(photo => formData.append('photos',photo));
        }else{
            formData.set(name,value);
        }
       
        // console.log(e.target.files);
        
        setValues({...values, error: '', success: '', [name]: value })
        // console.log(e.target.name, ' ------- ', e.target.value)
        setFormData(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(values);
        CreateProduct(token, formData).then(data => {
            if (data.error){
                setValues({...values, error: data.error, success: ''});
                setLoading(false);
            }else{
                setValues({
                    ...values, 
                    error: '', 
                    success: data.message,   
                    brand: "",
                    category: "",
                    product_name: '',
                    Model_Number: '',
                    product_description: '',
                    product_color: '',
                    product_size: '',
                    product_quantity: 0,
                    product_sold: 0,
                    product_price: 0,
                    shipping: '',
                    photos: []
                });
                setLoading(false);
            }
        })
    }
    


    return (
       <>
       <div>
            {error  ? (<Alert variant="filled" severity="error" style={{paddingLeft:'20rem', paddingRight:'15rem', width: '50%', marginLeft:'29rem'}}><strong>{error}</strong></Alert>) : ''}
            {success ?  (<Alert variant="filled" severity="success" style={{paddingLeft:'20rem', paddingRight:'15rem', width: '50%', marginLeft:'29rem'}}><strong>{success}</strong></Alert>) : ''}        
       </div><br/>
      
        <div className="row">
            <div className="col-md-9" style={{marginLeft: '10rem'}}>
                <h1 style={{textAlign: 'center', textDecoration:'underline'}}><strong>FILL UP THE FORM TO CREATE PRODUCT</strong></h1><hr/>
                <form onSubmit={handleSubmit}>
                <div className="row p-4" style={{placeItems: 'center'}}>
                    <label className="btn btn-primary btn-raised" style={{width: '40%', fontSize: '10px'}}>
                        Upload Product Image
                        <input 
                            type="file" 
                            hidden 
                            multiple 
                            accept="images/*" 
                            onChange={handleChange('photos')} 
                        />        
                    </label>
                    </div>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem'}}>
                        <label style={{fontSize: '1rem'}}>Brand:</label><br/>
                        <select name="brand" className="form-control" onChange={handleChange('brand')}>
                            <option>Please select</option>
                            {brands.map(b => <option key={b._id} value={b._id}>{b.brand_name}</option>)}
                        </select>
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Category:</label><br/>
                        <select name="category" className="form-control" onChange={handleChange('category')}>
                            <option value="">Please select</option>
                            {categories.map(c => <option key={c._id} value={c._id}>{c.category_name}</option>)}
                        </select>
                    </div><br/>
                    {/* {JSON.stringify(categories)} */}
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Product Name:</label><br/>
                        <input type="text" name="product_name" className="form-control" value={product_name} onChange={handleChange('product_name')} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Model Number:</label><br/>
                        <input type="text" name="Model_Number" className="form-control" value={Model_Number} onChange={handleChange('Model_Number')} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Product Description:</label><br/><br/>
                        <textarea type="text" name="product_description" className="form-control" value={product_description} onChange={handleChange('product_description')} rows='1000' style={{height: '20rem'}}></textarea>
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Product Color:</label><br/>
                        <input type="text" name="product_color" className="form-control" value={product_color} onChange={handleChange('product_color')} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Product Size:</label><br/>
                        <input type="text" name="product_size" className="form-control" value={product_size} onChange={handleChange('product_size')} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>No Of Products Available:</label><br/>
                        <input type="number" name="product_quantity" className="form-control" value={product_quantity} onChange={handleChange('product_quantity')} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Products Sold:</label><br/>
                        <input type="number" name="product_sold" className="form-control" value={product_sold} onChange={handleChange('product_sold')} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Products Price:</label><br/>
                        <input type="number" name="product_price" className="form-control" value={product_price} onChange={handleChange('product_price')} />
                    </div><br/>
                    <div className="form-group" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem'}}>
                        <label style={{fontSize: '1rem'}}>Shipping:</label><br/>
                        <select name="shipping" className="form-control" onChange={handleChange('shipping')}>
                            <option value="">Please Select</option>
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
                            <button type="submit" className="btn btn-raised btn-primary" style={{display: 'block', width: '80%', border: '1px solid grey', borderRadius: '15rem', height: '3rem', marginLeft: '5rem'}}>Create Product</button><br/>
                            <button type="reset" className="btn btn-raised btn-danger" style={{background:'red', display: 'block', width: '80%', border: '1px solid grey', borderRadius: '15rem', height: '3rem', marginLeft: '5rem'}}>Reset</button>
                        </div>
                    )}
                    
               </form>
            </div>
        </div>
       </>
    )
}

export default ProductCreate
