// src/data/designCategories.js

/* ============================================================
   КАТЕГОРИИ ДИЗАЙНА — только технические поля
   Тексты (title/subtitle/shortDescription/description/subcategories.label)
   в locales/{ru,en}.js под data.designCategories.<id>
   ============================================================ */
export const designCategories = [
  {
    id: 'infographics',
    num: '01',
    compact: false,
    tags: ['Photoshop', 'Figma', 'Illustrator'],
    subcategories: [
      { id: 'handmade' },
      { id: 'kitchen' },
      { id: 'kids' },
      { id: 'clothing' },
      { id: 'tools' },
      { id: 'beauty' },
      { id: 'home' },
      { id: 'auto' },
      { id: 'garden' },
      { id: 'electronics' },
      { id: 'adult' },
    ],
  },
  {
    id: 'web',
    num: '02',
    compact: false,
    tags: ['Figma', 'Сетки', 'Типографика', 'UX'],
  },
  {
    id: '3d',
    num: '03',
    compact: true,
    tags: ['Blender', 'Substance', 'Spline'],
  },
  {
    id: 'social',
    num: '04',
    compact: true,
    tags: ['Figma', 'Photoshop', 'After Effects', 'SMM'],
  },
];