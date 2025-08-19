import React from 'react'
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from 'react-redux';
import Navbar from "scenes/navbar";
// import UserWidget from "scenes/widgets/UserWidget";
// import PostsWidget from "scenes/widgets/PostsWidget";
// import AdvertWidget from "scenes/widgets/AdvertWidgest";
// import FriendListWidget from "scenes/widgets/FriendListWidget";

const HomePage = () => {
    // const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    // const { _id, picturePath } = useSelector((state) => state.user);
    
    return (
        <Box>
            <Navbar />
        </Box>
    )
}

export default HomePage