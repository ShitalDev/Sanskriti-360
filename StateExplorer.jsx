import React, { useState } from 'react';
import { Leaf, Activity, Users, BookOpen, Filter, ShieldCheck, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const StateExplorer = () => {
  // Mock Data for Madhya Pradesh Practices
  const practices = [
    { id: 1, name: "Gond Wall Art (Digna)", tribe: "Gond", ecoElement: "Forest Pigments", cai: 94, status: "Verified", img: "bg-[#e5e0d8]" },
    { id: 2, name: "Bhagoria Haat Festival", tribe: "Bhil", ecoElement: "Agricultural Harvest", cai: 82, status: "Pending", img: "bg-[#e5e0d8]" },
    { id: 3, name: "Baiga Pardhauni Dance", tribe: "Baiga", ecoElement: "Forest/Marriage Ritual", cai: 96, status: "Verified", img: "bg-[#e5e0d8]" },
    { id: 4, name: "Bagh Print Textiles", tribe: "Bagh Community", ecoElement: "River Bagh Water", cai: 88, status: "Verified", img: "bg-[#e5e0d8]" },
    { id: 5, name: "Pithora Painting", tribe: "Rathwa / Bhilala", ecoElement: "Sacred Geography", cai: 91, status: "Verified", img: "bg-[#e5e0d8]" },
    { id: 6, name: "Korku Khamb Swang", tribe: "Korku", ecoElement: "Post-Harvest Drama", cai: 85, status: "Pending Review", img: "bg-[#e5e0d8]" },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#3a352f] font-sans">
      
      {/* --- TOP NAVIGATION BAR (Simplified for context) --- */}
      <nav className="border-b border-[#e5e0d8] bg-[#faf9f6] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-serif text-[#2d5a27]">
            Sanskriti-360
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-[#3d405b]">
            <Link to="/" className="hover:text-[#c85a3a] transition-colors">Home</Link>
            <span className="text-[#c85a3a] border-b-2 border-[#c85a3a] pb-1">Madhya Pradesh</span>
            <Link to="/submit" className="hover:text-[#c85a3a] transition-colors">Contribute</Link>
          </div>
        </div>
      </nav>

      {/* --- HEADER SECTION --- */}
      <header className="bg-[#ebe6db] py-16 px-6 border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="text-xs font-bold tracking-widest text-[#c85a3a] uppercase mb-2">State Explorer</div>
              <h1 className="text-5xl font-serif font-bold text-[#2d5a27] mb-2">Madhya Pradesh</h1>
              <p className="text-xl text-[#3d405b] font-light italic">"Tribal Forest Heartland"</p>
            </div>
            
            {/* Search Bar for State */}
            <div className="relative w-full md:w-80">
              <input 
                type="text" 
                placeholder="Search practices in MP..." 
                className="w-full py-3 pl-10 pr-4 bg-white border border-[#d5cebd] rounded focus:outline-none focus:border-[#2d5a27] focus:ring-1 focus:ring-[#2d5a27]"
              />
              <Search className="absolute left-3 top-3.5 text-[#8c8270]" size={18} />
            </div>
          </div>
        </div>
      </header>

      {/* --- STATE OVERVIEW PANEL --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-lg shadow-sm border border-[#e5e0d8] p-6 flex flex-col md:flex-row justify-between items-center gap-6 divide-y md:divide-y-0 md:divide-x divide-[#e5e0d8]">
          
          <div className="flex-1 w-full flex items-center gap-4 px-4">
            <div className="p-3 bg-[#f0ece1] rounded-full text-[#2d5a27]"><Leaf size={24} /></div>
            <div>
              <p className="text-sm font-bold text-[#8c8270] uppercase tracking-wider">Ecosystems</p>
              <p className="font-medium text-[#3d405b]">Forest, River, Agriculture</p>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-4 px-4 pt-4 md:pt-0">
            <div className="p-3 bg-[#f0ece1] rounded-full text-[#3d405b]"><BookOpen size={24} /></div>
            <div>
              <p className="text-sm font-bold text-[#8c8270] uppercase tracking-wider">Total Practices</p>
              <p className="text-2xl font-bold text-[#3a352f]">142</p>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-4 px-4 pt-4 md:pt-0">
            <div className="p-3 bg-[#f0ece1] rounded-full text-[#c85a3a]"><Activity size={24} /></div>
            <div>
              <p className="text-sm font-bold text-[#8c8270] uppercase tracking-wider">Average CAI</p>
              <p className="text-2xl font-bold text-[#3a352f]">87.4<span className="text-sm font-normal text-[#8c8270]">/100</span></p>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-4 px-4 pt-4 md:pt-0">
            <div className="p-3 bg-[#f0ece1] rounded-full text-[#2d5a27]"><Users size={24} /></div>
            <div>
              <p className="text-sm font-bold text-[#8c8270] uppercase tracking-wider">Communities</p>
              <p className="text-2xl font-bold text-[#3a352f]">28 <span className="text-sm font-normal text-[#8c8270]">Verified</span></p>
            </div>
          </div>

        </div>
      </section>

      {/* --- MAIN CONTENT: SIDEBAR + GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* LEFT SIDEBAR: FILTER PANEL */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-24 bg-white border border-[#e5e0d8] p-6 rounded-lg">
            <div className="flex items-center gap-2 font-bold text-[#2d5a27] mb-6 font-serif text-lg">
              <Filter size={20} /> Filter Repository
            </div>

            {/* Ecological Type Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#3d405b] mb-3 uppercase tracking-wider">Ecological Type</h4>
              <div className="space-y-2">
                {['Forest-based', 'Riverine', 'Agricultural', 'Mountainous'].map(type => (
                  <label key={type} className="flex items-center gap-3 text-sm text-[#3a352f] cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-[#2d5a27] border-[#d5cebd] rounded focus:ring-[#2d5a27]" />
                    <span className="group-hover:text-[#2d5a27] transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tribe / Community Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#3d405b] mb-3 uppercase tracking-wider">Tribe / Community</h4>
              <div className="space-y-2">
                {['Bhil', 'Gond', 'Baiga', 'Korku', 'Sahariya'].map(tribe => (
                  <label key={tribe} className="flex items-center gap-3 text-sm text-[#3a352f] cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-[#2d5a27] border-[#d5cebd] rounded focus:ring-[#2d5a27]" />
                    <span className="group-hover:text-[#2d5a27] transition-colors">{tribe}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* CAI Range Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#3d405b] mb-3 uppercase tracking-wider">CAI Range</h4>
              <input type="range" min="0" max="100" defaultValue="70" className="w-full accent-[#c85a3a]" />
              <div className="flex justify-between text-xs text-[#8c8270] mt-1">
                <span>0</span><span>100</span>
              </div>
            </div>

            {/* Verification Status Filter */}
            <div>
              <h4 className="text-sm font-bold text-[#3d405b] mb-3 uppercase tracking-wider">Status</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 text-sm text-[#3a352f] cursor-pointer">
                  <input type="radio" name="status" className="w-4 h-4 text-[#2d5a27] border-[#d5cebd] focus:ring-[#2d5a27]" defaultChecked />
                  <span>All</span>
                </label>
                <label className="flex items-center gap-3 text-sm text-[#3a352f] cursor-pointer">
                  <input type="radio" name="status" className="w-4 h-4 text-[#2d5a27] border-[#d5cebd] focus:ring-[#2d5a27]" />
                  <span>Verified Only</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT AREA: PRACTICE CARDS GRID */}
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practices.map((item) => (
              <div key={item.id} className="bg-white border border-[#e5e0d8] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                
                {/* Image Placeholder */}
                <div className={`w-full h-44 ${item.img} flex items-center justify-center text-[#8c8270]`}>
                  [ Image: {item.name} ]
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  {/* Top Badges */}
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold bg-[#f0ece1] text-[#3d405b] px-2 py-1 rounded">
                      {item.tribe}
                    </span>
                    <span className={`text-xs font-bold px-2 py-1 rounded flex items-center gap-1 ${item.cai >= 90 ? 'bg-[#e8f0e7] text-[#2d5a27]' : 'bg-[#fdf3ef] text-[#c85a3a]'}`}>
                      <ShieldCheck size={12} /> CAI: {item.cai}
                    </span>
                  </div>
                  
                  {/* Text Info */}
                  <h3 className="text-xl font-bold text-[#3a352f] mb-1 leading-tight font-serif">{item.name}</h3>
                  <p className="text-sm text-[#8c8270] mb-4 flex items-center gap-1.5">
                    <Leaf size={14} className="text-[#2d5a27]" /> {item.ecoElement}
                  </p>
                  
                  {/* Spacer to push button to bottom */}
                  <div className="mt-auto pt-4 border-t border-[#f0ece1]">
                    <button className="w-full py-2.5 bg-transparent border border-[#d5cebd] text-[#3d405b] font-bold text-sm rounded hover:bg-[#3d405b] hover:text-white transition-colors flex items-center justify-center gap-2">
                      View Details <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (Simple Example) */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded border border-[#d5cebd] text-[#8c8270] hover:bg-[#f0ece1]" disabled>&lt;</button>
            <button className="w-10 h-10 flex items-center justify-center rounded border border-[#2d5a27] bg-[#2d5a27] text-white font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded border border-[#d5cebd] text-[#3d405b] hover:bg-[#f0ece1] font-bold">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded border border-[#d5cebd] text-[#3d405b] hover:bg-[#f0ece1] font-bold">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded border border-[#d5cebd] text-[#3d405b] hover:bg-[#f0ece1]">&gt;</button>
          </div>
        </main>

      </section>
    </div>
  );
};

export default StateExplorer;