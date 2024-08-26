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

  const dispatch = useContext(DiaryDispatchContext);
  const URL = import.meta.env.VITE_SERVER_URL;

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
      const newSelection = pendingSelection;
      setIsSelected(newSelection);
      dispatch({
        type: "UPDATE",
        data: { id, selected: newSelection },
      });

      const apiEndpoint = newSelection
        ? `${URL}/saveMyVoca`
        : ` ${URL}/remove-my-voca`;

      const data = { id: "test", voca: voca };

      axios
        .post(apiEndpoint, data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className={`VocabItem ${isSelected ? "VocabItem_selected" : ""}`}>
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
