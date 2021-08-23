import { Query } from './interface/query';

export const maxResult = 5;
export const baseURL = 'https://newsapi.org/';
export const APIKEY = 'a35e56fc2a0241158b2fe85636006aa3'; // 'cf8c80754ed7494eb820d00d8c53676e'
export const imagePath = { loading: './loading.gif', defaultAvatar: './default.png' };
export const createQuery = (parameters: Array<Query> = []) =>
  parameters.length ? `?${parameters.map((x) => `${x.key}=${x.value}`).join('&')}` : '';
