import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Title from '../shared/Title'
import { Grid } from "@mui/material"
import ChatList from '../specific/ChatList'
import { sampleChats } from '../constants/sampleData'

const AppLayout = (OldComponent) => {
    return function EnhancedComponent(props) {

        return (<>
            <Title />
            <Header />
            <Grid container height={"calc(100vh-4rem)"}>

                <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                        display: { xs: "none", md: "block" }
                    }}
                    height={"100%"}>
                    <ChatList chats={sampleChats} chatId={"2"} onlineUsers={["1","2"]}/>
                </Grid>

                <Grid xs={12} sm={8} md={5} lg={6} item height={"100%"} bgcolor="primary.main">
                    <OldComponent {...props} arya="asds" />
                </Grid>

                <Grid
                    item
                    md={4}
                    lg={3}
                    sx={{
                        display: { xs: "none", md: "block" },
                        padding: "2rem",
                        bgcolor: "rgba(0,0,0,0.85)"
                    }}
                    height={"100%"} >
                    Third
                </Grid>

            </Grid>
        </>)
    }
}

export default AppLayout
