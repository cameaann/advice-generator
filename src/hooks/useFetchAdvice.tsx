import { useEffect, useState } from "react";
// import { z } from "zod";

export function useFetchAdvice() {
  //   const fetchData = () => {
  //     return fetch("https://api.adviceslip.com/advice")
  //         .then((response) => response.json())
  //         .then((data) => {
  //             let advice = {
  //                 id: data.slip.id,
  //                 text: data.slip.advice
  //             }
  //             setAdvice(advice);
  //         } )

  //     }

  type Advice = {
    id: number;
    text: string;
  };

  const [advice, setAdvice] = useState<Advice>();

  useEffect(() => {
    // fetchData();
    setAdvice({
        id: 1,
        text: "my advice",
      })
  }, []);

  return [advice];
}
