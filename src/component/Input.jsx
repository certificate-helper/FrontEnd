import React from "react";
import { Box, Input } from "@mui/material";

const Inputs = ({ searchWord, onKeyDown, FindWord, placeholder }) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        display: "flex",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Input
        value={searchWord}
        onChange={FindWord}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search input" }}
        fullWidth
      />
    </Box>
  );
};

export default Inputs;
