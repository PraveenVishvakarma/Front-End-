import { Box } from "@mui/material";

const Userimage= ({image, size="60px"})=>{
    return(
        <Box width={size} height={size}>
          <img
            style={{objectFit:"cover", borderRadius:"50%"}}
            width={size}
            height={size}
            alt="user"
            src={`https://mern-app-ug33.onrender.com/assets/${image}`}
          />

        </Box>
    )
}

export default Userimage;