// src/pages/Contact/SectionHeading.jsx
export default function SectionHeading({ kicker, title }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400">
        <span className="w-8 h-px bg-current" />
        {kicker}
      </div>
      <h2 className="mt-5 font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-black dark:text-white leading-[1.02]">
        {title}
      </h2>
    </div>
  );
}