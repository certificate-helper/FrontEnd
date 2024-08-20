import logoImg from "/src/assets/logo.svg";
import CustomButton from "../../component/CustomButton";
import "./lastPage.css";
import { useNavigate } from "react-router-dom";
export default function lastPage() {
  const nav = useNavigate();
  return (
    <div className="lastWrapper">
      <div className="LastBox">
        <h1>
          실제 기사 시험과 동일한 CBT환경,
          <br />
          AI 기반으로 빠르고 쉽게 합격을 준비하세요!
        </h1>
        <img
          className="logoImg"
          src={logoImg}
          alt="로고이미지"
          onClick={() => nav("/home")}
        />
      </div>
    </div>
  );
}
