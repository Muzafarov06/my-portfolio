import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePhotos, useAboutData } from '@/hooks/useLocalizedData';
import { PhotoCarousel } from '@/components/widgets';
import { exportPortfolioPdf } from '@/utils/exportPdf';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const photos = usePhotos();
  const { profile } = useAboutData();
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = photos[activeIndex];

  const SKILL_CARDS = [
    { to: '/programming', num: '01', titleKey: 'home.skill1Title', textKey: 'home.skill1Text' },
    { to: '/design',      num: '02', titleKey: 'home.skill2Title', textKey: 'home.skill2Text' },
    { to: '/about',       num: '03', titleKey: 'home.skill3Title', textKey: 'home.skill3Text' },
  ];

  const handleExport = () => {
    exportPortfolioPdf({
      photos,
      name: `${profile.shortName}\n${profile.lastName}`,
      subtitle: t('home.role'),
      skills: [
        { num: '01', title: t('home.skill1Title'), text: t('home.skill1Text') },
        { num: '02', title: t('home.skill2Title'), text: t('home.skill2Text') },
        { num: '03', title: t('home.skill3Title'), text: t('home.skill3Text') },
      ],
    });
  };

  return (
    <div className="max-w-7xl mx-auto lg:px-6 lg:pt-6 lg:pb-24">
      {/* ================= МОБИЛЬНАЯ ================= */}
      <div className="lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 pt-4 pb-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-4 sm:w-6 md:w-10 h-px bg-gray-400 dark:bg-gray-600" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
              {t('home.kicker')}
            </span>
            <span className="w-4 sm:w-6 md:w-10 h-px bg-gray-400 dark:bg-gray-600" />
          </div>

          <h1 className="text-4xl leading-[1.05] mt-4 font-heading">
            {profile.shortName}<br />
            {profile.lastName}.
          </h1>
          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
            {t('home.role')}
          </p>
        </motion.div>

        <PhotoCarousel photos={photos} onActiveChange={setActiveIndex} />

        <div className="px-6 mt-8 flex flex-col gap-3">
          <Link
            to="/programming"
            className="px-6 py-4 bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-[0.2em] text-xs text-center border border-black dark:border-white/20 hover:opacity-80 transition"
          >
            {t('home.viewCode')}
          </Link>
          <Link
            to="/design"
            className="px-6 py-4 border border-black/30 dark:border-white/20 font-bold uppercase tracking-[0.2em] text-xs text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            {t('home.viewDesign')}
          </Link>
        </div>

        <section className="mt-24 px-6">
          <h2 className="text-3xl font-heading mb-6 border-b border-black/80 dark:border-white/30 pb-3 inline-block">
            {t('home.skillsTitle')}
          </h2>
          <div className="grid grid-cols-1 gap-0 border border-black/15 dark:border-white/10">
            {SKILL_CARDS.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className={`
                  p-8 group relative flex flex-col
                  bg-white text-black dark:bg-[#141414] dark:text-white
                  active:bg-black active:text-white dark:active:bg-white dark:active:text-black
                  hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                  transition-colors duration-300
                  ${i < 2 ? 'border-b border-black/15 dark:border-white/10' : ''}
                `}
              >
                <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400
                                 group-hover:text-gray-400 dark:group-hover:text-gray-600 transition-colors duration-300">
                  {item.num}
                </span>
                <h3 className="text-2xl font-heading mt-4 mb-4 break-words">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm leading-relaxed break-words
                              text-gray-700 dark:text-gray-300
                              group-hover:text-gray-300 dark:group-hover:text-gray-700 transition-colors duration-300">
                  {t(item.textKey)}
                </p>
                <span className="absolute top-8 right-8 text-xl opacity-0
                                 group-active:opacity-100 group-active:translate-x-1
                                 group-hover:opacity-100 group-hover:translate-x-1
                                 transition-all duration-300">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-4 sm:w-6 md:w-10 h-px bg-gray-400 dark:bg-gray-600" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
                {t('home.kicker')}
              </span>
              <span className="w-4 sm:w-6 md:w-10 h-px bg-gray-400 dark:bg-gray-600" />
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-8xl leading-[0.9] mb-6 md:mb-10">
              {profile.shortName}<br />
              {profile.lastName}.
            </h1>

            <div className="h-44 flex flex-col justify-center border-l-2 border-black/80 dark:border-white/30 pl-6 mt-4">
              <motion.div
                key={activePhoto.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  {activePhoto.period}
                </span>
                <h2 className="text-2xl md:text-3xl font-heading mt-2">{activePhoto.title}</h2>
                <p className="text-base md:text-lg mt-2 max-w-md text-gray-700 dark:text-gray-300 leading-relaxed">
                  {activePhoto.description}
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/programming"
                className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-[0.2em] text-xs hover:opacity-80 transition text-center border border-black dark:border-white/20"
              >
                {t('home.viewCode')}
              </Link>
              <Link
                to="/design"
                className="px-8 py-4 border border-black/30 dark:border-white/20 font-bold uppercase tracking-[0.2em] text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-center"
              >
                {t('home.viewDesign')}
              </Link>
            </div>
          </motion.div>

          <div className="relative -mr-12 md:-mr-24 lg:-mr-32 h-[600px] md:h-[750px] z-0">
            <PhotoCarousel photos={photos} onActiveChange={setActiveIndex} />
          </div>
        </div>

        <section className="relative z-20 -mt-32 pt-5">
          <h2 className="text-3xl md:text-5xl font-heading mb-12 pb-4 border-b border-black/80 dark:border-white/30 inline-block">
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
    </div>
  );
}