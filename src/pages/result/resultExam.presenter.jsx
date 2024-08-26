import FooterUI from "../../atoms/Footer";
import HeaderUI from "../../atoms/Header";
import { MainContainer, MainWrapper } from "../../atoms/MainContainer";
import { TopTitle } from "../../atoms/Title";

export default function ResultExamUI() {
  return (
    <MainWrapper>
      <HeaderUI />
      <TopTitle>시험이 완료되었습니다! </TopTitle>

      <FooterUI />
    </MainWrapper>
  );
}
