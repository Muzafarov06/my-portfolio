// src/pages/Contact/QRFrame.jsx
export default function QRFrame({ src, alt }) {
  return (
    <div className="relative inline-block">
      <div className="pointer-events-none absolute inset-0 -m-10 rounded-full bg-gradient-to-br from-black/[0.06] to-transparent dark:from-white/[0.12] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

      <span className="pointer-events-none absolute -top-5 -left-5 w-5 h-5 border-t border-l border-black/40 dark:border-white/40 transition-all duration-500 group-hover:-top-7 group-hover:-left-7" />
      <span className="pointer-events-none absolute -top-5 -right-5 w-5 h-5 border-t border-r border-black/40 dark:border-white/40 transition-all duration-500 group-hover:-top-7 group-hover:-right-7" />
      <span className="pointer-events-none absolute -bottom-5 -left-5 w-5 h-5 border-b border-l border-black/40 dark:border-white/40 transition-all duration-500 group-hover:-bottom-7 group-hover:-left-7" />
      <span className="pointer-events-none absolute -bottom-5 -right-5 w-5 h-5 border-b border-r border-black/40 dark:border-white/40 transition-all duration-500 group-hover:-bottom-7 group-hover:-right-7" />

      <img
        src={src}
        alt={alt}
        width={280}
        height={280}
        loading="lazy"
        className="block w-[200px] h-[200px] md:w-[240px] md:h-[240px]"
      />
    </div>
  );
}