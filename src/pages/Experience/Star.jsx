// src/pages/Experience/Star.jsx
export default function Star({ size = 10, filled = false, opacity = 1 }) {
  const d = `M 0 -${size} L ${size * 0.22} -${size * 0.22} L ${size} 0
             L ${size * 0.22} ${size * 0.22} L 0 ${size}
             L -${size * 0.22} ${size * 0.22} L -${size} 0
             L -${size * 0.22} -${size * 0.22} Z`;

  return (
    <svg
      width={size * 2}
      height={size * 2}
      viewBox={`-${size} -${size} ${size * 2} ${size * 2}`}
      style={{ opacity }}
      className="shrink-0"
    >
      <path
        d={d}
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 0.8}
        strokeLinejoin="round"
      />
    </svg>
  );
}