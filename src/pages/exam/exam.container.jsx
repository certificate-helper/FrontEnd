import { useState } from "react";
import ExamUI from "./exam.presenter";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Exam() {
  const [year, setYear] = useState("");
  const [round, setRound] = useState("");
  const [id, setId] = useState("");

  const URL = import.meta.env.VITE_SERVER_URL;
  const nav = useNavigate();

  const onClickToStart = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}/set-exam`, {
        year,
        round,
        id,
      });

      console.log(response);

      nav("/startExam");
    } catch (error) {
      console.error(error);
      console.log(`1: ${year}  2: ${round}  3: ${id}`);
    }
  };
  return (
    <div>
      <ExamUI
        onClickToStart={onClickToStart}
        setId={setId}
        setYear={setYear}
        setRound={setRound}
        id={id}
        year={year}
        round={round}
      />
      ;
    </div>
  );
}
