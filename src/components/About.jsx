import { TypeAnimation } from "react-type-animation";
import Myimage from "../assets/myimage.jpeg";
const About = () => {
  return (
    // About section container with responsive layout
    <section
      id="about"
      className="px-4 py-24 font-sans flex flex-col md:flex-row  justify-center sm:px-[10vw] lg:px-[8vw]"
    >
      <div className="flex flex-col md:flex-row min-h-[70vh]  items-center justify-center">
        {/* === LEFT SIDE: TEXT CONTENT === */}
        <div className="  md:w-1/2 flex flex-col justify-center items-center">
          {/* Greeting heading */}
          <h1 className="text-2xl font-extrabold leading-tight  flex flex-start text-white sm:text-4xl md:text-5xl">
            Hi, I am
          </h1>

          {/* Main name heading */}
          <h2 className="mt-2 text-4xl font-black  tracking-tight text-white sm:text-5xl md:text-6xl">
            Murshal Raza Khan
          </h2>

          {/* Dynamic role description with type animation */}
          <h3 className="mt-5 wrap-break-words text-xl font-semibold text-white sm:text-2xl md:text-3xl">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                1600,
                "Frontend Developer",
                1600,
                "Backend Developer",
                1600,
                "UI/UX Developer",
                1600,
                "React Developer",
                1600,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h3>
          {/* About me paragraph: introduction and professional summary */}
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            I am a MERN Stack Developer and Gen AI enthusiast passionate about
            building modern, responsive, and scalable web applications with
            clean UI and smooth user experiences.
          </p>

          {/* Resume Download Button */}
          <button className="mt-8 rounded-full bg-linear-to-r from-purple-500 to-cyan-500 px-6 py-3 text-lg font-bold text-white transition-all duration-300 hover:scale-105">
            <a
              href="https://drive.google.com/file/d/1kjwG3Uc4pfdKbWkuzbKkpAuWlSpx-gwO/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </button>
        </div>

        {/* === RIGHT SIDE: PROFILE IMAGE === */}
        <div className="md:w-1/2 flex justify-center md:justify-end items-center relative overflow-visible mt-10 md:mt-0">
          <div>
            {/* Profile image with animated effects */}
            <img
              src={Myimage}
              alt="My Image"
              className="
        rounded-full
        border-4 border-cyan-500
        shadow-2xl shadow-cyan-500/40
        relative
        md:-translate-y-10
        md:translate-x-20
        transition-all duration-500
        hover:scale-105
        top-8
      "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
