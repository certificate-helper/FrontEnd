import styled from "styled-components";

export const TopTitle = styled.b`
  font-size: 3rem;
  color: transparent;
  background-image: linear-gradient(45deg, #6a5acd, #483d8b);
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  transform: translateX(-15rem);
  padding: rem 0;
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 0;
  animation: slideIn 1s forwards;
  margin-bottom: 5rem;
  @keyframes slideIn {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
