import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  Colors,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./statistics.css"; // CSS 파일 import

// Register the necessary components for Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  Colors,
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement
);

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

export default function Gimoddi() {
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
        backgroundColor: [], // 막대의 색상을 다채롭게 설정하기 위해 배열로 변경
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
          const colors = generateUniqueColors(apiData.length); // 막대 그래프에 사용할 색상 생성

          setBarChartData({
            labels: labels,
            datasets: [
              {
                label: "Answer Rates",
                data: dataValues,
                backgroundColor: colors, // 다채로운 색상을 배경 색상으로 사용
                borderColor: colors.map((color) => color.replace("0.6", "1")), // 테두리 색상 설정
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

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (context.parsed !== null) {
              label += ": " + context.parsed;
            }
            return label;
          },
        },
        displayColors: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 12,
          weight: "bold",
          color: "#fff",
        },
        bodyFont: {
          size: 12,
          color: "#fff",
        },
      },
      title: {
        display: true,
        text: "내가 틀린 단어들의 분포",
        color: "#ffffff",
        font: {
          size: 16,
          weight: "bold",
        },
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return label.length > 15
            ? `${label.slice(0, 15)}\n${label.slice(15)}`
            : label;
        },
        anchor: "center",
        align: "center",
        clamp: true,
      },
    },
    layout: {
      padding: 20,
    },
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Aspect ratio 유지 비활성화
    aspectRatio: 1 / 1.5, // 세로 비율을 가로 비율의 1.5배로 설정 (조정 가능)
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (context.parsed.y !== null) {
              label += ": " + context.parsed.y;
            }
            return label;
          },
        },
        displayColors: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 12,
          weight: "bold",
          color: "#fff",
        },
        bodyFont: {
          size: 12,
          color: "#fff",
        },
      },
      title: {
        display: true,
        text: "퀴즈 회차별 정답률",
        color: "#ffffff",
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    layout: {
      padding: 20,
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Quiz Number",
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Answer Rate",
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
          display: false,
        },
      },
    },
  };

  return (
    <div className="statistics-container">
      <div className="answer-rate-container">
        <h3>나의 퀴즈 정답률은?</h3>
        {answerRate !== null ? (
          <p>{answerRate}%</p>
        ) : (
          <p>데이터를 로딩 중입니다...</p>
        )}
      </div>
      <div className="chart-container">
        <div className="chart-wrapper">
          <Pie data={pieChartData} options={pieChartOptions} />
        </div>
        <div className="chart-wrapper">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
    </div>
  );
}
