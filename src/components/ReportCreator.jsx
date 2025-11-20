import React, { useState } from "react";

function ReportCreator() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Kebabs");
  const [image, setImage] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // This is a UI-only draft creator. Hook this up to your backend when ready.
  };

  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">Create Blog Report</h3>
          <p className="text-slate-600">Draft a new post to share your latest find or food thoughts. Choose a category and add details.</p>
        </div>

        {submitted && (
          <div className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 px-4 py-3">
            Report draft created (not saved). Connect to backend to persist.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Best kebab spots on the east side"
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Kebabs">Kebabs</option>
                <option value="Burgers">Burgers</option>
                <option value="Restaurants">Restaurants</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Cover Image URL</label>
              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://..."
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Excerpt</label>
            <input
              type="text"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="One or two sentences summarizing your report"
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              placeholder="Write your full report here..."
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center px-5 py-2.5 rounded-full bg-emerald-600 text-white font-medium shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              Create Report
            </button>
            <span className="text-sm text-slate-500">This creates a draft locally.</span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ReportCreator;
