import { useRouter } from "next/router";
import styled from "styled-components";

export default function HeaderUI() {
  const router = useRouter();

  const onClickToHome = () => {
    router.push("/");
  };
  return (
    <Header>
      <Logo onClick={onClickToHome}>자격증헬퍼</Logo>
      <HeaderText>ID님, 오늘도 힘내세요!</HeaderText>
      <HeaderButton>view profile</HeaderButton>
    </Header>
  );
}

export const Logo = styled.h1`
  position: relative;
  color: white;
  &:before,
  &:after {
    content: "[";
    display: inline-block;
    position: relative;
    top: 1px;
    height: 100%;
    font-size: 1.25em;
    color: tomato;
    transition: all 0.5s ease;
  }

  &:after {
    content: "]";
  }

  &:hover:before {
    transform: translateX(-1rem);
  }

  &:hover:after {
    transform: translateX(1rem);
  }
`;
export const Header = styled.div`
  top: 0rem;
  left: 0rem;
  background: linear-gradient(90deg, var(--color-dodgerblue), white);
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 5rem;
  padding-right: 5rem;
`;

export const HeaderText = styled.div`
  font-size: 2rem;
  color: var(--color-white);
`;

export const HeaderButton = styled.button`
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: var(--br-mini);
  border: 1px solid black;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(102%);
    transition: all 0.3s ease-in-out;
  }
  &:active {
    transform: translateY(2px);
    transition: all 0.3s ease-in-out;
  }
`;
