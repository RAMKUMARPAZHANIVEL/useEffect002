import { Card, LinearProgress } from "@mui/material";
const Loader = _ => {
    return(
        <Card style={{paddingTop:"1rem"}}>
          <LinearProgress color="inherit" />
          
        </Card>
        
    );
}

export default Loader