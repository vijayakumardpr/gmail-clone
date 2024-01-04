import { useEffect, useState } from "react";

const useMessages = (URL) => {
  const [data, setData] = useState([]);

  async function handleData() {
    const response = await fetch(URL);
    const datas = await response.json();
    setData(datas);
  }

  useEffect(() => {
    handleData();
  }, []);

  return {
    data,
    setData,
  };
};

export default useMessages;
