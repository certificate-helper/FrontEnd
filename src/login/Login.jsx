// import "./Login.css";
// import { useNavigate } from "react-router-dom";
// import Button from "../component/CustomButton";
// const Login = () => {
//   const nav = useNavigate();
//   return (
//     <div className="LoginContainer">
//       <div className="Login">
//         <div className="Info">
//           <h2>로그인</h2>
//           <div className="IdInfo">
//             <label>ID</label>
//             <input type="text" placeholder="ID를 입력해주세요"></input>
//           </div>

//           <div className="PwInfo">
//             <label>PW</label>
//             <input type="password" placeholder="PW를 입력해주세요"></input>
//           </div>
//           <div className="BtnWrap">
//             <Button variant="contained" text={"로그인"} />
//             <Button onClick={() => nav(`/signup`)} text={"회원가입"}></Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;

import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/CustomButton";
import axios from "axios"; // Axios를 사용하여 HTTP 요청을 보냅니다.

const Login = () => {
  const [id, setId] = useState(""); // ID 상태 관리
  const [pass, setPass] = useState(""); // PW 상태 관리
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      // 백엔드로 로그인 요청 보내기
      const response = await axios.get("/signIn", {
        params: {
          id: id,
          pass: pass,
        },
      });

      if (response.data === "ok") {
        // 로그인 성공 시
        nav("/dashboard"); // 로그인 성공 후 이동할 페이지
      } else {
        // 로그인 실패 시
        alert("로그인 실패: ID나 비밀번호를 확인하세요.");
      }
    } catch (error) {
      console.error("로그인 중 오류가 발생했습니다.", error);
    }
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
              onChange={(e) => setId(e.target.value)} // 입력값을 ID 상태에 저장
            />
          </div>

          <div className="PwInfo">
            <label>PW</label>
            <input
              type="password"
              placeholder="PW를 입력해주세요"
              value={pass}
              onChange={(e) => setPass(e.target.value)} // 입력값을 PW 상태에 저장
            />
          </div>
          <div className="BtnWrap">
            <Button
              variant="contained"
              text={"로그인"}
              onClick={handleLogin} // 로그인 버튼 클릭 시 로그인 처리 함수 호출
            />
            <Button onClick={() => nav(`/signup`)} text={"회원가입"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
