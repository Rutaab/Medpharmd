// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { SystemProvider } from './context/SystemContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import BiomarkersPage from './pages/BiomarkersPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryDrugsPage from './pages/CategoryDrugsPage';
import DrugDetailPage from './pages/DrugDetailPage';
import DiseasesPage from './pages/DiseasesPage';
import DiseaseDetailPage from './pages/DiseaseDetailPage';
import TestsPage from './pages/TestsPage';
import HematologyPage from './pages/HematologyPage';
import ClinicalChemistryPage from './pages/ClinicalChemistryPage';
import EndocrinologyPage from './pages/EndocrinologyPage';
import MicrobiologyPage from './pages/MicrobiologyPage';
import ImmunologyPage from './pages/ImmunologyPage';
import ToxicologyPage from './pages/ToxicologyPage';
import UrinalysisPage from './pages/UrinalysisPage';
import TestDetailPage from './pages/TestDetailPage';
import InteractionsPage from './pages/InteractionsPage';
import InteractionCategoryPage from './pages/InteractionCategoryPage';
import IndustryPage from './pages/IndustryPage';
import GuidelinesPage from './pages/GuidelinesPage';
import CalculatorsPage from './pages/CalculatorsPage';
import FourthProfessionalPage from './pages/FourthProfessionalPage';
import ProfessionalYearPage from './pages/ProfessionalYearPage';
import SubjectPage from './pages/SubjectPage';
import ChapterPage from './pages/ChapterPage';

const IndustryRedirect = () => {
  const { chapterId } = useParams();
  return <Navigate to={chapterId ? `/4th-professional/industrial-pharmacy/${chapterId}` : '/4th-professional/industrial-pharmacy'} replace />;
};

function App() {
  return (
    <Router>
      <SystemProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/4th-professional" element={<FourthProfessionalPage />} />
          <Route path="/4th-professional/clinical-pharmacy-i" element={<DashboardPage />} />
          <Route path="/clinical" element={<Navigate to="/4th-professional/clinical-pharmacy-i" replace />} />
          <Route path="/drugs" element={<CategoriesPage />} />
          <Route path="/category/:categoryId" element={<CategoryDrugsPage />} />
          <Route path="/drug/:drugId" element={<DrugDetailPage />} />
          <Route path="/diseases" element={<DiseasesPage />} />
          <Route path="/disease/:diseaseId" element={<DiseaseDetailPage />} />
          <Route path="/biomarkers" element={<BiomarkersPage />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="/tests/hematology" element={<HematologyPage />} />
          <Route path="/tests/clinical-chemistry" element={<ClinicalChemistryPage />} />
          <Route path="/tests/endocrinology" element={<EndocrinologyPage />} />
          <Route path="/tests/microbiology" element={<MicrobiologyPage />} />
          <Route path="/tests/immunology" element={<ImmunologyPage />} />
          <Route path="/tests/toxicology" element={<ToxicologyPage />} />
          <Route path="/tests/urinalysis" element={<UrinalysisPage />} />
          <Route path="/test/:category/:testSlug" element={<TestDetailPage />} />
          <Route path="/interactions" element={<InteractionsPage />} />
          <Route path="/interactions/:categoryId" element={<InteractionCategoryPage />} />
          <Route path="/industry" element={<Navigate to="/4th-professional/industrial-pharmacy" replace />} />
          <Route path="/industry/:chapterId" element={<IndustryRedirect />} />
          <Route path="/4th-professional/industrial-pharmacy" element={<IndustryPage />} />
          <Route path="/4th-professional/industrial-pharmacy/:chapterId" element={<IndustryPage />} />
          <Route path="/hospital" element={<Navigate to="/4th-professional/hospital-pharmacy" replace />} />
          <Route path="/biopharmaceutical" element={<Navigate to="/4th-professional/biopharmaceutics" replace />} />
          <Route path="/quality" element={<Navigate to="/4th-professional/pharmaceutical-quality-management" replace />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/:yearId/:subjectId" element={<SubjectPage />} />
            <Route path="/:yearId/:subjectId/:chapterIndex" element={<ChapterPage />} />
          <Route path="/:yearId" element={<ProfessionalYearPage />} />
        </Routes>
      </Layout>
      </SystemProvider>
    </Router>
  );
}

export default App;