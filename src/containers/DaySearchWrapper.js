import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import styled from 'styled-components'
import Button from "@material-ui/core/Button";
import SDayButtonGroup from "../components/SDayButtonGroup";
import {store} from "../store/store";

import {connect} from 'react-redux'
import {getClick, getFlights, getSearch} from "../actions/action";

const DaySearchWrapper = props => {

    const {
        flights,
    } = props;

    if (flights !== undefined) {
        var {arrival, departure} = flights;

    }

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    };

    const handleSubmit = (event) => {
        if (flights !== undefined) {
            var findBySity = departure.filter(el => {
                return el["airportToID.name"] === searchValue;
            })
        }
        store.dispatch(getSearch(findBySity));
        store.dispatch(getClick({isY: false, isToom: false, isTood: false}))
        event.preventDefault()
    };

    const handleYestardayClick = () => {
        store.dispatch(getClick({isY: true, isToom: false, isTood: false}))
    };

    const handleToomorowClick = () => {
        store.dispatch(getClick({isY: false, isToom: true, isTood: false}))
    };

    const handleToodayClick = () => {
        store.dispatch(getClick({isY: false, isToom: false, isTood: true}))
    };

    return (
        <Grid container>
            <Grid item xs={6}>
                <SDayButtonGroup fullWidth={false} aria-label="full width outlined button group">
                    <Button onClick={handleYestardayClick}>Yestarday</Button>
                    <Button onClick={handleToodayClick}>Tooday</Button>
                    <Button onClick={handleToomorowClick}>Toomorow</Button>
                </SDayButtonGroup>
            </Grid>
            <Grid item xs={6}>
                <Sdiv>
                    <p>{searchValue}</p>
                    <form onSubmit={handleSubmit}>
                        <STextField id="filled-search" value={searchValue} onChange={handleChange} label="Search field"
                                    type="search" variant="standard"/>
                    </form>
                </Sdiv>
            </Grid>
        </Grid>
    )
};

const mapStateToProps = (store) => {
    return {
        flights: store.flightsReducer.flights.body,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getFlights: dispatch(getFlights()),
        getClick: dispatch(getClick()),
        getSearch: dispatch(getSearch())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DaySearchWrapper);


const STextField = styled(TextField)`
#filled-search{
  width: 400px;
}
`;
const Sdiv = styled.div`
  margin-bottom: 1.5%;
`;

