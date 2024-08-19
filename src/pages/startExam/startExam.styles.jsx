import styled from "styled-components";

export const AllContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  transition: all 0.3s ease-in-out;
  border: 0.5rem solid #fff;
  border-radius: 1.5rem;
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  padding: 5rem 2rem;
  box-shadow: 4px 4px 10px #b7aaaa, -4px -4px 10px #ffffff;
`;
export const NumberWrapper = styled.div`
  width: 10rem;

  border-radius: 1rem;
  border: 2px solid black;
  padding: 1rem;
  margin: 1rem;
`;
export const Number = styled.div`
  margin: 0 1rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  background-color: #f0f0f0;
  color: #333;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const AnswerInput = styled.input`
  width: 40rem;
  height: 5rem;
`;
export const PreviousButton = styled(Button)`
  margin-right: 10px;
`;

export const NextButton = styled(Button)`
  margin-left: 10px;
`;

export const SubmitButton = styled(Button)`
  margin: 20px;
`;

export const NumButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NumButton = styled.button`
  background-color: #4885ff;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #4885ff;
    transform: scale(1.05);
  }

  &:active {
    background-color: #4885ff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #4885ff;
  }
`;
