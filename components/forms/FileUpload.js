import React from 'react'
import Resizer from 'react-image-file-resizer';

const FileUpload = () => {

    const fileUploadAndResize = (e) => {
        // console.log(e.target.files);
        // resize the images one by one
        let files = e.target.files;
        if (files){
            for ( let i = 0; i < files.length; i++){
                Resizer.imageFileResizer(files[i], 720, 720 , 'JPEG', 100, 0, (uri) => {
                    console.log(uri);
                },  "base64");
                   
            }
        }
        // send back the images to the server to upload to cloudinary
        // set url to images array in the ProductCreate Component
    }

    return (
        <div className="row">
            <label className="btn btn-primary btn-raised" style={{width: '9%', marginLeft: '1rem'}}>
                Choose File
                <input 
                    type="file" 
                    hidden 
                    multiple 
                    accept="images/*" 
                    onChange={fileUploadAndResize} 
                />
            </label>
        </div>
    )
}

export default FileUpload
