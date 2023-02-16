import "./App.css";
import { Box, Container, Grid } from "@mui/material";
import ImageFiled from "./Components/ImageFiled";
import ImageTab from "./Components/ImageTab";
import InstaFilter from "./Components/InstaFilter";
import CustomFilter from "./Components/CustomFilter";
import { createContext, useState } from "react";

export const FilterContext = createContext();
function App() {
  const [tabFilter, setTabFilter] = useState("instaFilter");
  const [filterClass, setFilterClass] = useState("");
  const [customFilter, setCustomFilter] = useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  });
  const value = {
    tabFilter,
    setTabFilter,
    filterClass,
    setFilterClass,
    customFilter,
    setCustomFilter,
  };
  return (
    <FilterContext.Provider value={value}>
      <Container sx={{ marginTop: "4rem", marginBottom: "4rem" }}>
        <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1>Image Filter</h1>
        </Box>
        <Grid container spacing={10}>
          <ImageFiled />
          <Grid item xs={12} md={5}>
            <ImageTab />
            {tabFilter === "instaFilter" ? <InstaFilter /> : <CustomFilter />}
          </Grid>
        </Grid>
      </Container>
    </FilterContext.Provider>
  );
}

export default App;
