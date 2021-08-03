import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import components
import Navigation from '../../components/Navigation';
import Home from '../Home';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  display: {
    // margin: `${theme.spacing(1)}px auto`,
    // padding: theme.spacing(2),
    display: 'flex',
    // height: '100%',
  },
  leftPanel: {
    border: '1px solid green',
    marginRight: '5px',
  },
  rightPanel: {
    border: "1px solid blue",
    flexGrow: 1,

  }
}));

const App = () => {
  const classes = useStyles();
  return (
    // <div className={classes.root}>

    <Grid className={classes.root}>
        <Navigation />

      <Switch>
        <Grid className={classes.display}>
          <div className={classes.leftPanel}>
            <Route exact path='/' component={Home} />
          </div>

          <div className={classes.rightPanel}>
            <Route exact path='/' component={Home} />
          </div>

        </Grid>
      </Switch>
    </Grid>
  )
};

export default App;
