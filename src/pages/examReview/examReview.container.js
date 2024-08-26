import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { MainContainer, MainWrapper } from "../../atoms/MainContainer";
import HeaderUI from "../../atoms/Header";
import { TopTitle } from "../../atoms/Title";
import FooterUI from "../../atoms/Footer";
import { useNavigate } from "react-router-dom";

const QuestionCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProblemText = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #333;
`;

const AnswerText = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
  color: #007bff;
`;

const CommentaryText = styled.p`
  font-size: 0.9em;
  color: #6c757d;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Button = styled.button``;

export default function ExamReview() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const URL = import.meta.env.VITE_SERVER_URL;
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/wrong-test`, {
          params: {
            id: "test",
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("에러", error);
      }
    };

    fetchData();
  }, [URL]);

  const onhandleHome = () => {
    nav("/examReview");
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <MainWrapper>
      <HeaderUI />
      <TopTitle>시험 틀린 문제 목록</TopTitle>
      <MainContainer>
        {currentData.map((item, index) => (
          <QuestionCard key={index}>
            <ProblemText>{item.problem}</ProblemText>
            <AnswerText>정답: {item.answer}</AnswerText>
            {item.commentary && (
              <CommentaryText>해설: {item.commentary}</CommentaryText>
            )}
          </QuestionCard>
        ))}
        <Pagination>
          <PageButton
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전
          </PageButton>
          <PageButton
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음
          </PageButton>
        </Pagination>
        <Button onClick={() => onhandleHome()}>홈으로 이동</Button>
      </MainContainer>
      <FooterUI />
    </MainWrapper>
  );
}
