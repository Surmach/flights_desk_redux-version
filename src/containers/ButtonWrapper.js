import React, {useState} from "react";
import {Link} from 'react-router-dom'

import Button from "@material-ui/core/Button";
import SButtonGroup from "../components/SButtonGroup";
import {store} from "../store/store";
import {getClick} from "../actions/action";

export const ButtonWrapper = props =>{
    const {
        btn1Text,
        btn2Text,
    }=props;

    const handleArrival = () =>{
        store.dispatch(getClick({isY: false, isToom: false, isTood: true}))
    };
    const handleDeparture = () =>{
        store.dispatch(getClick({isY: false, isToom: false, isTood: true}))
    };

    return(
        <SButtonGroup fullWidth={true} aria-label="full width outlined button group">
                <Button onClick={handleArrival} component={Link} to={'/arrival'}>{btn1Text}</Button>
                <Button onClick={handleDeparture} component={Link} to={'/departure'}>{btn2Text}</Button>
        </SButtonGroup>
    )
};



