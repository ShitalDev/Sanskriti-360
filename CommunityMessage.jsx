import React, { useState } from 'react';
import { MessageSquare, Users, Hash, Send, MoreVertical } from 'lucide-react';

const CommunityMessage = () => {
  const [activeChannel, setActiveChannel] = useState('General');
  const [message, setMessage] = useState('');
  
  // Mock Messages Data
  const [messages, setMessages] = useState([
    { id: 1, user: "Ravi Kumar", text: "Has anyone documented the harvest songs from the eastern district yet?", time: "10:30 AM", avatar: "RK" },
    { id: 2, user: "Anita Desai", text: "Yes! I uploaded the audio files yesterday. They are pending verification.", time: "10:35 AM", avatar: "AD" },
    { id: 3, user: "Ravi Kumar", text: "Great work! Make sure to tag the specific dialect used.", time: "10:42 AM", avatar: "RK" },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessages([...messages, {
        id: messages.length + 1,
        user: "You",
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: "ME"
    }]);
    setMessage('');
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-slate-50">
      {/* Sidebar - Channels */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <h2 className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <Users className="text-indigo-600" /> Community
          </h2>
          <p className="text-xs text-slate-500 mt-1">Kerala Heritage Group</p>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2 text-xs font-semibold text-slate-400 uppercase">Channels</div>
          {['General', 'Rituals & Customs', 'Events', 'Verification Help', 'Announcements'].map((channel) => (
            <button
              key={channel}
              onClick={() => setActiveChannel(channel)}
              className={`w-full text-left px-6 py-2 text-sm flex items-center gap-2 ${
                activeChannel === channel ? 'bg-indigo-50 text-indigo-600 font-medium border-r-2 border-indigo-600' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Hash size={16} /> {channel}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col bg-slate-50">
        {/* Chat Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex justify-between items-center px-6">
          <div className="flex items-center gap-2">
            <Hash className="text-slate-400" />
            <h3 className="font-bold text-slate-800">{activeChannel}</h3>
          </div>
          <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={20}/></button>
        </header>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.user === 'You' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 ${msg.user === 'You' ? 'bg-indigo-600' : 'bg-slate-400'}`}>
                {msg.avatar}
              </div>
              <div className={`max-w-[70%] ${msg.user === 'You' ? 'items-end' : 'items-start'} flex flex-col`}>
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-bold text-sm text-slate-900">{msg.user}</span>
                    <span className="text-xs text-slate-400">{msg.time}</span>
                </div>
                <div className={`p-4 rounded-xl text-sm leading-relaxed shadow-sm ${
                    msg.user === 'You' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200">
          <form onSubmit={handleSend} className="relative max-w-4xl mx-auto">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Message #${activeChannel}...`}
              className="w-full pl-6 pr-14 py-4 bg-slate-100 border-none rounded-full focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
            />
            <button 
                type="submit"
                className="absolute right-2 top-2 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition shadow-md"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CommunityMessage;