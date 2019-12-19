import {isClickInitialState} from "./mainReduser"

export const btnReducer = (state = isClickInitialState, action) => {
    switch (action.type) {
        case 'GET_CLICK':
            return {...state, isClick: action.payload};
        default:
            return state;
    }
};