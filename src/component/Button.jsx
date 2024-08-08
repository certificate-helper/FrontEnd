import "./Button.css";
import { useNavigate } from "react-router-dom";
const Button = ({ text, onClick }) => {
  const nav = useNavigate();
  return (
    <button onClick={onClick} className="btn">
      {text}
    </button>
  );
};

export default Button;
