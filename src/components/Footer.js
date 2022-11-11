import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const Footer = () => {
    return(
        <Stack>
            <Typography variant="h6" align="center" >
              Devloped By Ramkumar & team.
            </Typography >
            <Typography variant="h6" align="center" >
              ©Copyright
            </Typography>
            <Typography variant="h6" align="center" >
              <a href="#" target="_blank">
                Source Code
              </a>
            </Typography>
          
            </Stack>   
        
    );
}

export default Footer