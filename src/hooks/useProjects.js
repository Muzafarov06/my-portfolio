// src/hooks/useProjects.js
import { useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projects, PROJECT_TYPES } from '@/data/projects';

/* Склеивает технические данные проекта с переводами и подписями картинок */
function mergeProject(base, i18nData) {
  if (!i18nData || typeof i18nData !== 'object') return base;

  const images = (base.images || []).map((img, i) => {
    const label = i18nData.images?.[i] || {};
    return { ...img, title: label.title || '', description: label.description || '' };
  });

  return {
    ...base,
    title:            i18nData.title            || base.title,
    subtitle:         i18nData.subtitle         || base.subtitle,
    shortDescription: i18nData.shortDescription || base.shortDescription,
    description:      i18nData.description      || base.description,
    tasks:            i18nData.tasks            || base.tasks,
    result:           i18nData.result           || base.result,
    images,
  };
}

export function useProjects() {
  const { t } = useLanguage();
  return useMemo(
    () =>
      projects.map((p) =>
        mergeProject(p, t(`data.projects.${p.id}`, { returnObjects: true }))
      ),
    [t]
  );
}

export function useProject(id) {
  const { t } = useLanguage();
  return useMemo(() => {
    const base = projects.find((p) => p.id === id);
    if (!base) return null;
    return mergeProject(base, t(`data.projects.${id}`, { returnObjects: true }));
  }, [id, t]);
}

export function useProjectTypes() {
  const { t } = useLanguage();
  return useMemo(
    () =>
      Object.fromEntries(
        Object.entries(PROJECT_TYPES).map(([key, val]) => [
          key,
          { ...val, label: t(`data.projectTypes.${key}`) },
        ])
      ),
    [t]
  );
}