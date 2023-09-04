import React, { useEffect } from "react";
import { useFetchAdvice } from "./hooks/useFetchAdvice";

function AdviceBox() {
  const { advice, loadAdvice } = useFetchAdvice();

  const handleClick = async () => {
    loadAdvice();
  };

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
