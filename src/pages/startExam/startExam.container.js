import StartExamUI from "./startExam.presenter";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function ResultPage() {
  const endpoint = "http://165.229.125.81:8080";
  const [num, setNum] = useState(1);
  const [answer, setAnswer] = useState("");
  const [exam, setExam] = useState(null);
  const router = useRouter();

  useEffect(() => {
    handleGetExam(num);
  }, [num]);

  const handleGetExam = async (num) => {
    if (num <= 7) {
      try {
        const response = await axios.get(`${endpoint}/do-exam`, {
          params: {
            id: "test",
            num,
          },
        });
        setExam(response.data);
        console.log(answer, "handleGetExam(do-exam)성공:", response);
      } catch (error) {
        console.error(answer, "handleGetExam(do-exam)에러:", error);
      }
    }
  };

  const handleCheckExamAnswer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${endpoint}/check-exam-answer`, {
        id: "test",
        answer,
        num,
      });
      console.log(answer, num, "checking answer:", response);
    } catch (error) {
      console.error(answer, num, "Error checking answer:", error);
    }
  };

  const onClickToCountUp = () => {
    if (num != 8) {
      setNum((prevNum) => prevNum + 1);
      handleGetExam();
    } else {
      router.push("../resultExam/resultExam");
    }
  };

  const onClickToCountDown = () => {
    setNum((prevNum) => prevNum - 1);
    handleGetExam();
  };

  const handleButtonClick = (number) => {
    setNum(number);
    handleGetExam();
  };

  return (
    <StartExamUI
      exam={exam}
      setAnswer={setAnswer}
      answer={answer}
      handleCheckExamAnswer={handleCheckExamAnswer}
      onClickToCountUp={onClickToCountUp}
      onClickToCountDown={onClickToCountDown}
      handleButtonClick={handleButtonClick}
      num={num}
    />
  );
}

export default ResultPage;
