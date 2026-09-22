// src/pages/Experience/StarField.jsx
import Star from './Star';

export default function StarField() {
  const stars = [
    { x: 6,  y: 18, s: 2.5, o: 0.35 },
    { x: 14, y: 42, s: 1.8, o: 0.25 },
    { x: 22, y: 12, s: 2.2, o: 0.45 },
    { x: 31, y: 68, s: 1.6, o: 0.30 },
    { x: 44, y: 24, s: 2.8, o: 0.40 },
    { x: 52, y: 78, s: 2.0, o: 0.30 },
    { x: 61, y: 36, s: 1.7, o: 0.28 },
    { x: 70, y: 58, s: 2.4, o: 0.42 },
    { x: 78, y: 20, s: 2.0, o: 0.32 },
    { x: 86, y: 74, s: 2.6, o: 0.38 },
    { x: 92, y: 44, s: 1.8, o: 0.26 },
    { x: 96, y: 16, s: 2.2, o: 0.34 },
  ];

  const links = [
    [0, 2], [2, 4], [4, 6], [6, 7], [7, 9], [9, 10],
    [1, 3], [3, 5], [5, 8], [8, 11],
  ];

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none
                 text-black dark:text-white
                 opacity-[0.14] dark:opacity-25"
      preserveAspectRatio="none"
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={`${stars[a].x}%`}
          y1={`${stars[a].y}%`}
          x2={`${stars[b].x}%`}
          y2={`${stars[b].y}%`}
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
        />
      ))}

      {stars.map((st, i) => (
        <g key={i} transform={`translate(${st.x}%, ${st.y}%)`}>
          <Star size={st.s * 3} opacity={st.o} />
        </g>
      ))}
    </svg>
  );
}