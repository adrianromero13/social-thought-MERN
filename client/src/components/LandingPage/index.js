import React from 'react';
import {
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import components
import Signup from '../../containers/Signup';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  display: {
    display: 'flex',
    height: '90vh',
  },
  leftPanel: {
    border: '1px solid green',
    marginRight: '5px',
    width: '55%',
    display: 'flex',
  },
  rightPanel: {
    flexGrow: 1,
    display: 'flex',
    border: '1px solid blue',
  },
  centeredContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();
  
  const handleRedirect = (location) => {
    history.push(`/landingpage/${location}`);
  }
  return (
    <Grid className={classes.root}>
      <Grid className={classes.display}>
        <div className={classes.leftPanel}>
          <div className={classes.centeredContent}>
            <Typography>
              This where the logo be
            </Typography>
          </div>
        </div>
        <div className={classes.rightPanel}>
          <Switch>

            <div className={classes.centeredContent}>
              <Route exact path='/landingpage'>
                <Button onClick={() => handleRedirect('signin')}>Log In</Button>
                <Button onClick={() => handleRedirect('signup')}>Sign Up</Button>
                <p>check out my code</p>
              </Route>
              <Route exact path='/landingpage/signup' component={Signup} />
            </div>

          </Switch>
        </div>
      </Grid>
    </Grid>
  )
};

export default LandingPage;
