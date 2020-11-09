import Offers from './Offers'
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const { Component } = require("react")

class TableHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TableHead>
                <TableRow>
                    <TableCell>Offer</TableCell>
                    <TableCell align="right">press for more details</TableCell>
                </TableRow>
            </TableHead>
        )
    }
}

export default TableHeader