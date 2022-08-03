import { Grid } from '@mui/material';
import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
        <ReactLoading type={type} color={color} height={'7%'} width={'7%'}/>
    </Grid>
);
 
export default Loading;