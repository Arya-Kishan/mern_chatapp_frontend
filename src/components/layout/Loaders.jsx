import React from 'react'
import { Grid, Skeleton, Stack } from "@mui/material"


export const LayoutLoader = () => {
  return (
    <Grid container height={"calc(100vh-4rem)"} spacing={"1rem"}>

      <Grid
        item
        md={3}
        sm={4}
        sx={{
          display: { xs: "none", md: "block" }
        }}
        height={"100%"}>
        <Skeleton variant='rectangle' height={"100vh"} />
      </Grid>

      <Grid xs={12} sm={8} md={5} lg={6} item height={"100%"}>
        <Stack spacing={"1rem"}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} variant='rectangle' height={"5rem"} />
          ))}
        </Stack>
      </Grid>

      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
          padding: "2rem",
        }}
        height={"100%"} >
        <Skeleton variant='rectangle' height={"100vh"} />
      </Grid>

    </Grid>
  )
}
