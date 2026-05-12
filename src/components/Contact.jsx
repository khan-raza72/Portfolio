// Contact.jsx
// Comprehensive contact section with multiple contact methods and smooth transitions.

// === CONTACT METHOD ICONS ===
const EmailIcon = () => (
  <svg
    className="h-8 w-8"
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

const PhoneIcon = () => (
  <svg
    className="h-8 w-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    className="h-8 w-8"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a8.368 8.368 0 0 0-8.239 8.245c0 1.482.379 2.929 1.1 4.201l-1.171 4.276 4.38-1.147c1.226.671 2.612 1.027 4.029 1.027h.004c4.573 0 8.298-3.736 8.298-8.254 0-2.213-.848-4.291-2.389-5.849-1.541-1.559-3.594-2.418-5.81-2.419M19.896 3.549C17.633 1.31 14.966 0 12.104 0 5.505 0 .102 5.422.102 12.022c0 2.104.547 4.156 1.588 5.986L.015 24l6.305-1.654a12.019 12.019 0 0 0 5.784 1.468h.005c6.6 0 11.999-5.422 11.999-12.023 0-3.207-1.285-6.221-3.199-8.482" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="h-8 w-8"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    className="h-8 w-8"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

function Contact() {
  // === CONTACT INFORMATION DATA ===
  const contactMethods = [
    {
      id: 1,
      label: "Email",
      value: "mursalrazakhan786@gmail.com",
      href: "mailto:mursalrazakhan786@gmail.com",
      icon: EmailIcon,
      color: "from-blue-500 to-cyan-500",
      description: "Send me an email",
    },
    {
      id: 2,
      label: "Phone",
      value: "8470822729",
      href: "tel:+918470822729",
      icon: PhoneIcon,
      color: "from-green-500 to-emerald-500",
      description: "Call me directly",
    },
    {
      id: 3,
      label: "WhatsApp",
      value: "8470822729",
      href: "https://wa.me/918470822729?text=Hello%20Murshal",
      icon: WhatsAppIcon,
      color: "from-green-400 to-green-600",
      description: "Message on WhatsApp",
    },
    {
      id: 4,
      label: "Instagram",
      value: "fullstack_raza72",
      href: "https://instagram.com/raza_pathan_72",
      icon: InstagramIcon,
      color: "from-pink-500 to-rose-500",
      description: "Follow on Instagram",
    },
    {
      id: 5,
      label: "GitHub",
      value: "khan-raza72",
      href: "https://github.com/khan-raza72",
      icon: GitHubIcon,
      color: "from-gray-700 to-gray-900",
      description: "Check my repositories",
    },
  ];

  return (
    // Main contact section with responsive layout
    <section
      id="contact"
      className="px-4 py-20 sm:px-8 md:px-[7vw] lg:px-[10vw]"
    >
      <div className="mx-auto max-w-6xl">
        {/* === MAIN HEADING SECTION === */}
        <div className="mb-12 text-center">
          {/* Section label: small uppercase text above the main heading */}
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Get In Touch
          </p>

          {/* Main section heading: describes the content focus */}
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Let's Work Together
          </h2>

          {/* Decorative divider line under the main heading */}
          <div className="mx-auto mt-4 h-1 w-auto rounded-full bg-[#8245ec]" />

          {/* Description paragraph: additional context about contact */}
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-gray-300 sm:text-lg">
            I'm available for exciting freelance projects, collaborations, and
            full-time opportunities. Feel free to reach out through any of these
            channels.
          </p>
        </div>

        {/* === CONTACT METHODS GRID === */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              /*
                Individual contact method card with icon, label, and link.
                Each card has hover animations and smooth transitions.
              */
              <a
                key={method.id}
                href={method.href}
                target={method.id > 2 ? "_blank" : "_self"}
                rel={method.id > 2 ? "noopener noreferrer" : ""}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${method.color} opacity-0 transition duration-300 group-hover:opacity-10`}
                />

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Contact method icon */}
                  <div
                    className={`mb-4 inline-flex items-center justify-center rounded-lg bg-linear-to-br ${method.color} p-3 text-white shadow-lg shadow-black/20 transition duration-300 group-hover:scale-110`}
                  >
                    <Icon />
                  </div>

                  {/* Contact method label heading */}
                  <h3 className="text-lg font-bold text-white transition duration-300 group-hover:text-cyan-300">
                    {method.label}
                  </h3>

                  {/* Contact value (phone, email, etc.) */}
                  <p className="mt-2 text-sm font-semibold text-cyan-300 break-all">
                    {method.value}
                  </p>

                  {/* Call-to-action description */}
                  <p className="mt-3 text-xs text-gray-400 transition duration-300 group-hover:text-gray-300">
                    {method.description}
                  </p>

                  {/* Hover indicator arrow */}
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 opacity-0 transition duration-300 group-hover:opacity-100">
                    Open
                    <svg
                      className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* === QUICK INFO SECTION === */}
        <div className="mt-16 rounded-lg border border-white/10 bg-linear-to-r from-purple-900/20 to-cyan-900/20 p-8 backdrop-blur transition duration-500 hover:border-cyan-300/40 hover:from-purple-900/30 hover:to-cyan-900/30">
          {/* Quick info heading */}
          <h3 className="text-lg font-bold text-white">💡 Quick Info</h3>

          {/* Quick info description */}
          <p className="mt-3 text-gray-300">
            I typically respond to inquiries within{" "}
            <span className="font-semibold text-cyan-300">24-48 hours</span>.
            Whether you have a project in mind, want to collaborate, or simply
            want to say hello, I'd love to hear from you!
          </p>

          {/* Available for section */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-sm text-gray-300">
                Frontend Development
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-sm text-gray-300">Backend Development</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-sm text-gray-300">Full-Stack Projects</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-sm text-gray-300">Freelance Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
