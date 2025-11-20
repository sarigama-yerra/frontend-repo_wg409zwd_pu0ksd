import React, { useState } from "react";
import { useAuth } from "./AuthContext";

function ReportCreator() {
  const { isAuthenticated, token } = useAuth();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Kebabs");
  const [imageFile, setImageFile] = useState(null);
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!isAuthenticated) {
      setError("Only admins can create posts. Please log in.");
      return;
    }
    setLoading(true);
    try {
      const form = new FormData();
      form.append("title", title);
      form.append("category", category);
      if (excerpt) form.append("excerpt", excerpt);
      form.append("content", content);
      if (imageFile) form.append("image", imageFile);

      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/reports`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to create report");
      }
      setSubmitted(true);
      setTitle("");
      setExcerpt("");
      setContent("");
      setImageFile(null);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">Create Blog Report</h3>
          <p className="text-slate-600">Only admins can post. Upload an image, choose a category, and write your content.</p>
        </div>

        {submitted && (
          <div className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 px-4 py-3">
            Report published successfully.
          </div>
        )}
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 text-red-800 px-4 py-3">
            {error}
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
              <label className="block text-sm font-medium text-slate-700 mb-1">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:text-white hover:file:bg-emerald-700"
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
            <button type="submit" disabled={loading} className="inline-flex items-center px-5 py-2.5 rounded-full bg-emerald-600 text-white font-medium shadow-sm hover:bg-emerald-700 disabled:opacity-60">
              {loading ? "Publishing..." : "Publish Report"}
            </button>
            {!isAuthenticated && <span className="text-sm text-slate-500">Login as admin to publish.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ReportCreator;
