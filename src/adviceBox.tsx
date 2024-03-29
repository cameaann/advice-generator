import { useFetchAdvice } from "./hooks/useFetchAdvice";

function AdviceBox() {
  const { advice, isLoading, loadAdvice } = useFetchAdvice();

  const handleClick = async () => {
    loadAdvice();
  };

  return (
    <div className="advice">
      {isLoading ? (
        <div className="advice-loader">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <h1 className="advice-header" id="advice">
            Advice # {advice?.id}{" "}
          </h1>
          <div className="advice-text">{advice?.advice}</div>
        </>
      )}
      <div className="advice-decoration"></div>
      <button type="button" className="btn-dice" aria-label="Get advice" onClick={handleClick}></button>
    </div>
  );
}

export default AdviceBox;
