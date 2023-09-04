import React, { useEffect, useState } from "react";
import { useFetchAdvice } from "./hooks/useFetchAdvice";

function AdviceBox() {
  // const [advice, setAdvice] = useState<{ message: string; index: number }>();
  const [ advice ] = useState({
      id: 1,
      text: "my advice"
  });
  //useFetchAdvice();

  useEffect(() => {
  //   const item = useFetchAdvice;
  //   setAdvice(item);
  //   console.log(item);
  }, []);
  // console.log(item);

  const handleClick = async () => {};

  return (
    <div className="advice">
      <h1 className="advice-header">Advice # {advice?.id} </h1>
      <div className="advice-text">{advice?.text}</div>
      <div className="advice-decoration"></div>
      <button className="btn-dice" onClick={handleClick}></button>
    </div>
  );
}

export default AdviceBox;
