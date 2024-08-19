// import "./VocabList.css";
// import React, { useState, useRef } from "react";
// import VocabItem from "./VocabItem";
// import ReactPaginate from "react-paginate";
// import { useEffect } from "react";

// const VocabList = ({ searchResult, vocabData }) => {
//   const vocabList = vocabData;
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 5;
//   const listToDisplay = searchResult !== null ? searchResult : vocabList;
//   const pageCount = Math.ceil(listToDisplay.length / itemsPerPage);
//   const listRef = useRef(null);

//   //페이지를 누를때 바뀐다
//   const handlePageClick = (event) => {
//     setCurrentPage(event.selected);
//   };

//   //currentPage가 바뀔때마다 동작
//   useEffect(() => {
//     if (listRef.current) {
//       listRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [currentPage]);

//   const currentItems = listToDisplay.slice(
//     currentPage * itemsPerPage,
//     (currentPage + 1) * itemsPerPage
//   );

//   return (
//     <div className="VocabList" ref={listRef}>
//       <section className="wordList_section">
//         <div className="word_list_wrapper">
//           {currentItems.map((item) => (
//             <VocabItem key={item.num} {...item} />
//           ))}
//         </div>
//       </section>
//       {searchResult === null ? (
//         <section className="Paginationsection">
//           <ReactPaginate
//             previousLabel={"이전"}
//             nextLabel={"다음"}
//             breakLabel={"..."}
//             pageCount={pageCount}
//             pageRangeDisplayed={2} // 현재 페이지를 기준으로 표시할 페이지 수
//             marginPagesDisplayed={1} // 양쪽 끝에 표시할 페이지 수
//             onPageChange={handlePageClick}
//             containerClassName={"pagination"}
//             activeClassName={"active"}
//             previousClassName={"pagination__previous"}
//             nextClassName={"pagination__next"}
//           />
//         </section>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };

// export default VocabList;

import "./VocabList.css";
import React, { useState, useRef, useEffect, useContext } from "react";
import VocabItem from "./VocabItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { DiaryStateContext } from "../../App";

const VocabList = ({ searchResult, vocabData }) => {
  const vocabList = useContext(DiaryStateContext);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const listToDisplay = searchResult !== null ? searchResult : vocabList;
  const pageCount = Math.ceil(listToDisplay.length / itemsPerPage);
  const listRef = useRef(null);

  // 페이지를 누를 때 동작
  const handlePageClick = (event, page) => {
    setCurrentPage(page - 1);
  };

  // currentPage가 바뀔 때마다 동작
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  const currentItems = listToDisplay.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="VocabList" ref={listRef}>
      <section className="wordList_section">
        <div className="word_list_wrapper">
          {currentItems.map((item) => (
            <VocabItem key={item.num} {...item} />
          ))}
        </div>
      </section>
      {searchResult === null && (
        <section className="Paginationsection">
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              page={currentPage + 1}
              onChange={handlePageClick}
              variant="outlined"
              color="primary"
              shape="rounded"
              siblingCount={1} // 현재 페이지를 기준으로 표시할 페이지 수
              boundaryCount={1} // 양쪽 끝에 표시할 페이지 수
            />
          </Stack>
        </section>
      )}
    </div>
  );
};

export default VocabList;
