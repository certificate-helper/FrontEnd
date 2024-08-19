import HeaderUI from "../../atoms/Header";
import FooterUI from "../../atoms/Footer";
// import { ReactComponent as Banner1 } from "../../assets/Bener1.svg";
import { TopTitle } from "../../atoms/Title";
import { MainContainer, MainWrapper } from "../../atoms/MainContainer";

import { ResponsivePie } from "@nivo/pie";
import * as S from "./home.styles";

export default function HomeUI({ onClickToExam, datas }) {
  return (
    <MainWrapper>
      <HeaderUI />
      <S.BannerContainer>
        AI기반 채점으로 여러분들의 <S.HighlightedText>합격</S.HighlightedText>을
        책임져드립니다!
        <S.Tag># 챗지피티 기반 채점 # 최신 CBT 문제 다수 수록</S.Tag>
      </S.BannerContainer>
      <MainContainer>
        <S.PieContainer>
          <TopTitle> 현재 기출 트렌드를 알아보아요! </TopTitle>

          <ResponsivePie
            data={datas}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              { match: { id: "ruby" }, id: "dots" },
              { match: { id: "c" }, id: "dots" },
              { match: { id: "go" }, id: "dots" },
              { match: { id: "python" }, id: "dots" },
              { match: { id: "scala" }, id: "lines" },
              { match: { id: "lisp" }, id: "lines" },
              { match: { id: "elixir" }, id: "lines" },
              { match: { id: "javascript" }, id: "lines" },
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </S.PieContainer>
        <TopTitle>ID님의 시험합격을 도와드릴게요!</TopTitle>

        <S.TopBoxContainer>
          <S.TopBoxWrapper>
            <S.TopBox>
              <S.TopBoxBtnContainer>
                <S.TopBoxButton>퀴즈</S.TopBoxButton>
                <S.TopBoxButton onClick={onClickToExam}>
                  시험보기
                </S.TopBoxButton>
                <S.TopBoxButton>오답노트</S.TopBoxButton>
                <S.TopBoxButton2>단어장</S.TopBoxButton2>
              </S.TopBoxBtnContainer>
            </S.TopBox>
            <S.TopBoxText>{`정보처리기사 `}</S.TopBoxText>
          </S.TopBoxWrapper>
          <S.TopBoxWrapper>
            {" "}
            <S.TopBox>
              {" "}
              <S.TopBoxBtnContainer>
                <S.TopBoxButton>퀴즈</S.TopBoxButton>
                <S.TopBoxButton>시험보기</S.TopBoxButton>
                <S.TopBoxButton>오답노트</S.TopBoxButton>
                <S.TopBoxButton2>단어장</S.TopBoxButton2>
              </S.TopBoxBtnContainer>
            </S.TopBox>
            <S.TopBoxText>{`정보처리기사 `}</S.TopBoxText>
          </S.TopBoxWrapper>
          <S.TopBoxWrapper>
            {" "}
            <S.TopBox>
              {" "}
              <S.TopBoxBtnContainer>
                <S.TopBoxButton>퀴즈</S.TopBoxButton>
                <S.TopBoxButton>시험보기</S.TopBoxButton>
                <S.TopBoxButton>오답노트</S.TopBoxButton>
                <S.TopBoxButton2>단어장</S.TopBoxButton2>
              </S.TopBoxBtnContainer>
            </S.TopBox>
            <S.TopBoxText>{`정보처리기사 `}</S.TopBoxText>
          </S.TopBoxWrapper>
        </S.TopBoxContainer>
        <S.Row />
        <TopTitle>시험 접수 날짜, 가격, 팁을 확인하세요! </TopTitle>
        <S.Post>
          <S.PostContainer>
            <S.LabelWrapper>
              <S.LabelText>시험 점수</S.LabelText>
              <S.LabelText>접수 날짜</S.LabelText>
              <S.LabelText>접수 가격</S.LabelText>
            </S.LabelWrapper>
            <S.Name>{`정보처리기사 `}</S.Name>
            <S.SubName>시험 일정</S.SubName>
          </S.PostContainer>
        </S.Post>
      </MainContainer>
      <FooterUI />
    </MainWrapper>
  );
}
