import { useState, useRef, useReducer, createContext } from "react";
import { Route, Routes } from "react-router-dom";

import SignUp from "./pages/signups/Signup";
import Vocab from "./pages/vocabulary/Vocab";
import Login from "./pages/login/Login";
import MyVoca from "./pages/vocabulary/MyVoca";
import Home from "./pages/home/home.container";
import StartExam from "./pages/startExam/startExam.container";
import ResultExam from "./pages/result/resultExam.container";
import Profile from "./pages/profile/profile.container";
import Exam from "./pages/exam/exam.container";
import GlobalStyle from "./pages/global";
import StartPage from "./pages/start/startPage";
import Quiz from "./pages/Quiz/quiz";
import Statistics from "./pages/Statistic/statistics";
import Note from "./pages/WrongNote/note";

const VocabData = [
  {
    id: 1,
    voca: "mvc1모델",
    explain:
      "MVC패턴은 디자인패턴 중 하나입니다.디자인 패턴이란 프로그램이나 어떤 특정한 것을 개발하는 중에 발생했던 문제점들을 정리해서 상황에 따라 간편하게 적용해서 쓸 수 있는 것을 정리하여 특정한 규약을 통해 쉽게 쓸 수 있는 형태로 만든 것을 말합니다.",
    selected: false,
  },
  {
    id: 2,
    voca: "티어드롭 공격 [Teardrop Attack]",
    explain:
      "서비스 거부 공격(DOS)의 하나. 공격 대상 컴퓨터에 헤더가 조작된 일련의 IP 패킷 조각(IP fragments)들을 전송함으로써 컴퓨터의 OS를 다운시키는 공격입니다.",
    selected: false,
  },
  {
    id: 3,
    voca: "웨일댁 봇넷 [Waledac]",
    explain:
      " 스팸 메일에 포함되어 사회 공학적 기법을 통해 유포되는 변종 웜. 연말연시 새해 축하 카드, 밸런타인데이 카드, 허위 테러 공격 뉴스, SMS Spy 등을 이용하는 등 사회적으로 쟁점화되고 있거나 관심 있는 내용을 통해서 유포되는 웜이다.",
    selected: false,
  },
  {
    id: 4,
    voca: "WSDL(Web Services Description Language)",
    explain: " HTML와 SGML의 단점을 개선한 특수목적의 마크업 언어입니다.",
    selected: false,
  },
  {
    id: 5,
    voca: "CSRF(Cross-Site Request Forgery)",
    explain:
      "공격자가 웹서버의 취약점을 이용하여 악성 스크립트 구문을 삽입하여 사용자가 공격자의 의도한 행위를 웹사이트에 요청하게 만드는 공격입니다.",
    selected: false,
  },
  {
    id: 6,
    voca: "SSL/TLS",
    explain:
      "전송계층과 응용계층 사이에서 클라이언트와 서버 간의 웹 데이터 암호화(기밀성), 상호 인증 및 전송 시 데이터 무결성을 보장하는 보안 프로토콜입니다.",
    selected: false,
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data.id
          ? { ...item, selected: action.data.selected }
          : item
      );
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();
function App() {
  const [data, dispatch] = useReducer(reducer, VocabData);
  const onCreate = (id, voca, explain, selected) => {
    dispatch({
      type: "CREATE",
      data: {
        id,
        voca,
        explain,
        selected,
      },
    });
  };
  const onUpdate = (id, voca, explain, selected) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        voca,
        explain,
        selected,
      },
    });
  };

  return (
    <div>
      <GlobalStyle />
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onUpdate,
            onCreate,
          }}
        >
          <Routes>
            <Route path="/vocab" element={<Vocab />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/myvoca" element={<MyVoca />} />
            <Route path="/home" element={<Home />} />
            <Route path="/startExam" element={<StartExam />} />
            <Route path="/resultExam" element={<ResultExam />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<StartPage />} />
            <Route path="/note" element={<Note />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/Statistics" element={<Statistics />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
}

export default App;
//<Route path="/note" element={<Note />} />}
