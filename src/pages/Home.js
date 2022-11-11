
import { Box } from "@mui/system";
import useLocalStorage from "use-local-storage";
import FavouriteMovieCard from "../components/favouriteMovieCard";
import Grid from "@mui/material/Grid";


const Home = () => {
  const [favorites] = useLocalStorage("favorites", "[]");
    return(
      
      <>
       <Box p={4}>
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {JSON.parse(favorites).map((e,i) => {
            return(
              <Grid item xs={2} sm={4} md={4}>
                <FavouriteMovieCard id={e} key={i}/>
              </Grid>

            );
          })}
        </Grid>
       </Box>
      </>
    
    );
}

export default Home