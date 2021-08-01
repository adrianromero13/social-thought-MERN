import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import components
import Navigation from '../../components/Navigation';
import Home from '../Home';

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
      <Grid item xs={12}>
        <Navigation />
      </Grid>
      <Grid className={classes.display}>
        <Switch>
          <Route exact path='/' component={Home} />

        </Switch>
      </Grid>
    </div>
  )
};

export default App;
