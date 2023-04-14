import { React } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Business from "./Business";


const Businesses = ({ businesses }) => {
  return (
    <div className="businesses">
      {businesses.length === 0 ? (
        <div>
         No business with this name found
        </div>
      ) : (
        <Box sx={{ flexGrow: 1, padding: "0" }}>
          <Grid container columnSpacing={3} rowSpacing={6}>
            {businesses?.map((business, _) => (
              <Grid item xs={12} md={4}  key={_}>
                  <div>
                    <Business business={business}/>
                  </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default Businesses;
