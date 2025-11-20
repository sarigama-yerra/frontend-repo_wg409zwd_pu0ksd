import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-4">Clean • Seasonal • Delicious</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">Food that feels good</h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">Fresh Bites is your home for simple, vibrant recipes made with real ingredients. Explore quick weeknight dinners, wholesome lunches, and sweet treats — always with crisp photos and step‑by‑step tips.</p>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center px-5 py-3 rounded-full bg-emerald-600 text-white font-medium shadow-sm hover:bg-emerald-700">Explore Recipes</button>
              <button className="inline-flex items-center px-5 py-3 rounded-full border border-slate-200 text-slate-700 font-medium hover:bg-slate-50">Subscribe</button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1600&auto=format&fit=crop" alt="Food collage" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-3xl bg-emerald-200/50 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-3xl bg-lime-200/50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
