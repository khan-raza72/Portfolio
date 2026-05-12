// Education.jsx
// Renders the Education section with accessible headings and responsive layout.
import mohdHasanImage from "../assets/education_logo/mohdhasan.jpg";

const education = [
  {
    id: 1,
    image: mohdHasanImage,
    school: "Mohd Hasan P.G. College, Jaunpur",
    university: "Veer Bahadur Singh Purvanchal University",
    degree: "Bachelor of Computer Applications (BCA)",
    date: "2023 - 2026",
    grade: "Graduated",
    description:
      "Completed my higher education with a strong focus on academics, discipline, practical learning, and consistent personal growth.",
  },
];

// Secondary education data (10th and 12th grade)
const secondaryEducation = [
  {
    id: 2,
    class: "10th Grade",
    board: " (UP Board)",
    percentage: "86.83%",
    year: "2021",
    description:
      "Successfully completed 10th grade with strong academic performance across all subjects.",
  },
  {
    id: 3,
    class: "12th Grade",
    board: "(UP Board)",
    percentage: "82.83%",
    year: "2023",
    description:
      "Completed 12th grade with excellent results, building foundation for higher education.",
  },
];

const Education = () => {
  return (
    // Top-level section grouping all education entries. `aria-labelledby` links to the main heading.
    <section
      id="education"
      aria-labelledby="education-heading"
      className="px-4 py-20 sm:px-8 md:px-[7vw] lg:px-[10vw]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          {/* Main section heading: visible title for users and screen readers */}
          <h2
            id="education-heading"
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Education
          </h2>

          {/* Decorative divider under the section title */}
          <div className="mx-auto mt-2 h-1 w-24 bg-[#8245ec]" />

          {/* Short description for the section */}
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            My academic journey and the institutions that helped build my
            foundation.
          </p>
        </div>

        <div className="grid gap-6">
          {education.map((item) => (
            /*
              Each education entry is an <article> with an associated heading.
              The article is labeled by the school heading for assistive tech.
            */
            <article
              key={item.id}
              aria-labelledby={`education-${item.id}-school`}
              className="grid overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-xl shadow-black/20 backdrop-blur md:grid-cols-[minmax(220px,320px)_1fr]"
            >
              {/* Visual: institution image (lazy-loaded for performance) */}
              <div className="h-56 w-full bg-black/20 sm:h-72 md:h-full">
                <img
                  src={item.image}
                  alt={`${item.school} - ${item.degree}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                {/* University/issuer - small uppercase label */}
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">
                  {item.university}
                </p>

                {/*
                  School heading: primary heading for the article.
                  It is referenced by `aria-labelledby` on the parent <article>.
                */}
                <h3
                  id={`education-${item.id}-school`}
                  className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl"
                >
                  {item.school}
                </h3>

                {/* Degree: short, prominent line describing the program */}
                <p className="mt-2 text-lg font-semibold text-cyan-200">
                  {item.degree}
                </p>

                {/* Date and status chips */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-gray-200">
                    {item.date}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-gray-200">
                    {item.grade}
                  </span>
                </div>

                {/* Description: supplementary details about the education entry */}
                <p className="mt-4 leading-7 text-gray-300">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* === SECONDARY EDUCATION SECTION === */}
        <div className="mt-16">
          <div className="mb-10 text-center">
            {/* Secondary education subheading */}
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Secondary Education
            </h3>
            {/* Decorative divider */}
            <div className="mx-auto mt-2 h-1 w-16 bg-[#8245ec]" />
          </div>

          {/* === SECONDARY EDUCATION GRID (10th & 12th) === */}
          <div className="grid gap-6 md:grid-cols-2">
            {secondaryEducation.map((item) => (
              /*
                Secondary education cards displayed in responsive grid.
                No images - uses color-coded layout for visual distinction.
              */
              <article
                key={item.id}
                className="group rounded-lg border border-white/10 bg-linear-to-br from-blue-900/20 to-cyan-900/20 p-6 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:from-blue-800/30 hover:to-cyan-800/30 sm:p-7"
              >
                {/* Class/Grade heading */}
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-cyan-300">
                    {item.class}
                  </h4>
                  {/* Percentage badge */}
                  <span className="rounded-full bg-linear-to-r from-green-400 to-emerald-500 px-4 py-2 text-sm font-bold text-white">
                    {item.percentage}
                  </span>
                </div>

                {/* Board/Institution name */}
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                  {item.board}
                </p>

                {/* Year of completion */}
                <p className="mt-4 flex items-center gap-2 text-base font-semibold text-gray-200">
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
                  Year: {item.year}
                </p>

                {/* Description */}
                <p className="mt-4 leading-6 text-gray-300">
                  {item.description}
                </p>

                {/* Progress bar visualization */}
                <div className="mt-5 space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-gray-400">
                    <span>Academic Performance</span>
                    <span>{item.percentage}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-green-400 to-emerald-500 transition-all duration-500"
                      style={{ width: item.percentage }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
