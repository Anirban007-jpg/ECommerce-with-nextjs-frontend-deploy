import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import styles from "./CategoryCreate.module.css";
import { Form}  from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getCookie } from '../../actions/auth';
import {CreateCategory} from '../../actions/category';
// import TextField from '@material-ui/core/TextField';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import { makeStyles } from '@material-ui/core/styles';
// import {FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
// import Icon from '@material-ui/core/Icon';
// import SaveIcon from '@material-ui/icons/Save';
import LinearProgress from '@material-ui/core/LinearProgress';




const CategoryCreate = () => {

    const [loading, setLoading] = useState(false);
    
    const [values,setValues] = useState({
        category_name: "",
        success: "",
        error: ""
    })

    const token = getCookie('token');

    const {category_name,success,error} = values;

    // const classes = useStyles();

    const handleChange = name => e => {
        const value = e.target.value;
        setValues({...values, [name]: value, success: '', error: '', category_name: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(category_name);
        setLoading(true);
        
        const content = {
            category_name
        }

        CreateCategory(token, content).then(data => {
            if (data.error){
                setValues({...values,error: data.error, success: ''});
                setLoading(false);
            }else{
                setValues({...values,error:'', success:data.message, category_name:''})
                setLoading(false);
            }
        })
        
    }
        
    return (
        <>
            <div className="container" id={styles.myform}>
                <h3 className={styles.heading2}>Fill up the details :-</h3>
                <hr/>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{fontSize: '1rem', color: 'black'}}>Category Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Category Name" onChange={handleChange('category_name')} value={category_name} />
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
