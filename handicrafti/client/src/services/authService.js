import {requestFactory} from './requester';
import { baseUrl } from '../config/config';


export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
       login: (data) => request.post(`${baseUrl}/users/login`, data),
       register: (data) => request.post(`${baseUrl}/users/register`, data),
       
    //    logout: () => request.get(`${baseUrl}/logout`)
    }

}