import { request } from './requester';

import {baseUrl} from '../config/config';



export const getAll = async() => {
const reviews = await request('GET', `${baseUrl}/reviews`);

return reviews;
}