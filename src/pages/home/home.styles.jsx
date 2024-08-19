import styled from "styled-components";

export const BannerContainer = styled.div`
  background: linear-gradient(45deg, #ff6ec4, #7873f5);
  padding: 20px;
  margin: 1rem auto;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: "Arial", sans-serif;
  color: white;
  font-size: 30px;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  width: 80%;
  height: 6rem;
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0)
    );
    transform: rotate(45deg);
    animation: rotate 6s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const PieContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  padding-top: 1rem;
  transition: all 0.3s ease-in-out;
  border: 0.5rem solid #fff;
  border-radius: 1.5rem;
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  padding: 5rem 2rem;
  box-shadow: 4px 4px 10px #b7aaaa, -4px -4px 10px #ffffff;
`;

export const HighlightedText = styled.span`
  color: #ffe066;
  text-shadow: 0 0 10px rgba(255, 224, 102, 0.7),
    0 0 20px rgba(255, 224, 102, 0.5);
  font-size: 1.2em;
`;

export const Tag = styled.div`
  font-size: 20px;
  margin-top: 1rem;
`;
export const HomeImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const TopBoxContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
  width: 80rem;
  height: 40rem;
  font-size: var(--single-line-body-base-size);
`;

export const TopBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBox = styled.div`
  background-color: #f9f9f9;
  border-radius: 20px;
  padding: 20px;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
  font-size: 18px;
  color: #333;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 18rem;
  height: 30rem;

  &:hover {
    background: linear-gradient(180deg, #fff 22.01%, #2788f9 100%);
  }
`;

export const TopBoxBtnContainer = styled.div`
  opacity: 0;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
`;

export const TopBoxButton = styled.button`
  border-radius: var(--corner-extra-small);
  border: none;
  background-color: var(--color-gray-100);
  width: 19rem;
  height: 4rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--space-300);
  box-sizing: border-box;
  margin-bottom: 0.6rem;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: aliceblue;
    color: black;
  }
  &:active {
    transform: scale(95%);
    transform: translateY(0.1rem);
    transition: all 0.2s ease-in-out;
  }
`;

export const TopBoxButton2 = styled.button`
  border-radius: var(--corner-extra-small) var(--corner-extra-small)
    var(--number15) var(--number15);
  border: none;
  background-color: var(--color-gray-100);
  width: 19rem;
  height: 4rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--space-300);
  box-sizing: border-box;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: black;
    background-color: aliceblue;
    transition: all 0.2s ease-in-out;
  }
  &:active {
    transform: scale(95%);
    transform: translateY(0.1rem);
    transition: all 0.2s ease-in-out;
  }
`;
export const TopBoxText = styled.b`
  font-size: 1.5rem;
  line-height: 3rem;
  color: var(--color-black);
  margin-top: 1rem;
`;
/* ============================================================================================================================================================================================*/

export const Row = styled.div`
  height: 3rem;
`;

export const UnderTitle = styled.b`
  font-size: 3rem;
  color: var(--color-darkslateblue);
  transform: translateX(-10rem);
  padding: 2rem 0;
`;

export const Post = styled.div`
  position: relative;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.3);
  border-radius: var(--br-mini);
  border: 1px solid rgba(154, 154, 154, 0.1);
  box-sizing: border-box;
  width: 70%;
  height: 25rem;
  margin-bottom: 15rem;

  font-size: var(--font-size-xs);
  color: var(--color-black);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5),
    rgba(39, 136, 249, 0.5)
  );
`;

export const PostContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const LabelWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;

export const LabelText = styled.button`
  border-radius: var(--br-11xs);
  background-color: var(--color-gainsboro-100);
  border: 0.5px solid var(--color-gray-200);
  position: relative;
  line-height: 1rem;
  padding: var(--padding-11xs) var(--padding-9xs);
`;

export const Name = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SubName = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 1rem;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
