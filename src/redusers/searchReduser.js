import {searchResInitialState} from "./mainReduser";

export const searchReducer = (state = searchResInitialState, action) => {
    switch (action.type) {
        case 'GET_SEARCH':
            return {...state, searchRes: action.payload};
        default:
            return state;
    }
};