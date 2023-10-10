import { Box, useMediaQuery } from "@mui/material";
import Appbar from "../appbar";
import { useSelector } from "react-redux";
import UserWidget from "../../widgets/UserWidget";
import MyPostWidget from "../../widgets/MyPostWidget";
import PostsWidget from "../../widgets/PostsWidget";
import Friend from "../../components/Friend";
import AdvertWidget from "../../widgets/AdvertWidget";
import FriendListWidget from "../../widgets/FriendListWidget";



const HomePage=()=>{
    const isNonMobileScreens=useMediaQuery("(min-width:1000px)");
    const {_id, picturePath}=useSelector((state)=> state.user);

    return(
        <Box>
            <Appbar/>
            <Box
            width="100%"
            padding="2rem"
            display={isNonMobileScreens? "flex" : "block"}
            justifyContent="space-between"
            gap="0.5rem"
            >
            <Box flexBasis={isNonMobileScreens? "26%" : undefined} >
              <UserWidget userId={_id} picturePath={picturePath} />
            </Box>
            <Box
            flexBasis={isNonMobileScreens? "42%": undefined}
            mt={isNonMobileScreens? undefined : "2rem"}
            >
              <MyPostWidget picturePath={picturePath} />
              <PostsWidget userId={_id} />
            </Box>
            {isNonMobileScreens && <Box flexBasis="26%">
              <AdvertWidget/>
              <Box m="2rem 0" />
              <FriendListWidget userId={_id} />
            </Box> } 
            </Box>
            
        </Box>
        )
    
}

export default HomePage;