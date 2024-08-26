import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  Colors,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Chart.js 구성 요소 등록
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  Colors,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ChartDataLabels
);

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%);
    font-family: "Poppins", sans-serif;
    color: #333333;
  }
`;

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  width: 95%;
  max-width: 1200px;
  overflow: hidden;
`;

const AnswerRateContainer = styled.div`
  margin-bottom: 20px; /* 제목과 정답률 사이에 여백 추가 */
`;

const AnswerRateHeading = styled.h3`
  font-size: 32px;
  margin: 100px 0 10px; /* 제목 위쪽에 40px 여백 추가 */
  color: #2c3e50;
`;

const AnswerRateText = styled.p`
  font-size: 60px; /* 글자 크기 더욱 확대 */
  margin: 0;
  font-weight: 700; /* 글자 굵기 확대 */
  color: #2c3e50;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  height: 800px;
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  overflow: auto;
`;

const PieChartBox = styled.div`
  flex: 1;
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LineChartBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LineChartBottom = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Pie 차트 옵션 설정
const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "내가 어떤 단어를 얼마나 틀렸을까?",
      color: "#2c3e50",
      font: {
        size: 28 /* 제목 글자 크기 확대 */,
        weight: "700" /* 제목 글자 굵기 확대 */,
      },
    },
    datalabels: {
      color: "#2c3e50",
      font: {
        weight: "600",
      },
    },
  },
};

// Line 차트 옵션 설정
const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "퀴즈 회차 별 정답 개수",
      color: "#2c3e50",
      font: {
        size: 28 /* 제목 글자 크기 확대 */,
        weight: "700" /* 제목 글자 굵기 확대 */,
      },
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
        },
      },
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#2c3e50",
        font: {
          size: 16 /* x축 글자 크기 확대 */,
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      suggestedMax: 30,
      ticks: {
        color: "#2c3e50",
        font: {
          size: 16 /* y축 글자 크기 확대 */,
        },
        stepSize: 10,
      },
      grid: {
        display: true,
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

export default function StatisticsPresenter({
  pieChartData,
  lineChartData,
  answerRate,
}) {
  return (
    <>
      <GlobalStyle />
      <StatisticsContainer>
        <ChartContainer>
          <PieChartBox>
            <ChartWrapper>
              <Pie data={pieChartData} options={pieChartOptions} />
            </ChartWrapper>
          </PieChartBox>
          <LineChartBox>
            <LineChartBottom>
              <AnswerRateContainer>
                <AnswerRateHeading>나의 퀴즈 정답률은?</AnswerRateHeading>
                {answerRate !== null ? (
                  <AnswerRateText>{answerRate}%</AnswerRateText>
                ) : (
                  <AnswerRateText>데이터를 로딩 중입니다...</AnswerRateText>
                )}
              </AnswerRateContainer>
              <ChartWrapper>
                <Line data={lineChartData} options={lineChartOptions} />
              </ChartWrapper>
            </LineChartBottom>
          </LineChartBox>
        </ChartContainer>
      </StatisticsContainer>
    </>
  );
}
