
import React, { Component, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import { apiBaseUrl } from '../constants';
import { TextField } from '@material-ui/core';
import Register from './Register';
import OffersPage from './OffersPage';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Login(props) {
  const classes = useStyles()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = function () {
    let uploadScreen = <Register key={"offerPage"} appContext={props.appContext} />
    props.appContext.setState({ uploadScreen })
  }
  const handleClick = function () {
    let payload = {
      "email": email,
      "password": password
    }

    Axios.post(apiBaseUrl + '/login', payload)
      .then((response) => {
        if (response.status === 200) {
          const token = response.data
          localStorage.setItem('token', token)
          let uploadScreen = <OffersPage key={"offerPage"} appContext={props.appContext} />
          props.appContext.setState({ uploadScreen })
        }
        else if (response.status == 204) {
          console.log("email and password do not match");
          alert("email and password do not match")
        }
        else {
          console.log("email does not exists");
          alert("email does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(event) => setEmail(event.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button fullWidth variant="contained" color="primary" onClick={() => handleClick()}>
            Log In
          </Button>
          <Button className={classes.submit} fullWidth variant="contained" color="primary" onClick={() => handleRegister()}>
            Register
          </Button>
        </form>
      </div>
    </Container>
  )
}
