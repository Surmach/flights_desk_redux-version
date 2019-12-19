const now = () => {
    const d = new Date();
    const day = d.getDate()
    const month = d.getMonth() + 1;
    const output = (day < 10 ? '0' : '') + day + "-"
        + (month < 10 ? '0' : '') + month + '-'
        + d.getFullYear();
    return output;
};

export const getFlights = () => {
    return dispatch => {
        fetch(`https://api.iev.aero/api/flights/${now()}`)
            .then(response => response.json())
            .then(json => dispatch({
                type: 'GET_DEPARTURE',
                payload: json
            }))
            .catch(() => dispatch({
                type: 'ERROR_DEPARTURE',
                payload: null
            }))
    }
};

export const getClick = (isClick) => {

    return dispatch => {
        dispatch({
            type: "GET_CLICK",
            payload: isClick
        })
    }
};

export const getSearch = (searchRes) =>{
    return dispatch =>{
        dispatch({
            type: 'GET_SEARCH',
            payload: searchRes
        })
    }
};


