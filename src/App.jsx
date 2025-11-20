import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategorySections from "./components/CategorySections";
import ReportCreator from "./components/ReportCreator";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white text-slate-800">
        <Header />
        <main>
          <Hero />
          <CategorySections />
          <div id="create" className="max-w-6xl mx-auto px-4 sm:px-6">
            <ReportCreator />
          </div>
        </main>
        <footer className="mt-16 border-t border-slate-200 py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Fresh Bites • Clean food reports and stories
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
