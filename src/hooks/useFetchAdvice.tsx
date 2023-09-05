import { useEffect, useState } from "react";
import { z } from "zod";

export function useFetchAdvice() {

  const AdviceSchema = z.object({
    id: z.number(),
    advice: z.string(),
  });

  type AdviceType = z.infer<typeof AdviceSchema>;

  const [advice, setAdvice] = useState<AdviceType>();
  const [isLoading, setIsLoading] = useState(false);

  const loadAdvice = () => {
    setIsLoading(true);
    return fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        try {
          let advice = AdviceSchema.parse(data.slip);
          setAdvice(advice);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
      });
  };

  useEffect(() => {
    loadAdvice();
  }, []);

  return { advice, isLoading, loadAdvice };
}
