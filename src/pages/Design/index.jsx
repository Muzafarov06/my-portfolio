// src/pages/Design/index.jsx
import { useLanguage } from '@/context/LanguageContext';
import { useDesignCategories } from '@/hooks/useLocalizedData';
import DesignHero from './DesignHero';
import ToolsSection from './ToolsSection';
import ProcessSection from './ProcessSection';
import CategoriesSection from './CategoriesSection';
import Divider from './components/Divider';

export default function Design() {
  const { t } = useLanguage();
  const categories = useDesignCategories();

  return (
    <div className="relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      <DesignHero />
      <Divider />
      <ToolsSection />
      <Divider />
      <ProcessSection />
      <Divider />
      <CategoriesSection categories={categories} />
    </div>
  );
}