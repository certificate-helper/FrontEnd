import styled from "styled-components";
import FooterUI from "../../atoms/Footer";
import HeaderUI from "../../atoms/Header";
import { MainContainer, MainWrapper } from "../../atoms/MainContainer";
import { TopTitle } from "../../atoms/Title";
import { ResponsivePie } from "@nivo/pie";
import profilePic from "../../assets/profile.jpg";

export default function ProfileUI({ datas }) {
  return (
    <MainWrapper>
      <HeaderUI />
      <MainContainer>
        <ProfileBox>
          <ProfileImg src={profilePic} />
          <TextBox>
            <Name>test</Name>
            <Lank>test님은 상위 3%입니다.</Lank>
          </TextBox>
        </ProfileBox>
        <TopTitle>다른 사람들을 알아볼까요?</TopTitle>
        <OtherProfileContainer>
          <OtherProfileWrapper>
            <ProfileBox>
              <Follow>팔로우</Follow>
              <LeftBox>
                <ProfileImg src={profilePic} alt="Profile" />
                <TextBox>
                  <Name>김나래</Name>
                  <Lank>상위 10%</Lank>
                  <WroteBox>작성한 글 2개</WroteBox>
                </TextBox>
              </LeftBox>
            </ProfileBox>
            <ProfileBox>
              <Follow>팔로우</Follow>
              <LeftBox>
                <ProfileImg src={profilePic} alt="Profile" />
                <TextBox>
                  <Name>서나정</Name>
                  <Lank>상위 10%</Lank>
                  <WroteBox>작성한 글 1개</WroteBox>
                </TextBox>
              </LeftBox>
            </ProfileBox>
            <ProfileBox>
              <Following>팔로잉</Following>
              <LeftBox>
                <ProfileImg src={profilePic} alt="Profile" />
                <TextBox>
                  <Name>박민찬</Name>
                  <Lank>상위 10%</Lank>
                  <WroteBox>작성한 글 0개</WroteBox>
                </TextBox>
              </LeftBox>
            </ProfileBox>
            <ProfileBox>
              <Follow>팔로우</Follow>
              <LeftBox>
                <ProfileImg src={profilePic} alt="Profile" />
                <TextBox>
                  <Name>박민찬</Name>
                  <Lank>상위 10%</Lank>
                  <WroteBox>작성한 글 0개</WroteBox>
                </TextBox>
              </LeftBox>
            </ProfileBox>
            <ProfileBox>
              <Follow>팔로우</Follow>
              <LeftBox>
                <ProfileImg src={profilePic} alt="Profile" />
                <TextBox>
                  <Name>박민찬</Name>
                  <Lank>상위 10%</Lank>
                  <WroteBox>작성한 글 0개</WroteBox>
                </TextBox>
              </LeftBox>
            </ProfileBox>
          </OtherProfileWrapper>
        </OtherProfileContainer>
        <TopTitle>자주 틀리는 유형을 알아볼까요? </TopTitle>
        <div style={{ width: "800px", height: "500px", margin: "0 auto" }}>
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
        </div>
      </MainContainer>
      <FooterUI />
    </MainWrapper>
  );
}

const ProfileBox = styled.div`
  border: 5px solid #5c8ef1;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  gap: 2rem;
  position: relative;
`;
const ProfileImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Lank = styled.div`
  color: #ad3434;
  font-size: 1.2rem;
  font-weight: 800;
`;
const Name = styled.div`
  font-size: 2rem;
  color: #5c8ef1;
  font-weight: 800;
`;
const Title = styled.div`
  font-size: 2.5rem;
`;
const OtherProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow-x: auto;
  white-space: nowrap;
  width: 1500px;
  border: 5px solid #5c8ef1;
  padding: 10px;
  margin-bottom: 10rem;
`;

const OtherProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Follow = styled.div`
  border-radius: 20px;
  border: 5px solid #5c8ef1;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  color: #5c8ef1;
`;

const Following = styled.div`
  border-radius: 20px;
  border: 5px solid #5c8ef1;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  color: #ffffff;
  background-color: #5c8ef1;
`;

const WroteBox = styled.div`
  border: 1px;
  background-color: #ffec82;
  color: #d65656;
  border-radius: 20px;
  border: 1px solid #ffec82;
  padding: 10px;
  margin-left: 200px;
`;
const LeftBox = styled.div``;
