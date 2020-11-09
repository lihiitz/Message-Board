// import React, { useEffect, useState } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
// import { apiBaseUrl } from '../constants';
// import Axios from 'axios';
// import AddOfferDialog from './AddOfferDialog';
// import ShowMoreDialog from './ShowMoreDialog';
// import { DialogTitle } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import { Input } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     icon: {
//         marginRight: theme.spacing(2),
//     },
//     heroContent: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(8, 0, 6),
//     },
//     heroButtons: {
//         marginTop: theme.spacing(4),
//     },
//     cardGrid: {
//         paddingTop: theme.spacing(8),
//         paddingBottom: theme.spacing(8),
//     },
//     card: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     cardMedia: {
//         paddingTop: '56.25%', // 16:9
//     },
//     cardContent: {
//         flexGrow: 1,
//     },
//     footer: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(6),
//     },
// }));


// export default function OffersPage2(props) {
//     const classes = useStyles()
//     const [offers, setOffers] = useState([])

//     const [open, setOpen] = useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false)
//     }
//     useEffect(() => {
//         const config = {
//             headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
//         }
//         Axios.get(apiBaseUrl + '/offers', config)
//             .then((response) => {
//                 setOffers(response.data)
//             })
//     })

//     const handleNewOffer = (newOffer) => {
//         const config = {
//             headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
//         }
//         Axios.post(apiBaseUrl + '/offer', { offer: newOffer }, config)
//             .then((response) => {
//                 setOffers(response.data)
//             })
//     }

//     const handleLogOut = () => {
//         props.appContext.showLoginPage()
//     }

//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <AppBar position="relative">
//                 <Toolbar>
//                     {/* <CameraIcon className={classes.icon} /> */}
//                     <Button onClick={handleLogOut} variant="contained" color="primary">
//                         Log out
//             </Button>
//                 </Toolbar>
//             </AppBar>
//             <main>
//                 {/* Hero unit */}
//                 <div className={classes.heroContent}>
//                     <Container maxWidth="sm">
//                         <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
//                             Offers
//             </Typography>
//                         <Typography variant="h5" align="center" color="textSecondary" paragraph>
//                             Something short and leading about the collection below—its contents, the creator, etc.
//                             Make it short and sweet, but not too short so folks don&apos;t simply skip over it
//                             entirely.
//             </Typography>
//                         <div className={classes.heroButtons}>
//                             <Grid container spacing={2} justify="center">
//                                 <Grid item>
//                                     <AddOfferDialog addOffer={handleNewOffer} />
//                                 </Grid>
//                                 <Grid item>
//                                     <Button variant="outlined" color="primary">
//                                         Secondary action
//                   </Button>
//                                 </Grid>
//                             </Grid>
//                         </div>
//                     </Container>
//                 </div>
//                 <Container className={classes.cardGrid} maxWidth="md">
//                     {/* End hero unit */}
//                     <Grid container spacing={4}>
//                         {offers.map((offer) => (
//                             <Grid item key={offer.email} xs={12} sm={6} md={4}>
//                                 <Card className={classes.card}>
//                                     <CardMedia
//                                         className={classes.cardMedia}
//                                         image="https://source.unsplash.com/random"
//                                         title="Image title"
//                                     />
//                                     <CardContent className={classes.cardContent}>
//                                         <Typography gutterBottom variant="h5" component="h2">
//                                             {offer.title}
//                                         </Typography>
//                                         <Typography>
//                                             {offer.description}
//                                         </Typography>
//                                     </CardContent>
//                                     <CardActions>
//                                         <Button size="small" color="primary">
//                                             {offer.viewing}
//                                         </Button>
//                                         <Button onClick={handleClickOpen} size="small" color="primary">
//                                             Show more info
//                     </Button>
//                                         <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//                                             <DialogTitle id="form-dialog-title">{offer.title}</DialogTitle>
//                                             <DialogContent>
//                                                 <Typography variant="h5" align="center" color="textSecondary" paragraph>
//                                                     Email: {offer.email}
//                           Phone: {offer.phone}
//                                                 </Typography>
//                                             </DialogContent>
//                                             <DialogActions>
//                                                 <Button onClick={handleClose} color="primary">
//                                                     Cancel
//           </Button>
//                                             </DialogActions>
//                                         </Dialog>
//                                     </CardActions>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Container>
//             </main>
//         </React.Fragment>
//     )
// } 

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
    const [offers, setOffers] = useState([])

    
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
                        {offers.map((offer) => (
                            <Offer key={offer.id} offer ={offer} classes={classes}/>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    )
}     