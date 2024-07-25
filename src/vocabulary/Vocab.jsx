import "./Vocab.css";
import Header from "../component/Header";
import { useState } from "react";
import Modal from "./Modal";

const Vocab = () => {
  const [showModal, setShowModel] = useState(false);

  const toggleModal = () => {
    setShowModel(!showModal);
  };
  return (
    <div className="main_vocab">
      <div className="vocab_search">
        <h2>검색창</h2>
        <input type="text" placeholder="단어입력" />
        <button onClick={toggleModal}>검색</button>
      </div>
      <Modal show={showModal} onClose={toggleModal} />
      <div className="vocab_list">
        <h2>단어장 목록</h2>
        <ul>
          <li>단어</li>
        </ul>
      </div>
    </div>
  );
};

export default Vocab;
