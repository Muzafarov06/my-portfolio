// src/hooks/useLocalizedData.js
import { useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { contacts } from '@/data/about';
import { skillGroups, languages } from '@/data/skills';
import { photos } from '@/data/photos';
import { designCategories } from '@/data/designCategories';
import {
  experience,
  EXPERIENCE_TYPES,
  EXPERIENCE_FILTERS,
} from '@/data/experience';
import { FEATURED, CHANNELS } from '@/data/contact';

/* ============================================================
   ГРУППЫ НАВЫКОВ
   ============================================================ */
export function useSkillGroups() {
  const { t } = useLanguage();
  return useMemo(
    () =>
      skillGroups.map((g) => {
        const i18n = t(`data.skillGroups.${g.id}`, { returnObjects: true });
        return {
          ...g,
          title:    (typeof i18n === 'object' && i18n?.title)    || g.title,
          subtitle: (typeof i18n === 'object' && i18n?.subtitle) || g.subtitle,
        };
      }),
    [t]
  );
}

/* ============================================================
   ЯЗЫКИ (в шапке Programming)
   ============================================================ */
export function useLanguages() {
  const { t } = useLanguage();
  return useMemo(
    () =>
      languages.map((l) => {
        const i18n = t(`data.languages.${l.name}`, { returnObjects: true });
        return typeof i18n === 'object' ? { ...l, ...i18n } : l;
      }),
    [t]
  );
}

/* ============================================================
   ОБО МНЕ — profile / intro / timeline / values / facts / ...
   ============================================================ */
export function useAboutData() {
  const { t } = useLanguage();
  return useMemo(() => {
    const g = (key) => t(`data.about.${key}`, { returnObjects: true });
    return {
      profile:        g('profile'),
      intro:          g('intro'),
      timeline:       g('timeline'),
      stats:          g('stats'),
      skillHighlight: g('skillHighlight'),
      values:         g('values'),
      facts:          g('facts'),
      lookingFor:     g('lookingFor'),
    };
  }, [t]);
}

/* ============================================================
   ФОТО (Home)
   ============================================================ */
export function usePhotos() {
  const { t } = useLanguage();
  return useMemo(
    () =>
      photos.map((p) => {
        const i18n = t(`data.photos.${p.id}`, { returnObjects: true });
        return typeof i18n === 'object' ? { ...p, ...i18n } : p;
      }),
    [t]
  );
}

/* ============================================================
   КОНТАКТЫ (About → ContactCard)
   ============================================================ */
export function useContacts() {
  const { t } = useLanguage();
  return useMemo(
    () =>
      contacts.map((c) => ({
        ...c,
        label: t(`data.contactLabels.${c.id}`),
      })),
    [t]
  );
}

/* ============================================================
   КАТЕГОРИИ ДИЗАЙНА (Design, DesignCategory)
   ============================================================ */
export function useDesignCategories() {
  const { t } = useLanguage();
  return useMemo(
    () =>
      designCategories.map((c) => {
        const i18n = t(`data.designCategories.${c.id}`, { returnObjects: true });
        const i18nObj = typeof i18n === 'object' && i18n !== null ? i18n : {};

        const subcategories = (c.subcategories || []).map((sub) => ({
          ...sub,
          label: t(`data.designSubcategories.${sub.id}`),
        }));

        return {
          ...c,
          title:            i18nObj.title            || c.title,
          subtitle:         i18nObj.subtitle         || c.subtitle,
          shortDescription: i18nObj.shortDescription || c.shortDescription,
          description:      i18nObj.description      || c.description,
          subcategories,
        };
      }),
    [t]
  );
}

/* ============================================================
   HEROES — тексты для hero-секций категорий дизайна
   ============================================================ */
export function useDesignHeroes() {
  const { t } = useLanguage();
  return useMemo(() => {
    const g = (key) => t(`data.designHeroes.${key}`, { returnObjects: true });
    return {
      infographics: g('infographics'),
      web:          g('web'),
      threeD:       g('threeD'),
      social:       g('social'),
    };
  }, [t]);
}

/* ============================================================
   ОПЫТ РАБОТЫ (Experience)
   ============================================================ */
export function useExperience() {
  const { t } = useLanguage();
  return useMemo(
    () =>
      experience
        .map((e) => {
          const i18n = t(`data.experience.${e.id}`, { returnObjects: true });
          const obj = typeof i18n === 'object' && i18n !== null ? i18n : {};
          return { ...e, ...obj };
        })
        .sort((a, b) => b.date.localeCompare(a.date)),
    [t]
  );
}

export function useExperienceTypes() {
  const { t } = useLanguage();
  return useMemo(
    () =>
      Object.fromEntries(
        Object.entries(EXPERIENCE_TYPES).map(([key, val]) => [
          key,
          { ...val, label: t(`data.experienceTypes.${key}`) },
        ])
      ),
    [t]
  );
}

export function useExperienceFilters() {
  const { t } = useLanguage();
  return useMemo(
    () =>
      EXPERIENCE_FILTERS.map((f) => ({
        ...f,
        label: t(`data.experienceFilters.${f.id}`),
      })),
    [t]
  );
}

/* ============================================================
   КОНТАКТНАЯ СТРАНИЦА — Featured (QR) + Channels
   ============================================================ */
export function useContactFeatured() {
  const { t } = useLanguage();
  return useMemo(
    () =>
      FEATURED.map((item) => {
        const i18n = t(`data.contactPage.featured.${item.id}`, { returnObjects: true });
        const obj = typeof i18n === 'object' && i18n !== null ? i18n : {};
        return { ...item, ...obj };
      }),
    [t]
  );
}

export function useContactChannels() {
  const { t } = useLanguage();
  return useMemo(
    () =>
      CHANNELS.map((c) => {
        const i18n = t(`data.contactPage.channels.${c.id}`, { returnObjects: true });
        const obj = typeof i18n === 'object' && i18n !== null ? i18n : {};
        return { ...c, ...obj };
      }),
    [t]
  );
}