import axios from 'axios';

const clientSideClient  = axios.create({
    headers: { 'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
},
})

export default clientSideClient