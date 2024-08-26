import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { MainContainer, MainWrapper } from "../../atoms/MainContainer";
import HeaderUI from "../../atoms/Header";
import { TopTitle } from "../../atoms/Title";
import FooterUI from "../../atoms/Footer";
import { useNavigate } from "react-router-dom";

const Styled = {
  QuestionCard: styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    &:hover {
      transform: translateY(-5px);
    }
  `,
  ProblemText: styled.h2`
    font-size: 1.4em;
    margin-bottom: 15px;
    color: #222222;
  `,
  AnswerText: styled.p`
    font-size: 1.1em;
    margin-bottom: 15px;
    color: #28a745;
    font-weight: bold;
  `,
  CommentaryText: styled.p`
    font-size: 1em;
    color: #6c757d;
    line-height: 1.5;
  `,
  Pagination: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
  `,
  PageButton: styled.button`
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
  `,
  HomeButton: styled.button`
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
  `,
};

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
          params: { id: "test" },
        });
        setData(response.data);
      } catch (error) {
        console.error("에러", error);
      }
    };
    fetchData();
  }, [URL]);

  const onHandleHome = () => {
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
          <Styled.QuestionCard key={index}>
            <Styled.ProblemText>{item.problem}</Styled.ProblemText>
            <Styled.AnswerText>정답: {item.answer}</Styled.AnswerText>
            {item.commentary && (
              <Styled.CommentaryText>
                해설: {item.commentary}
              </Styled.CommentaryText>
            )}
          </Styled.QuestionCard>
        ))}
        <Styled.Pagination>
          <Styled.PageButton
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전
          </Styled.PageButton>
          <Styled.PageButton
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음
          </Styled.PageButton>
        </Styled.Pagination>
        <Styled.HomeButton onClick={onHandleHome}>
          홈으로 이동
        </Styled.HomeButton>
      </MainContainer>
      <FooterUI />
    </MainWrapper>
  );
}
