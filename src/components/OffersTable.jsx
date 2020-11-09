import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Axios from 'axios';
import {apiBaseUrl} from '../constants'
import { Button, Link } from '@material-ui/core';

export default function OffersTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {props.offers.map((row) => (
            <Row key={row.title} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  })


function Row(props) {
    const { row } = props;
    const [isOpen, setIsOpen] = useState(false)
    const classes = useRowStyles();
  
    const handleClick = (id) => {
      console.log(localStorage.getItem("token"));
      const config = {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
    }
      if (!isOpen){
        // Axios.post(apiBaseUrl + `/viewingUp/${id}`)
        Axios.post(apiBaseUrl + `/viewUp/${id}`, {}, config)
      }else {
        Axios.post(apiBaseUrl + `/viewDown/${id}`,{}, config)
        // Axios.post(apiBaseUrl + `/viewingDown/${id}`)
      }
      setIsOpen(!isOpen)
    }

    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => handleClick(row.id)}>
              {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">{row.title}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Info 
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>Phone Number</TableCell>
                      <TableCell align="right">Email</TableCell>
                      <TableCell align="right">Viewing </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow key={row.title}>
                        <TableCell component="th" scope="row">{row.description}</TableCell>
                        <TableCell>{row.phone}</TableCell>
                        <TableCell align="right">
                          <a onClick={`javascript:window.open('mailto:${row.email}', 'mail');event.preventDefault()`} href={`mailto:${row.email}`}>
                            {row.email}
                          </a>
                          </TableCell>
                        <TableCell align="right">{row.viewing}</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      viewing: PropTypes.number.isRequired
    }).isRequired,
  }
