import React from "react";

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-indigo-500/15 blur-3xl animate-float-medium" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-fuchsia-600/10 blur-3xl animate-float-fast" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.4)_70%)]" />

      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-violet-400/60 animate-twinkle"
            style={{
              top: `${(i * 17 + 7) % 100}%`,
              left: `${(i * 23 + 11) % 100}%`,
              animationDelay: `${(i * 0.4) % 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBackground;
