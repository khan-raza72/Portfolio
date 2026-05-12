import { SkillsInfo } from "../assets/tech_logo/constants.js";

const categoryStyles = {
  Frontend: {
    accent: "from-cyan-400 to-blue-500",
    ring: "group-hover:ring-cyan-300/40",
  },
  Backend: {
    accent: "from-emerald-400 to-teal-500",
    ring: "group-hover:ring-emerald-300/40",
  },
  Languages: {
    accent: "from-amber-300 to-orange-500",
    ring: "group-hover:ring-amber-300/40",
  },
  Tools: {
    accent: "from-fuchsia-400 to-rose-500",
    ring: "group-hover:ring-fuchsia-300/40",
  },
};

const Skills = () => {
  return (
    // Main skills section container with responsive padding
    <section
      id="skills"
      className="px-4 py-20 font-sans sm:px-8 md:px-[7vw] lg:px-[9vw]"
    >
      <div className="mx-auto max-w-6xl">
        {/* === MAIN HEADING SECTION === */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Section label: small uppercase text above the main heading */}
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Skills
          </p>

          {/* Main section heading: describes the content focus */}
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Technologies I Work With
          </h2>

          {/* Decorative divider line under the main heading */}
          <div className="mx-auto mt-4 h-1 w-auto rounded-full bg-[#8245ec]" />

          {/* Description paragraph: additional context about the skills */}
          <p className="mt-5 text-base font-medium leading-8 text-gray-300 sm:text-lg">
            A focused toolkit for building responsive interfaces, scalable
            backends, and complete web applications.
          </p>
        </div>

        {/* === SKILLS GRID BY CATEGORY === */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SkillsInfo.map((category, categoryIndex) => {
            const style =
              categoryStyles[category.title] ?? categoryStyles.Tools;

            return (
              // === CATEGORY CARD: Frontend, Backend, Languages, Tools ===
              <article
                key={category.title}
                className="group rounded-lg border border-white/10 bg-white/[0.07] p-4 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 sm:p-6"
                style={{ transitionDelay: `${categoryIndex * 40}ms` }}
              >
                {/* Category header with title and count */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    {/* Category accent bar (colored indicator) */}
                    <div
                      className={`mb-3 h-1.5 w-16 rounded-full bg-linear-to-r ${style.accent}`}
                    />
                    {/* Category title heading (Frontend, Backend, etc.) */}
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill count badge */}
                  <span className="w-fit rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold text-gray-200">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* === INDIVIDUAL SKILLS GRID === */}
                <div className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    // === SKILL CARD: displays logo, name, and progress bar ===
                    <div
                      key={skill.name}
                      className={`flex min-h-20 items-center gap-4 rounded-lg border border-white/10 bg-gray-950/45 p-4 ring-1 ring-transparent transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-gray-900/70 ${style.ring}`}
                      style={{ transitionDelay: `${skillIndex * 25}ms` }}
                    >
                      {/* Skill logo container */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-lg shadow-black/20">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      {/* Skill name and proficiency bar */}
                      <div className="min-w-0">
                        {/* Skill name heading */}
                        <p className="wrap-break-words text-base font-bold text-white">
                          {skill.name}
                        </p>
                        {/* Proficiency progress bar (colored) */}
                        <div className="mt-2 h-1.5 w-full max-w-28 overflow-hidden rounded-full bg-white/10">
                          <div
                            className={`h-full rounded-full bg-linear-to-r ${style.accent}`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
