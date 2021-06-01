import { environment } from './../../environments/environment';
export const baseUrl = environment.production
  ? 'https://hunjawineshop.herokuapp.com'
  : 'http://localhost:4200';
export const productsUrl = baseUrl + '/products';
export const cartUrl = baseUrl + '/cart';
