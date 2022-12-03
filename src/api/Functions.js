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
    const filters = `/${params.filters}${constants.all}`
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



// lets calculate the rating for the selected restaurant
export const CalculateRatings = (data) => {
    // group ratings
    let ratings = { one: 0, two: 0, three: 0, four: 0, five: 0, }
    if (Object.keys(data).length > 0) {
        data.attributes.ratings.data.map(r => {
            if (r.attributes.rating == 5)
                ratings.five += 1
            else if (r.attributes.rating == 4)
                ratings.four += 1
            else if (r.attributes.rating == 3)
                ratings.three += 1
            else if (r.attributes.rating == 2)
                ratings.two += 1
            else if (r.attributes.rating == 1)
                ratings.one += 1
        })

        // CALCULATE RATING WIDTH
        const average = ratings.five + ratings.four + ratings.three + ratings.two + ratings.one
        const ratingWidths = {
            five: (((ratings.five / average) * 100).toFixed(0)),
            four: ((ratings.four / average) * 100).toFixed(0),
            three: ((ratings.three / average) * 100).toFixed(0),
            two: ((ratings.two / average) * 100).toFixed(0),
            one: ((ratings.one / average) * 100).toFixed(0)
        }
        return {
            ratings: ratings, ratingWidths: ratingWidths
        }
    }
    return false

}