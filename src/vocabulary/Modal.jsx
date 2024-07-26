import "./Modal.css";
const Modal = ({
  show,
  onClose,
  text,
  onConfirm,
  onBookmarkToggle,
  isBookmarked,
}) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <h2>{text}</h2>
      <div className="definition">
        <div className="vocab_def">해설:{text}</div>
        <div>
          <input
            type="checkbox"
            checked={isBookmarked}
            onChange={onBookmarkToggle}
          />
        </div>
        <div className="btn">
          <button onClick={onConfirm}>추가</button>
          <button className="close_btn" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
