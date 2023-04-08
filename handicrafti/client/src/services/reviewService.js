import { requestFactory } from './requester';
import { baseUrl } from '../config/config';


export const reviewServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        create: (values) => request.post(`${baseUrl}/reviews/post/${values.handiCrafterId}`,
            { text: values.text, handiCrafterId: values.handiCrafterId, reviewerId: values.reviewerId}),
        getAllForUser: (userId) => request.get(`${baseUrl}/reviews/${userId}`),
        getAllReviewsOfHandiCrafter: (offerId) => request.get(`${baseUrl}/reviews/offer/${offerId}`)
    }
}

