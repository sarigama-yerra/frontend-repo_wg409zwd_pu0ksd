import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import LoginModal from "./LoginModal";

function Header() {
  const { isAuthenticated, username, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center text-white font-bold shadow-md">FB</div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-800">Fresh Bites</h1>
            <p className="text-xs sm:text-sm text-slate-500 hidden sm:block">Simple, seasonal recipes and food stories</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#" className="hover:text-emerald-600 transition-colors">Home</a>
          <a href="#kebabs" className="hover:text-emerald-600 transition-colors">Kebabs</a>
          <a href="#burgers" className="hover:text-emerald-600 transition-colors">Burgers</a>
          <a href="#restaurants" className="hover:text-emerald-600 transition-colors">Restaurants</a>
          <a href="#create" className="hover:text-emerald-600 transition-colors">Create</a>
        </nav>
        <div className="ml-4 flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="hidden sm:inline text-sm text-slate-600">{username}</span>
              <button onClick={logout} className="inline-flex items-center justify-center rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">Logout</button>
            </>
          ) : (
            <button onClick={() => setOpen(true)} className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Admin Login</button>
          )}
        </div>
        <button className="ml-4 inline-flex md:hidden items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M3.75 5.25A.75.75 0 0 1 4.5 4.5h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 7.5a.75.75 0 0 1 .75-.75h15a.75.75.75 0 1 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 6a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" /></svg>
        </button>
      </div>
      <LoginModal open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

export default Header;
