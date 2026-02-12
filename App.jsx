import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- NEW EARTH-TONE PAGES ---
import Home from './pages/Home';
import StateExplorer from './pages/StateExplorer';
import PracticeDetail from './pages/PracticeDetail';
import CAIDashboard from './pages/CAIDashboard';
import CommunityVerification from './pages/CommunityVerification';
import ResearchAnalytics from './pages/ResearchAnalytics';
import AdminGovernance from './pages/AdminGovernance';
import UserJourneys from './pages/UserJourneys';

// --- EARLIER UTILITY PAGES ---
import KnowledgeSubmission from './pages/KnowledgeSubmission';
import SignUp from './pages/SignUp';
import CommunityMessage from './pages/CommunityMessage';
import SearchBrowse from './pages/SearchBrowse';

function App() {
  return (
    <Router>
      {/* NOTE: The global navigation bar has been removed from here. 
        Each individual page component now renders its own specific 
        navigation bar to match its unique layout and context.
      */}
      <div className="min-h-screen bg-[#faf9f6] font-sans text-[#3a352f]">
        <Routes>
          {/* Core User Journey Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/state/madhya-pradesh" element={<StateExplorer />} />
          <Route path="/practice/gond-wall-art" element={<PracticeDetail />} />
          
          {/* Dashboards & Portals */}
          <Route path="/dashboard" element={<CAIDashboard />} />
          <Route path="/verify" element={<CommunityVerification />} />
          <Route path="/research" element={<ResearchAnalytics />} />
          
          {/* Admin & Testing Routes */}
          <Route path="/admin" element={<AdminGovernance />} />
          <Route path="/journeys" element={<UserJourneys />} />

          {/* Submission & Community Routes */}
          <Route path="/submit" element={<KnowledgeSubmission />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignUp />} /> {/* Reusing SignUp for Login demo */}
          <Route path="/community" element={<CommunityMessage />} />
          <Route path="/search" element={<SearchBrowse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;