import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

const Home           = lazy(() => import('../../pages/Home'));
const About          = lazy(() => import('../../pages/About'));
const Programming    = lazy(() => import('../../pages/Programming'));
const ProjectDetail  = lazy(() => import('../../pages/ProjectDetail'));
const Experience     = lazy(() => import('../../pages/Experience'));
const Design         = lazy(() => import('../../pages/Design'));
const DesignCategory = lazy(() => import('../../pages/DesignCategory'));
const DesignWork     = lazy(() => import('../../pages/DesignWork'));
const Contact        = lazy(() => import('../../pages/Contact'));
const NotFound       = lazy(() => import('../../pages/NotFound'));

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programming" element={<Programming />} />
        <Route path="programming/:id" element={<ProjectDetail />} />
        <Route path="experience" element={<Experience />} />
        <Route path="design" element={<Design />} />
        <Route path="design/:categoryId" element={<DesignCategory />} />
        <Route path="design/:categoryId/:workId" element={<DesignWork />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}