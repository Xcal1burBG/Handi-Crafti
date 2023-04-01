import { request } from './requester';

import {baseUrl} from '../config/config';



export const getAll = async() => {
const offers = await request('GET', `${baseUrl}/offers`);

console.log(offers);

return offers;
}