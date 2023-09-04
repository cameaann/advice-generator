import { useEffect, useState } from "react";
// import { z } from "zod";


export function useFetchAdvice() {
    // creating a schema for strings
    // const Advice = z.object({
    //     message: z.string(),
    //     index: z.number()

    //   });

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



    type Advice ={
        id: number,
        text: string
    }

    const [advice, setAdvice] = useState<Advice>({
        id: 1,
        text: "my advice"
    });


//   useEffect(() => {
//     fetchData();
//   });

  return [ advice ];
}
