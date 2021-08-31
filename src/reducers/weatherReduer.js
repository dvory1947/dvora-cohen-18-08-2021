export const LocationReducer = (state = [], action) => {
    if (action.type === "GET_LOCATION") {
        if (action.payload)
            return action.payload;
        else {
            alert("Sorry we couldn't find your search please make sure it's correct");
            return state;
        }
    }
    return state;
}

export const CurrentWeatherReducer = (state = [], action) => {
    if (action.type === "GET_CURRENT_WEATHER") {
        return action.payload;
    }
    return state;
}

export const DaysReducer = (state = [], action) => {
    if (action.type === "GET_DAYS") {
        return action.payload;
    }
    return state;
}