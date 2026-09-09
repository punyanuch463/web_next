"use client";

const HEARTS = ["💗", "💕", "🩷", "✨", "💞", "🌸"];

// Deterministic pseudo-random so server and client markup match.
function seeded(i, salt) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export default function Hearts({ count = 14 }) {
  return (
    <div className="hearts" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${seeded(i, 1) * 100}%`,
            fontSize: `${14 + seeded(i, 2) * 22}px`,
            animationDuration: `${9 + seeded(i, 3) * 9}s`,
            animationDelay: `${-seeded(i, 4) * 18}s`,
            opacity: 0.35 + seeded(i, 5) * 0.45,
          }}
        >
          {HEARTS[Math.floor(seeded(i, 6) * HEARTS.length)]}
        </span>
      ))}
    </div>
  );
}
