import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ExamReviewUI from "./examReview.presenter";

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
    <ExamReviewUI
      setCurrentPage={setCurrentPage}
      onhandleHome={onhandleHome}
      currentData={currentData}
      totalPages={totalPages}
    />
  );
}
