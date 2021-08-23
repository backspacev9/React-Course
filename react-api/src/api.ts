import axios from 'axios';
import * as Constants from './constants';

const axiosInstance = axios.create({
  baseURL: `${Constants.baseURL}`,
  timeout: 3000,
});

export default axiosInstance;
