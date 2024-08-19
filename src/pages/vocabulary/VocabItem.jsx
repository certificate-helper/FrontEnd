// import "./VocabItem.css";
// import { useContext, useState, useEffect } from "react";
// import { DiaryDispatchContext } from "../App";
// import axios from "axios";
// import * as React from "react";
// import { createSvgIcon } from "@mui/material/utils";

// const PlusIcon = createSvgIcon(
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M12 4.5v15m7.5-7.5h-15"
//     />
//   </svg>,
//   "Plus"
// );

// const VocabItem = ({ id, voca, explain, selected }) => {
//   // 선택 상태를 관리하는 상태 변수
//   const [isSelected, setIsSelected] = useState(selected);

//   const { onUpdate } = useContext(DiaryDispatchContext);

//   useEffect(() => {
//     // 선택 상태가 변경될 때 로컬 상태 업데이트
//     setIsSelected(selected);
//   }, [selected]);

//   // 선택 상태를 토글하고 API 호출
//   const handleToggleSelect = () => {
//     // 확인 대화 상자 표시
//     const confirmMessage = isSelected
//       ? "단어장에서 지우시겠습니까?"
//       : "단어장에 추가하겠습니까?";

//     if (window.confirm(confirmMessage)) {
//       // 선택 상태를 반전
//       setIsSelected(!isSelected);
//       // 상태 업데이트
//       onUpdate(id, voca, explain, !isSelected);
//       if (!isSelected) {
//         axios
//           .post(
//             `http://172.30.1.28:8080/saveMyVoca`,
//             new URLSearchParams({
//               id: "test",
//               voca: voca,
//             })
//           )
//           // .post(`http://172.30.1.28:8080/remove-my-voca?id=${"test"}&voca=${voca}`)
//           .then((response) => {
//             console.log(response);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       } else {
//         axios
//           .post(
//             `http://172.30.1.28:8080/remove-my-voca?id=${"test"}&voca=${voca}`
//           )
//           .then((response) => {
//             console.log(response);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       }
//     }
//   };

//   return (
//     <div
//       className={`VocabItem ${
//         isSelected ? `VocabItem_selected_${isSelected}` : ""
//       }`}
//     >
//       <div className="voca_addImg">
//         <div className="voca">{voca}</div>
//         <button className="add_vocab" onClick={handleToggleSelect}>
//           <PlusIcon color={isSelected ? "primary" : "action"} />
//         </button>
//       </div>
//       <div className="explain">{explain}</div>
//     </div>
//   );
// };

// export default VocabItem;

import "./VocabItem.css";
import { useContext, useState, useEffect } from "react";
import { DiaryDispatchContext } from "../../App";
import axios from "axios";
import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const PlusIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const VocabItem = ({ id, voca, explain, selected }) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [open, setOpen] = useState(false);
  const [pendingSelection, setPendingSelection] = useState(null);

  const { onUpdate } = useContext(DiaryDispatchContext);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const handleToggleSelect = () => {
    setPendingSelection(!isSelected);
    setOpen(true);
  };

  const handleClose = (confirmed) => {
    setOpen(false);
    if (confirmed) {
      setIsSelected(pendingSelection);
      onUpdate(id, voca, explain, pendingSelection);

      const apiEndpoint = pendingSelection
        ? `http://172.30.1.28:8080/saveMyVoca`
        : `http://172.30.1.28:8080/removeMyVoca`;

      const data = { id: "test", voca: voca };

      axios
        .post(apiEndpoint, data) // 데이터를 JSON 객체로 전송
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
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
          <PlusIcon color={isSelected ? "primary" : "action"} />
        </button>
      </div>
      <div className="explain">{explain}</div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClose(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {pendingSelection
            ? "단어장에 추가하겠습니까?"
            : "단어장에서 지우시겠습니까?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {pendingSelection
              ? "이 단어를 단어장에 추가하시겠습니까?"
              : "이 단어를 단어장에서 제거하시겠습니까?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>취소</Button>
          <Button onClick={() => handleClose(true)}>확인</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VocabItem;
