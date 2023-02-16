import { Box, Tab, Tabs } from "@mui/material";
import React, { useContext } from "react";
import { FilterContext } from "../App";

function ImageTab() {
  const { tabFilter, setTabFilter, setFilterClass } = useContext(FilterContext);

  const handleChange = (e, newValue) => {
    setTabFilter(newValue);
    if (newValue === "customFilter") {
      setFilterClass("");
    }
  };
  return (
    <Box sx={{ marginBottom: "2rem" }}>
      <Tabs
        TabIndicatorProps={{
          style: {
            backgroundColor: "#D97D54",
          },
        }}
        value={tabFilter}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value="instaFilter" label="Instagram Filters" />
        <Tab value="customFilter" label="Custom your Filter" />
      </Tabs>
    </Box>
  );
}

export default ImageTab;
