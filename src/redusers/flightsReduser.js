import {flightsInitialState} from "./mainReduser"

export const flightsReducer = (state = flightsInitialState, action) => {
    switch (action.type) {
        case 'GET_DEPARTURE':
            return {...state, flights: action.payload};
        default:
            return state;
    }
};