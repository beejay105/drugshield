import { useEffect, useState } from 'react';
import { navigationItems } from './data/navigation';
import { MainLayout } from './layouts/MainLayout';
import { AISupportPage } from './pages/AISupportPage';
import { AssessmentPage } from './pages/AssessmentPage';
import { EducationPage } from './pages/EducationPage';
import { HelpFinderPage } from './pages/HelpFinderPage';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { AppPage } from './types/app';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';

function App() {
  const [activePage, setActivePage] = useState<AppPage>('home');
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 250);
    return () => window.clearTimeout(timer);
  }, []);

  if (hasError) {
    return <ErrorState message="The application could not load the requested page." />;
  }

  const renderPage = () => {
    switch (activePage) {
      case 'education':
        return <EducationPage />;
      case 'assessment':
        return <AssessmentPage />;
      case 'ai-support':
        return <AISupportPage />;
      case 'help-finder':
        return <HelpFinderPage />;
      case 'profile':
        return <ProfilePage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <MainLayout
      navigationItems={navigationItems}
      activePage={activePage}
      onPageChange={setActivePage}
      title="DrugShield"
      subtitle="Prevention • Education • Recovery support"
    >
      {!isReady ? <LoadingState message="Loading your DrugShield workspace..." /> : renderPage()}
    </MainLayout>
  );
}

export default App;
