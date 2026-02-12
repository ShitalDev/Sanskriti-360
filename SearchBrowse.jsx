import React, { useState } from 'react';
import { Search, Filter, Map, Grid, List } from 'lucide-react';

const SearchBrowse = () => {
  const [view, setView] = useState('grid');
  
  // Mock Entries
  const entries = [
    { title: "Kalaripayattu", location: "Kerala", type: "Martial Art", cai: 95 },
    { title: "Madhubani Art", location: "Bihar", type: "Craft", cai: 88 },
    { title: "Bihu Dance", location: "Assam", type: "Festival", cai: 92 },
    { title: "Pochampally Ikat", location: "Telangana", type: "Textile", cai: 85 },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Filters */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6 hidden md:block">
        <div className="flex items-center gap-2 font-bold text-slate-800 mb-6">
          <Filter size={20} /> Filters
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-bold text-slate-700 mb-2">Category</h4>
            <div className="space-y-2">
              {['Festivals', 'Rituals', 'Crafts', 'Oral History'].map(c => (
                <label key={c} className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" className="rounded text-indigo-600" /> {c}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-700 mb-2">CAI Score</h4>
            <input type="range" className="w-full accent-indigo-600" />
            <div className="flex justify-between text-xs text-slate-400">
              <span>0</span><span>100</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-700 mb-2">Region</h4>
            <select className="w-full border border-slate-300 rounded p-2 text-sm bg-white">
              <option>All India</option>
              <option>North East</option>
              <option>South</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
          </div>
          
          <div className="flex bg-white border border-slate-200 rounded-lg overflow-hidden">
            <button 
              onClick={() => setView('grid')} 
              className={`p-2 ${view === 'grid' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500'}`}
            >
              <Grid size={20} />
            </button>
            <button 
              onClick={() => setView('list')} 
              className={`p-2 ${view === 'list' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500'}`}
            >
              <List size={20} />
            </button>
            <button className="p-2 text-slate-500 border-l border-slate-200 hover:bg-slate-50">
              <Map size={20} />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'}`}>
          {entries.map((entry, idx) => (
            <div key={idx} className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition ${view === 'list' ? 'flex' : ''}`}>
              <div className={`${view === 'list' ? 'w-48 h-full' : 'w-full h-48'} bg-slate-200 flex items-center justify-center text-slate-400`}>
                Image
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">{entry.type}</span>
                    <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded">CAI: {entry.cai}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mt-2">{entry.title}</h3>
                  <p className="text-sm text-slate-500">{entry.location}</p>
                </div>
                {view === 'list' && (
                  <p className="text-sm text-slate-600 mt-2">Short description of the heritage item goes here...</p>
                )}
                <button className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800 text-left">
                  View Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchBrowse;