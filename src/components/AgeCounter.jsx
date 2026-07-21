import React from "react";
import { useAge } from "../hooks/useAge";
import { useLanguage } from "../context/LanguageContext";

const unitColors = [
  "from-violet-500 to-purple-600",
  "from-pink-500 to-rose-500",
  "from-orange-400 to-amber-500",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-fuchsia-500 to-pink-600",
];

function AgeCounter({ light = false }) {
  const age = useAge();
  const { t } = useLanguage();

  const units = [
    { value: age.years, label: t.age.years },
    { value: age.months, label: t.age.months },
    { value: age.days, label: t.age.days },
    { value: age.hours, label: t.age.hours },
    { value: age.minutes, label: t.age.minutes },
    { value: age.seconds, label: t.age.seconds },
  ];

  return (
    <div>
      <p
        className={`text-sm font-semibold mb-3 ${
          light ? "text-violet-400" : "text-white/80"
        }`}
      >
        {t.age.label}
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
        {units.map((unit, i) => (
          <div
            key={unit.label}
            className={`bg-gradient-to-br ${unitColors[i]} rounded-xl p-3 sm:p-4 text-center shadow-lg`}
          >
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-white/90 mt-1 font-medium">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeCounter;
