import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  return (
    <div className="LoginContainer">
      <div className="Login">
        <div className="Info">
          <h2>로그인</h2>
          <div className="IdInfo">
            <label>ID</label>
            <input type="text" placeholder="ID를 입력해주세요"></input>
          </div>

          <div className="PwInfo">
            <label>PW</label>
            <input type="password" placeholder="PW를 입력해주세요"></input>
          </div>
          <div className="BtnWrap">
            <button>로그인</button>
            <button onClick={() => nav(`/signup`)}>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
