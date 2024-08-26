import React from "react";
import styled, { createGlobalStyle } from "styled-components";
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

// Chart.js 구성 요소 등록
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  Colors,
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels
);

// 전역 스타일 설정
const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #3498db, #8e44ad); /* 파란색 그라데이션 배경 */
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; /* 모던한 폰트 */
    color: #ffffff;
  }
`;

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 1000px;
  overflow: hidden;
`;

const AnswerRateContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  width: 100%;
  max-width: 800px;
`;

const AnswerRateHeading = styled.h3`
  font-size: 24px;
  margin: 0 0 10px;
  color: #f1c40f;
`;

const AnswerRateText = styled.p`
  font-size: 20px;
  margin: 0;
`;

const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  height: 400px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
    flex-direction: column;
  }
`;

const ChartWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  min-width: 0;
`;

export default function StatisticsPresenter({
  pieChartData,
  pieChartOptions,
  barChartData,
  barChartOptions,
  answerRate,
}) {
  return (
    <>
      <GlobalStyle />
      <StatisticsContainer>
        <AnswerRateContainer>
          <AnswerRateHeading>나의 퀴즈 정답률은?</AnswerRateHeading>
          {answerRate !== null ? (
            <AnswerRateText>{answerRate}%</AnswerRateText>
          ) : (
            <AnswerRateText>데이터를 로딩 중입니다...</AnswerRateText>
          )}
        </AnswerRateContainer>
        <ChartContainer>
          <ChartWrapper>
            <Pie data={pieChartData} options={pieChartOptions} />
          </ChartWrapper>
          <ChartWrapper>
            <Bar data={barChartData} options={barChartOptions} />
          </ChartWrapper>
        </ChartContainer>
      </StatisticsContainer>
    </>
  );
}
