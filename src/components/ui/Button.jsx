import { Link } from 'react-router-dom';

/**
 * Универсальная кнопка/ссылка.
 * variant: 'primary' | 'outline' | 'ghost'
 * size: 'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}) {
  const base = 'inline-flex items-center justify-center font-bold uppercase tracking-[0.15em] transition-all duration-300 border';

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  };

  const variants = {
    primary:
      'bg-black text-white border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white',
    outline:
      'bg-transparent text-black border-black hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black',
    ghost:
      'bg-transparent text-black border-transparent hover:bg-black/5 dark:text-white dark:hover:bg-white/10',
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  return <button onClick={onClick} className={cls} {...rest}>{children}</button>;
}