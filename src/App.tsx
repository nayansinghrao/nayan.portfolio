import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HomeScreen } from './screens/HomeScreen';
import { PortfolioPdfView } from './screens/PortfolioPdfView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');

  // Enforce browser tab title in every file / state
  useEffect(() => {
    document.title = 'Nayan Singh Rao | Graphic Designer';
  }, []);

  // Sync with URL Hash and Search query params for smooth scrolling and pdf view
  useEffect(() => {
    const handleLocationChange = () => {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('view') === 'pdf' || searchParams.has('pdf')) {
        setCurrentTab('pdf');
        return;
      }

      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'pdf') {
        setCurrentTab('pdf');
        return;
      }

      setCurrentTab('home');

      if (['home', 'work', 'about', 'skills', 'experience', 'contact'].includes(hash)) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    if (currentTab === 'pdf') {
      setCurrentTab('home');
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${sectionId}`);
      }, 100);
    } else {
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${sectionId}`);
      }
    }
  };

  // If in dedicated PDF document view
  if (currentTab === 'pdf') {
    return <PortfolioPdfView onBack={() => handleNavigateSection('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] dark:bg-[#0d0e0f] dark:text-[#f3f2ee] flex flex-col antialiased selection:bg-[#ff5a1f] selection:text-white relative transition-colors duration-250 overflow-x-hidden">
      {/* Subtle Scroll Progress Bar at the top of the viewport */}
      <ScrollProgressBar />

      {/* Top Fixed Header with 6 section anchors, in-view highlighting, and mobile drawer */}
      <Header onNavigateSection={handleNavigateSection} />

      {/* Main Single-Page Content with #home, #work, #about, #skills, #experience, #contact */}
      <main className="flex-1 w-full pt-20 flex flex-col items-center">
        <HomeScreen onNavigateSection={handleNavigateSection} />
      </main>

      {/* Bottom Footer */}
      <Footer />

      {/* Floating Back-to-Top Button */}
      <BackToTop />
    </div>
  );
}
