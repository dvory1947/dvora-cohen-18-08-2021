import { combineReducers } from 'redux';
import { DaysReducer, CurrentWeatherReducer, LocationReducer } from './weatherReduer';
import { favoritesListReducer, selectedfavoriteReducer } from './favoritesReducer'

export default combineReducers({
    location: LocationReducer,
    currentWeather: CurrentWeatherReducer,
    days: DaysReducer,
    favorites: favoritesListReducer,
    selectedFavorite: selectedfavoriteReducer,
})