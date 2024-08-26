import styled from "styled-components";

export const QuestionCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProblemText = styled.h2`
  font-size: 1.4em;
  margin-bottom: 15px;
  color: #222222;
`;

export const AnswerText = styled.p`
  font-size: 1.1em;
  margin-bottom: 15px;
  color: #28a745;
  font-weight: bold;
`;

export const CommentaryText = styled.p`
  font-size: 1em;
  color: #6c757d;
  line-height: 1.5;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const PageButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  background-color: #17a2b8;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 30px;
  transition: background-color 0.3s;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #117a8b;
  }
`;
