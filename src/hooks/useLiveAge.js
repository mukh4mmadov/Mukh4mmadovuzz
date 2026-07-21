import { useState, useEffect } from "react";

const BIRTH_DATE = new Date(2007, 10, 19);

function calculateAge(from, to) {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalMs = to - from;
  const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(totalMs / (1000 * 60 * 60));

  return { years, months, days, totalDays, totalHours };
}

export function useLiveAge() {
  const [age, setAge] = useState(() => calculateAge(BIRTH_DATE, new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge(BIRTH_DATE, new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return age;
}

export { BIRTH_DATE };
