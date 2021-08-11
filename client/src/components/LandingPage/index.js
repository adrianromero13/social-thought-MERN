import React from 'react'; 
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    width: '60%',
  },
  rightPanel: {
    border: '1px solid blue',
    flexGrow: 1,
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid className={classes.display}>
        <div className={classes.leftPanel}>
            Hello
        </div>
        <div className={classes.rightPanel}>
            How are you?
        </div>
      </Grid>
    </Grid>
  )
};

export default LandingPage;
