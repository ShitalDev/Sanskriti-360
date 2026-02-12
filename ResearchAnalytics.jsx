import React from 'react';
import { Map, BarChart2, PieChart, Download, FileText, Lightbulb, ChevronRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResearchAnalytics = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#3a352f] font-sans">
      
      {/* NAVIGATION */}
      <nav className="border-b border-[#e5e0d8] bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold font-serif text-[#2d5a27] flex items-center gap-2">
            <Activity size={20} /> Sanskriti-360 <span className="text-[#8c8270] font-sans font-normal text-sm border-l border-[#e5e0d8] pl-2 ml-1">Research & Analytics</span>
          </Link>
          <div className="flex gap-4">
            <button className="text-[#3d405b] text-sm font-bold hover:text-[#c85a3a] flex items-center gap-1">
              <Download size={16} /> Export Dataset
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        
        <header>
          <h1 className="text-4xl font-serif font-bold text-[#2d5a27] mb-2">National CAI Analytics</h1>
          <p className="text-[#3d405b]">Macro-level assessment of cultural authenticity and indigenous knowledge sustainability.</p>
        </header>

        {/* TOP SECTION: Map & Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* National CAI Map */}
          <section className="lg:col-span-2 bg-white border border-[#e5e0d8] rounded-lg p-6 shadow-sm">
            <h2 className="text-sm font-bold text-[#3d405b] uppercase tracking-widest mb-4 flex items-center gap-2">
              <Map size={18} className="text-[#c85a3a]" /> National CAI Map
            </h2>
            <div className="w-full h-80 bg-[#f0ece1] border border-[#d5cebd] rounded flex flex-col items-center justify-center text-[#8c8270]">
              [ Heatmap Visualization ]
              <span className="text-xs font-mono mt-2">Aggregated state-level CAI scores (Darker = Higher Authenticity)</span>
            </div>
          </section>

          {/* Policy Insights Panel */}
          <section className="bg-[#e8f0e7] border border-[#c6dfc3] rounded-lg p-6 shadow-sm flex flex-col">
            <h2 className="text-sm font-bold text-[#2d5a27] uppercase tracking-widest mb-4 flex items-center gap-2">
              <Lightbulb size={18} /> Auto-Generated Insights
            </h2>
            <div className="flex-1 space-y-4 text-sm text-[#2d5a27] leading-relaxed">
              <p className="border-l-2 border-[#2d5a27] pl-3">
                <strong>Critical Finding:</strong> Commercialization risk in mountain ecosystems has increased by 14% YoY, directly correlating with unregulated tourism corridors.
              </p>
              <p className="border-l-2 border-[#2d5a27] pl-3">
                <strong>Positive Trend:</strong> Central Indian tribal belts (MP, Chhattisgarh) show a 6% stabilization in oral transmission due to community-led documentation.
              </p>
              <p className="border-l-2 border-[#2d5a27] pl-3">
                <strong>Recommendation:</strong> Allocate Phase II preservation funding to Assam and Kerala to address declining material authenticity scores (Avg: 72/100).
              </p>
            </div>
            <button className="mt-6 w-full py-2 bg-[#2d5a27] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#1e3c1a] transition-colors">
              Generate Policy Brief
            </button>
          </section>

        </div>

        {/* BOTTOM SECTION: Comparative Charts & Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Comparative Charts */}
          <section className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#e5e0d8] rounded-lg p-6 shadow-sm">
              <h2 className="text-sm font-bold text-[#3d405b] uppercase tracking-widest mb-4 flex items-center gap-2">
                <BarChart2 size={18} className="text-[#c85a3a]" /> State-wise Avg CAI
              </h2>
              <div className="w-full h-48 bg-[#f0ece1] border border-[#d5cebd] rounded flex items-center justify-center text-[#8c8270] text-sm">
                [ Bar Chart ]
              </div>
            </div>
            <div className="bg-white border border-[#e5e0d8] rounded-lg p-6 shadow-sm">
              <h2 className="text-sm font-bold text-[#3d405b] uppercase tracking-widest mb-4 flex items-center gap-2">
                <PieChart size={18} className="text-[#c85a3a]" /> Ecological Type Analysis
              </h2>
              <div className="w-full h-48 bg-[#f0ece1] border border-[#d5cebd] rounded flex items-center justify-center text-[#8c8270] text-sm">
                [ Pie/Doughnut Chart ]
              </div>
            </div>
          </section>

          {/* Downloadable Reports */}
          <section className="bg-white border border-[#e5e0d8] rounded-lg p-6 shadow-sm">
            <h2 className="text-sm font-bold text-[#3d405b] uppercase tracking-widest mb-6">Downloadable Reports</h2>
            <div className="space-y-3">
              {[
                { title: "Q3 2025 National CAI Audit", format: "PDF", size: "2.4 MB" },
                { title: "Ecological Risk Correlation", format: "CSV", size: "850 KB" },
                { title: "Tribal Authorship Data", format: "XLSX", size: "1.2 MB" },
              ].map((report, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border border-[#d5cebd] rounded hover:border-[#3d405b] transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-[#8c8270] group-hover:text-[#c85a3a]" />
                    <div>
                      <p className="text-sm font-bold text-[#3d405b]">{report.title}</p>
                      <p className="text-xs text-[#8c8270] font-mono">{report.format} • {report.size}</p>
                    </div>
                  </div>
                  <Download size={16} className="text-[#8c8270] group-hover:text-[#c85a3a]" />
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default ResearchAnalytics;