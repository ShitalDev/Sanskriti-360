import React from 'react';
import { 
  ShieldCheck, Clock, FileKey, UserCheck, 
  PlusCircle, AlertCircle, CheckCircle2, Link as LinkIcon 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityVerification = () => {
  // Mock Data
  const practiceName = "Gond Wall Art (Digna)";
  const overallStatus = "Verified Consensus";
  
  const actors = [
    { id: 1, name: "Shanta Bai", role: "Elder & Master Artist", location: "Patangarh", status: "Verified", date: "Oct 12, 2025" },
    { id: 2, name: "Dr. Ramesh Tekam", role: "Tribal Historian", location: "Regional Research Inst.", status: "Verified", date: "Oct 14, 2025" },
    { id: 3, name: "Anita Uikey", role: "Community Practitioner", location: "Dindori", status: "Pending Review", date: "N/A" },
  ];

  const timeline = [
    { id: 1, action: "Initial Documentation Submitted", user: "Field Researcher A. K.", date: "Oct 01, 2025", hash: "0x8F2...3A1B" },
    { id: 2, action: "Material Authenticity Confirmed", user: "Shanta Bai (Elder)", date: "Oct 12, 2025", hash: "0x4C9...7D2E" },
    { id: 3, action: "Historical Context Validated", user: "Dr. Ramesh Tekam", date: "Oct 14, 2025", hash: "0x1A5...9F8C" },
    { id: 4, action: "Consensus Threshold Reached (85%)", user: "System Protocol", date: "Oct 15, 2025", hash: "0x9B3...2E4A" },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#3a352f] font-sans">
      
      {/* --- TOP NAVIGATION --- */}
      <nav className="border-b border-[#e5e0d8] bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-serif text-[#2d5a27]">
            Sanskriti-360
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-[#3d405b]">
            <Link to="/practice/gond-wall-art" className="hover:text-[#c85a3a] transition-colors">&larr; Back to Practice</Link>
          </div>
        </div>
      </nav>

      {/* --- HEADER: PRACTICE NAME --- */}
      <header className="bg-[#ebe6db] py-12 px-6 border-b border-[#d5cebd]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#8c8270] uppercase mb-2 flex items-center gap-2">
              <FileKey size={14} /> Verification Ledger
            </div>
            <h1 className="text-4xl font-serif font-bold text-[#2d5a27] mb-2">{practiceName}</h1>
            <p className="text-[#3d405b] text-lg font-light">Transparent community consensus and audit trail.</p>
          </div>
          
          <div className="bg-[#e8f0e7] border border-[#c6dfc3] px-6 py-4 rounded-lg flex items-center gap-4 shadow-sm">
            <ShieldCheck size={32} className="text-[#2d5a27]" />
            <div>
              <p className="text-xs font-bold text-[#2d5a27] uppercase tracking-wider">Global Status</p>
              <p className="text-xl font-bold text-[#2d5a27]">{overallStatus}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN (2/3): Actors & Verification Actions */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* SECTION: VERIFICATION PANEL (COMMUNITY ACTORS) */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#3d405b] mb-6 border-b border-[#e5e0d8] pb-2">
              Endorsement Panel
            </h2>
            <div className="space-y-4">
              {actors.map((actor) => (
                <div key={actor.id} className="bg-white border border-[#e5e0d8] p-5 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-[#d5cebd] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#f0ece1] rounded-full flex items-center justify-center text-[#3d405b] font-bold font-serif text-lg">
                      {actor.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#3a352f] text-lg">{actor.name}</h3>
                      <p className="text-sm text-[#8c8270]">{actor.role} • {actor.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start sm:items-end">
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                      actor.status === 'Verified' ? 'bg-[#e8f0e7] text-[#2d5a27]' : 'bg-[#fcf8ed] text-[#b38024]'
                    }`}>
                      {actor.status === 'Verified' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                      {actor.status}
                    </div>
                    {actor.status === 'Verified' && (
                      <span className="text-xs text-[#8c8270] font-mono mt-2">Sig: {actor.date}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: ADD VERIFICATION (ROLE-BASED) */}
          <section className="bg-[#faf9f6] border-2 border-dashed border-[#d5cebd] rounded-lg p-8 text-center">
            <UserCheck size={40} className="mx-auto text-[#c85a3a] mb-4 opacity-80" />
            <h3 className="text-xl font-serif font-bold text-[#3d405b] mb-2">Add Your Endorsement</h3>
            <p className="text-[#8c8270] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              Are you a verified elder, practitioner, or researcher for this community? Add your formal endorsement to strengthen the Cultural Authenticity Index.
            </p>
            <button className="px-6 py-3 bg-[#c85a3a] text-white font-bold rounded shadow-md hover:bg-[#b04d30] transition-colors flex items-center justify-center gap-2 mx-auto">
              <PlusCircle size={18} /> Authenticate Practice
            </button>
            <p className="text-xs font-mono text-[#8c8270] mt-4 flex items-center justify-center gap-1">
              <AlertCircle size={12} /> Requires Level 2 Authority Node Access
            </p>
          </section>

        </div>

        {/* RIGHT COLUMN (1/3): Timeline & Audit Hash */}
        <div className="lg:col-span-1 space-y-12">

          {/* SECTION: VERIFICATION TIMELINE */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#3d405b] mb-6 border-b border-[#e5e0d8] pb-2">
              Audit Timeline
            </h2>
            
            <div className="relative border-l-2 border-[#e5e0d8] ml-3 space-y-8 pb-4">
              {timeline.map((event, idx) => (
                <div key={event.id} className="relative pl-6">
                  <div className={`absolute w-3 h-3 rounded-full -left-[7px] top-1.5 ${
                    idx === timeline.length - 1 ? 'bg-[#2d5a27] ring-4 ring-[#e8f0e7]' : 'bg-[#d5cebd]'
                  }`}></div>
                  
                  <p className="text-xs font-bold text-[#8c8270] font-mono mb-1">{event.date}</p>
                  <p className="text-sm font-bold text-[#3d405b] leading-tight mb-1">{event.action}</p>
                  <p className="text-xs text-[#c85a3a] mb-2 font-medium">By: {event.user}</p>
                  
                  {/* Visual Hash Reference embedded in timeline */}
                  <div className="inline-flex items-center gap-1.5 bg-[#f0ece1] px-2 py-1 rounded text-[10px] font-mono text-[#8c8270] border border-[#e5e0d8]">
                    <LinkIcon size={10} /> {event.hash}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: AUDIT REFERENCE (Visual Transparency) */}
          <section className="bg-[#3d405b] rounded-lg p-6 text-[#faf9f6] shadow-md border-b-4 border-[#c85a3a]">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#d5cebd] mb-4 flex items-center gap-2">
              <FileKey size={16} /> Ledger Reference
            </h3>
            <p className="text-xs text-[#e5e0d8] leading-relaxed mb-4">
              This verification record is cryptographically secured. Alterations to consensus data are historically immutable.
            </p>
            
            <div className="space-y-3">
              <div>
                <span className="text-[10px] text-[#8c8270] uppercase tracking-wider block mb-1">Root Hash</span>
                <div className="bg-[#2a2c3f] p-2 rounded text-xs font-mono text-green-400 break-all border border-[#1f2130]">
                  0x9B3F4A2E7D1C8B5F0A3E...
                </div>
              </div>
              <div>
                <span className="text-[10px] text-[#8c8270] uppercase tracking-wider block mb-1">Consensus Algorithm</span>
                <div className="text-xs font-mono text-[#e5e0d8]">
                  Community-Weighted PoA (Proof of Authenticity)
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default CommunityVerification;