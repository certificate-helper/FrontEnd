import FooterUI from "@/atoms/Footer";
import HeaderUI from "../../atoms/Header";
import { MainContainer, MainWrapper } from "@/atoms/MainContainer";
import * as S from "./startExam.styles";
import { TopTitle } from "@/atoms/Title";

export default function StartExamUI({
  exam,
  answer,
  setAnswer,
  handleCheckExamAnswer,
  onClickToCountUp,
  onClickToCountDown,
  handleButtonClick,
  num,
}) {
  return (
    <MainWrapper>
      <HeaderUI />
      <MainContainer>
        <S.AllContainer>
          <S.Container>
            <TopTitle>시험 페이지</TopTitle>

            <S.SelectContainer>
              {/* <form onSubmit={handleGetExam}>
                <input
                  type="text"
                  placeholder="ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Number"
                  value={num}
                  onChange={(e) => setNum(e.target.value)}
                  required
                />
                <button type="submit">문제 가져오기</button>
              </form> */}
              {exam && num <= 7 && (
                <div>
                  <h3>Exam Problem</h3>
                  <p>{exam.problem}</p>
                  {exam.image && exam.imageData && (
                    <img
                      src={`data:image/png;base64,${exam.imageData}`}
                      alt="Exam Problem"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  )}
                </div>
              )}
              <div>번호:{num}</div>
              <form onSubmit={handleCheckExamAnswer}>
                <S.AnswerInput
                  type="text"
                  placeholder="답을 작성하세요"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                />
                <S.ButtonWrapper>
                  <S.PreviousButton
                    onClick={() => {
                      onClickToCountDown();
                      setAnswer("");
                    }}
                  >
                    이전
                  </S.PreviousButton>
                  <S.NextButton
                    onClick={() => {
                      onClickToCountUp();
                      setAnswer("");
                    }}
                  >
                    다음
                  </S.NextButton>
                  <S.SubmitButton type="submit">제출</S.SubmitButton>
                </S.ButtonWrapper>
              </form>
              <S.Button>완료</S.Button>
            </S.SelectContainer>

            <S.NumButtonWrapper>
              {[...Array(7)].map((_, index) => (
                <S.NumButton
                  key={index + 1}
                  onClick={() => handleButtonClick(index + 1)}
                >
                  {index + 1}
                </S.NumButton>
              ))}
            </S.NumButtonWrapper>
          </S.Container>
        </S.AllContainer>
      </MainContainer>
      <FooterUI />
    </MainWrapper>
  );
}
