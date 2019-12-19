import {combineReducers} from "redux";
import {flightsReducer} from './flightsReduser'
import {btnReducer} from "./btnReduser";
import {searchReducer} from './searchReduser'

export const flightsInitialState = {
    flights: [],
};

export const isClickInitialState = {
    isClick: {
        isY: false,
        isToom: false,
        isTood: true
    }
};

export const searchResInitialState = {
    searchRes: {}
};

const allReducers = combineReducers({
    flightsReducer,
    btnReducer,
    searchReducer
});

export default allReducers;