import React from 'react';
import { Map as MapIcon, ChevronRight, Activity, ShieldCheck, Users, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Earth Tone Color Palette 
  // Off-white: #faf9f6, Forest Green: #2d5a27, Terracotta: #c85a3a, Earthy Indigo: #3d405b

  // --- DATASET ---
  const featuredPractices = [
    {
      id: 1,
      name: "Bhagoria Haat",
      community: "Bhil Tribe",
      state: "Madhya Pradesh",
      description: "Seasonal tribal festival linked to agricultural cycles.",
      cai: {
        total: 74,
        indicators: { continuity: 78, ecology: 82, authority: 85, transmission: 65, distortion: 60 },
        trend: [{ year: 2022, score: 76 }, { year: 2023, score: 75 }, { year: 2024, score: 74 }]
      }
    },
    {
      id: 2,
      name: "Sacred Grove Ritual",
      community: "Gond Tribe",
      state: "Madhya Pradesh",
      description: "Forest conservation through ritual protection.",
      cai: {
        total: 81,
        indicators: { continuity: 88, ecology: 90, authority: 84, transmission: 70, distortion: 75 },
        trend: [{ year: 2022, score: 83 }, { year: 2023, score: 82 }, { year: 2024, score: 81 }]
      }
    }
  ];

  const stats = {
    practices: "1,245",
    communities: "350+",
    states: "28"
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#3a352f] font-sans">
      
      {/* --- TOP NAVIGATION BAR (FIXED) --- */}
      <nav className="border-b border-[#e5e0d8] bg-[#faf9f6] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold font-serif text-[#2d5a27]">
            Sanskriti-360
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-[#3d405b]">
            {/* These now point to actual pages defined in App.jsx */}
            <Link to="/search" className="hover:text-[#c85a3a] transition-colors">Explore</Link>
            <Link to="/state/madhya-pradesh" className="hover:text-[#c85a3a] transition-colors">States</Link>
            <Link to="/research" className="hover:text-[#c85a3a] transition-colors">Research</Link>
            <Link to="/submit" className="hover:text-[#c85a3a] transition-colors">Contribute</Link>
            <Link to="/dashboard" className="hover:text-[#c85a3a] transition-colors">Dashboard</Link>
            {/* Added Link to Journeys for testing */}
            <Link to="/journeys" className="hover:text-[#c85a3a] transition-colors">User Journeys</Link>
          </div>
          <div className="hidden md:block">
            <Link to="/login" className="px-5 py-2 border-2 border-[#3d405b] text-[#3d405b] font-bold rounded hover:bg-[#3d405b] hover:text-[#faf9f6] transition-colors">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-[#ebe6db]">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#3d405b 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#2d5a27] mb-6 leading-tight">
            Sanskriti-360
          </h1>
          <p className="text-xl md:text-2xl text-[#3d405b] mb-10 font-light">
            Preserving Cultural Authenticity & Indigenous Knowledge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/search" className="px-8 py-4 bg-[#c85a3a] text-white font-bold rounded shadow-md hover:bg-[#b04d30] transition-colors flex items-center justify-center gap-2">
              Explore Practices <ChevronRight size={18} />
            </Link>
            <Link to="/research" className="px-8 py-4 bg-transparent border-2 border-[#2d5a27] text-[#2d5a27] font-bold rounded hover:bg-[#2d5a27] hover:text-white transition-colors flex items-center justify-center gap-2">
              View CAI Framework <Activity size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE INDIA MAP --- */}
      <section id="states" className="py-20 px-6 max-w-7xl mx-auto border-b border-[#e5e0d8]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-[#2d5a27] mb-3">Discover by Region</h2>
          <p className="text-[#3d405b]">Hover over a state to view its cultural repository.</p>
        </div>
        
        <Link to="/state/madhya-pradesh" className="block w-full max-w-4xl mx-auto h-[500px] bg-[#f0ece1] border-2 border-[#d5cebd] rounded-xl flex flex-col items-center justify-center text-[#8c8270] relative group cursor-pointer hover:border-[#c85a3a] transition-colors">
          <MapIcon size={64} className="mb-4 opacity-50 group-hover:text-[#c85a3a] group-hover:opacity-100 transition-all" />
          <p className="text-lg font-medium">[ Interactive India Map Component ]</p>
          <p className="text-sm mt-2">Clicking here simulates selecting "Madhya Pradesh"</p>
          
          <div className="absolute top-1/4 left-1/3 bg-white p-4 shadow-lg border border-[#e5e0d8] rounded hidden group-hover:block transition-all">
            <h4 className="font-bold text-[#2d5a27]">Madhya Pradesh</h4>
            <p className="text-xs text-[#3d405b] mt-1">Featured State</p>
          </div>
        </Link>
      </section>

      {/* --- FEATURED CULTURAL PRACTICES --- */}
      <section id="explore" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#2d5a27] mb-2">Featured Practices</h2>
            <p className="text-[#3d405b]">Explore highly authentic indigenous traditions.</p>
          </div>
          <Link to="/search" className="text-[#c85a3a] font-bold flex items-center hover:underline">
            View All <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPractices.map((practice) => (
            <div key={practice.id} className="bg-white border border-[#e5e0d8] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row">
              <div className="w-full md:w-48 bg-[#e5e0d8] flex items-center justify-center text-[#8c8270] min-h-[200px]">
                [ Image ]
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#c85a3a] uppercase tracking-wider">{practice.state}</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded flex items-center gap-1 ${
                      practice.cai.total >= 80 ? 'bg-[#e8f0e7] text-[#2d5a27]' : 'bg-[#fcf8ed] text-[#b38024]'
                    }`}>
                      <ShieldCheck size={12} /> CAI: {practice.cai.total}/100
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#3a352f] mb-1">{practice.name}</h3>
                  <p className="text-sm font-medium text-[#3d405b] mb-2">{practice.community}</p>
                  <p className="text-sm text-[#8c8270] mb-4 line-clamp-2">{practice.description}</p>
                </div>
                
                <div className="flex items-center justify-between border-t border-[#f0ece1] pt-4 mt-2">
                   <div className="text-xs text-[#8c8270]">
                     Ecological Score: <span className="font-bold text-[#2d5a27]">{practice.cai.indicators.ecology}</span>
                   </div>
                   {/* Link to Detail Page */}
                   <Link to={`/practice/gond-wall-art`} className="text-[#c85a3a] text-sm font-bold hover:underline">
                     Explore &rarr;
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHAT IS CAI? SECTION --- */}
      <section className="bg-[#f0ece1] py-20 px-6 border-y border-[#e5e0d8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#2d5a27] mb-6">What is the CAI?</h2>
            <p className="text-[#3a352f] text-lg mb-4 leading-relaxed">
              The <strong>Cultural Authenticity Index (CAI)</strong> is a standardized framework to measure the integrity, sustainability, and community ownership of traditional practices.
            </p>
            <p className="text-[#3d405b] mb-6 leading-relaxed">
              It helps researchers, policymakers, and the public distinguish between deeply rooted heritage and heavily commercialized adaptations, ensuring indigenous knowledge is protected.
            </p>
            <Link to="/research" className="text-[#c85a3a] font-bold flex items-center border-b-2 border-[#c85a3a] pb-1 hover:text-[#b04d30] hover:border-[#b04d30] transition-colors w-fit">
              Read the full methodology <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="bg-white p-8 border border-[#d5cebd] rounded-xl flex flex-col items-center justify-center min-h-[300px] shadow-sm">
            <Activity size={80} strokeWidth={1} className="text-[#2d5a27] mb-4 opacity-80" />
            <p className="font-bold text-[#3d405b] text-center mb-2">[ Visual Radar Chart Sample ]</p>
            <div className="flex gap-4 text-xs text-[#8c8270] mt-4">
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#2d5a27] rounded-full"></span> Authenticity</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#c85a3a] rounded-full"></span> Commercialization</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMMUNITY & IMPACT SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#2d5a27] mb-4">Community & Impact</h2>
          <p className="text-[#3d405b]">Driven by local communities, verified by experts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border-2 border-[#2d5a27] bg-[#faf9f6] rounded-lg text-center">
            <BookOpen size={40} className="mx-auto text-[#c85a3a] mb-4" />
            <div className="text-4xl font-black text-[#2d5a27] mb-2">{stats.practices}</div>
            <div className="text-sm font-bold uppercase tracking-widest text-[#3d405b]">Practices Documented</div>
          </div>
          <div className="p-8 border-2 border-[#2d5a27] bg-[#faf9f6] rounded-lg text-center">
            <Users size={40} className="mx-auto text-[#c85a3a] mb-4" />
            <div className="text-4xl font-black text-[#2d5a27] mb-2">{stats.communities}</div>
            <div className="text-sm font-bold uppercase tracking-widest text-[#3d405b]">Verified Communities</div>
          </div>
          <div className="p-8 border-2 border-[#2d5a27] bg-[#faf9f6] rounded-lg text-center">
            <Globe size={40} className="mx-auto text-[#c85a3a] mb-4" />
            <div className="text-4xl font-black text-[#2d5a27] mb-2">{stats.states}</div>
            <div className="text-sm font-bold uppercase tracking-widest text-[#3d405b]">States Covered</div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#3d405b] text-[#faf9f6] py-12 px-6 border-t-4 border-[#c85a3a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold font-serif text-[#faf9f6]">
            Sanskriti-360
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-[#d5cebd]">
            <Link to="/research" className="hover:text-white transition-colors">Ethics</Link>
            <Link to="/research" className="hover:text-white transition-colors">Data Policy</Link>
            <Link to="/community" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/admin" className="hover:text-white transition-colors">Ministry Alignment</Link>
          </div>
          <div className="text-xs text-[#8c8270]">
            © 2026 Sanskriti-360. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;