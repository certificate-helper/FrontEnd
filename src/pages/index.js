// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home.container";
import Login from "./login/login";
import SignIn from "./signUp/signUp";
import Exam from "./exam/exam.container";
import StartExam from "./startExam/startExam.container"; // 결과 페이지 컴포넌트를 import 합니다.

export default function Main() {
  return <Home />;
}
