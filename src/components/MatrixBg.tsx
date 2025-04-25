
import React from 'react';

const MatrixBg = () => {
  return (
    <div className="matrix-bg">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="number-row text-cyber-blue/10 text-xs font-mono"
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <span
              key={j}
              className="inline-block mx-1 animate-matrix-fall"
              style={{
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            >
              {Math.round(Math.random())}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixBg;
