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

  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Answer Rates",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 2,
      },
    ],
  });

  const [answerRate, setAnswerRate] = useState(null);

  useEffect(() => {
    const fetchPieChartData = async () => {
      try {
        const response = await axios.get(
          "http://165.229.125.137:8080/get-quiz-frequency",
          { params: { id: "test" } }
        );
        const apiData = response.data;

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchBarChartData = async () => {
      try {
        const response = await axios.get(
          "http://165.229.125.137:8080/get-quiz-answer-num",
          { params: { id: "test" } }
        );
        const apiData = response.data;
        console.log(apiData);

        if (Array.isArray(apiData)) {
          const labels = apiData.map((item, index) => `Quiz ${index + 1}`);
          const dataValues = apiData.map((item) =>
            parseInt(item.answerRate, 10)
          );
          const colors = generateUniqueColors(apiData.length);

          setBarChartData({
            labels: labels,
            datasets: [
              {
                label: "Answer Rates",
                data: dataValues,
                backgroundColor: colors,
                borderColor: colors.map((color) => color.replace("0.6", "1")),
                borderWidth: 2,
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching answer num:", error);
      }
    };

    const fetchAnswerRate = async () => {
      try {
        const response = await axios.get(
          "http://165.229.125.137:8080/get-quiz-answer-rate",
          { params: { id: "test" } }
        );
        setAnswerRate(response.data.answerRate);
      } catch (error) {
        console.error("Error fetching answer rate:", error);
      }
    };

    fetchPieChartData();
    fetchBarChartData();
    fetchAnswerRate();
  }, []);

  return (
    <StatisticsPresenter
      pieChartData={pieChartData}
      barChartData={barChartData}
      answerRate={answerRate}
    />
  );
}
