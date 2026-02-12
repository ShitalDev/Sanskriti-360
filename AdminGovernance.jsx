import React from 'react';
import { Shield, CheckSquare, Settings, MapPin, List, AlertTriangle, Check, X } from 'lucide-react';

const AdminGovernance = () => {
  return (
    <div className="min-h-screen flex bg-[#faf9f6] text-[#3a352f] font-sans">
      
      {/* STRICT SIDEBAR */}
      <aside className="w-64 bg-[#3d405b] text-[#e5e0d8] flex flex-col">
        <div className="p-6 bg-[#2a2c3f] border-b border-[#1f2130]">
          <h1 className="text-lg font-bold font-serif text-white flex items-center gap-2">
            <Shield size={20} className="text-[#c85a3a]" /> Gov Node
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-[#8c8270] mt-1">Level 4 Access</p>
        </div>
        
        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            <li><a href="#" className="flex items-center gap-3 px-6 py-3 bg-[#4a4d6d] text-white text-sm font-bold border-l-4 border-[#c85a3a]"><CheckSquare size={16} /> Submissions</a></li>
            <li><a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-[#4a4d6d] text-sm"><Settings size={16} /> Indicator Weights</a></li>
            <li><a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-[#4a4d6d] text-sm"><MapPin size={16} /> Manage Regions</a></li>
            <li><a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-[#4a4d6d] text-sm"><AlertTriangle size={16} /> Moderation</a></li>
            <li><a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-[#4a4d6d] text-sm"><List size={16} /> Audit Logs</a></li>
          </ul>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-end border-b border-[#d5cebd] pb-4">
          <div>
            <h2 className="text-2xl font-bold text-[#3a352f]">System Governance Dashboard</h2>
            <p className="text-sm text-[#8c8270]">Manage platform integrity, approvals, and variables.</p>
          </div>
          <div className="bg-[#fdf3ef] text-[#c85a3a] px-3 py-1 rounded text-xs font-mono font-bold border border-[#c85a3a]">
            Restricted System Area
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* LEFT: Approvals & Settings (2/3) */}
          <div className="xl:col-span-2 space-y-8">
            
            {/* Approval Queue */}
            <section className="bg-white border border-[#d5cebd] rounded shadow-sm">
              <div className="p-4 border-b border-[#d5cebd] bg-[#f0ece1]">
                <h3 className="text-sm font-bold text-[#3d405b] uppercase tracking-wider">Pending Submissions (3)</h3>
              </div>
              <div className="p-0">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#faf9f6] text-[#8c8270] font-mono text-xs">
                    <tr>
                      <th className="p-4 border-b border-[#d5cebd]">ID</th>
                      <th className="p-4 border-b border-[#d5cebd]">Practice / Region</th>
                      <th className="p-4 border-b border-[#d5cebd]">Submitter</th>
                      <th className="p-4 border-b border-[#d5cebd] text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "SUB-092", name: "Korku Swang", region: "MP", user: "R. Uikey" },
                      { id: "SUB-093", name: "Bamboo Craft", region: "Assam", user: "N. Das" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#e5e0d8] hover:bg-[#faf9f6]">
                        <td className="p-4 font-mono text-xs text-[#8c8270]">{row.id}</td>
                        <td className="p-4 font-bold text-[#3d405b]">{row.name} <span className="text-xs font-normal text-[#8c8270] block">{row.region}</span></td>
                        <td className="p-4 text-[#3a352f]">{row.user}</td>
                        <td className="p-4 text-right flex justify-end gap-2">
                          <button className="p-1.5 bg-[#e8f0e7] text-[#2d5a27] border border-[#2d5a27] rounded hover:bg-[#2d5a27] hover:text-white transition-colors"><Check size={16} /></button>
                          <button className="p-1.5 bg-[#fdf3ef] text-[#c85a3a] border border-[#c85a3a] rounded hover:bg-[#c85a3a] hover:text-white transition-colors"><X size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Quick Settings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-white border border-[#d5cebd] rounded p-5 shadow-sm">
                <h3 className="text-sm font-bold text-[#3d405b] uppercase tracking-wider mb-4">CAI Indicator Weights</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-[#8c8270] mb-1"><span>Authenticity</span><span>40%</span></div>
                    <input type="range" className="w-full accent-[#3d405b]" defaultValue="40" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono text-[#8c8270] mb-1"><span>Community</span><span>30%</span></div>
                    <input type="range" className="w-full accent-[#3d405b]" defaultValue="30" />
                  </div>
                  <button className="w-full py-2 bg-[#f0ece1] text-[#3d405b] font-bold text-xs rounded border border-[#d5cebd] hover:bg-[#d5cebd]">Update Algorithm</button>
                </div>
              </section>

              <section className="bg-white border border-[#d5cebd] rounded p-5 shadow-sm">
                <h3 className="text-sm font-bold text-[#3d405b] uppercase tracking-wider mb-4">Add Geographic Region</h3>
                <div className="space-y-3">
                  <input type="text" placeholder="State/Territory Name" className="w-full p-2 border border-[#d5cebd] rounded text-sm bg-[#faf9f6]" />
                  <input type="text" placeholder="Geo-coordinates (JSON)" className="w-full p-2 border border-[#d5cebd] rounded text-sm bg-[#faf9f6] font-mono" />
                  <button className="w-full py-2 bg-[#2d5a27] text-white font-bold text-xs rounded hover:bg-[#1e3c1a]">Deploy Region</button>
                </div>
              </section>
            </div>

          </div>

          {/* RIGHT: Audit Logs (1/3) */}
          <section className="bg-white border border-[#d5cebd] rounded shadow-sm flex flex-col h-[600px]">
            <div className="p-4 border-b border-[#d5cebd] bg-[#f0ece1]">
              <h3 className="text-sm font-bold text-[#3d405b] uppercase tracking-wider flex items-center gap-2">
                <List size={16} /> System Audit Logs
              </h3>
            </div>
            <div className="p-4 flex-1 overflow-y-auto bg-[#faf9f6] font-mono text-xs space-y-3">
              {[
                { time: "10:42:01", type: "AUTH", msg: "Admin user A-04 logged in." },
                { time: "10:35:12", type: "DATA", msg: "State mapping updated (MP)." },
                { time: "09:12:44", type: "WARN", msg: "Failed consensus on SUB-081." },
                { time: "08:55:00", type: "MOD", msg: "Flagged content removed by Sys." },
                { time: "08:10:21", type: "DATA", msg: "CAI score re-calc triggered." },
              ].map((log, i) => (
                <div key={i} className="flex gap-3 border-b border-[#e5e0d8] pb-2">
                  <span className="text-[#8c8270]">{log.time}</span>
                  <span className={`font-bold ${log.type === 'WARN' ? 'text-[#c85a3a]' : 'text-[#3d405b]'}`}>[{log.type}]</span>
                  <span className="text-[#3a352f]">{log.msg}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default AdminGovernance;