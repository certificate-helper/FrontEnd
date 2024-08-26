import { useState } from "react";
import ExamUI from "./exam.presenter";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Exam() {
  const [year, setYear] = useState("");
  const [round, setRound] = useState("");

  const URL = import.meta.env.VITE_SERVER_URL;
  const nav = useNavigate();
  const getId = sessionStorage.getItem("id");
  const onClickToStart = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}/set-exam`, {
        year,
        round,
        id: getId,
      });

      console.log(response);

      nav("/startExam");
    } catch (error) {
      console.error(error);
      console.log(`1: ${year}  2: ${round}  3: ${getId}`);
    }
  };
  return (
    <div>
      <ExamUI
        onClickToStart={onClickToStart}
        setYear={setYear}
        setRound={setRound}
        year={year}
        round={round}
        getId={getId}
      />
      ;
    </div>
  );
}
