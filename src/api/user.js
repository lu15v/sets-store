import axios from 'axios';

const baseURL = "https://packserver.herokuapp.com/v1";

export const register =  async(json) => await axios.post(`${baseURL}/user`, {json})
