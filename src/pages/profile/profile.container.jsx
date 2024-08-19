import axios from "axios";
import ProfileUI from "./profile.presenter";
import { useEffect, useState } from "react";

export default function Profile() {
  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState([]);
  const endpoint = "http://165.229.125.137:8080";

  useEffect(() => {
    fetchWrongCategory();
  }, []);
  const fetchWrongCategory = async () => {
    try {
      const response = await axios.get(`${endpoint}/get-wrong-category`, {
        params: { id: "test" },
      });
      setCategories(response.data.map((item) => item.category));
      setCount(response.data.map((item) => item.count));
    } catch (err) {
      console.log("에러:", err);
    }
  };
  console.log("fff", categories);

  const datas = categories.map((category, index) => ({
    id: category,
    value: parseInt(count[index], 10),
  }));
  return <ProfileUI datas={datas} />;
}
