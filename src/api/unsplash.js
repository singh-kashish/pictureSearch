import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID mtSCZq7klbxvI4vIsqGDy89zD_gvxo6LhFyJldjAGfU'
    }
});