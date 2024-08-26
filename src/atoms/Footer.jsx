import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

// 글로벌 스타일 정의
const GlobalStyle = createGlobalStyle`
  @keyframes backgroundGlow {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

export default function FooterUI() {
  const nav = useNavigate();
  return (
    <>
      <GlobalStyle />
      <Footer>
        <Left>
          <FooterText>자격증헬퍼</FooterText>
          <FooterText>윤여정 / 정현규 / 조승빈 / 최정현</FooterText>
        </Left>
        <Middle>
          <FooterText>contect Us</FooterText>
          <MiddleText>certificatehelper@google.com</MiddleText>
          <FooterText>github</FooterText>
          <MiddleText>github.com/certificate-helper</MiddleText>
        </Middle>
        <ButtonContainer>
          <Wrapper1>
            <FooterText>기능</FooterText>
            <Wrapper2>
              <FooterButton onClick={() => nav("/quiz")}>퀴즈</FooterButton>
              <FooterButton onClick={() => nav("/exam")}>시험보기</FooterButton>
              <FooterButton onClick={() => nav("/vocab")}>단어장</FooterButton>
              <FooterButton onClick={() => nav("/note")}>오답노트</FooterButton>
            </Wrapper2>
          </Wrapper1>
          <Wrapper1>
            <FooterText>소개</FooterText>
            <Wrapper2>
              <FooterButton onClick={() => nav("/home")}>홈화면</FooterButton>
              <FooterButton onClick={() => nav("/")}>About Us</FooterButton>
            </Wrapper2>
          </Wrapper1>
        </ButtonContainer>
      </Footer>
    </>
  );
}

export const MiddleText = styled.div`
  margin-bottom: 1rem;
`;
export const Wrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Left = styled.div``;
export const Middle = styled.div``;
export const Footer = styled.div`
  height: 20rem;
  background: linear-gradient(45deg, #1f1c2c, #928dab);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  background-size: 200% 200%;
  animation: backgroundGlow 4s ease infinite;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    pointer-events: none;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FooterText = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
  font-family: "Arial", sans-serif;
  animation: textGlow 1.5s infinite alternate;

  @keyframes textGlow {
    0% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
    100% {
      text-shadow: 0 0 15px rgba(255, 255, 255, 1);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const FooterButton = styled.button`
  background: transparent;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, color 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
    );
    transition: transform 0.3s ease;
    transform: translate(-50%, -50%) rotate(45deg);
    z-index: 0;
  }

  &:hover {
    transform: scale(1.08);
  }

  &:active {
    transform: scale(1.05);
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;
