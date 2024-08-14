import React, { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [checkIdMessage, setCheckIdMessage] = useState("");
  const [signUpMessage, setSignUpMessage] = useState("");

  const handleCheckId = async () => {
    try {
      const response = await axios.get("http://172.30.1.58:8080/checkId", {
        params: { id },
      });

      if (response.data === "ok") {
        setCheckIdMessage("사용 가능한 아이디입니다.");
      } else {
        setCheckIdMessage("중복된 아이디가 있습니다.");
      }
    } catch (error) {
      console.error("아이디 확인 요청 중 오류 발생:", error);
      setCheckIdMessage("아이디 확인 중 오류 발생");
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "http://172.30.1.58:8080/signUp",
        null,
        {
          params: { id, pass },
        }
      );

      if (response.data === "ok") {
        setSignUpMessage("회원가입 성공");
        // 회원가입 성공 후 추가 작업 (예: 페이지 이동)
      } else {
        setSignUpMessage("회원가입 실패");
      }
    } catch (error) {
      console.error("회원가입 요청 중 오류 발생:", error);
      setSignUpMessage("회원가입 중 오류 발생");
    }
  };

  return (
    <div>
      <h2>아이디 확인 및 회원가입</h2>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleCheckId}>아이디 확인</button>
        <p>{checkIdMessage}</p>
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleSignUp}>회원가입</button>
        <p>{signUpMessage}</p>
      </div>
    </div>
  );
}
