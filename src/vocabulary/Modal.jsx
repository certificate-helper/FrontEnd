import "./Modal.css";
const Modal = ({ show, onClose ,text}) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <h2>단어</h2>
      <div className="definition">
        <div className="vocab_def">
            단어
        </div>
        <button className="close_btn" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};
export default Modal;
