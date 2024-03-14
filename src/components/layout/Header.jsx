import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { orange } from '../constants/color'
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon
} from "@mui/icons-material"
const SearchDialog = lazy(() => import("../specific/Search"))
const NotificationsDialog = lazy(() => import("../specific/Notifications"))
const NewGroupDialog = lazy(() => import("../dialogs/NewGroup"))

const Header = () => {

  const navigate = useNavigate()

  const [isMobile, setIsMobile] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [isNewGroup, setisNewGroup] = useState(false)
  const [isNotification, setisNotification] = useState(false)

  const handleMobile = () => {
    console.log('mobile');
    setIsMobile(!isMobile)
  }

  console.log(isSearch);

  const openSearchDialog = () => {
    console.log('open search');
    setIsSearch(!isSearch)
  }

  const openNewGroup = () => {
    console.log('open New Group');
    setisNewGroup(!isNewGroup)
  }

  const openNotification = () => {
    console.log('open Notification');
    setisNotification(!isNotification)
  }

  const navigateToGroup = () => {
    navigate("/group")
  }

  const logoutHandler = () => {
    console.log("logout ");
  }

  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        height={"4rem"}
      >
        <AppBar
          position='static'
          sx={{ bgcolor: orange }}
        >
          <Toolbar>

            <Typography
              variant='h6'
              sx={{
                display: { xs: "none", sm: "block" }
              }}
            >
              Chattu
            </Typography>

            <Box sx={{
              display: { xs: "block", sm: "none" }
            }}>
              <IconButton color='inherit' onClick={handleMobile} ><MenuIcon /></IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box>

              <IconBtn title={"Search"} icon={<SearchIcon />} onClick={openSearchDialog} />

              <IconBtn title={"New Group"} icon={<AddIcon />} onClick={openNewGroup} />

              <IconBtn title={"Manage Groups"} icon={<GroupIcon />} onClick={navigateToGroup} />

              <IconBtn title={"Notifications"} icon={<NotificationsIcon />} onClick={openNotification} />

              <IconBtn title={"Logout"} icon={<LogoutIcon />} onClick={logoutHandler} />

            </Box>

          </Toolbar>
        </AppBar>

      </Box>

      {
        isSearch && (
          <Suspense fallback={<Backdrop open />}>
            <SearchDialog />
          </Suspense>
        )
      }

      {
        isNotification && (
          <Suspense fallback={<Backdrop open />}>
            <NotificationsDialog />
          </Suspense>
        )
      }

      {
        isNewGroup && (
          <Suspense fallback={<Backdrop open />}>
            <NewGroupDialog />
          </Suspense>
        )
      }

    </>
  )
}

const IconBtn = ({ title, icon, onClick }) => {
  return <Tooltip title={title}>
    <IconButton color='inherit' size='large' onClick={onClick} >
      {icon}
    </IconButton>
  </Tooltip>
}

export default Header
