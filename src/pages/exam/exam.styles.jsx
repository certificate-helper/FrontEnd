import styled from "styled-components";

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

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
`;

export const Text = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #483d8b;
  margin: 0 0.5rem;
`;

export const Select = styled.select`
  width: 160px;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  appearance: none;
  background-color: #ffffff;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Select2 = styled(Select)``;

export const IdInput = styled.input`
  width: 160px;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const StartButton = styled.button`
  width: 14rem;
  height: 7rem;
  font-size: 2rem;
  font-weight: 800;
  transition: all 0.3s ease-in-out;
  border: none;
  border-radius: 1rem;
  background: linear-gradient(145deg, #1e90ff, #1c86ee);
  color: white;
  margin: 3rem 0;
  box-shadow: 4px 4px 10px #b7aaaa, -4px -4px 10px #ffffff;

  &:hover {
    transform: scale(1.05) translateY(-6px);
    transition: all 0.2s ease-in-out;
    box-shadow: 6px 6px 15px #b7aaaa, -6px -6px 15px #ffffff;
  }

  &:active {
    transform: scale(0.98, 1.05) translateY(-4px);
    transition: all 0.1s ease-in-out;
    box-shadow: inset 2px 2px 5px #b7aaaa, inset -2px -2px 5px #ffffff;
  }
`;
