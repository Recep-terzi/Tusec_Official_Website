import { Grid,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
const NotFound = () => {
    const [error,setError] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            setError(true)
            navigate('/')
        },2000)
    },[])
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