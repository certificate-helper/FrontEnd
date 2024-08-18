import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Button.css";

const CustomButton = ({ text, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: "#efefef",
        color: "black",
        "&:hover": {
          backgroundColor: "2788f9",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
