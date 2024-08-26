import HomeUI from "./home.presenter";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  const onClickToExam = () => {
    nav("/exam");
  };

  const onClickToWrong = () => {
    nav("/note");
  };
  const onClickToQuiz = () => {
    nav("/quiz");
  };
  const onClickToVoca = () => {
    nav("/vocab");
  };

  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState([]);
  const URL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    fetchCategoryTrend();
  }, []);

  const fetchCategoryTrend = async () => {
    try {
      const response = await axios.get(`${URL}/get-category-trend`);

      setCategories(response.data.map((item) => item.category));

      setCount(response.data.map((item) => item.count));
    } catch (error) {
      console.error("Error fetching category trend:", error);
    }
  };

  console.log("dd", count);
  const datas = categories.map((category, index) => ({
    id: category,
    value: parseInt(count[index], 10),
  }));
  return (
    <HomeUI
      onClickToExam={onClickToExam}
      onClickToQuiz={onClickToQuiz}
      onClickToWrong={onClickToWrong}
      onClickToVoca={onClickToVoca}
      datas={datas}
    />
  );
}
