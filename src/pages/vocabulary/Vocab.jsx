// //=======통신코드=========
// import { useState, useEffect } from "react";
// import "./Vocab.css";
// import VocabList from "./VocabList";
// import Button from "../component/CustomButton";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import searchIcon from "../assets/searchIcon.png";
// import CustomButton from "../component/CustomButton";
// const Vocab = () => {
//   const [searchWord, setSearchWord] = useState("");
//   const [result, setResult] = useState(null);
//   const [vocabData, setVocabData] = useState([]);
//   const nav = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://172.30.1.28:8080/getAllVoca", {
//         params: { id: "test" },
//       })
//       .then((response) => {
//         setVocabData(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("단어 데이터를 가지고 오는 중 오류 발생:", error);
//       });
//   }, []);

//   const FindWord = (e) => {
//     setSearchWord(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const foundWord = vocabData.find(
//       (item) => item.voca.toLowerCase() === searchWord.toLowerCase()
//     );
//     if (foundWord) {
//       setResult([foundWord]);
//     } else {
//       setResult([]);
//     }
//     setSearchWord("");
//   };

//   const onKeyDown = (e) => {
//     if (e.keyCode === 13) {
//       handleSubmit(e);
//     }
//   };

//   const handleShowAll = () => {
//     setResult(null);
//   };

//   return (
//     <div className="RectangleParentRoot">
//       <div className="MainContainer">
//         <div className="SearchWrap">
//           <div className="SearchContainer">
//             <img src={searchIcon} alt="검색" />
//             <input
//               onKeyDown={onKeyDown}
//               onChange={FindWord}
//               type="text"
//               value={searchWord}
//               placeholder="검색할 단어를 입력해주세요"
//             />
//             <CustomButton onClick={handleSubmit} text={"검색"}></CustomButton>
//           </div>
//         </div>
//         <div className="ExplainContainer">
//           <div className="Explain_title">
//             단어
//             <CustomButton
//               variant="contained"
//               text={"단어장"}
//               onClick={() => nav("/myvoca")}
//             />
//           </div>
//           <div className="ExplainContent">
//             {result && result.length > 0 ? (
//               <div className="SearchResult">
//                 {result.map((item) => (
//                   <div key={item.id}>
//                     <div className="ResultWord">{item.voca}</div>
//                     <div className="ResultExplain">{item.explain}</div>
//                   </div>
//                 ))}
//                 <Button onClick={handleShowAll} text={"전체 보기"}></Button>
//               </div>
//             ) : result && result.length === 0 ? (
//               <div className="SearchResult">
//                 <div className="ResultWord">없음</div>
//                 <div className="ResultExplain">설명을 찾을 수 없습니다.</div>
//                 <Button onClick={handleShowAll} text={"전체 보기"}></Button>
//               </div>
//             ) : (
//               <VocabList vocabData={vocabData} searchResult={result} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vocab;

//=======통신코드=========
import { useState, useEffect } from "react";
import "./Vocab.css";
import VocabList from "./VocabList";
import CustomButton from "../../component/CustomButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import searchIcon from "../../assets/searchIcon.png";
import Inputs from "../../component/Input";
import { TopTitle } from "../../atoms/Title";
import HeaderUI from "../../atoms/Header";
import FooterUI from "../../atoms/Footer";

const Vocab = () => {
  const [searchWord, setSearchWord] = useState("");
  const [result, setResult] = useState(null);
  const [vocabData, setVocabData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get("http://172.30.1.28:8080/getAllVoca", {
        params: { id: "test" },
      })
      .then((response) => {
        setVocabData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("단어 데이터를 가지고 오는 중 오류 발생:", error);
      });
  }, []);

  const FindWord = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundWord = vocabData.find(
      (item) => item.voca.toLowerCase() === searchWord.toLowerCase()
    );
    if (foundWord) {
      setResult([foundWord]);
    } else {
      setResult([]);
    }
    setSearchWord("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  const handleShowAll = () => {
    setResult(null);
  };

  return (
    <div className="RectangleParentRoot">
      <HeaderUI />
      <div className="MainContainer">
        <div className="Explain">
          <div className="Wrapper">
            <TopTitle>VOCABULARY</TopTitle>
          </div>
        </div>
        <div className="SearchWrap">
          <div className="SearchContainer">
            <img src={searchIcon} alt="검색" />
            <Inputs
              searchWord={searchWord}
              onKeyDown={onKeyDown}
              FindWord={FindWord}
              placeholder={"검색할 단어 입력"}
            />
            <CustomButton onClick={handleSubmit} text={"SEARCH"} />
            <div className="Explain_title_Button">
              <CustomButton text={"단어장"} onClick={() => nav("/myvoca")} />
            </div>
          </div>
        </div>
        <div className="ExplainContainer">
          <div className="ExplainContent">
            {result && result.length > 0 ? (
              <div className="SearchResult">
                {result.map((item) => (
                  <div key={item.id}>
                    <div className="ResultWord">{item.voca}</div>
                    <div className="ResultExplain">{item.explain}</div>
                  </div>
                ))}
                <CustomButton onClick={handleShowAll} text={"전체 보기"} />
              </div>
            ) : result && result.length === 0 ? (
              <div className="SearchResult">
                <div className="ResultWord">없음</div>
                <div className="ResultExplain">설명을 찾을 수 없습니다.</div>
                <CustomButton onClick={handleShowAll} text={"전체 보기"} />
              </div>
            ) : (
              <VocabList vocabData={vocabData} searchResult={result} />
            )}
          </div>
        </div>
      </div>
      <FooterUI />
    </div>
  );
};

export default Vocab;
