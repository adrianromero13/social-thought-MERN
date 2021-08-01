import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import components
import Navigation from '../../components/Navigation';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  display: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
          <Navigation />

      <Grid className={classes.display}>
          <Typography component='h1' variant='h6'>Application</Typography>
      </Grid>
    </div>
  )
};

export default App;
