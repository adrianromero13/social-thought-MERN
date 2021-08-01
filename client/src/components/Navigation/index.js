import React from 'react';
import { 
  // Grid, 
  AppBar, 
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Navigation = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Typography component='h1' variant='h6'>AppBar</Typography>
    </AppBar>
  )

};

export default Navigation;
