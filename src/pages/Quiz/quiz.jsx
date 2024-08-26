import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [quizTotal, setQuizTotal] = useState(0);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noteButtonEnabled, setNoteButtonEnabled] = useState(false);
  const navigate = useNavigate();

  const id = "test";

  // 퀴즈 설정 함수
  const handleQuizSetup = async () => {
    try {
      const response = await axios.post(
        "http://165.229.125.137:8080/setQuiz",
        { id: "test" },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Quiz set successfully");
    } catch (error) {
      console.error("Error setting up quiz", error);
    }
  };

  const fetchQuestion = async (index) => {
    try {
      const response = await axios.get("http://165.229.125.137:8080/doQuiz", {
        params: { id: id, num: (index + 1).toString() },
      });
      setCurrentQuestion(response.data.problem);
    } catch (error) {
      console.error("Error fetching question", error);
    }
  };

  const fetchQuizTotal = async () => {
    try {
      const response = await axios.get(
        "http://165.229.125.137:8080/getQuizNum",
        {
          params: { id: id },
        }
      );
      if (response.data) {
        setQuizTotal(response.data);
        setResults(Array(response.data).fill(null));
        fetchQuestion(0);
      } else {
        console.error("No quiz total data found");
        setQuizTotal(0);
        setResults([]);
      }
    } catch (error) {
      console.error("Error fetching quiz total", error);
    } finally {
      setLoading(false);
    }
  };

  // 퀴즈 초기화
  useEffect(() => {
    const initializeQuiz = async () => {
      await handleQuizSetup(); // 퀴즈 설정
      await fetchQuizTotal(); // 총 문제 수를 가져옴
    };

    initializeQuiz();
  }, []);

  useEffect(() => {
    if (quizTotal > 0 && questionIndex < quizTotal) {
      fetchQuestion(questionIndex);
    }
  }, [questionIndex, quizTotal]);

  useEffect(() => {
    checkIfAllQuestionsAnswered();
  }, [results]);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (answer.trim() === "") {
      setResult("정답을 입력하세요."); // 빈 칸이면 오류 메시지 표시
      return;
    }

    try {
      await axios.post("http://165.229.125.137:8080/checkAnswer", null, {
        params: { id: id, voca: answer, num: (questionIndex + 1).toString() },
      });

      updateResults("✔️");
      setResult("정답을 제출했습니다."); // 결과 메시지 표시
    } catch (error) {
      console.error("Error submitting answer", error);
      setResult("정답 제출 중 오류가 발생했습니다."); // 오류 메시지 표시
    }
  };

  const updateResults = (value) => {
    setResults((prevResults) => {
      const newResults = [...prevResults];
      if (newResults[questionIndex] === null) {
        // 기존에 체크 표시가 없던 경우에만 업데이트
        newResults[questionIndex] = value;
      }
      return newResults;
    });
  };

  const checkIfAllQuestionsAnswered = () => {
    const allAnswered = results.every((result) => result === "✔️");
    setNoteButtonEnabled(allAnswered);
  };

  const handleNext = () => {
    if (questionIndex < quizTotal - 1) {
      setQuestionIndex(questionIndex + 1);
      setAnswer("");
      setResult("");
    }
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setAnswer("");
      setResult("");
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="quizWrapper">
      <div className="resultBar">
        {results.map((res, index) => (
          <div key={index} className="resultItem">
            {index + 1}번 {res}
          </div>
        ))}
      </div>
      <div className="quizContainer">
        {currentQuestion ? (
          <>
            <div className="questionContainer">
              <div className="question">질문: {currentQuestion}</div>
              <form onSubmit={handleSubmit} className="form">
                <input
                  type="text"
                  value={answer}
                  onChange={handleChange}
                  placeholder="정답을 입력하세요"
                  className="input"
                />
                <button type="submit" className="submitButton">
                  제출
                </button>
              </form>
              {result && <div className="result">{result}</div>}
              <div className="navigationButtons">
                <button
                  onClick={handlePrevious}
                  className="navButton previousButton"
                  disabled={questionIndex === 0}
                >
                  이전으로 가기
                </button>
                {questionIndex < quizTotal - 1 ? (
                  <button onClick={handleNext} className="navButton nextButton">
                    다음으로 넘어가기
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/note")} // 오답노트로 이동하는 핸들러
                    className="navButton noteButton"
                    disabled={!noteButtonEnabled}
                  >
                    오답노트 풀기
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div>문제가 로드되지 않았습니다.</div>
        )}
      </div>
    </div>
  );
}
