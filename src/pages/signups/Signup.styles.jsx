import styled from "styled-components";

export const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    180deg,
    #ffcec7 0%,
    #fff4cc 66%,
    #fff3c9 69%,
    #ffffff 96%
  );
  cursor: pointer;
`;

export const Sign = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  padding: 10rem;
  background-color: rgba(255, 255, 255, 0.647);
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2);
`;

export const Info = styled.div``;

export const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  width: 90%;
  font-size: 1rem;
  transition: border 0.3s ease;

  &:focus {
    border-color: #2788f9;
    outline: none;
  }
`;

export const Title = styled.div`
  font-size: 3rem;
  color: #000000;
  font-family: "Arial", sans-serif;
  margin-bottom: 1rem;
`;

export const Title1 = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem 0;
`;

export const Select = styled.select`
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  width: 90%;
  font-size: 1rem;
`;

export const Confirm = styled.div`
  display: flex;
`;

export const IdCheck = styled.div`
  margin-left: 10px;
  width: 50%;
`;

export const PwCheck = styled.div`
  margin-left: 10px;
  width: 55%;
`;

export const Pass = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CheckMessage = styled.p`
  color: ${(props) => (props.isError ? "red" : "green")};
  font-size: 0.9rem;
  margin-top: 5px;
`;
