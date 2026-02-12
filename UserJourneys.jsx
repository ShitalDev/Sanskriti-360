import React from 'react';
import { Users, BookOpen, Briefcase, ArrowRight, MousePointerClick } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserJourneys = () => {
  return (
    <div className="min-h-screen bg-[#ebe6db] text-[#3a352f] font-sans py-16 px-6">
      
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-block bg-[#f0ece1] text-[#c85a3a] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-[#d5cebd] mb-4">
            Evaluator Testing Portal
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2d5a27] mb-4">Platform User Journeys</h1>
          <p className="text-[#3d405b] text-lg max-w-2xl mx-auto">
            Strict adherence to the 3-click navigation rule. Select a persona below to experience their dedicated information flow.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Persona 1: Community Member */}
          <div className="bg-white rounded-xl shadow-lg border-t-8 border-[#c85a3a] p-8 flex flex-col hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-[#fdf3ef] rounded-full flex items-center justify-center text-[#c85a3a] mb-6">
              <Users size={32} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#3a352f] mb-2">Community Member</h2>
            <p className="text-[#8c8270] text-sm mb-6">Goal: Authenticate and verify local indigenous practices.</p>
            
            <div className="bg-[#faf9f6] p-4 rounded border border-[#e5e0d8] font-mono text-xs text-[#3d405b] space-y-3 mb-8 flex-1">
              <div className="flex items-center gap-2"><span className="bg-[#d5cebd] text-white px-1.5 rounded">1</span> Home</div>
              <div className="flex items-center gap-2"><ArrowRight size={12} className="text-[#8c8270]"/> <span className="bg-[#d5cebd] text-white px-1.5 rounded">2</span> State Explorer</div>
              <div className="flex items-center gap-2"><ArrowRight size={12} className="text-[#8c8270]"/> <span className="bg-[#d5cebd] text-white px-1.5 rounded">3</span> Practice Detail</div>
              <div className="flex items-center gap-2 font-bold text-[#c85a3a]"><ArrowRight size={12} /> <span className="bg-[#c85a3a] text-white px-1.5 rounded">Goal</span> Add Endorsement</div>
            </div>

            <Link to="/verify" className="w-full py-3 bg-[#c85a3a] text-white font-bold rounded hover:bg-[#b04d30] flex items-center justify-center gap-2 transition-colors">
              Test Journey <MousePointerClick size={16} />
            </Link>
          </div>

          {/* Persona 2: Researcher */}
          <div className="bg-white rounded-xl shadow-lg border-t-8 border-[#3d405b] p-8 flex flex-col hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-[#f0ece1] rounded-full flex items-center justify-center text-[#3d405b] mb-6">
              <BookOpen size={32} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#3a352f] mb-2">Researcher</h2>
            <p className="text-[#8c8270] text-sm mb-6">Goal: Analyze state CAI metrics and export academic data.</p>
            
            <div className="bg-[#faf9f6] p-4 rounded border border-[#e5e0d8] font-mono text-xs text-[#3d405b] space-y-3 mb-8 flex-1">
              <div className="flex items-center gap-2"><span className="bg-[#d5cebd] text-white px-1.5 rounded">1</span> Home</div>
              <div className="flex items-center gap-2"><ArrowRight size={12} className="text-[#8c8270]"/> <span className="bg-[#d5cebd] text-white px-1.5 rounded">2</span> Research Hub</div>
              <div className="flex items-center gap-2"><ArrowRight size={12} className="text-[#8c8270]"/> <span className="bg-[#d5cebd] text-white px-1.5 rounded">3</span> Filter / Compare</div>
              <div className="flex items-center gap-2 font-bold text-[#3d405b]"><ArrowRight size={12} /> <span className="bg-[#3d405b] text-white px-1.5 rounded">Goal</span> Export CSV</div>
            </div>

            <Link to="/research" className="w-full py-3 bg-[#3d405b] text-white font-bold rounded hover:bg-[#2a2c3f] flex items-center justify-center gap-2 transition-colors">
              Test Journey <MousePointerClick size={16} />
            </Link>
          </div>

          {/* Persona 3: Policymaker */}
          <div className="bg-white rounded-xl shadow-lg border-t-8 border-[#2d5a27] p-8 flex flex-col hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-[#e8f0e7] rounded-full flex items-center justify-center text-[#2d5a27] mb-6">
              <Briefcase size={32} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#3a352f] mb-2">Policymaker</h2>
            <p className="text-[#8c8270] text-sm mb-6">Goal: Assess risk alerts and download actionable policy briefs.</p>
            
            <div className="bg-[#faf9f6] p-4 rounded border border-[#e5e0d8] font-mono text-xs text-[#3d405b] space-y-3 mb-8 flex-1">
              <div className="flex items-center gap-2"><span className="bg-[#d5cebd] text-white px-1.5 rounded">1</span> Home</div>
              <div className="flex items-center gap-2"><ArrowRight size={12} className="text-[#8c8270]"/> <span className="bg-[#d5cebd] text-white px-1.5 rounded">2</span> CAI Dashboard</div>
              <div className="flex items-center gap-2"><ArrowRight size={12} className="text-[#8c8270]"/> <span className="bg-[#d5cebd] text-white px-1.5 rounded">3</span> View Risk Alerts</div>
              <div className="flex items-center gap-2 font-bold text-[#2d5a27]"><ArrowRight size={12} /> <span className="bg-[#2d5a27] text-white px-1.5 rounded">Goal</span> Download Report</div>
            </div>

            <Link to="/dashboard" className="w-full py-3 bg-[#2d5a27] text-white font-bold rounded hover:bg-[#1e3c1a] flex items-center justify-center gap-2 transition-colors">
              Test Journey <MousePointerClick size={16} />
            </Link>
          </div>

        </div>

        {/* Footer Link for Admin */}
        <div className="mt-12 text-center">
          <Link to="/admin" className="text-sm font-mono text-[#8c8270] hover:text-[#3d405b] underline underline-offset-4">
            [ Access Restricted Admin / Governance Node ]
          </Link>
        </div>

      </div>
    </div>
  );
};

export default UserJourneys;