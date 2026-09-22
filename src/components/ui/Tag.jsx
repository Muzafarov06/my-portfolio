export default function Tag({ children }) {
  return (
    <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.2em] border border-black/30 dark:border-white/30">
      {children}
    </span>
  );
}