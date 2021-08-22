import placeholder from '../api/axios';

const apikey = "wl8jCfwjNasSTcozlGAi7MdHRxXCojCe";

export const getLocation = (name) => {
    return async function (dispatch) {
        const result = await placeholder.get(`locations/v1/cities/autocomplete?apikey=${apikey}&q=${name}`)
        dispatch({ type: "GET_LOCATION", payload: result.data[0] })
    };
};

export const getCurrentWeather = (key) => {
    return async function (dispatch) {
        const result = await placeholder.get(`currentconditions/v1/${key}?apikey=${apikey}`)
        dispatch({ type: "GET_CURRENT_WEATHER", payload: result.data[0] })
    };
};

export const getDays = (key) => {
    return async function (dispatch) {
        const result = await placeholder.get(`forecasts/v1/daily/5day/${key}?apikey=${apikey}`)
        dispatch({ type: "GET_DAYS", payload: result.data })
    };
};

export const addToFavorites = (location) => {
    return {
        type: "ADD_TO_FAVORITES",
        payload: location,
    };
};

export const removeFromFavorites = (location) => {
    return {
        type: "REMOV_FROM_FAVORITES",
        payload: location,
    };
};

export const selectFromFavorites = (location) => {
    return {
        type: "SELECT_FAVORITE",
        payload: location,
    }
}