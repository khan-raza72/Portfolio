// Footer.jsx
// Comprehensive responsive footer with navigation, social links, and copyright info.

// === SOCIAL MEDIA ICONS ===
const GitHubIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.94 8.98H3.75v10.77h3.19V8.98ZM5.35 4.25a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.82c0-3.06-1.64-5.03-4.28-5.03-1.24 0-2.14.68-2.55 1.34h-.04V8.98h-3.06v10.77h3.19v-5.33c0-1.41.27-2.77 2.01-2.77 1.72 0 1.74 1.6 1.74 2.86v5.24h3.19v-5.93h-.2Z" />
  </svg>
);

const MailIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

function Footer() {
  const currentYear = new Date().getFullYear();

  // === FOOTER NAVIGATION LINKS ===
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  // === SOCIAL MEDIA LINKS ===
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/khan-raza72",
      icon: GitHubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: LinkedInIcon,
    },
    {
      label: "Email",
      href: "mailto:mursalrazakhan786@gmail.com",
      icon: MailIcon,
    },
  ];

  return (
    // Main footer section with full-width background
    <footer className="border-t border-white/10 bg-linear-to-b from-black/40 to-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 md:px-[7vw] lg:px-[9vw]">
        {/* === FOOTER CONTENT GRID === */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {/* === SECTION 1: BRAND & DESCRIPTION === */}
          <div className="flex flex-col justify-start">
            {/* Brand/Logo heading */}
            <h3 className="text-lg font-bold text-white">Murshal Raza Khan</h3>

            {/* Professional title */}
            <p className="mt-2 text-sm font-semibold text-cyan-300">
              MERN Stack Developer
            </p>

            {/* Brief description */}
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Building modern, responsive web applications with clean code and
              exceptional user experiences.
            </p>

            {/* Email contact */}
            <div className="mt-4 flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-cyan-400" />
              <a
                href="mailto:mursalrazakhan786@gmail.com"
                className="text-sm text-gray-300 hover:text-cyan-300 transition duration-300"
              >
                mursalrazakhan786@gmail.com
              </a>
            </div>
          </div>

          {/* === SECTION 2: QUICK LINKS === */}
          <div>
            {/* Quick links heading */}
            <h4 className="text-base font-bold text-white">Quick Links</h4>

            {/* Navigation links list */}
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition duration-300 hover:text-cyan-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* === SECTION 3: SOCIAL MEDIA & LEGAL === */}
          <div>
            {/* Social media heading */}
            <h4 className="text-base font-bold text-white">Connect With Me</h4>

            {/* Social media links - icons */}
            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex items-center justify-center rounded-lg bg-white/10 p-3 text-gray-300 transition duration-300 hover:bg-linear-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:scale-110"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            {/* Legal text */}
            <p className="mt-6 text-xs text-gray-500">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>

        {/* === FOOTER DIVIDER === */}
        <div className="mt-10 border-t border-white/10" />

        {/* === FOOTER BOTTOM: COPYRIGHT & YEAR === */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright text */}
          <p className="text-center text-sm text-gray-400 sm:text-left">
            © {currentYear} Murshal Raza Khan. All rights reserved.
          </p>

          {/* Additional credits */}
          <p className="text-center text-sm text-gray-500 sm:text-right">
            Portfolio v1.0 • Designed & Developed with{" "}
            <span className="text-red-500">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
