import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { QuickHireModal } from './components/QuickHireModal';
import { UploadPdfModal } from './components/UploadPdfModal';
import { BrandDeckViewer } from './components/BrandDeckViewer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HomeScreen } from './screens/HomeScreen';
import { WorkScreen } from './screens/WorkScreen';
import { AboutScreen } from './screens/AboutScreen';
import { SkillsScreen } from './screens/SkillsScreen';
import { ExperienceScreen } from './screens/ExperienceScreen';
import { ContactScreen } from './screens/ContactScreen';
import { PortfolioPdfView } from './screens/PortfolioPdfView';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isHireModalOpen, setIsHireModalOpen] = useState<boolean>(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  const [uploadBrandTarget, setUploadBrandTarget] = useState<'cocona' | 'seth-dhanraj' | 'sharpix' | null>(null);
  const [activeBrandDeck, setActiveBrandDeck] = useState<'sharpix' | 'cocona' | 'seth-dhanraj' | null>(null);

  // Sync with URL Hash and Search query params
  useEffect(() => {
    const handleLocationChange = () => {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('view') === 'pdf' || searchParams.has('pdf')) {
        setCurrentTab('pdf');
        return;
      }

      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['deck-sharpix', 'sharpix'].includes(hash)) {
        setActiveBrandDeck('sharpix');
        return;
      }
      if (['deck-cocona', 'cocona'].includes(hash)) {
        setActiveBrandDeck('cocona');
        return;
      }
      if (['deck-seth-dhanraj', 'seth-dhanraj'].includes(hash)) {
        setActiveBrandDeck('seth-dhanraj');
        return;
      }

      if (['home', 'work', 'about', 'skills', 'experience', 'contact', 'pdf'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPdf = () => {
    const targetUrl = `${window.location.origin}${window.location.pathname}#pdf`;
    const newTab = window.open(targetUrl, '_blank');
    // If popup is blocked by browser policy, navigate gracefully in place
    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
      handleNavigate('pdf');
    }
  };

  // If in dedicated PDF document view (e.g. opened in new tab or #pdf)
  if (currentTab === 'pdf') {
    return <PortfolioPdfView onBack={() => handleNavigate('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] dark:bg-[#0d0e0f] dark:text-[#f3f2ee] flex flex-col antialiased selection:bg-[#ff5a1f] selection:text-white relative transition-colors duration-250">
      {/* Subtle Scroll Progress Bar at the top of the viewport */}
      <ScrollProgressBar />

      {/* Top Fixed Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenHire={() => setIsHireModalOpen(true)}
        onOpenPdf={handleOpenPdf}
        onOpenUploadPdf={() => {
          setUploadBrandTarget(null);
          setIsUploadModalOpen(true);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {currentTab === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenHire={() => setIsHireModalOpen(true)}
            onOpenPdf={handleOpenPdf}
          />
        )}

        {currentTab === 'work' && (
          <WorkScreen
            onNavigate={handleNavigate}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenPdf={handleOpenPdf}
            onOpenBrandDeck={(brandId) => setActiveBrandDeck(brandId)}
          />
        )}

        {currentTab === 'about' && (
          <AboutScreen
            onNavigate={handleNavigate}
            onOpenPdf={handleOpenPdf}
          />
        )}

        {currentTab === 'skills' && (
          <SkillsScreen onNavigate={handleNavigate} />
        )}

        {currentTab === 'experience' && (
          <ExperienceScreen onNavigate={handleNavigate} />
        )}

        {currentTab === 'contact' && (
          <ContactScreen />
        )}
      </main>

      {/* Bottom Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateContact={() => {
          setSelectedProject(null);
          handleNavigate('contact');
        }}
        onOpenUploadPdf={(brandId) => {
          setUploadBrandTarget(brandId);
          setIsUploadModalOpen(true);
        }}
        onOpenBrandDeck={(brandId) => {
          setSelectedProject(null);
          setActiveBrandDeck(brandId);
        }}
      />

      {/* Quick Hire Modal */}
      <QuickHireModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        onNavigateContact={() => {
          setIsHireModalOpen(false);
          handleNavigate('contact');
        }}
      />

      {/* Global Brand PDF Upload Modal */}
      <UploadPdfModal
        isOpen={isUploadModalOpen}
        onClose={() => {
          setIsUploadModalOpen(false);
          setUploadBrandTarget(null);
        }}
        defaultBrand={uploadBrandTarget}
      />

      {/* Full Multi-Page Brand Deck Presentation Viewer */}
      {activeBrandDeck && (
        <BrandDeckViewer
          initialBrandId={activeBrandDeck}
          onClose={() => setActiveBrandDeck(null)}
          onNavigateContact={() => {
            setActiveBrandDeck(null);
            handleNavigate('contact');
          }}
        />
      )}
    </div>
  );
}
