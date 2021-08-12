import React from 'react';
import {
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import { Button, Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import components
import Signup from '../../containers/Signup';
import Signin from '../../containers/Signin';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
      width: 300,
      height: 50,
    },
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
  },
  // buttonColor: theme.palette.secondary,
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
                <Button
                  onClick={() => handleRedirect('signin')}
                  variant='contained'
                  color='secondary'

                  fullWidth
                >Log In</Button>
                <Button
                  onClick={() => handleRedirect('signup')}
                  variant='contained'
                  color='secondary'
                  fullWidth
                >Sign Up</Button>
                <Typography>
                  check out my
                    <Link
                    href='https://github.com/adrianromero13/social-thought-MERN' // add this to keys
                    onClick={(e) => e.preventDefault}
                    > code</Link>
                </Typography>
              </Route>
              <Route exact path='/landingpage/signup' component={Signup} />
              <Route exact path='/landingpage/signin' component={Signin} />
            </div>

          </Switch>
        </div>
      </Grid>
    </Grid>
  )
};

export default LandingPage;
