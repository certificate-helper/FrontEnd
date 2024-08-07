// import addImg from "../assets/addImg2.png";
// import "./VocabItem.css";
// import { useContext } from "react";
// import { DiaryDispatchContext } from "../App";
// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";

// const VocabItem = ({ id, voca, explain, selected }) => {
//   useEffect(() => {
//     axios
//       .post("http://172.30.1.12:8080/saveMyVoca", {
//         params: { id: "test", voca: voca },
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [selected]);

//   const { onUpdate } = useContext(DiaryDispatchContext);
//   // 단어 선택 상태를 토글하는 함수
//   const handleToggleSelect = () => {
//     // 선택 상태를 토글함
//     if (selected === false) {
//       window.confirm("단어장에 추가하겠습니까?");
//       onUpdate(id, voca, explain, !selected);
//       console.log(selected);
//     }
//     if (selected === true) {
//       window.confirm("단어장에서 지우시겠습니까?");
//       onUpdate(id, voca, explain, !selected);
//       console.log(selected);
//     }
//   };

//   return (
//     <div
//       className={`VocabItem ${
//         selected ? `VocabItem_selected_${selected}` : ""
//       }`}
//     >
//       <div className="voca_addImg">
//         <div className="voca">{voca}</div>
//         <button className="add_vocab" onClick={handleToggleSelect}>
//           <img className="add_img" src={addImg} alt="Add" />
//         </button>
//       </div>
//       <div className="explain">{explain}</div>
//     </div>
//   );
// };

// export default VocabItem;

import addImg from "../assets/addImg2.png";
import "./VocabItem.css";
import { useContext, useState, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import axios from "axios";

const VocabItem = ({ id, voca, explain, selected }) => {
  // 선택 상태를 관리하는 상태 변수
  const [isSelected, setIsSelected] = useState(selected);

  const { onUpdate } = useContext(DiaryDispatchContext);

  useEffect(() => {
    // 선택 상태가 변경될 때 로컬 상태 업데이트
    setIsSelected(selected);
  }, [selected]);

  // 선택 상태를 토글하고 API 호출
  const handleToggleSelect = () => {
    // 확인 대화 상자 표시
    const confirmMessage = isSelected
      ? "단어장에서 지우시겠습니까?"
      : "단어장에 추가하겠습니까?";

    if (window.confirm(confirmMessage)) {
      // 선택 상태를 반전
      setIsSelected(!isSelected);
      // 상태 업데이트
      onUpdate(id, voca, explain, !isSelected);
      if (!isSelected) {
        axios
          .post(`http://172.30.1.28:8080/saveMyVoca?id=${"test"}&voca=${voca}`)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      // API 호출
      else {
        axios
          .post(
            `http://172.30.1.28:8080/remove-my-voca?id=${"test"}&voca=${voca}`
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  return (
    <div
      className={`VocabItem ${
        isSelected ? `VocabItem_selected_${isSelected}` : ""
      }`}
    >
      <div className="voca_addImg">
        <div className="voca">{voca}</div>
        <button className="add_vocab" onClick={handleToggleSelect}>
          <img className="add_img" src={addImg} alt="Add" />
        </button>
      </div>
      <div className="explain">{explain}</div>
    </div>
  );
};

export default VocabItem;
