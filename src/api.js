import axios from 'axios';

const BASE_URL = 'https://0a26fbd7-3872-4d0d-ae2e-f29d57eb3a6b.mock.pstmn.io';

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'PMAK-62da905648240314d84cd9c6-cd7098947507747f756bc5b6c3095f512d',
    },
});

