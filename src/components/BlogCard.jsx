import React from "react";

function BlogCard({ image, title, excerpt }) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">{title}</h3>
        <p className="text-slate-600 text-sm line-clamp-3">{excerpt}</p>
      </div>
    </article>
  );
}

export default BlogCard;
