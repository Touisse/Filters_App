import { Grid, Button } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { Box, styled } from "@mui/system";
import { FilterContext } from "../App";
import "../Styles/instagram.css";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const StyleBox = styled(Box)({
  background: "#ddd",
  minHeight: "20rem",
  maxHeight: "100vh",
  marginBottom: "1rem",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});
const StyledImage = styled("img")((props) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  filter: `contrast(${props.customFilter.contrast}%) brightness(${props.customFilter.brightness}%) saturate(${props.customFilter.saturate}%) sepia(${props.customFilter.sepia}%) grayScale(${props.customFilter.gray}%)`,
}));

function ImageFiled() {
  const [imageFile, setImageFile] = useState(null);
  const { filterClass, customFilter } = useContext(FilterContext);
  console.log(filterClass);
  const imgResult = useRef(null);
  const uploadInputRef = useRef(null);
  const handleChangeInput = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleDownLoad = () => {
    domtoimage.toBlob(imgResult.current).then(function (blob) {
      saveAs(blob, "result.png");
    });
  };
  const renderImage = () => (
    <figure style={{ width: "100%", height: "100%" }}>
      <StyledImage
        className={filterClass}
        customFilter={!filterClass && customFilter}
        src={imageFile}
        alt=""
        ref={imgResult}
      />
    </figure>
  );
  return (
    <Grid item xs={12} md={7}>
      <StyleBox
        onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
      >
        {imageFile ? renderImage() : <p>Upload Image</p>}
      </StyleBox>
      <input
        onChange={handleChangeInput}
        ref={uploadInputRef}
        type="file"
        accept="image/*"
        hidden
      />
      <Button
        style={{
          borderRadius: 20,
          backgroundColor: "#21b6ae",
          padding: "18px 36px",
        }}
        disabled={!imageFile}
        variant="contained"
        onClick={handleDownLoad}
        fullWidth
      >
        Download Image
      </Button>
    </Grid>
  );
}

export default ImageFiled;
