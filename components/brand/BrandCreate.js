import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { Form}  from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getCookie } from '../../actions/auth';
// import TextField from '@material-ui/core/TextField';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import { makeStyles } from '@material-ui/core/styles';
// import {FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
// import Icon from '@material-ui/core/Icon';
// import SaveIcon from '@material-ui/icons/Save';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { CreateBrand } from '../../actions/brand';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));


const CategoryCreate = () => {

    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(true);
    
    const [values,setValues] = useState({
        brand_name: "",
        success: "",
        error: ""
    })

    const token = getCookie('token');

    const {brand_name,success,error} = values;

    // const classes = useStyles();

    const handleChange = name => e => {
        const value = e.target.value;
        setValues({...values, [name]: value, success: '', error: '', brand_name: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(category_name);
        setLoading(true);
        
        const content = {
            brand_name
        }

        CreateBrand(token, content).then(data => {
            if (data.error){
                setValues({...values,error: data.error, success: ''});
                setLoading(false);
            }else{
                setValues({...values,error:'', success:data.message, brand_name:''})
                setLoading(false);
            }
        })
        
    }
        
    return (
        <>
            <div>
                {error  ? (<Alert variant="filled" severity="error" style={{paddingLeft:'20rem', paddingRight:'15rem', width: '50%', marginLeft:'29rem'}}><strong>{error}</strong></Alert>) : ''}
                {success ?  (<Alert variant="filled" severity="success" style={{paddingLeft:'15rem', paddingRight:'15rem', width: '50%', marginLeft:'25rem'}}><strong>{success}</strong></Alert>) : ''}            
            </div><br/>
            <div className="container" style={{border:'2px solid black', height:'250px'}}>
                <h3 style={{fontWeight:'bold',textAlign:'center'}}>Fill up the details :-</h3>
                <hr/>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{fontSize: '1rem', color: 'black'}}>Brand Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Brand Name" onChange={handleChange('brand_name')} value={brand_name} />
                    </Form.Group>
                    <br/>
                  
                    {loading ? (
                        <>
                            <LinearProgress color="secondary" />
                        </>
                    ) : (
                        <>
                            <Button variant="primary" type="submit" size="lg" block={true}>
                                Submit
                            </Button>
                        </>
                    )}
                       
                   
                </Form>
            </div>
        </>
    )
}

export default CategoryCreate
