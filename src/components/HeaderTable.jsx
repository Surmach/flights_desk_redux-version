import React from 'react'
import styled from 'styled-components'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {TableCell} from "@material-ui/core";
export const HeaderTable = (props) =>{
    const {col1, col2, col3, col4, col5, col6} = props;
  return(
          <STableHead>
              <TableRow>
                  <TableCell align="center">{col1}</TableCell>
                  <TableCell align="center">{col2}</TableCell>
                  <TableCell align="center">{col3}</TableCell>
                  <TableCell align="center">{col4}</TableCell>
                  <TableCell align="center">{col5}</TableCell>
                  <TableCell align="center">{col6}</TableCell>
              </TableRow>
          </STableHead>
  )
};

const STableHead = styled(TableHead)`
  background-color: aliceblue;
`

