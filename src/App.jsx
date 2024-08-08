import { useState, useRef, useReducer, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./signup/Signup";
import Vocab from "./vocabulary/Vocab";
import Header from "./component/Header";
import Login from "./login/Login";
import MyVoca from "./vocabulary/MyVoca";

const VocabData = [
  {
    id: 1,
    voca: "mvc1모델",
    explain:
      "MVC패턴은 디자인패턴 중 하나입니다.디자인 패턴이란 프로그램이나 어떤 특정한 것을 개발하는 중에 발생했던 문제점들을 정리해서 상황에 따라 간편하게 적용해서 쓸 수 있는 것을 정리하여 특정한 규약을 통해 쉽게 쓸 수 있는 형태로 만든 것을 말합니다.",
    selected: false,
  },
  {
    id: 5,
    voca: "mvc2모델",
    explain:
      "MVC패턴은 디자인패턴 중 하나입니다.디자인 패턴이란 프로그램이나 어떤 특정한 것을 개발하는 중에 발생했던 문제점들을 정리해서 상황에 따라 간편하게 적용해서 쓸 수 있는 것을 정리하여 특정한 규약을 통해 쉽게 쓸 수 있는 형태로 만든 것을 말합니다.",
    selected: false,
  },
  {
    id: 4,
    voca: "mvc3모델",
    explain:
      "MVC패턴은 디자인패턴 중 하나입니다.디자인 패턴이란 프로그램이나 어떤 특정한 것을 개발하는 중에 발생했던 문제점들을 정리해서 상황에 따라 간편하게 적용해서 쓸 수 있는 것을 정리하여 특정한 규약을 통해 쉽게 쓸 수 있는 형태로 만든 것을 말합니다.",
    selected: false,
  },
  {
    id: 6,
    voca: "mvc4모델",
    explain:
      "MVC패턴은 디자인패턴 중 하나입니다.디자인 패턴이란 프로그램이나 어떤 특정한 것을 개발하는 중에 발생했던 문제점들을 정리해서 상황에 따라 간편하게 적용해서 쓸 수 있는 것을 정리하여 특정한 규약을 통해 쉽게 쓸 수 있는 형태로 만든 것을 말합니다.",
    selected: false,
  },
  {
    id: 7,
    voca: "mvc5모델",
    explain:
      "MVC패턴은 디자인패턴 중 하나입니다.디자인 패턴이란 프로그램이나 어떤 특정한 것을 개발하는 중에 발생했던 문제점들을 정리해서 상황에 따라 간편하게 적용해서 쓸 수 있는 것을 정리하여 특정한 규약을 통해 쉽게 쓸 수 있는 형태로 만든 것을 말합니다.",
    selected: false,
  },
  {
    id: 8,
    voca: "mvc6모델",
    explain:
      "MVC패턴은 디자인패턴 중 하나입니다.디자인 패턴이란 프로그램이나 어떤 특정한 것을 개발하는 중에 발생했던 문제점들을 정리해서 상황에 따라 간편하게 적용해서 쓸 수 있는 것을 정리하여 특정한 규약을 통해 쉽게 쓸 수 있는 형태로 만든 것을 말합니다.",
    selected: false,
  },
  {
    id: 9,
    voca: "mvc7모델",
    explain:
      "MVC패턴은 디자인패턴 중 하나입니다.디자인 패턴이란 프로그램이나 어떤 특정한 것을 개발하는 중에 발생했던 문제점들을 정리해서 상황에 따라 간편하게 적용해서 쓸 수 있는 것을 정리하여 특정한 규약을 통해 쉽게 쓸 수 있는 형태로 만든 것을 말합니다.",
    selected: false,
  },
  {
    id: 10,
    voca: "mvc모델",
    explain:
      "MVC패턴은 디자인패턴 중 하나입니다.디자인 패턴이란 프로그램이나 어떤 특정한 것을 개발하는 중에 발생했던 문제점들을 정리해서 상황에 따라 간편하게 적용해서 쓸 수 있는 것을 정리하여 특정한 규약을 통해 쉽게 쓸 수 있는 형태로 만든 것을 말합니다.",
    selected: false,
  },
  {
    id: 11,
    voca: "mvc모델",
    explain:
      "MVC패턴은 디자인패턴 중 하나입니다.디자인 패턴이란 프로그램이나 어떤 특정한 것을 개발하는 중에 발생했던 문제점들을 정리해서 상황에 따라 간편하게 적용해서 쓸 수 있는 것을 정리하여 특정한 규약을 통해 쉽게 쓸 수 있는 형태로 만든 것을 말합니다.",
    selected: false,
  },
  {
    id: 12,
    voca: "mvc모델",
    explain:
      "MVC패턴은 디자인패턴 중 하나입니다.디자인 패턴이란 프로그램이나 어떤 특정한 것을 개발하는 중에 발생했던 문제점들을 정리해서 상황에 따라 간편하게 적용해서 쓸 수 있는 것을 정리하여 특정한 규약을 통해 쉽게 쓸 수 있는 형태로 만든 것을 말합니다.",
    selected: false,
  },
  {
    id: 13,
    voca: "mvc모델",
    explain:
      "MVC패턴은 디자인패턴 중 하나입니다.디자인 패턴이란 프로그램이나 어떤 특정한 것을 개발하는 중에 발생했던 문제점들을 정리해서 상황에 따라 간편하게 적용해서 쓸 수 있는 것을 정리하여 특정한 규약을 통해 쉽게 쓸 수 있는 형태로 만든 것을 말합니다.",
    selected: false,
  },
  {
    id: 2,
    voca: "List",
    explain: "list다 멍청아",
    selected: false,
  },
  {
    id: 3,
    voca: "git",
    explain: "github",
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
      <Header />
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onUpdate,
            onCreate,
          }}
        >
          <Routes>
            <Route path="/vocab" element={<Vocab />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/myvoca" element={<MyVoca />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
}

export default App;
