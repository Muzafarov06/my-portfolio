// src/pages/DesignCategory/FilterChip.jsx
export default function FilterChip({ active, onClick, label, count, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        'relative inline-flex items-center gap-2',
        'px-3.5 md:px-5 py-1.5 md:py-2 rounded-full',
        'text-[11px] md:text-xs font-medium tracking-tight whitespace-nowrap',
        'border transition-all duration-300',
        disabled
          ? 'border-black/10 dark:border-white/10 text-gray-300 dark:text-gray-700 cursor-not-allowed'
          : active
            ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'
            : 'border-black/15 dark:border-white/15 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white hover:bg-black/[0.03] dark:hover:bg-white/[0.03]',
      ].join(' ')}
    >
      <span>{label}</span>
      <span className={[
        'text-[9px] tabular-nums',
        active && !disabled ? 'text-white/60 dark:text-black/50' : 'text-gray-400 dark:text-gray-500',
      ].join(' ')}>
        {String(count).padStart(2, '0')}
      </span>
    </button>
  );
}