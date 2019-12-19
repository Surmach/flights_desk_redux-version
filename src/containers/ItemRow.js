import React from 'react'
import TableCell from "@material-ui/core/TableCell";
import STableRow from '../components/STableRow'

export const ItemRow = (props) => {
    const {item,
    } = props;

    return (
        <STableRow>
            <TableCell align="center">{item.term}</TableCell>
            <TableCell align="center">{item.actual.split('T')[0]}</TableCell>
            <TableCell align="center">{item.status}</TableCell>
            <TableCell align="center">{item.airline.ua.name}</TableCell>
            <TableCell align="center">{item.codeShareData[0].codeShare}</TableCell>
            <TableCell align="center">{item["airportToID.name"] || item["airportFromID.name"]}</TableCell>
        </STableRow>
    )
};

