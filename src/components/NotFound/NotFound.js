import { Grid,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
const NotFound = () => {
    const [error,setError] = useState(false)

    useEffect(() => {
      
        setTimeout(() => {
            setError(true)
        },2000)
    },[error])
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
        <Typography sx={{fontSize:"50px",fontWeight:"bold"}}>
            Aradığınız sayfa bulunamadı...
        </Typography>
        <Typography sx={{fontSize:"30px"}}>
            Anasayfaya yönlendiriliyorsunuz.
        </Typography>
    </Grid>
  )
}

export default NotFound