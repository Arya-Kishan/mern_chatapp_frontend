import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import { CameraAlt as CameraAltIcon } from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp"
import { usernameValidator } from '../utils/Validator'

const Login = () => {

  const [isLogin, setIsLogin] = useState(true)

  const togglelogin = () => setIsLogin(!isLogin);

  const name = useInputValidation("",);
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword()
  const avatar = useFileHandler("single")

  const handleLogin = (e) => {
    e.preventDefault()
  }

  const handleSignup = (e) => {
    e.preventDefault()
  }

  return (
    <Container component={"main"} maxWidth="xs" sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {
          isLogin
            ?
            <>

              <Typography variant='h5'>Login</Typography>

              <form onSubmit={handleLogin}>

                <TextField
                  required
                  fullWidth
                  label="username"
                  margin='normal'
                  variant='outlined'
                  value={username.value}
                  onChange={username.changeHandler}
                />

                <TextField
                  required
                  fullWidth
                  label="password"
                  type='password'
                  margin='normal'
                  variant='outlined'
                  value={password.value}
                  onChange={password.changeHandler}
                />

                <Button variant='contained' sx={{ marginTop: '1rem' }} color='primary' type="submit" fullWidth>LOGIN</Button>

                <Typography textAlign={"center"} sx={{ marginTop: "1rem" }}>OR</Typography>

                <Button variant='text' onClick={togglelogin} fullWidth sx={{ marginTop: "1rem" }}>SIGNUP INSTEAD</Button>

              </form>
            </>
            :
            <>

              <Typography variant='h5'>Sign Up</Typography>

              <form onSubmit={handleSignup}>

                <Stack position={"relative"} width={"10rem"} margin={"auto"} >

                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain"
                    }}
                    src={avatar.preview}
                  />

                  {
                    avatar.error && (
                      <Typography color="error" variant='caption'>
                        {avatar.error}
                      </Typography>
                    )
                  }

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)"
                      }
                    }}
                    component="label"
                  >
                    <CameraAltIcon />
                    <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                  </IconButton>

                </Stack>

                <TextField
                  required
                  fullWidth
                  label="name"
                  margin='normal'
                  variant='outlined'
                  value={name.value}
                  onChange={name.changeHandler}
                />

                <TextField
                  required
                  fullWidth
                  label="bio"
                  margin='normal'
                  variant='outlined'
                  value={bio.value}
                  onChange={bio.changeHandler}
                />

                <TextField
                  required
                  fullWidth
                  label="username"
                  margin='normal'
                  variant='outlined'
                  value={username.value}
                  onChange={username.changeHandler}
                />

                {
                  username.error && (
                    <Typography color="error" variant='caption'>
                      {username.error}
                    </Typography>
                  )
                }

                <TextField
                  required
                  fullWidth
                  label="password"
                  type='password'
                  margin='normal'
                  variant='outlined'
                  value={password.value}
                  onChange={password.changeHandler}
                />

                {
                  password.error && (
                    <Typography color="error" variant='caption'>
                      {password.error}
                    </Typography>
                  )
                }

                <Button variant='contained' sx={{ marginTop: '1rem' }} color='primary' type="submit" fullWidth>SIGN UP</Button>

                <Typography textAlign={"center"} sx={{ marginTop: "1rem" }}>OR</Typography>

                <Button variant='text' onClick={togglelogin} fullWidth sx={{ marginTop: "1rem" }}>LOGIN INSTEAD</Button>

              </form>
            </>
        }
      </Paper>
    </Container>
  )
}

export default Login
