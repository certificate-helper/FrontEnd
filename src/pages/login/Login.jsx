import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../component/CustomButton";
import axios from "axios";

const Login = () => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();
  const URL = import.meta.env.VITE_SERVER_URL;

  const handleLogin = async () => {
    try {
      const response = await axios.get(`${URL}/signIn`, {
        params: {
          id,
          pass,
        },
      });

      if (response.data === "ok") {
        nav("/home");
      } else {
        alert("로그인 실패: ID나 비밀번호를 확인하세요.");
      }
    } catch (error) {
      console.error("로그인 중 오류가 발생했습니다.", error);
    }
    sessionStorage.setItem("id", JSON.stringify(id));
  };

  return (
    <div className="LoginContainer">
      <div className="Login">
        <div className="Title">
          <h1>LOGIN</h1>
        </div>
        <div className="Info">
          <div className="IdInfo">
            <label>ID</label>
            <input
              type="text"
              placeholder="ID를 입력해주세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="PwInfo">
            <label>PW</label>
            <input
              type="password"
              placeholder="PW를 입력해주세요"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="BtnWrap">
            <Button variant="contained" text={"로그인"} onClick={handleLogin} />
            <Button onClick={() => nav(`/signup`)} text={"회원가입"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
