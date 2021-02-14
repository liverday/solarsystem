import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-solar-system.herokuapp.com',
});
