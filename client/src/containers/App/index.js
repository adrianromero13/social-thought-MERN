import React from 'react';
import { Grid, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// import components

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
// }));

const App = () => {
  // const classes = useStyles();
  return (
    <Grid>
      <Typography component='h1' variant='h6'>
        Hello World!
      </Typography>
    </Grid>
  )
};

export default App;
