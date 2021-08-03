import React from 'react';
import {
  // Grid,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'inline',
    alignItems: 'center',
  },
  navbar: {
    flexGrow: 1,
    justifyContent: 'center',
    // padding: theme.spacing(1) 
  }
}));

const Navigation = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
        <Typography component='h1' variant='h6'>AppBar</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )

};

export default Navigation;
