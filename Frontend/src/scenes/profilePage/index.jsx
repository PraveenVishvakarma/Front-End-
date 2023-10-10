import { Box, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Appbar from "../appbar";
import MyPostWidget from "../../widgets/MyPostWidget";
import FriendListWidget from "../../widgets/FriendListWidget";
import PostsWidget from "../../widgets/PostsWidget";
import UserWidget from "../../widgets/UserWidget";

const ProfilePage=()=>{
    const [user, setUser]=useState(null);
    const {userId}=useParams();
    const token=useSelector((state)=>state.token);
    const isNonMobileScreens=useMediaQuery("(min-width:1000px)");

    const getUser= async ()=>{
        const response=await fetch(`https://mern-app-ug33.onrender.com/users/${userId}`,{
            method:"GET",
            headers:{Authorization:`Bearer ${token}`},
        })

        const data=await response.json();
        setUser(data);
    };

    useEffect(()=>{
        getUser();
    },[]);

    if(!user) return null;
    return <Box>
        <Appbar/>
        <Box
            width="100%"
            padding="2rem"
            display={isNonMobileScreens? "flex" : "block"}
            justifyContent="centre"
            gap="2rem"
            >
            <Box flexBasis={isNonMobileScreens? "26%" : undefined} >
              <UserWidget userId={userId} picturePath={user.picturePath} />
              <FriendListWidget userId={userId} />
            </Box>
            <Box
            flexBasis={isNonMobileScreens? "42%": undefined}
            mt={isNonMobileScreens? undefined : "2rem"}
            >
              <MyPostWidget picturePath={user.picturePath} />
              <PostsWidget userId={userId} />
            </Box>
            </Box>
    </Box>
    
}

export default ProfilePage;