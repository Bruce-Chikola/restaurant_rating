import { HiLocationMarker } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import RatingData from './RatingData'
import Reviews from './Reviews'
export default function RestaurantDetails() {
    const { selectedRestaurant, restaurantLogos } = useSelector(state => state.restaurant.restaurantSlice)
    return (
        <div className='rest-dets bordder border-indigo-500 rounded'>
            <div className='my-3 ml-5'>RestaurantDetails</div>
            <div className='w-full grid grid-cols-3'>
                <img style={{ maxWidth: 400 }} src={`../img/${restaurantLogos.Logo()}`} />
                <div className='col-span-2'>
                    <h1 className='rt'>{selectedRestaurant.attributes.name}</h1>
                    <h4 className='flex m-0 items-center justify-start'><HiLocationMarker size={30} color="gray" /> {selectedRestaurant.attributes.address}</h4>
                    <RatingData data={selectedRestaurant} />
                    <Reviews reviews={selectedRestaurant.attributes.ratings.data} />
                </div>
            </div>
        </div>
    )
}
