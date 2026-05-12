import { useEffect, useState } from "react";

const MenuIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 6l12 12M18 6 6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.94 8.98H3.75v10.77h3.19V8.98ZM5.35 4.25a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.82c0-3.06-1.64-5.03-4.28-5.03-1.24 0-2.14.68-2.55 1.34h-.04V8.98h-3.06v10.77h3.19v-5.33c0-1.41.27-2.77 2.01-2.77 1.72 0 1.74 1.6 1.74 2.86v5.24h3.19v-5.93h-.2Z" />
  </svg>
);

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menu item click
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    // Main navigation bar with sticky positioning
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414]/80 backdrop-blur-md shadow-lg shadow-cyan-500/10"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >
      {/* Navbar container with logo and navigation items */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* === LOGO SECTION === */}
        <button
          onClick={() => handleMenuItemClick("home")}
          className="text-xl sm:text-2xl font-bold tracking-wide"
        >
          <span className="text-black">&lt;</span>

          <span className="text-white">Murshal</span>

          <span className="text-black">/</span>

          <span className="text-white">Raza</span>

          <span className="text-black">/</span>

          <span className="text-white">Khan</span>

          <span className="text-black">&gt;</span>
        </button>

        {/* === DESKTOP NAVIGATION MENU === */}
        <div className="hidden md:flex items-center gap-8">
          {/* Navigation links */}
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`relative text-base font-medium transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                      isActive ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {item.label}

                    {/* Active underline indicator for current page */}
                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-cyan-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* === SOCIAL MEDIA ICONS (Desktop) === */}
          <div className="flex items-center gap-5">
            {/* GitHub Icon Link */}
            <a
              href="https://github.com/khan-raza72"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-all duration-300 hover:text-cyan-400 hover:scale-110"
            >
              <GitHubIcon />
            </a>

            {/* LinkedIn Icon Link */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-all duration-300 hover:text-cyan-400 hover:scale-110"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* === MOBILE MENU TOGGLE BUTTON === */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-cyan-400"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* === MOBILE DROPDOWN MENU === */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050414]/95 backdrop-blur-md">
          {/* Mobile navigation links list */}
          <ul className="flex flex-col items-center gap-6 py-6">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`text-lg font-medium transition-all duration-300 hover:text-cyan-400 ${
                      isActive ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}

            {/* === SOCIAL MEDIA ICONS (Mobile) === */}
            <li
              className={`flex items-center gap-6 transition-all duration-500 ease-in-out ${
                isOpen
                  ? "translate-y-0 scale-100 opacity-100"
                  : "-translate-y-4 scale-95 opacity-0"
              }`}
            >
              {/* GitHub Icon Link (Mobile) */}
              <a
                href="https://github.com/khan-raza72"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all duration-300 ease-in-out hover:scale-125 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              >
                <GitHubIcon />
              </a>

              {/* LinkedIn Icon Link (Mobile) */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all duration-300 ease-in-out hover:scale-125 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              >
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
