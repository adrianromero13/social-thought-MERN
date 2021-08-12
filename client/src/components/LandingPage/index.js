import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    // alignItems: 'center',
    display: 'flex',
  },
  rightPanel: {
    flexGrow: 1,
    display: 'flex',
    border: '1px solid blue',
    // position: 'relative',
  },
  centeredContent: {
    // width: '50%',
    // height: 'auto',
    // margin: '0 auto',
    // textAlign: 'center',
    // alignSelf: 'center',
    // border: '3px solid green',
    // position: 'relative',
    // top: '40%',
    // display: 'table-cell',
    // margin: 'auto',
    // verticalAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    // justifyContent: 'center',
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid className={classes.display}>
        <div className={classes.leftPanel}>
          <div className={classes.centeredContent}>
            <Typography>
              Hello
            </Typography>
          </div>
        </div>
        <div className={classes.rightPanel}>
          <div className={classes.centeredContent}>
            
            <Signup />
          </div>
        </div>
      </Grid>
    </Grid>
  )
};

export default LandingPage;
