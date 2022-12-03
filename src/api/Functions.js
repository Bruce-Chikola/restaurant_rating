import constants from "./constants"

// function to select a random logo for the restaurant
// this is because in your requirements, there is not field for storing the logo,
// the list of logos are stored in a redux storage in [/store/restaurants/restaurantSlice.js file]
Array.prototype.Logo = function () {
    return this[Math.floor(Math.random() * this.length)];
}

// function to prepare the response
export const SetResponse = (status, res) => {
    return { status: status, response: res }
}


// function responsible for CRUD operations.
export const DataTransfer = async (params = {}) => {
    const filters = `/${params.filters}`
    const url = `${constants.url}${params.collection}${filters}`
    return fetch(url).then(success => success.json()).then(success => {
        return SetResponse(200, success)
    }).catch(error => {
        return SetResponse(205, error)
    })
}

// to fetch restaurants
export const GetRestaurants = async (filters = '') => {
    const restaurants = DataTransfer({ collection: constants.restaurants, method: constants.get, filters: filters })
    return await restaurants
}