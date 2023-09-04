import { useEffect, useState } from "react";
// import { z } from "zod";

export function useFetchAdvice() {
  type Advice = {
    id: number;
    text: string;
  };

  const [advice, setAdvice] = useState<Advice>();
  const [isLoading, setIsLoading] = useState(false);

  const loadAdvice = () => {
    setIsLoading(true);
    return fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        let advice = {
          id: data.slip.id,
          text: data.slip.advice,
        };
        setAdvice(advice);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadAdvice();
  }, []);

  return { advice, isLoading, loadAdvice };
}
