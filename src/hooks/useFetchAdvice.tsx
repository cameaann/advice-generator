import { useEffect, useState } from "react";
// import { z } from "zod";

export function useFetchAdvice() {
  type Advice = {
    id: number;
    text: string;
  };

  const [advice, setAdvice] = useState<Advice>();

  const loadAdvice = () => {
    return fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        let advice = {
          id: data.slip.id,
          text: data.slip.advice,
        };
        setAdvice(advice);
      });
  };

  useEffect(() => {
    loadAdvice();
  }, []);

  return { advice, loadAdvice };
}
