global.fetch = require('jest-fetch-mock');

export const api = () => {
    return fetch('http://localhost:4000/flights').then((res) => res.json());
};