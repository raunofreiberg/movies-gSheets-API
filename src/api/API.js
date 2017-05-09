const URL = 'https://sheetsu.com/apis/v1.0/a58a8a714eaf';
const API_KEY = 'yRvBxFHbQbCqu1LqEoxK';
const API_TOKEN = 'WZp67byz9BKZyHsWy8Yg2B82b8zvZeT2bA7pi5n4'

export function fetchData() {
    return fetch(URL, {
        method: 'GET',
        headers: {
            'Authorization':
            'Basic ' + btoa(API_KEY + ':' + API_TOKEN),
        },
    })
        .then(response => response.json())
        .catch((error) => console.log('There is an issue: ' + error.message))
}

