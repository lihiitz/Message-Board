
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { apiBaseUrl } from '../constants';
import Axios from 'axios';
import { DialogTitle } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export default function Offer(props){
    const [open, setOpen] = useState(false);

    const handleClickOpen = (id) => {
        setOpen(true)
            const config = {
              headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
          }

              Axios.post(apiBaseUrl + `/viewingUp/${id}`, {}, config)

    };

    const handleClose = (id) => {
        setOpen(false)
        const config = {
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        }
        Axios.post(apiBaseUrl + `/viewingDown/${id}`, {}, config)

    }
        return (
<Grid item key={props.offer.id} xs={12} sm={6} md={4}>
<Card className={props.classes.card}>
    <CardMedia
        className={props.classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
    />
    <CardContent className={props.classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
            {props.offer.title}
        </Typography>
        <Typography>
            {props.offer.description}
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small" color="primary">
            {props.offer.viewing}
        </Button>
        <Button onClick={() => handleClickOpen(props.offer.id)} size="small" color="primary">
            Show more info
</Button>
        <Dialog open={open} onClose={() => handleClose(props.offer.id)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{props.offer.title}</DialogTitle>
            <DialogContent>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    <a onClick={`javascript:window.open('mailto:${props.offer.email}', 'mail');event.preventDefault()`} href={`mailto:${props.offer.email}`}>
                        {props.offer.email}
                    </a>
                    <br/>
                    Phone: {props.offer.phone}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose(props.offer.id)} color="primary">
                    Cancel
</Button>
            </DialogActions>
        </Dialog>
    </CardActions>
</Card>
</Grid>
        )
    }


