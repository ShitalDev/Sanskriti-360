import React, { useState } from 'react';
import { 
  AlertCircle, Download, FileText, Table, Activity, 
  TrendingUp, TrendingDown, Filter, ChevronDown, ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CAIDashboard = () => {
  const [compareMode, setCompareMode] = useState(false);

  // Mock Data for the analytical table
  const indicators = [
    { metric: "Material Authenticity", score: 94.2, previous: 94.0, weight: "30%", status: "Stable" },
    { metric: "Community Ownership", score: 88.5, previous: 91.2, weight: "25%", status: "Declining" },
    { metric: "Ecological Sustainability", score: 96.0, previous: 96.0, weight: "20%", status: "Stable" },
    { metric: "Non-Commercialization", score: 72.4, previous: 78.1, weight: "15%", status: "At Risk" },
    { metric: "Oral Transmission", score: 81.0, previous: 83.5, weight: "10%", status: "Declining" }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#3a352f] font-sans selection:bg-[#2d5a27] selection:text-white">
      
      {/* --- TOP NAVIGATION (Minimalist for Dashboard) --- */}
      <nav className="border-b border-[#e5e0d8] bg-white sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold font-serif text-[#2d5a27] flex items-center gap-2">
            <Activity size={20} /> Sanskriti-360 <span className="text-[#8c8270] font-sans font-normal text-sm border-l border-[#e5e0d8] pl-2 ml-1">CAI Analytics</span>
          </Link>
          
          {/* EXPORT OPTIONS */}
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-[#f0ece1] text-[#3d405b] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#d5cebd] transition-colors flex items-center gap-2 border border-[#d5cebd]">
              <Table size={14} /> CSV
            </button>
            <button className="px-3 py-1.5 bg-[#f0ece1] text-[#3d405b] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#d5cebd] transition-colors flex items-center gap-2 border border-[#d5cebd]">
              <FileText size={14} /> PDF
            </button>
            <button className="px-4 py-1.5 bg-[#3d405b] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#2a2c3f] transition-colors flex items-center gap-2">
              <Download size={14} /> Policy Brief
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        
        {/* --- TOP CONTROLS --- */}
        <section className="bg-white border border-[#e5e0d8] p-4 rounded mb-8 flex flex-col md:flex-row gap-4 items-end justify-between shadow-sm">
          <div className="flex flex-wrap gap-4 flex-1">
            <div className="flex flex-col gap-1.5 w-full md:w-64">
              <label className="text-xs font-bold text-[#8c8270] uppercase tracking-wider">Select State / Region</label>
              <div className="relative">
                <select className="w-full appearance-none bg-[#faf9f6] border border-[#d5cebd] text-[#3d405b] py-2 pl-3 pr-8 rounded text-sm font-medium focus:outline-none focus:border-[#2d5a27] focus:ring-1 focus:ring-[#2d5a27]">
                  <option>Madhya Pradesh</option>
                  <option>Assam</option>
                  <option>Kerala</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-2.5 text-[#8c8270] pointer-events-none" />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 w-full md:w-80">
              <label className="text-xs font-bold text-[#8c8270] uppercase tracking-wider">Select Practice</label>
              <div className="relative">
                <select className="w-full appearance-none bg-[#faf9f6] border border-[#d5cebd] text-[#3d405b] py-2 pl-3 pr-8 rounded text-sm font-medium focus:outline-none focus:border-[#2d5a27] focus:ring-1 focus:ring-[#2d5a27]">
                  <option>Gond Wall Art (Digna)</option>
                  <option>Bhagoria Haat Festival</option>
                  <option>All State Practices (Aggregate)</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-2.5 text-[#8c8270] pointer-events-none" />
              </div>
            </div>
          </div>

          <button 
            onClick={() => setCompareMode(!compareMode)}
            className={`px-4 py-2 border rounded text-sm font-bold flex items-center gap-2 transition-colors ${compareMode ? 'bg-[#2d5a27] text-white border-[#2d5a27]' : 'bg-white text-[#2d5a27] border-[#2d5a27] hover:bg-[#f0ece1]'}`}
          >
            <Filter size={16} /> Compare Mode
          </button>
        </section>

        {/* --- DASHBOARD GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Summary & Alerts (4/12) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* SECTION 1: CAI SUMMARY CARD */}
            <div className="bg-white border border-[#e5e0d8] p-6 rounded shadow-sm">
              <h2 className="text-sm font-bold text-[#3d405b] uppercase tracking-widest mb-4 border-b border-[#e5e0d8] pb-2">CAI Aggregate Score</h2>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-6xl font-serif font-bold text-[#2d5a27] leading-none">86.4</span>
                <span className="text-lg text-[#8c8270] font-mono mb-1">/ 100</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-[#c85a3a] font-mono font-bold mt-4 bg-[#fdf3ef] px-3 py-2 rounded">
                <TrendingDown size={16} /> -1.2% vs previous year
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#e5e0d8] text-xs text-[#8c8270] font-mono">
                Dataset: MP-GND-001 | Last audit: 2025-10-12
              </div>
            </div>

            {/* SECTION 4: RISK ALERTS PANEL */}
            <div className="bg-white border border-[#e5e0d8] p-6 rounded shadow-sm flex-1">
              <h2 className="text-sm font-bold text-[#3d405b] uppercase tracking-widest mb-4 border-b border-[#e5e0d8] pb-2 flex items-center justify-between">
                Risk Alerts <ShieldAlert size={16} className="text-[#c85a3a]" />
              </h2>
              
              <div className="space-y-4">
                {/* Alert 1 */}
                <div className="border-l-4 border-[#c85a3a] bg-[#fdf3ef] p-3 rounded-r">
                  <h4 className="text-sm font-bold text-[#c85a3a] flex items-center gap-2 mb-1">
                    <AlertCircle size={14} /> Commercialization Risk
                  </h4>
                  <p className="text-xs text-[#3a352f] leading-relaxed">
                    Unregulated tourism has increased mass-production of Digna motifs on non-traditional canvases. Score dropped by 5.7 points.
                  </p>
                </div>
                
                {/* Alert 2 */}
                <div className="border-l-4 border-[#e5a93d] bg-[#fcf8ed] p-3 rounded-r">
                  <h4 className="text-sm font-bold text-[#b38024] flex items-center gap-2 mb-1">
                    <TrendingDown size={14} /> Transmission Decline
                  </h4>
                  <p className="text-xs text-[#3a352f] leading-relaxed">
                    Fewer youths participating in the preparation of natural pigments. Oral transmission score down 2.5%.
                  </p>
                </div>

                {/* Alert 3 */}
                <div className="border-l-4 border-[#2d5a27] bg-[#e8f0e7] p-3 rounded-r">
                  <h4 className="text-sm font-bold text-[#2d5a27] flex items-center gap-2 mb-1">
                    <Activity size={14} /> Ecological Stability
                  </h4>
                  <p className="text-xs text-[#3a352f] leading-relaxed">
                    No immediate ecological threats. River clay extraction remains sustainable and within community limits.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Table, Radar, Trends (8/12) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* SECTION 2: RADAR & INDICATOR TABLE */}
            <div className="bg-white border border-[#e5e0d8] p-6 rounded shadow-sm flex flex-col xl:flex-row gap-8">
              
              {/* Radar Mockup */}
              <div className="w-full xl:w-1/3 flex flex-col">
                <h2 className="text-sm font-bold text-[#3d405b] uppercase tracking-widest mb-4">CAI Distribution</h2>
                <div className="flex-1 bg-[#f0ece1] border border-[#d5cebd] rounded flex items-center justify-center text-[#8c8270] text-sm p-8 text-center min-h-[200px]">
                  [ Radar Chart Component ] <br/><br/>
                  <span className="text-xs font-mono">Multivariate visualization of 5 core metrics.</span>
                </div>
              </div>

              {/* Data Table */}
              <div className="w-full xl:w-2/3">
                <h2 className="text-sm font-bold text-[#3d405b] uppercase tracking-widest mb-4">Metric Analysis Table</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#3d405b] text-[#3d405b] text-xs uppercase tracking-wider">
                        <th className="pb-2 font-bold">Indicator</th>
                        <th className="pb-2 font-bold text-right">Weight</th>
                        <th className="pb-2 font-bold text-right">Score</th>
                        <th className="pb-2 font-bold text-right">YoY Var</th>
                        <th className="pb-2 font-bold text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {indicators.map((ind, i) => (
                        <tr key={i} className="border-b border-[#e5e0d8] hover:bg-[#faf9f6]">
                          <td className="py-3 font-medium text-[#3a352f]">{ind.metric}</td>
                          <td className="py-3 text-right text-[#8c8270] font-mono">{ind.weight}</td>
                          <td className="py-3 text-right font-bold text-[#3d405b] font-mono">{ind.score.toFixed(1)}</td>
                          <td className="py-3 text-right font-mono text-xs">
                            <span className={ind.score >= ind.previous ? 'text-[#2d5a27]' : 'text-[#c85a3a]'}>
                              {ind.score >= ind.previous ? '+' : ''}{(ind.score - ind.previous).toFixed(1)}
                            </span>
                          </td>
                          <td className="py-3 text-right">
                            <span className={`inline-block px-2 py-1 text-[10px] font-bold uppercase rounded ${
                              ind.status === 'Stable' ? 'bg-[#e8f0e7] text-[#2d5a27]' :
                              ind.status === 'At Risk' ? 'bg-[#fdf3ef] text-[#c85a3a]' :
                              'bg-[#fcf8ed] text-[#b38024]'
                            }`}>
                              {ind.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* SECTION 3: TREND LINE (YEAR-WISE) */}
            <div className="bg-white border border-[#e5e0d8] p-6 rounded shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-sm font-bold text-[#3d405b] uppercase tracking-widest">Historical CAI Trend (2018 - 2026)</h2>
                <select className="bg-[#f0ece1] border-none text-[#3d405b] text-xs font-bold py-1 px-2 rounded cursor-pointer outline-none">
                  <option>Aggregate Score</option>
                  <option>Material Authenticity Only</option>
                  <option>Commercialization Risk Only</option>
                </select>
              </div>

              {/* Trend Line Mockup Container */}
              <div className="w-full h-64 border-l border-b border-[#d5cebd] relative flex items-end justify-between pt-4 px-2">
                {/* Y-Axis Labels */}
                <div className="absolute -left-6 top-0 bottom-0 flex flex-col justify-between text-[10px] font-mono text-[#8c8270] py-2">
                  <span>100</span><span>90</span><span>80</span><span>70</span>
                </div>
                
                {/* Mock Data Points/Bars simulating a line chart area */}
                {[
                  { year: '2018', val: 92 }, { year: '2019', val: 93 }, 
                  { year: '2020', val: 91 }, { year: '2021', val: 89 }, 
                  { year: '2022', val: 85 }, { year: '2023', val: 84 }, 
                  { year: '2024', val: 87 }, { year: '2025', val: 86.4 }
                ].map((point, i) => (
                  <div key={i} className="flex flex-col items-center w-full group relative">
                    <div className="absolute -top-8 bg-[#3d405b] text-white text-xs font-mono py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      {point.val}
                    </div>
                    {/* Simulated dot on a line graph */}
                    <div className="w-3 h-3 rounded-full bg-[#2d5a27] border-2 border-white absolute -top-1.5 z-0 group-hover:scale-150 transition-transform cursor-pointer" style={{ bottom: `${(point.val - 70) * 3.33}%` }}></div>
                    {/* Simulated vertical connection line */}
                    <div className="w-px border-l border-dashed border-[#d5cebd] absolute bottom-0" style={{ height: `${(point.val - 70) * 3.33}%` }}></div>
                    
                    <span className="text-[10px] font-mono text-[#8c8270] mt-4 absolute -bottom-6">{point.year}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center text-xs text-[#8c8270] font-mono">Years Audited</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CAIDashboard;