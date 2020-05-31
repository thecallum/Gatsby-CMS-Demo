const axios = require('axios').default;

module.exports = (url) => new Promise((resolve) => {
    axios(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => resolve(res.data))
        .catch(err => {
            console.error('Error fetching pages', err)
            resolve([])
        })
});