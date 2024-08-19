import { MainContainer, MainWrapper } from "../../atoms/MainContainer";
import HeaderUI from "../../atoms/Header";
import FooterUI from "../../atoms/Footer";
import * as S from "./exam.styles";
import { TopTitle } from "../../atoms/Title";

export default function ExamUI({
  onClickToStart,
  setId,
  setRound,
  setYear,
  id,
  year,
  round,
}) {
  return (
    <MainWrapper>
      <HeaderUI />
      <MainContainer>
        <TopTitle>정보처리기사 - 회차를 선택하세요!</TopTitle>
        <form onSubmit={onClickToStart}>
          <S.SelectContainer>
            <S.SelectWrapper>
              <S.Text>이름은 </S.Text>
              <S.IdInput value={id} onChange={(e) => setId(e.target.value)} />
              <S.Text>이며,</S.Text>
            </S.SelectWrapper>
            <S.SelectWrapper>
              <S.Select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              >
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </S.Select>
              <S.Text>년도의</S.Text>
            </S.SelectWrapper>
            <S.SelectWrapper>
              <S.Select2
                value={round}
                onChange={(e) => setRound(e.target.value)}
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </S.Select2>
              <S.Text>회차 시험을 치겠습니다.</S.Text>
            </S.SelectWrapper>
          </S.SelectContainer>
          <S.StartButton type="submit">시험치기</S.StartButton>
        </form>
      </MainContainer>
      <FooterUI />
    </MainWrapper>
  );
}
