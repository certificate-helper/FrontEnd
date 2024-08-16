import FooterUI from "@/atoms/Footer";
import HeaderUI from "@/atoms/Header";
import { MainContainer, MainWrapper } from "@/atoms/MainContainer";

export default function ResultExamUI() {
  return (
    <MainWrapper>
      <HeaderUI />
      <MainContainer>결과 페이지</MainContainer>
      <FooterUI />
    </MainWrapper>
  );
}
