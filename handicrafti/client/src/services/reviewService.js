import { requestFactory } from './requester';
import {baseUrl} from '../config/config';


export const reviewServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        create: (userId) => request.post(`${baseUrl}/postreview/${userId}`),
        getAllForUser: (userId) => request.get(`${baseUrl}/reviews/${userId}`)
    } 
}

