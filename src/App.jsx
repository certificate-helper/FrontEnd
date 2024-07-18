import { useState, useRef } from "react";
import "./App.css";
import SignUp from "./signup/Signup";

const idData = [
  {
    num: 0,
    id: "example",
    date: new Date().getTime(),
  },
];

function App() {
  const [Ids, setIds] = useState(idData);
  const idRef = useRef(idData.length);

  const onCreate = (Id) => {
    const newId = {
      num: idRef.current++,
      id: Id,
      date: new Date().getTime(),
    };
    setIds([...Ids, newId]);
  };

  return (
    <div className="App">
      <SignUp onCreate={onCreate} idData={idData} />
    </div>
  );
}

export default App;
