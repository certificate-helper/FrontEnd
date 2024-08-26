import StartExamUI from "./startExam.presenter";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StartExam() {
  const URL = import.meta.env.VITE_SERVER_URL;
  const [num, setNum] = useState(1);
  const [answer, setAnswer] = useState(Array(20).fill(""));
  const [exam, setExam] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    handleGetExam(num);
  }, [num]);

  const handleGetExam = async (num) => {
    if (num <= 20) {
      try {
        const response = await axios.get(`${URL}/do-exam`, {
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
      const response = await axios.post(`${URL}/check-exam-answer`, {
        id: "test",
        // eslint-disable-next-line no-undef
        answer: array[num],
        num,
      });
      console.log(answer, num, "checking answer:", response);
    } catch (error) {
      console.error(answer, num, "Error checking answer:", error);
    }
  };

  useEffect(() => {
    if (num >= 0 && num < answer.length) {
      setAnswer((prevAnswers) => {
        const newAnswers = [...prevAnswers];
        newAnswers[num] = prevAnswers[num];
        return newAnswers;
      });
    }
  }, [num]); // useState는 비동기임을 명심하라.

  const onClickToCountUp = () => {
    if (num < 20) {
      setNum((prevNum) => prevNum + 1);
      handleGetExam();
    } else {
      nav("/note");
    }
  };

  const onClickToCountDown = () => {
    if (num > 0) {
      setNum((prevNum) => prevNum - 1);
      handleGetExam();
    }
  };
  const handleButtonClick = (number) => {
    setNum(number);
    handleGetExam();
  };

  // 1. 배열이나 객체를 업데이트 알 경우, 기존 배열/객체를 직접 수정하는 대신, 새로운 객체를 만들어서 새 객체에 변화를 주어야 한다. 즉, 배열의 원본 데이터를 훼손하지 않는 방향으로 코드를 작성함이 좋다.

  // 2. spread 사용하여 불변성을 지킨다. 리엑트 컴포넌트에서 상태가 업데이트됨을 감지하고 리렌더랭이 진행되기 때문. 리렌더링 시 virtual Dom에서 이전 컴포넌트와 새 컴포넌트를 비교하는데, 기존 배열을 spread 없이 직접 수정하게 되면 이전 컴포넌트와 동일한 상태라 인식하기에 (true), 컴포넌트를 통한 업데이트가 일어나지 않는다.

  //spread란 원본을 수정하지 않고 값을 복사하는 데 사용되는 문법이다. ( 수정 불가는 첫 번째 수준의 요소에 한정) 원본품과 복사품의 주소값이 다르게 된다. 원본품을 바꿔도 spread 복사품의 값은 바뀌지 않는다. 그러나, 얕은 복사를 수행하기에, spread 복사품의 중첩 구조(객체 내 배열의 값)는 여전히 원본품과 같은 참조를 공유한다. 해당 값들은 원본품이 바뀌면 같이 변경된다는 뜻이다.

  // 3.answer 배열을 생성해 각 번호에 대입한다. api도 수정.

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
