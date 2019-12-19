import React from 'react'
import {HeaderTable} from "../components/HeaderTable";
import {ItemRow} from "./ItemRow";
import TableBody from '@material-ui/core/TableBody';
import SPaper from "../components/SPaper";
import STable from "../components/STable";
import {getClick, getFlights} from "../actions/action";
import {connect} from "react-redux";
import {store} from "../store/store";

const ItemRowList = (props) => {

    const {
        item,
        isClick,
        searchRes
    } = props;
    const toodayList =
        item.filter(it => {
            const date = it.actual.split('T');
            return date[0] === `2019-12-${new Date().getDate()}`
        });

    const yestardayList =
        item.filter(it => {
            const date = it.actual.split('T');
            return date[0] === `2019-12-${new Date().getDate() + 1}`
        });

    const toomorowList =
        item.filter(it => {
            const date = it.actual.split('T');
            return date[0] === `2019-12-${new Date().getDate() - 1}`
        });

    // const toomorowSearchList =
    //   item.filter(el=>{
    //     return el["airportToID.name"] || el["airportFromID.name"];
    // });


    return (
        <SPaper>
            <STable aria-label="simple table">
                <HeaderTable col1={'Термінал'} col2={'Розклад'} col3={'Призначення'} col4={'Статус'}
                             col5={'Авіакомпанія'} col6={'Рейс'}/>
                <TableBody>
                    {isClick.isTood ? toodayList.map(item => (<ItemRow key={item.ID} item={item}/>)) : ''}
                    {isClick.isToom ? toomorowList.map(item => (<ItemRow key={item.ID} item={item}/>)) : ''}
                    {isClick.isY ? yestardayList.map(item => (<ItemRow key={item.ID} item={item}/>)) : ''}
                    {searchRes ? searchRes.map(item=>(<ItemRow key={item.ID} item={item}/>)) : ''}
                    {/*{item.map(item=>(<ItemRow key={item.ID} item={item}/>))}*/}
                </TableBody>
            </STable>
        </SPaper>
    )
};


const mapStateToProps = (store) => {
    console.log(store)
    return {
        flights: store.flightsReducer.flights.body,
        isClick: store.btnReducer.isClick,
        searchRes: store.searchReducer.searchRes
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getFlights: dispatch(getFlights()),
        getClick: dispatch(getClick())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemRowList);