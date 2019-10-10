import axios from 'axios';

const baseURL = "https://packserver.herokuapp.com/v1";

export const register = (json) => axios.post(`${baseURL}/user`, json)
