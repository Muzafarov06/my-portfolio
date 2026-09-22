// src/app/App.jsx
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import ErrorBoundary from './ErrorBoundary';
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <ErrorBoundary>
      <MotionConfig reducedMotion="user">
        <ThemeProvider>
          <LanguageProvider>
            <AppRouter />
          </LanguageProvider>
        </ThemeProvider>
      </MotionConfig>
    </ErrorBoundary>
  );
}