import { useEffect, useState } from "react";
import { BIRTH_DATE, calculateAge } from "../utils/age";

export function useAge() {
  const [age, setAge] = useState(() => calculateAge(BIRTH_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setAge(calculateAge(BIRTH_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return age;
}
