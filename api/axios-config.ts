
// import { COOKIESTORAGE_FIELDS } from '@/utils/constants'; 
import axios from 'axios';

export const LOGINAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

LOGINAPI.interceptors.request.use(
  (req) => {
    if (req.data) {
      req.data = (req.data);
    }
    return req;
  },
  (err) => {
    console.log('Ooopps, something went wrong!');
    Promise.reject(err);
  }
);

LOGINAPI.interceptors.response.use((res) => {
  if (res.data) {
    res.data = (res.data);
    if (process.env.NEXT_PUBLIC_BASE_URL!.includes('dev')) {
      // eslint-disable-next-line no-console
    }
  }
  return res;
});

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// API.interceptors.request.use(
//   (req) => {
//     let token = cookieStorage.getItem(COOKIESTORAGE_FIELDS.auth);
//     if (token) {
//       token = JSON.parse(token)?.access_token;
//       req.headers.Authorization = `Bearer ${token}`;
//     }

//     if (req.data) {
//       if (req.data.skipEncrypt) {
//         req.data = req.data.data;
//       } else {
//         req.data = encrypt(req.data);
//       }
//     }
//     return req;
//   },
//   (err) => {
//     toast.error('Ooopps, something went wrong!');
//     Promise.reject(err);
//   }
// );

API.interceptors.response.use((res) => {
  if (res.data) {
    res.data = (res.data);
    if (process.env.NEXT_PUBLIC_BASE_URL!.includes('dev')) {
      // eslint-disable-next-line no-console
    }
  }
  return res;
});
