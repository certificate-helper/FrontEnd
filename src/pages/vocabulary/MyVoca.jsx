import "./MyVoca.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomButton from "../../component/CustomButton";
import { TopTitle } from "../../atoms/Title";
import HeaderUI from "../../atoms/Header";
import FooterUI from "../../atoms/Footer";

const MyVoca = () => {
  // 선택된 단어들을 관리하는 상태 변수, 초기값은 빈 배열
  const [selectedVoca, setSelectedVoca] = useState([]);
  const nav = useNavigate();
  // 선택된 단어만 필터링
  const selectedWords = selectedVoca.filter((item) => item.selected);
  useEffect(() => {
    // API 호출하여 단어 데이터를 가져옴
    axios
      .get(`${URL}/getAllVoca`, {
        params: { id: "test" },
      })
      .then((response) => {
        // 데이터를 상태로 설정
        setSelectedVoca(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("단어 데이터를 가지고 오는 중 오류 발생:", error);
      });
  }, []);

  return (
    <div className="selectedWordsWrapper">
      <HeaderUI />
      <section className="selectedWordSection">
        <div className="select_title">
          <TopTitle>MINE</TopTitle>
        </div>
        <div className="selectedList">
          <div className="selectedWord">
            {selectedWords.length > 0 ? (
              selectedWords.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <li className="word">
                  {item.voca}
                  <div>{item.explain}</div>
                </li>
              ))
            ) : (
              <p>선택된 단어가 없습니다.</p>
            )}
          </div>
          <CustomButton onClick={() => nav(-1)} text={"뒤로가기"} />
        </div>
      </section>
      <FooterUI />
    </div>
  );
};

export default MyVoca;
