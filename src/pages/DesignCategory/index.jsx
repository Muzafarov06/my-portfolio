// src/pages/DesignCategory/index.jsx
import { useParams, Navigate } from 'react-router-dom';
import { useDesignCategories } from '@/hooks/useLocalizedData';
import { getWorksByCategory } from '@/data/designWorks';
import WorksGallery from './WorksGallery';
import {
  InfographicsHero,
  WebHero,
  ThreeDHero,
  SocialHero,
  DefaultHero,
} from './heroes';

const HERO_BY_ID = {
  infographics: InfographicsHero,
  web: WebHero,
  '3d': ThreeDHero,
  social: SocialHero,
};

export default function DesignCategory() {
  const { categoryId } = useParams();
  const categories = useDesignCategories();
  const category = categories.find((c) => c.id === categoryId);
  const works = getWorksByCategory(categoryId);

  if (!category) return <Navigate to="/design" replace />;

  const Hero = HERO_BY_ID[categoryId] || DefaultHero;
  const subcategories = category.subcategories || null;

  return (
    <div className="relative">
      <Hero category={category} works={works} />
      <WorksGallery works={works} categoryId={category.id} subcategories={subcategories} />
    </div>
  );
}