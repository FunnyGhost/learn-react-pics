import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8fa5172d16216de0766f9e19f681d7ecee265b40c49f14ddf2d00dbefc3b7c5d'
  }
});
