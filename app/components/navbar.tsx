import { useLocation } from "react-router";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const location = useLocation();

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      // Set initial active tab from URL hash
      const hash = window.location.hash.slice(1);
      setActiveTab(hash || "all");

      // Listen for hash changes
      const handleHashChange = () => {
        const newHash = window.location.hash.slice(1);
        setActiveTab(newHash || "all");
      };

      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  const handleSmoothScroll = (sectionId: string) => {
    setIsOpen(false);
    setActiveTab(sectionId);
    
    // Only update hash and scroll on client side
    if (typeof window !== "undefined") {
      window.location.hash = sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleSmoothScroll("all")} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
           Glenn
            </span>
          </button>

          {/* Desktop Navigation - Centered Pill Container */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <div className="bg-slate-800 rounded-full p-1.5 flex items-center gap-1">
              <button
                onClick={() => handleSmoothScroll("all")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "all"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                All
              </button>
              <button
                onClick={() => handleSmoothScroll("about")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "about"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleSmoothScroll("projects")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "projects"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => handleSmoothScroll("media")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "media"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Media
              </button>
            </div>
          </div>

          {/* Contact Button - Right */}
          <a
            href="mailto:hello@itsmegl3nn@email.com"
            className="hidden md:inline-block text-orange-500 hover:text-orange-400 font-medium text-sm transition-colors"
          >
            Contact
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-orange-500 hover:text-orange-400 hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleSmoothScroll("all")}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium rounded-lg hover:bg-slate-800"
              >
                All
              </button>
              <button
                onClick={() => handleSmoothScroll("about")}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium rounded-lg hover:bg-slate-800"
              >
                About
              </button>
              <button
                onClick={() => handleSmoothScroll("projects")}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium rounded-lg hover:bg-slate-800"
              >
                Projects
              </button>
              <button
                onClick={() => handleSmoothScroll("media")}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium rounded-lg hover:bg-slate-800"
              >
                Media
              </button>
              <a
                href="mailto:hello@itsmegl3nn@email.com"
                className="px-4 py-2 text-orange-500 font-medium text-sm hover:text-orange-400 transition-colors rounded-lg hover:bg-slate-800"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
