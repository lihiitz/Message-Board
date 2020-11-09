
import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { apiBaseUrl } from '../constants';
import Axios from 'axios';
import AddOfferDialog from './AddOfferDialog';
import { DialogTitle } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Input } from '@material-ui/core';
import Offer from './Offer';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


export default function OffersPage(props) {
    const classes = useStyles()
    const [offers, setOffers] = useState({})

    
    useEffect(() => {
        const config = {
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        }

        Axios.get(apiBaseUrl + '/offers', config)
        .then((response) => {
            setOffers(response.data)
        })
    })

    const handleNewOffer = (newOffer) => {
        const config = {
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        }
        Axios.post(apiBaseUrl + '/offer', { offer: newOffer }, config)
            .then((response) => {
                setOffers(response.data)
            })
    }

    const handleLogOut = () => {
        props.appContext.showLoginPage()
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    {/* <CameraIcon className={classes.icon} /> */}
                    <Button onClick={handleLogOut}>
                        Log out
            </Button>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Offers
            </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Something short and leading about the collection below—its contents, the creator, etc.
                            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                            entirely.
            </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <AddOfferDialog addOffer={handleNewOffer} />
                                </Grid>
                                <Grid item>
                                    {/* <Button variant="outlined" color="primary">
                                        Secondary action
                  </Button> */}
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {Object.keys(offers).map((k) => (
                            <Offer key={k} offer={offers[k]} classes={classes}/>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    )
}     