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

// components
// import { AUTH_USER } from '../../actions/type';
import { Input } from '../../components/Constants';

const useStyles = makeStyles(theme => ({
  root: {
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

const Signin = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (formValues) => {
    try {
      alert(`form submitted: \n ${JSON.stringify(formValues)}`)
    } catch (e) {
      alert(`Error submitting: \n ${(e.typeOf() === 'object') ? JSON.stringify(e) : e}`)
    }
  };

  return (
    <Grid className={classes.root}>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Log In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
        <Input
          inputRef={register('email', { required: true })}
          name='email'
          label='E-mail'
          autoComplete='email'
          control={control}
          defaultValue=''
          rules={{ required: 'E-mail is required' }}
          type='email'
        />
        <Input
          inputRef={register('password', { required: true })}
          name='password'
          type='password'
          label='Password'
          control={control}
          defaultValue=''
          rules={{ required: 'Password is Required' }}
        />
        <Button
          type='submit'
          variant='contained'
          color='secondary'
        >Log In</Button>
      </form>

    </Grid>
  )
};

export default Signin;
