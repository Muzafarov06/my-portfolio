import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { HeroBlock } from '@/components/about';

export default function Home() {
  const { t } = useLanguage();

  const SKILL_CARDS = [
    { to: '/programming', num: '01', titleKey: 'home.skill1Title', textKey: 'home.skill1Text' },
    { to: '/design',      num: '02', titleKey: 'home.skill2Title', textKey: 'home.skill2Text' },
    { to: '/about',       num: '03', titleKey: 'home.skill3Title', textKey: 'home.skill3Text' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      {/* HERO — портрет + имя + плашка (переехало со страницы «Обо мне») */}
      <HeroBlock />

      {/* ЧТО Я УМЕЮ */}
      <section className="mt-32 md:mt-48">
        <h2 className="text-3xl md:text-5xl font-heading mb-10 md:mb-12 pb-4 border-b border-black/80 dark:border-white/30 inline-block">
          {t('home.skillsTitle')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/15 dark:border-white/10">
          {SKILL_CARDS.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className={`
                p-8 md:p-12 group relative flex flex-col
                bg-white text-black dark:bg-[#141414] dark:text-white
                hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                transition-colors duration-300
                ${i < 2 ? 'border-b md:border-b-0 md:border-r border-black/15 dark:border-white/10' : ''}
              `}
            >
              <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400
                               group-hover:text-gray-400 dark:group-hover:text-gray-600 transition-colors duration-300">
                {item.num}
              </span>
              <h3 className="text-2xl md:text-3xl font-heading mt-4 mb-4 break-words">
                {t(item.titleKey)}
              </h3>
              <p className="text-sm md:text-base leading-relaxed break-words
                            text-gray-700 dark:text-gray-300
                            group-hover:text-gray-300 dark:group-hover:text-gray-700 transition-colors duration-300">
                {t(item.textKey)}
              </p>
              <span className="absolute top-8 right-8 text-xl opacity-0 group-hover:opacity-100
                               group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}