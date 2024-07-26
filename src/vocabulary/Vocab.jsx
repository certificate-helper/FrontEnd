import "./Vocab.css";
import Header from "../component/Header";
import { useState } from "react";
import Modal from "./Modal";

const Vocab = () => {
  const [showModal, setShowModel] = useState(false);
  const [word, setWord] = useState("");
  const [wordList, setWordList] = useState([]);
  const [modalWord, setModalWord] = useState("");
  const [isBookMarked, setIsBookMarked] = useState(false);

  const searchWord = (e) => {
    setWord(e.target.value);
    console.log(e.target.value);
  };
  const toggleModal = () => {
    setShowModel(!showModal);
  };
  const addWordList = () => {
    if (word !== "") {
      setModalWord(word);
      toggleModal();
    }
  };

  const toggleBookMark = () => {
    setIsBookMarked(!isBookMarked);
  };
  const confirmAddWordList = () => {
    if (isBookMarked && word !== "") {
      setWordList([word, ...wordList]);
      setWord("");
    }
    setModalWord("");
    setIsBookMarked(false);
    toggleModal();
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      addWordList();
    }
  };
  return (
    <div className="main_vocab">
      <div className="vocab_search">
        <h2>검색창</h2>
        <input
          value={word}
          onChange={searchWord}
          type="text"
          placeholder="단어입력"
          onKeyDown={onKeyDown}
        />
        <button onClick={addWordList}>검색</button>
      </div>
      <Modal
        show={showModal}
        onClose={toggleModal}
        text={modalWord}
        onConfirm={confirmAddWordList}
        onBookmarkToggle={toggleBookMark}
        isBookmarked={isBookMarked}
      />
      <div className="vocab_list">
        <h2>단어장 목록</h2>
        <ul>
          {wordList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Vocab;
