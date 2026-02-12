import React, { useState } from 'react';
import { Upload, Mic, Video, MapPin } from 'lucide-react';

const KnowledgeSubmission = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Ritual',
    description: '',
    location: '',
    sustainability: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting to blockchain verification...", formData);
    // Add API call logic here
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-slate-900">Submit Knowledge</h1>
        <p className="text-slate-600 mt-2">Share your community's heritage. All submissions undergo community verification.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Title of Practice</label>
            <input type="text" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. Warli Painting" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
            <select className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none">
              <option>Festival</option>
              <option>Ritual</option>
              <option>Oral Tradition</option>
              <option>Ecological Knowledge</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Description & Context</label>
          <textarea rows="4" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Describe the history, significance, and procedure..."></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Sustainability Details</label>
          <input type="text" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="How does this practice impact the local ecology?" />
        </div>

        {/* Media Uploads */}
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 bg-slate-50 text-center">
          <div className="flex justify-center gap-4 mb-4 text-slate-400">
            <Upload size={32} />
            <Mic size={32} />
            <Video size={32} />
          </div>
          <p className="font-medium text-slate-700">Drag and drop media files here</p>
          <p className="text-sm text-slate-500">Supports Images, Audio (MP3), Video (MP4)</p>
          <button type="button" className="mt-4 px-4 py-2 bg-white border border-slate-300 rounded-md text-sm font-medium hover:bg-slate-50">Browse Files</button>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-indigo-600 cursor-pointer">
          <MapPin size={18} />
          <span className="font-medium">Pin Location on Map</span>
        </div>

        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-lg hover:bg-indigo-700 transition">
          Submit for Verification
        </button>
      </form>
    </div>
  );
};

export default KnowledgeSubmission;