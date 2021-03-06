import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookie from 'js-cookie';
import { handleResponse } from './auth';

export const CreateCategory = (token, content) => {
    return fetch(`${API}/category/create`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type' : 'application/json',
            Authorization: `Bearer ${token}`
        },
        body:JSON.stringify(content)
    }).then(response => {
        handleResponse(response);
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const ListCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    }).then(response => {
        handleResponse(response);
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}


export const ReadCategory = (slug) => {
    return fetch(`${API}/category/${slug}`, {
        method: 'GET'
    }).then((response) => {
        handleResponse(response);
        return response.json();
    }).catch((err) => { 
        console.log(err)
    })
}