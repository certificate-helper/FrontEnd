import { useState } from "react";
import HeaderUI from "../../atoms/Header";
import "./community.css";
import ClickedPage from "./clickedPage";
export default function Community() {
    const [selectedQuestion,setSelectedQuestion]= useState(null);
    const questions = [
        {
            id: 1,
            method: "IT",
            title: "정보처리기사 자격증 준비 방법",
            content: "정보처리기사 자격증을 처음 준비하려고 하는데, 어떤 공부 방법과 자료가 효과적인가요? 추천 교재도 알려주세요.",
            regdate: "2024-11-26",
        },
        {
            id: 2,
            method: "언어",
            title: "컴퓨터 활용능력 자격증과 MOS 차이점",
            content: "컴활 1급과 MOS 자격증 중에서 어떤 것이 더 취업에 유리한가요? 두 자격증의 차이점도 궁금합니다.",
            regdate: "2024-10-27",
        },
        {
            id: 3,
            method: "취업",
            title: "AWS 자격증 종류와 취득 순서",
            content: "AWS 자격증이 여러 가지 있던데, 초보자가 가장 먼저 취득해야 할 자격증은 무엇인가요? 추천 순서를 알려주세요.",
            regdate: "2024-10-25",
        },
        {
            id: 4,
            method: "IT",
            title: "네트워크 관련 자격증 추천",
            content: "네트워크 엔지니어가 되고 싶습니다. CCNA 외에도 추천할 만한 네트워크 관련 자격증이 있을까요?",
            regdate: "2024-10-24",
        },
        {
            id: 5,
            method: "프로그래밍",
            title: "Python 관련 자격증 취득 필요성",
            content: "Python 자격증이 실제로 취업에 얼마나 도움이 되나요? 자격증 대신 프로젝트 경험이 더 중요한지 궁금합니다.",
            regdate: "2024-10-23",
        },
    ];
    const handleQuestionClick=(question)=>{
        setSelectedQuestion(question);
    }
    const handleBack=()=>{
        setSelectedQuestion(null);
        
    }

    return (
        <div>
        <HeaderUI />
        <div className="main">
            {!selectedQuestion ? ( 
                <>
                    <h1>COMMUNITY</h1>
                    <div className="main_header">
                        {questions.map((question) => (
                            <div key={question.id} className="question-card">
                                <h2 onClick={() => handleQuestionClick(question)}>
                                    {question.title}
                                </h2>
                                <small>등록일: {question.regdate}</small>
                                <hr />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <ClickedPage question={selectedQuestion} onBack={handleBack} />
            )}
        </div>
    </div>
    );
}
