import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/layout';
import { PageLoader } from '../components/ui';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}