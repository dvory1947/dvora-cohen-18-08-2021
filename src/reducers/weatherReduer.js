export const LocationReducer=(state=[],action)=>{
    if (action.type === "GET_LOCATION"){
        return action.payload;
    }
    return state;
}

export const CurrentWeatherReducer=(state=[],action)=>{
    if (action.type === "GET_CURRENT_WEATHER"){
        return action.payload;
    }
    return state;
}

export const DaysReducer=(state=[],action)=>{
    if (action.type === "GET_DAYS"){
        return action.payload;
    }
    return state;
}