import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookie from 'js-cookie';
import { handleResponse } from './auth';

export const CreateProduct = (token, content) => {
    return fetch(`${API}/product/create`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: content
    }).then(response => {
        handleResponse(response);
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: 'GET'
    }).then(response => {
        handleResponse(response);
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const getSingleProduct = (slug) => {
    return fetch(`${API}/product/${slug}`, {
        method: 'GET'
    }).then(response => {
        handleResponse(response);
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}