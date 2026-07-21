import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function TypewriterStack() {
  const { t, language } = useLanguage();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setPhraseIndex(0);
    setDisplayed("");
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const phrases = t.home.typewriter;
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, phraseIndex, t]);

  return (
    <p className="text-sm font-mono text-violet-300/80 tracking-wider h-6">
      <span className="text-emerald-400/90">&gt; </span>
      {displayed}
      <span className="inline-block w-2 h-4 ml-0.5 bg-violet-400/80 animate-blink align-middle" />
    </p>
  );
}

export default TypewriterStack;
