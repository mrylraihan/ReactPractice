// import apiUrl from "../apiConfig"
// import axios from 'axios'


export const getApiData = () => {
// make sure to run https://cors-anywhere.herokuapp.com/ before running the application or you will get a cors error!

    const apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=burgers&location=berlin'
    const token = '_iK54WL4BQvpFh5aTlTSJ_fZ-AOvsuU07kh_N2gHbdb94h25CyjddANJsF7yfMhrACYOyVtTJ2hnVPAl_xdz37K7w5a4GTeZo7U-OH6Bshg9eRDWU-qWBLTiB6pqYnYx'
    return fetch(`${apiUrl}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}