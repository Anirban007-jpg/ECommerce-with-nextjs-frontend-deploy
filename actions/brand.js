import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookie from 'js-cookie';
import { handleResponse } from './auth';

export const CreateBrand = (token, content) => {
    return fetch(`${API}/brand/create`, {
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

export const ListBrands = (token) => {
    return fetch(`${API}/brands`, {
        method: 'GET',
        headers:{
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        handleResponse(response);
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}
