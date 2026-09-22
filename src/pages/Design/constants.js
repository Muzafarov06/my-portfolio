// src/pages/Design/constants.js

export const EASE = [0.22, 1, 0.36, 1];

/* ============================================================
   ИНСТРУМЕНТЫ
   labelKey — ключ перевода, items — не переводятся (названия)
   ============================================================ */
export const TOOL_GROUPS = [
  {
    id: 'graphics',
    labelKey: 'design.toolGroups.graphics',
    items: ['Figma', 'Photoshop', 'Illustrator', 'InDesign', 'Canva', 'Procreate'],
  },
  {
    id: 'threeD',
    labelKey: 'design.toolGroups.threeD',
    items: ['Blender', 'Substance Painter', 'After Effects', 'Spline'],
  },
  {
    id: 'diagrams',
    labelKey: 'design.toolGroups.diagrams',
    items: ['MS Visio', 'draw.io', 'BPMN', 'IDEF0', 'IDEF1X', 'IDEF3', 'UML', 'Use Case'],
  },
  {
    id: 'ai',
    labelKey: 'design.toolGroups.ai',
    items: ['ChatGPT', 'DeepSeek', 'Claude', 'Midjourney', 'Stable Diffusion', 'Sora'],
  },
];

/* ============================================================
   ПРОЦЕСС — все тексты в локалях
   ============================================================ */
export const PROCESS_STEP_KEYS = [
  { num: '01', titleKey: 'design.process.step1Title', textKey: 'design.process.step1Text' },
  { num: '02', titleKey: 'design.process.step2Title', textKey: 'design.process.step2Text' },
  { num: '03', titleKey: 'design.process.step3Title', textKey: 'design.process.step3Text' },
  { num: '04', titleKey: 'design.process.step4Title', textKey: 'design.process.step4Text' },
  { num: '05', titleKey: 'design.process.step5Title', textKey: 'design.process.step5Text' },
];

/* ============================================================
   СМЕЩЕНИЯ ДЛЯ DRAG-ПЛАШЕК
   ============================================================ */
export const OFFSETS = [
  { x: 0, y: 0 },
  { x: -6, y: 3 },
  { x: 5, y: -4 },
  { x: -3, y: 6 },
  { x: 8, y: -2 },
  { x: -5, y: -5 },
  { x: 3, y: 5 },
  { x: -7, y: 2 },
];