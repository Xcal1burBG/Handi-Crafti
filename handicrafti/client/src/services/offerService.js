import { requestFactory } from './requester';
import { baseUrl } from '../config/config';


export const offerServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        create: (data) => request.post(`${baseUrl}/offers/create`, data),
        getAll: () => request.get(`${baseUrl}/offers/catalog`),
        getByUserId: (userId) => request.get(`${baseUrl}/offers/user/${userId}`),
        getById: (offerId) => request.get(`${baseUrl}/offers/details/${offerId}`),
        edit: (offerId, data) => request.put(`${baseUrl}/offers/${offerId}/edit`, data),
        delete: (offerId) => request.delete(`${baseUrl}/offers/${offerId}/delete`)
    }
}