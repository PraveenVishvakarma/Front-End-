import { Box, Typography, useTheme } from "@mui/material";
import WidgetWrapper from "../components/WidgetWrapper";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Friend from "../components/Friend";
import { setFriends } from "../state";

const FriendListWidget=({userId})=>{
    const {palette}=useTheme();
    const dispatch=useDispatch();
    const token=useSelector((state)=>state.token);
    const friends=useSelector((state)=> state.user.friends);

    const getFriends=async()=>{
        const response=await fetch(`https://mern-app-ug33.onrender.com/users/${userId}/friends`,{
            method:"GET",
            headers:{Authorization:`Bearer ${token}`},
        });
        const data=await response.json();
        dispatch(setFriends({friends:data}));
    };

    useEffect(()=>{
        getFriends();
    },[]);

    return(
        <WidgetWrapper>
            <Typography color={palette.neutral.dark} variant="h5" sx={{mb:"1.5rem"}}>
                Friend List
            </Typography>
            <Box display="flex" flexDirection="column" gap="1.5rem">
                {friends.map((friend)=>{
                    return(
                  <Friend
                   key={friend._id}
                   friendId={friend._id}
                   name={`${friend.firstName} ${friend.lastName}`}
                   subtitle={friend.occupation}
                   userPicturePath={friend.picturePath}
                   />
                   )


                })}
            </Box>
        </WidgetWrapper>
    )

}

export default FriendListWidget;
