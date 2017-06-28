import { API_PATH } from '../config.js';


const customFetch = (path, options) => new Promise((resolve, reject) => {
    fetch(path, options)
    .then(response => {
        setTimeout(() => {}, 0);
        return response.json();
    })
    .then((responseJson) => {
        resolve(responseJson)
    })
    .catch((err) => reject(err));
})

const Fetcher = {
    get: () => customFetch(API_PATH, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }),
    create: (data) => customFetch(API_PATH, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }),
    delete: (data) => customFetch(API_PATH, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }),
}

export default Fetcher;
