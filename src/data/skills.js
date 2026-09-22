// ✅ Навыки, сгруппированные по категориям
export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Интерфейс',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'React Router',
      'Tailwind CSS',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Серверная логика',
    items: [
      'Python',
      'PyQt',
      'Java',
      'Spring Boot',
      'Spring Security',
      'Hibernate',
      'Flyway',
      'C#',
      '1С',
      'Node.js',
    ],
  },
  {
    id: 'database',
    title: 'Базы данных',
    subtitle: 'Хранение и запросы',
    items: [
      'SQL',
      'PostgreSQL',
      'MySQL',
      'MS SQL',
      'pgAdmin',
    ],
  },
  {
    id: 'tools',
    title: 'Инструменты',
    subtitle: 'Разработка',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Visual Studio',
      'IntelliJ IDEA',
      'PyCharm',
    ],
  },
  {
    id: 'design',
    title: 'Проектирование',
    subtitle: 'Анализ и моделирование',
    items: [
      'Разработка ТЗ',
      'Моделирование процессов',
      'Системный анализ',
      'Проектирование БД',
      'UML',
      'BPMN',
    ],
  },
  {
    id: 'diagrams',
    title: 'Диаграммы и нотации',
    subtitle: 'Схемы и модели',
    items: [
      'IDEF0',
      'IDEF1X',
      'IDEF3',
      'Use Case',
      'Блок-схемы алгоритмов',
      'Диаграммы классов',
      'Контекстные диаграммы (DFD)',
      'Диаграммы Ганта',
    ],
  },
  {
    id: 'office',
    title: 'Документация',
    subtitle: 'Схемы и тексты',
    items: [
      'MS Word',
      'MS Excel',
      'MS PowerPoint',
      'MS Visio',
      'draw.io',
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    subtitle: 'Личные качества',
    items: [
      'Работа в команде',
      'Code Review',
      'Работа с документацией',
      'Деловая переписка',
      'Стрессоустойчивость',
      'Внимательность к деталям',
    ],
  },
];

// Языки — вынесем отдельно
export const languages = [
  { name: 'Русский', level: 'Родной' },
  { name: 'Узбекский', level: 'C1' },
  { name: 'English', level: 'A2' }, // поправь под себя
];