export const favoritesListReducer = (state = [], action) => {
    if (action.type === "ADD_TO_FAVORITES") {
        return [...state , action.payload];
    }
    else if(action.type === "REMOV_FROM_FAVORITES")
    state.splice(state.indexOf(action.payload), 1)
    return state
};

export const selectedfavoriteReducer = (selected = null, action) => {
    if (action.type === "SELECT_FAVORITE") return action.payload;
    return selected;
};