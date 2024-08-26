import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./note.css";
import axios from "axios";
import { TopTitle } from "../../atoms/Title";
import HeaderUI from "../../atoms/Header";
import { MainContainer, MainWrapper } from "../../atoms/MainContainer";
import FooterUI from "../../atoms/Footer";

const Note = () => {
  const nav = useNavigate();
  const [mistakes, setMistakes] = useState([]); // 오답 목록을 저장할 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호를 저장할 상태
  const itemsPerPage = 5; // 한 페이지에 표시할 오답 개수
  const URL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const fetchMistakes = async () => {
      try {
        // 서버에서 오답 목록 데이터를 가져옵니다.
        const response = await axios.get(`${URL}/wrongQuiz`, {
          params: { id: "test" },
        });
        setMistakes(response.data); // 가져온 데이터를 상태에 저장합니다.
      } catch (error) {
        console.error("오답 데이터를 가져오는 중 오류 발생", error);
      }
    };

    fetchMistakes(); // 컴포넌트가 로드될 때 오답 데이터를 가져옵니다.
  }, []);

  const handleBack = () => {
    nav("/home"); // 이전 페이지로 돌아갑니다.
  };

  // 현재 페이지에 표시할 오답 항목을 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMistakes = mistakes.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 전환 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 총 페이지 수 계산
  const totalPages = Math.ceil(mistakes.length / itemsPerPage);

  return (
    <MainWrapper>
      <HeaderUI />
      <MainContainer>
        <TopTitle>오답노트</TopTitle>
        <div className="noteContainer">
          <div className="noteTitle">오답 목록</div>
          {currentMistakes.length > 0 ? (
            <ul className="noteList">
              {currentMistakes.map((mistake, index) => (
                <li key={index} className="noteItem">
                  <div className="noteQuestion">
                    {indexOfFirstItem + index + 1}번 문제: {mistake.problem}
                  </div>
                  <div className="noteCommentary">
                    해설: {mistake.commentary}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="noErrors">오답이 없습니다!</div>
          )}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`pageButton ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button className="backButton" onClick={handleBack}>
            홈으로 이동
          </button>
        </div>
      </MainContainer>
      <FooterUI />
    </MainWrapper>
  );
};

export default Note;
