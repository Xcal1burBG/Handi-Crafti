import { requestFactory } from './requester';
import { baseUrl } from '../config/config';


export const offerServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        create: (data) => request.post(`${baseUrl}/offers/create`, data),
        getById: (offerId) => request.get(`${baseUrl}/offers/${offerId}`),
        getAll: () => request.get(`${baseUrl}offers/catalog`),
        edit: (data) => request.put(`${baseUrl}/{offerId}/edit`, data),
        delete: (offerId) => request.delete(`${baseUrl}/${offerId}/delete`)
    }
}