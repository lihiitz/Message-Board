
import React from 'react';
import Axios from 'axios';
import AddOfferDialog from './AddOfferDialog'
import OffersTable from './OffersTable'
import { Button } from '@material-ui/core';
import Login from './Login';
import { apiBaseUrl } from "../constants";

const { Component } = require("react");


class OffersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offers : []
        }
    }

    handleClick = (newOffer) => {
        Axios.post(apiBaseUrl + '/offer', {offer: newOffer})
        .then( (response) => {
            this.setState({
                offers : response.data
            })
        })
    }
    handleLogOut = () => {
        this.props.appContext.showLoginPage()
    }

    componentDidMount () {
        // console.log(localStorage.getItem("token"));
        const config = {
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        }
        Axios.get(apiBaseUrl + '/offers', config)
        .then( (response) => {
            this.setState({
                offers : response.data
            })
        })
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleLogOut}>LOG OUT</Button>
                <AddOfferDialog addOffer={this.handleClick}/>
                <OffersTable offers={this.state.offers}/>
            </div>
        )
    }
}

export default OffersPage