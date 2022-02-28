let apiUrl
const apiUrls = {
    production: 'https://api.kanye.rest',
    development: 'https://api.kanye.rest'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl
