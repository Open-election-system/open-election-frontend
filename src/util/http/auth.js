import axios from 'axios';
import {apiAddress} from "../../constants/ApiConstants";

export const signIn = async signData => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(signData)
  };

  fetch(`${apiAddress}/auth/login`, requestOptions)
    .then(async response => {
      const data = await response.json();
      return data;

      if (!response.ok) {
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }

      console.log(data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
};