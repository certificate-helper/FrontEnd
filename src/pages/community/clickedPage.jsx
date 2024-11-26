import React from "react";
import "../community/clickedPage.css"
import HeaderUI from "../../atoms/Header";

export default function ClickedPage({ question, onBack }) {

    return (
        <div className="clicked-page">
            <button onClick={onBack}>뒤로가기</button>
            <h1>{question.title}</h1>
            <p>{question.content}</p>
            <small> 등록일: {question.regdate}</small>
        </div>
    );
}
