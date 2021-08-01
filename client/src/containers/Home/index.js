import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function appOrientation(props) {
  const { children, windowSize } = props;

  return (
    <>
      {windowSize > 720 ? <>
        {children}
      </>
        :
        <>
          {children}
        </>
      }
    </>
  )
};

const Home = () => {

  return (
    <div>
      <h1>Look at me now</h1>
    </div>
  )
};

export default Home;
