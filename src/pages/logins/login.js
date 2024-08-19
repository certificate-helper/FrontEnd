import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.get("http://172.30.1.58:8080/signIn", {
        params: {
          id,
          pass,
        },
      });

      if (response.data === "ok") {
        setMessage("로그인 성공");
        // 로그인 성공 후 추가 작업 (예: 페이지 이동)
      } else {
        setMessage("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 요청 중 오류 발생:", error);
      setMessage("로그인 중 오류 발생");
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleSignIn}>로그인</button>
      <p>{message}</p>
    </div>
  );
};

export default SignIn;
