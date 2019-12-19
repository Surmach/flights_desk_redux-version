import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getClick, getFlights} from './../actions/action'
import ItemRowList from "./ItemRowList"
import {ButtonWrapper} from "./ButtonWrapper";
import DaySearchWrapper from "./DaySearchWrapper";

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {store} from "../store/store";


const AppContainer = (props) => {
    useEffect(() => {
        store.dispatch(getClick({isY: false, isToom: false, isTood: true}))
    });
    const {
        flights,
    } = props;

    if (flights === undefined) {
        return <BrowserRouter>
            <ButtonWrapper btn1Text={'Arrival'} btn2Text={'departure'}/>
            <DaySearchWrapper/>
        </BrowserRouter>
    } else {
        const {arrival, departure} = flights;

        return (
            <BrowserRouter>

                <ButtonWrapper btn1Text={'Arrival'} btn2Text={'departure'}/>

                <DaySearchWrapper/>
                <Switch>
                    <Route exact path={'/'} render={(props) => <ItemRowList item={departure}/>}/>

                    <Route path={'/arrival'} render={(props) => <ItemRowList item={arrival}/>}/>

                    <Route path={'/departure'} render={(props) => <ItemRowList item={departure}/>}/>
                </Switch>

            </BrowserRouter>

        )
    }
};

const mapStateToProps = (store) => {
    return {
        flights: store.flightsReducer.flights.body,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getFlights: dispatch(getFlights()),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
