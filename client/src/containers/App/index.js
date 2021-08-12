import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import components
import Navigation from '../../components/Navigation';
import Home from '../Home';
import LandingPage from '../../components/LandingPage';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  display: {
    // margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1),
    display: 'flex',
    // height: '100%',
    height: '85vh',
  },
  leftPanel: {
    border: '1px solid green',
    marginRight: '5px',
    // width: '20%',
    minWidth: '10%',
    maxWidth: '20%',
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
          <Route exact path='/'>

          <div className={classes.leftPanel}>
            {/* <Route exact path='/' component={Home} /> */}

          </div>

          <div className={classes.rightPanel}>
            <Route exact path='/' component={Home} />
          </div>
          </Route>
        <Route path='/landingpage' component={LandingPage} />

        </Grid>
      </Switch>
    </Grid>
  )
};

export default App;
