import { MainContainer, MainWrapper } from "../../atoms/MainContainer";
import HeaderUI from "../../atoms/Header";
import { TopTitle } from "../../atoms/Title";
import FooterUI from "../../atoms/Footer";
import * as S from "./examReview.styles";
export default function ExamReviewUI({
  currentData,
  setCurrentPage,
  currentPage,
  totalPages,
  onhandleHome,
}) {
  return (
    <MainWrapper>
      <HeaderUI />
      <TopTitle>시험 틀린 문제 목록</TopTitle>
      <MainContainer>
        {currentData.map((item, index) => (
          <S.QuestionCard key={index}>
            <S.ProblemText>{item.problem}</S.ProblemText>
            <S.AnswerText>정답: {item.answer}</S.AnswerText>
            {item.commentary && (
              <S.CommentaryText>해설: {item.commentary}</S.CommentaryText>
            )}
          </S.QuestionCard>
        ))}
        <S.Pagination>
          <S.PageButton
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전
          </S.PageButton>
          <S.PageButton
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음
          </S.PageButton>
        </S.Pagination>
        <S.Button onClick={() => onhandleHome()}>홈으로 이동</S.Button>
      </MainContainer>
      <FooterUI />
    </MainWrapper>
  );
}
