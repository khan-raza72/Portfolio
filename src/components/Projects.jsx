import { projects } from "../assets/tech_logo/constants.js";

// === PROJECTS DATA ARRAY ===
// This array will store all project objects.
// Add new projects here with the following structure:
// {
//   id: unique number,
//   title: "Project Name",
//   description: "Brief description of the project",
//   technologies: ["Tech1", "Tech2", "Tech3"],
//   liveUrl: "https://link-to-deployed-project.com",
//   githubUrl: "https://github.com/your-username/project-repo",
//   image: "project-image-path",
//   features: ["Feature 1", "Feature 2", "Feature 3"]
// }

const projectsList = [];

const Projects = () => {
  return (
    // Main projects section with responsive layout
    <section
      id="projects"
      className="px-4 py-20 sm:px-8 md:px-[7vw] lg:px-[10vw]"
    >
      <div className="mx-auto max-w-6xl">
        {/* === MAIN HEADING SECTION === */}
        <div className="mb-10 text-center">
          {/* Section label: small uppercase text above the main heading */}
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
           Project
          </p>

          {/* Main section heading: describes the content focus */}
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            My Projects
          </h2>

          {/* Decorative divider line under the main heading */}
          <div className="mx-auto mt-4 h-1 w-auto rounded-full bg-[#8245ec]" />

          {/* Description paragraph: additional context about projects */}
          <p className="mt-5 text-base font-medium leading-8 text-gray-300 sm:text-lg">
            Innovative solutions built with modern technologies. Each project
            represents hands-on experience with real-world development
            challenges.
          </p>
        </div>

        {/* === PROJECTS GRID CONTAINER === */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsList && projectsList.length > 0 ? (
            // === PROJECTS MAPPING: Display all projects ===
            projectsList.map((project) => (
              /*
                Individual project card displaying project details.
                Each card shows: title, description, technologies, links.
              */
              <article
                key={project.id}
                className="group rounded-lg border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
              >
                {/* Project title heading */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition duration-300">
                  {project.title}
                </h3>

                {/* Project description */}
                <p className="mt-3 text-gray-300 text-sm leading-6">
                  {project.description}
                </p>

                {/* Technologies used - tags section */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies &&
                    project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                {/* Project action buttons */}
                <div className="mt-6 flex gap-3">
                  {/* Live demo link button */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-2 text-center text-sm font-semibold text-white transition duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                    >
                      Live Demo
                    </a>
                  )}

                  {/* GitHub repository link button */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-lg border border-white/30 px-4 py-2 text-center text-sm font-semibold text-white transition duration-300 hover:bg-white/10 hover:border-cyan-300/50"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            ))
          ) : (
            // === EMPTY STATE: When no projects exist ===
            <div className="col-span-full text-center py-16">
              <div className="inline-block">
                {/* Empty state icon/placeholder */}
                <div className="mb-4 text-6xl text-gray-600">📁</div>

                {/* Empty state heading */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  Projects Coming Soon
                </h3>

                {/* Empty state description */}
                <p className="text-gray-400 text-lg max-w-md">
                  I'm currently working on exciting projects. Check back soon to
                  see my latest work and innovations in web development.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* === HOW TO ADD PROJECTS === */}
        {/* 
          INSTRUCTIONS TO ADD PROJECTS:
          
          1. Update the projectsList array above with your project objects.
          
          2. Each project should have:
             - id: Unique identifier (number)
             - title: Project name (string)
             - description: Brief overview (string)
             - technologies: Array of tech stack (e.g., ["React", "Node.js", "MongoDB"])
             - liveUrl: URL to live deployed project (string, optional)
             - githubUrl: URL to GitHub repository (string, optional)
             - image: Path to project screenshot (string, optional - for future use)
             - features: Array of key features (array, optional)
          
          3. The component will automatically display all projects in a responsive grid.
          
          4. The empty state will disappear once you add projects to the array.
          
          EXAMPLE PROJECT OBJECT:
          {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce application with payment integration",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "https://ecommerce-demo.com",
            githubUrl: "https://github.com/username/ecommerce",
            features: ["Product catalog", "Shopping cart", "Secure checkout"]
          }
        */}
      </div>
    </section>
  );
};

export default Projects;
