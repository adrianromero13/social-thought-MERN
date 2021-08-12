import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Avatar,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

// import components 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
      width: 300,
      height: 50,
    },
    '& .MuiTypography-root': {
      padding: theme.spacing(2),
    },
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (formValues) => {
    try {
      alert(`formvalues submitted: \n ${JSON.stringify(formValues)}`);
    } catch (e) {
      alert(`Error submitting: ${(e.typeOf() === 'object') ? JSON.stringify(e) : e}`)
    }
  };

  return (
    <Grid className={classes.root}>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Sign up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
        <Button type='submit'>Sign Up</Button>
      </form>
    </Grid>
  )
};

export default Signup;
