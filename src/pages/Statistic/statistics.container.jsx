import React, { useState, useEffect } from "react";
import axios from "axios";
import StatisticsPresenter from "./statistics.presenter";

const generateUniqueColors = (count) => {
  const colors = new Set();
  const colorArray = [];

  while (colorArray.length < count) {
    const color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 0.6)`;
    if (!colors.has(color)) {
      colors.add(color);
      colorArray.push(color);
    }
  }

  return colorArray;
};

export default function StatisticsContainer() {
  const URL = import.meta.env.VITE_SERVER_URL;
  const [pieChartData, setPieChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Frequency",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 2,
      },
    ],
  });

  const [lineChartData, setLineChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Answer Rates",
        data: [],
        borderColor: "#FF5733", // 꺾은선 색상
        backgroundColor: "rgba(255, 87, 51, 0.2)", // 배경 색상 (채워지는 부분)
        borderWidth: 2,
      },
    ],
  });

  const [answerRate, setAnswerRate] = useState(null);

  useEffect(() => {
    const fetchPieChartData = async () => {
      try {
        const response = await axios.get(`${URL}/get-quiz-frequency`, {
          params: { id: "test" },
        });
        const apiData = response.data;

        if (Array.isArray(apiData)) {
          const labels = apiData.map((item) => item.word);
          const dataValues = apiData.map((item) => parseInt(item.count, 10));
          const colors = generateUniqueColors(apiData.length);

          setPieChartData({
            labels: labels,
            datasets: [
              {
                label: "Frequency",
                data: dataValues,
                backgroundColor: colors,
                borderColor: colors.map((color) => color.replace("0.6", "1")),
                borderWidth: 2,
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching pie chart data:", error);
      }
    };

    const fetchLineChartData = async () => {
      try {
        const response = await axios.get(`${URL}/get-quiz-answer-num`, {
          params: { id: "test" },
        });
        const apiData = response.data;

        if (Array.isArray(apiData)) {
          const labels = apiData.map((item, index) => `Quiz ${index + 1}`);
          const dataValues = apiData.map((item) =>
            parseInt(item.answerRate, 10)
          );

          setLineChartData({
            labels: labels,
            datasets: [
              {
                label: "Answer Rates",
                data: dataValues,
                borderColor: "#FF5733",
                backgroundColor: "rgba(255, 87, 51, 0.2)",
                borderWidth: 2,
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching line chart data:", error);
      }
    };

    const fetchAnswerRate = async () => {
      try {
        const response = await axios.get(`${URL}/get-quiz-answer-rate`, {
          params: { id: "test" },
        });
        setAnswerRate(response.data.answerRate);
      } catch (error) {
        console.error("Error fetching answer rate:", error);
      }
    };

    fetchPieChartData();
    fetchLineChartData();
    fetchAnswerRate();
  }, []);

  return (
    <StatisticsPresenter
      pieChartData={pieChartData}
      lineChartData={lineChartData}
      answerRate={answerRate}
    />
  );
}
