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
import ExamReview from "./pages/examReview/examReview.container";
import Community from "./pages/community/community";
import Ranking from "./ranking/ranking";

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
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <div>
      <DiaryStateContext.Provider value={state}>
        <DiaryDispatchContext.Provider value={dispatch}>
          <GlobalStyle />

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
            <Route path="/exaReivew" element={<ExamReview />} />
            <Route path="/community" element={<Community />}/>
            <Route path="/ranking" element={<Ranking/>}/>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
}

export default App;
//<Route path="/note" element={<Note />} />}
