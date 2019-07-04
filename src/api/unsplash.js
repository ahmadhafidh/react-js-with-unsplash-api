import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 82fd86f5b6f428b9139f5f910e8634e1988831359bed8d24d656086c31bb6633'
    }
});