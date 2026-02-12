import React, { useState } from 'react';
import { 
  MapPin, Users, Leaf, ShieldCheck, Calendar, FileText, 
  Image as ImageIcon, TrendingUp, ChevronDown, Activity, CheckCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeDetail = () => {
  // State for expandable radar indicators
  const [expandedIndicator, setExpandedIndicator] = useState('authenticity');

  // Mock Data for the page
  const practice = {
    nameLocal: "Digna (डिगना)",
    nameEnglish: "Gond Wall Art",
    community: "Gond Tribe",
    district: "Dindori, Madhya Pradesh",
    ecologicalLink: "Forest Pigments & Sacred Geometry",
    caiScore: 94,
    status: "Highly Authentic",
    verifiedDate: "October 12, 2025",
    narrative: {
      origin: "Digna is the traditional geometric wall painting of the Gond community, historically drawn on the floors and walls of houses during festivals, marriages, and to mark the harvest. It serves as a visual prayer and an invocation of forest deities.",
      ritualFlow: "The process begins with the collection of 'Chhui Mitti' (local white clay) and natural pigments like cow dung, charcoal, and red ochre from the nearby riverbanks. Women of the household prepare the walls by plastering them, then hand-draw intricate geometric patterns, often without the use of measuring tools.",
      ecoRules: "Pigments must only be gathered after the monsoon. Synthetic colors are strictly forbidden in traditional Digna. The patterns mirror the structure of local flora and the agricultural calendar, functioning as a localized ecological almanac."
    },
    sustainability: "The practice relies 100% on biodegradable, locally sourced materials. The extraction of colored mud is regulated by village elders to prevent soil erosion. Recent adaptations include teaching the geometry of Digna in local eco-schools to preserve the knowledge without commercializing the ritual context.",
    endorsements: [
      { id: 1, name: "Shanta Bai", role: "Elder & Master Artist, Patangarh", text: "Digna is not just art; it is our language with the earth. When we paint, we speak to the soil." },
      { id: 2, name: "Dr. Ramesh Tekam", role: "Tribal Historian", text: "Verified documentation shows no deviation from 19th-century records in pigment composition." }
    ],
    timeline: [
      { year: "2025", event: "CAI score verified at 94. Maintained absolute material authenticity." },
      { year: "2023", event: "Community resolution passed to ban acrylic paints in ritual Digna." },
      { year: "2018", event: "First comprehensive digital archiving of Patangarh motifs." }
    ]
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#3a352f] font-sans">
      
      {/* --- TOP NAVIGATION BAR --- */}
      <nav className="border-b border-[#e5e0d8] bg-[#faf9f6] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-serif text-[#2d5a27]">
            Sanskriti-360
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-[#3d405b]">
            <Link to="/state/madhya-pradesh" className="hover:text-[#c85a3a] transition-colors">&larr; Back to State</Link>
          </div>
        </div>
      </nav>

      {/* --- BANNER HEADER --- */}
      <header className="w-full bg-[#ebe6db] relative border-b border-[#d5cebd]">
        {/* Placeholder for actual banner image. Using a subtle pattern/gradient instead of bright photos */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #3d405b 25%, transparent 25%, transparent 75%, #3d405b 75%, #3d405b), repeating-linear-gradient(45deg, #3d405b 25%, #faf9f6 25%, #faf9f6 75%, #3d405b 75%, #3d405b)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px'}}></div>
        
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10 flex flex-col items-start">
          <div className="bg-[#f0ece1] text-[#3d405b] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 border border-[#d5cebd]">
            Verified Cultural Record
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2d5a27] mb-2 leading-tight">
            {practice.nameLocal}
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif text-[#3d405b] mb-8 italic">
            {practice.nameEnglish}
          </h2>
          
          <div className="flex flex-wrap gap-6 text-[#3a352f] font-medium text-sm border-t border-[#d5cebd] pt-6 w-full max-w-3xl">
            <span className="flex items-center gap-2"><Users size={18} className="text-[#c85a3a]" /> {practice.community}</span>
            <span className="flex items-center gap-2"><MapPin size={18} className="text-[#3d405b]" /> {practice.district}</span>
            <span className="flex items-center gap-2"><Leaf size={18} className="text-[#2d5a27]" /> {practice.ecologicalLink}</span>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT GRID --- */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT COLUMN: Narrative & Details (2/3 width) */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* SECTION 1: NARRATIVE */}
          <section className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#2d5a27] mb-4 flex items-center gap-2 border-b border-[#e5e0d8] pb-2">
                Origin & Context
              </h3>
              <p className="text-[#3a352f] leading-relaxed text-lg">{practice.narrative.origin}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-bold text-[#3d405b] mb-3">Ritual Flow</h3>
              <p className="text-[#3a352f] leading-relaxed">{practice.narrative.ritualFlow}</p>
            </div>

            <div className="bg-[#faf9f6] border-l-4 border-[#c85a3a] pl-6 py-2">
              <h3 className="text-lg font-bold text-[#c85a3a] mb-2 uppercase tracking-wide text-sm">Indigenous Ecological Rules</h3>
              <p className="text-[#3a352f] leading-relaxed italic">{practice.narrative.ecoRules}</p>
            </div>
          </section>

          {/* SECTION 4: EVIDENCE & VERIFICATION */}
          <section>
            <h3 className="text-2xl font-serif font-bold text-[#2d5a27] mb-6 border-b border-[#e5e0d8] pb-2">
              Evidence & Endorsements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Evidence Placeholders */}
              <div className="border border-[#e5e0d8] rounded bg-white p-4 flex items-center gap-4 hover:border-[#3d405b] transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-[#f0ece1] flex items-center justify-center rounded text-[#8c8270] group-hover:text-[#3d405b]"><FileText size={24} /></div>
                <div>
                  <p className="font-bold text-[#3d405b] text-sm">Village Council Resolution</p>
                  <p className="text-xs text-[#8c8270]">PDF Document • Verified</p>
                </div>
              </div>
              <div className="border border-[#e5e0d8] rounded bg-white p-4 flex items-center gap-4 hover:border-[#3d405b] transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-[#f0ece1] flex items-center justify-center rounded text-[#8c8270] group-hover:text-[#3d405b]"><ImageIcon size={24} /></div>
                <div>
                  <p className="font-bold text-[#3d405b] text-sm">Consented Visual Archive</p>
                  <p className="text-xs text-[#8c8270]">12 Photographs • 2024</p>
                </div>
              </div>
            </div>

            {/* Endorsement Quotes */}
            <div className="space-y-4">
              {practice.endorsements.map((quote) => (
                <div key={quote.id} className="bg-white border border-[#e5e0d8] p-6 rounded relative">
                  <span className="text-4xl text-[#e5e0d8] absolute top-2 left-4 font-serif">"</span>
                  <p className="text-[#3a352f] mb-4 relative z-10 leading-relaxed font-medium">"{quote.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#3d405b] rounded-full flex items-center justify-center text-white text-xs font-bold">{quote.name.charAt(0)}</div>
                    <div>
                      <p className="text-sm font-bold text-[#3d405b]">{quote.name}</p>
                      <p className="text-xs text-[#8c8270]">{quote.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5: SUSTAINABILITY NOTES */}
          <section className="bg-[#e8f0e7] p-8 rounded-lg border border-[#c6dfc3]">
            <h3 className="text-2xl font-serif font-bold text-[#2d5a27] mb-4 flex items-center gap-2">
              <Leaf size={24} /> Sustainability Notes
            </h3>
            <p className="text-[#2d5a27] leading-relaxed">{practice.sustainability}</p>
          </section>

          {/* SECTION 6: TIMELINE VIEW */}
          <section>
            <h3 className="text-2xl font-serif font-bold text-[#2d5a27] mb-8 border-b border-[#e5e0d8] pb-2">
              Historical CAI Timeline
            </h3>
            
            <div className="relative border-l-2 border-[#e5e0d8] ml-4 space-y-8 pb-4">
              {practice.timeline.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-[#c85a3a] rounded-full -left-[9px] top-1 border-4 border-[#faf9f6]"></div>
                  <p className="text-sm font-bold text-[#3d405b] mb-1">{item.year}</p>
                  <p className="text-[#3a352f] text-sm leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN: Sticky Sidebar (1/3 width) */}
        <div className="lg:col-span-1 space-y-8 relative">
          <div className="sticky top-24 space-y-8">
            
            {/* SECTION 2: CAI SNAPSHOT BOX */}
            <div className="bg-white border-2 border-[#2d5a27] rounded-lg p-8 shadow-sm text-center">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#8c8270] mb-2">Cultural Authenticity Index</h3>
              <div className="text-7xl font-serif font-bold text-[#2d5a27] mb-4 flex justify-center items-end gap-2">
                {practice.caiScore} <span className="text-2xl text-[#8c8270] font-normal mb-2">/100</span>
              </div>
              
              <div className="inline-flex items-center justify-center gap-2 bg-[#e8f0e7] text-[#2d5a27] font-bold px-4 py-2 rounded-full mb-6">
                <ShieldCheck size={18} /> {practice.status}
              </div>
              
              <div className="text-xs text-[#8c8270] flex items-center justify-center gap-1 border-t border-[#e5e0d8] pt-4">
                <Calendar size={14} /> Last Verified: {practice.verifiedDate}
              </div>
            </div>

            {/* SECTION 3: INDICATOR RADAR CHART (Accordion) */}
            <div className="bg-white border border-[#e5e0d8] rounded-lg p-6">
              <h3 className="font-bold text-[#3d405b] mb-6 flex items-center justify-between">
                <span>Metric Breakdown</span>
                <Activity size={18} className="text-[#c85a3a]" />
              </h3>

              {/* Radar Placeholder */}
              <div className="w-full h-40 bg-[#f0ece1] rounded flex items-center justify-center mb-6 text-[#8c8270] text-sm border border-[#d5cebd]">
                [ Radar Chart Visualization ]
              </div>

              {/* Expandable Indicators */}
              <div className="space-y-3">
                {[
                  { id: 'authenticity', title: 'Material Authenticity', score: 98, desc: 'Use of traditional, naturally sourced materials without synthetic substitutes.' },
                  { id: 'community', title: 'Community Ownership', score: 95, desc: 'Practice is governed and sustained entirely by local tribal elders.' },
                  { id: 'commercial', title: 'Non-Commercialization', score: 90, desc: 'Ritual intent is preserved. Art is not modified for external mass-market sales.' }
                ].map((ind) => (
                  <div key={ind.id} className="border border-[#e5e0d8] rounded">
                    <button 
                      onClick={() => setExpandedIndicator(expandedIndicator === ind.id ? null : ind.id)}
                      className="w-full px-4 py-3 flex justify-between items-center text-sm font-bold text-[#3d405b] hover:bg-[#faf9f6]"
                    >
                      <span className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#2d5a27]" /> {ind.title}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-[#c85a3a]">{ind.score}</span>
                        <ChevronDown size={16} className={`text-[#8c8270] transition-transform ${expandedIndicator === ind.id ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {expandedIndicator === ind.id && (
                      <div className="px-4 pb-4 text-xs text-[#3a352f] leading-relaxed bg-[#faf9f6]">
                        {ind.desc}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 py-3 bg-[#faf9f6] border border-[#d5cebd] text-[#3d405b] font-bold text-sm rounded hover:bg-[#3d405b] hover:text-white transition-colors flex items-center justify-center gap-2">
                <TrendingUp size={16} /> View Full Report
              </button>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default PracticeDetail