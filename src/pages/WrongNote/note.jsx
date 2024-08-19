import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./note.css";
import axios from "axios";

const Note = () => {
  const navigate = useNavigate();
  const [mistakes, setMistakes] = useState([]); // 오답 목록을 저장할 상태

  useEffect(() => {
    const fetchMistakes = async () => {
      try {
        // 서버에서 오답 목록 데이터를 가져옵니다.
        const response = await axios.get(
          "http://165.229.125.137:8080/wrongQuiz",
          {
            params: { id: "test" },
          }
        );
        setMistakes(response.data); // 가져온 데이터를 상태에 저장합니다.
      } catch (error) {
        console.error("오답 데이터를 가져오는 중 오류 발생", error);
      }
    };

    fetchMistakes(); // 컴포넌트가 로드될 때 오답 데이터를 가져옵니다.
  }, []);

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 돌아갑니다.
  };

  return (
    <div className="noteWrapper">
      <div className="headerBar showHeaderBar">오답 노트</div>
      <div className="noteContainer">
        <div className="noteTitle">오답 목록</div>
        {mistakes.length > 0 ? (
          <ul className="noteList">
            {mistakes.map((mistake, index) => (
              <li key={index} className="noteItem">
                <div className="noteQuestion">
                  {index + 1}번 문제: {mistake.problem}
                </div>
                <div className="noteCommentary">해설: {mistake.commentary}</div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="noErrors">오답이 없습니다!</div>
        )}
        <button className="backButton" onClick={handleBack}>
          돌아가기
        </button>
      </div>
    </div>
  );
};

export default Note;
