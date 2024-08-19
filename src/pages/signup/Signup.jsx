// import "./Signup.css";
// import { useState, useRef } from "react";
// import axios from "axios";

// const SignUp = ({ onCreate }) => {
//   const [Id, setId] = useState("");
//   const IdRef = useRef();

//   const onChangeId = (e) => {
//     setId(e.target.value);
//   };
//   const onSubmit = () => {
//     if (Id === "") {
//       IdRef.current.focus();
//       return;
//     } else if (Id.length < 6 || Id.length > 20) {
//       console.log("fail");
//       return;
//     } else {
//       console.log("success");
//     }
//     onCreate(Id);
//     setId("");
//   };

//   const onKeyDown = (e) => {
//     if (e.keyCode === 13) {
//       onSubmit();
//     }
//   };
//   return (
//     <div className="Sign">
//       <h2>회원가입</h2>
//       <div className="info">
//         <span>아이디</span>
//         <div className="confirm">
//           <input
//             ref={IdRef}
//             value={Id}
//             onChange={onChangeId}
//             onKeyDown={onKeyDown}
//             placeholder="아이디를 입력(6~20자)"
//           />
//           <button onClick={onSubmit}>중복검사</button>
//         </div>
//         <span>비밀번호</span>
//         <input
//           type="password"
//           placeholder="비밀번호를 입력(문자,숫자,특수문자포함 4~10)"
//         />
//         <span>비밀번호 확인</span>
//         <input type="password" placeholder="비밀번호 재입력" />
//         <span>관심기사자격증</span>
//         <select name="certificate">
//           <option value="">정보처리기사</option>
//           <option value="">위험물산업안전기사</option>
//           <option value="">전기기사</option>
//         </select>
//       </div>
//       <button>가입</button>
//     </div>
//   );
// };
// export default SignUp;

import "./Signup.css";
import { useState, useRef } from "react";
import axios from "axios";
import CustomButton from "../../component/CustomButton";

const SignUp = ({ onCreate }) => {
  const [Id, setId] = useState("");
  const [checkMessage, setCheckMessage] = useState("");
  const [pass, setPass] = useState("");
  const IdRef = useRef();

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const checkId = async () => {
    if (Id === "") {
      IdRef.current.focus();
      return;
    } else if (Id.length < 6 || Id.length > 20) {
      console.log("fail");
      return;
    } else {
      console.log("success");
    }
    onCreate(Id);
    setId("");
    try {
      const response = await axios.get("http://165.229.125.107:8080/checkId", {
        params: { id: Id },
      });
      if (response.data === "no") {
        setCheckMessage("아이디가 중복됩니다.");
      } else {
        setCheckMessage("사용 가능한 아이디입니다.");
      }
    } catch (error) {
      console.error("중복 검사 요청 중 에러 발생:", error);
      setCheckMessage("중복 검사 중 오류가 발생했습니다.");
    }
  };

  // const onSubmit = () => {
  //   if (Id === "") {
  //     IdRef.current.focus();
  //     return;
  //   } else if (Id.length < 6 || Id.length > 20) {
  //     console.log("fail");
  //     return;
  //   } else {
  //     console.log("success");
  //   }
  //   onCreate(Id);
  //   setId("");
  // };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const sign = async () => {
    try {
      const response = await axios.post("http://165.229.125.107:8080/signUP", {
        params: { id: Id, pass: pass },
      });
      if (response.data === "no") {
        setCheckMessage("비밀번호가 같지 않다.");
      } else {
        setCheckMessage("사용 가능한 비밀번호이다.");
      }
    } catch (error) {
      console.error("비밀번호 검사중 오류 발생:", error);
      setCheckMessage("비밀번호 검사중 오류 발생");
    }
  };
  return (
    <div className="SignContainer">
      <div className="Sign">
        <h2>회원가입</h2>
        <div className="info">
          <span>아이디</span>
          <div className="confirm">
            <input
              ref={IdRef}
              value={Id}
              onChange={onChangeId}
              onKeyDown={onKeyDown}
              placeholder="아이디를 입력(6~20자)"
            />
          </div>
          <CustomButton onClick={checkId} text={"중복검사"} />
          {checkMessage && <p>{checkMessage}</p>}
          <span>비밀번호</span>
          <input
            type="password"
            placeholder="비밀번호를 입력(문자,숫자,특수문자포함 4~10)"
          />
          <span>비밀번호 확인</span>
          <div className="pass">
            <input type="password" placeholder="비밀번호 재입력" />
          </div>
          <CustomButton text={"비밀번호 확인"} />
          <span>관심기사자격증</span>
          <select name="certificate">
            <option value="">정보처리기사</option>
            <option value="">위험물산업안전기사</option>
            <option value="">전기기사</option>
          </select>
          <CustomButton text={"가입"} />
        </div>
      </div>
    </div>
  );
};
export default SignUp;
