import React, { useState, useRef } from "react";
import axios from "axios";
import CustomButton from "../../component/CustomButton";
import * as S from "./Signup.styles";

const SignUp = ({ onCreate }) => {
  const [Id, setId] = useState("");
  const [checkMessage, setCheckMessage] = useState("");
  const [pass, setPass] = useState("");
  const IdRef = useRef();

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const checkId = async () => {
    if (Id === "") {
      IdRef.current.focus();
      return;
    } else if (Id.length < 6 || Id.length > 20) {
      console.log("fail");
      return;
    } else {
      console.log("success");
    }
    onCreate(Id);
    setId("");
    try {
      const response = await axios.get("http://165.229.125.107:8080/checkId", {
        params: { id: Id },
      });
      if (response.data === "no") {
        setCheckMessage("아이디가 중복됩니다.");
      } else {
        setCheckMessage("사용 가능한 아이디입니다.");
      }
    } catch (error) {
      console.error("중복 검사 요청 중 에러 발생:", error);
      setCheckMessage("중복 검사 중 오류가 발생했습니다.");
    }
  };

  const sign = async () => {
    try {
      const response = await axios.post(`${URL}/signUP`, {
        params: { id: Id, pass: pass },
      });
      if (response.data === "no") {
        setCheckMessage("비밀번호가 같지 않다.");
      } else {
        setCheckMessage("사용 가능한 비밀번호이다.");
      }
    } catch (error) {
      console.error("비밀번호 검사중 오류 발생:", error);
      setCheckMessage("비밀번호 검사중 오류 발생");
    }
  };

  return (
    <S.SignContainer>
      <S.Sign>
        <S.Title>회원가입</S.Title>
        <S.Info>
          <S.Title1>아이디</S.Title1>
          <S.Confirm>
            <S.Input
              ref={IdRef}
              value={Id}
              onChange={onChangeId}
              placeholder="아이디를 입력(6~20자)"
            />
          </S.Confirm>
          <CustomButton onClick={checkId} text={"중복검사"} />
          {checkMessage && <S.CheckMessage>{checkMessage}</S.CheckMessage>}
          <S.Title1>비밀번호</S.Title1>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력(문자,숫자,특수문자포함 4~10)"
          />
          <S.Title1>비밀번호 확인</S.Title1>

          <S.Input type="password" placeholder="비밀번호 재입력" />

          <CustomButton text={"비밀번호 확인"} />
          <S.Title1>관심기사자격증</S.Title1>
          <S.Select name="certificate">
            <option value="">정보처리기사</option>
            <option value="">위험물산업안전기사</option>
            <option value="">전기기사</option>
          </S.Select>
          <CustomButton text={"가입"} onClick={sign} />
        </S.Info>
      </S.Sign>
    </S.SignContainer>
  );
};

export default SignUp;
