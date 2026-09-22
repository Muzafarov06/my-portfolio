// src/pages/DesignCategory/utils.js

/**
 * Достаёт URL из картинки проекта.
 * Работает и со строкой, и с объектом { src, title, description }.
 */
export const getImageSrc = (img) => {
  if (!img) return null;
  return typeof img === 'string' ? img : img.src;
};