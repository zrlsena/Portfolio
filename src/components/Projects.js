import React from "react";
import Slider from "react-slick";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Biotechnology Company Website",
    description:
      "An ongoing website for a biotechnology startup. Developed using React, Express, MongoDB, and Node.js. Designed with a focus on accessibility and user-oriented UI/UX.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    images: [
      require("../assets/nano.png"),
      require("../assets/nano2.png"),
      "/images/biotech3.png",
    ],
    live: "https://your-live-link.com",
    more: "https://github.com/your-repo-link",
  },
  {
    title: "Shopney Front-End Internship",
    description:
      "Worked on Shopify-to-mobile app converter using React, Polaris, and Bootstrap. Built interactive UI components and dashboards. Enhanced TypeScript and SQL skills.",
    tech: ["React", "Polaris", "Bootstrap", "TypeScript", "SQL"],
    images: [
      require("../assets/intern.png"),
      "/images/shopney2.png",
      "/images/shopney3.png",
    ],
    live: "https://shopney.io",
    more: "https://linkedin.com/in/senazorlu",
  },
  {
    title: "Art E-Commerce Website",
    description:
      "Minimalist e-commerce site for artwork lovers. Built with React and Firebase, includes responsive design and real-time cart functions.",
    tech: ["React", "Firebase", "Redux", "SCSS"],
    images: [
      "/images/artecom1.png",
      "/images/artecom2.png",
      "/images/artecom3.png",
    ],
    live: "https://art-ecommerce.vercel.app",
    more: "https://github.com/senazorlu/art-ecommerce",
  },
];

const sliderSettings = {
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-flat bg-sena-flat text-sena-textDark relative overflow-hidden px-4 py-16"
    >
      <div className="absolute top-1 transform -translate-x-14 w-80 h-20 bg-sena-highlight opacity-25 z-10  "></div>
      <div className="absolute inset-0 z-0 "></div>
      {/* Title */}
      <div className="absolute top-0 w-full text-center">
        <h2
          className="text-5xl text-black font-playfair block"
          style={{ letterSpacing: "3px" }}
        >
          MY PROJECTS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto ">
        <div className="space-y-20 mt-56 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" text-sena-light rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-8  transition duration-300 "
            >
              {/* Slider */}
              <div className=" overflow-hidden  border border-sena-light/20">
                <Slider {...sliderSettings}>
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="object-cover h-64 w-full"
                    />
                    
                  ))}
                </Slider>
                
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3
                    className="font-signature opacity-90 text-sena-sena mb-4"
                    style={{
                      fontFamily: "'Just Me Again Down Here', cursive",
                      fontSize: "clamp(40px, 6vw, 48px)",
                      fontWeight: "normal",
                      transform: "rotate(-2deg)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-m font-librebaskerville leading-relaxed max-w-md text-gray-900 mb-5"
                    style={{ letterSpacing: "1.5px", fontSize: "1rem" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex  items-start gap-6">
                    {/* Bantlı Not Kağıdı */}

                    <div className="flex gap-4 mr-6 mt-5">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" bg-sena-sena hover:bg-sena-header text-sena-light font-medium py-2 px-6 rounded-none shadow-md hover:scale-110 inline-flex items-center gap-2 transition duration-300"
                      >
                        Live <FaExternalLinkAlt />
                      </a>
                      <a
                        href={project.more}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-sena-sena text-sena-light rounded-lg text-sm font-medium inline-flex items-center gap-2 transition duration-300"
                      >
                        More <FaGithub />
                      </a>
                    </div>

                    <div
                      className={`relative rotate-[5deg]`}
                      style={{
                        width: `${Math.max(120, project.tech.length * 35)}px`, // Dinamik genişlik
                      }}
                    >
                      {/* Bantlar */}
                      <div className="absolute top-0 bg-yellow-200 left-[-12px] w-16 h-6 bg-sena-yellow rotate-[-12deg] shadow-md opacity-80 z-10"></div>
                      <div className="absolute top-0 bg-yellow-200 right-[-12px] w-16 h-6 bg-sena-yellow rotate-[12deg] shadow-md opacity-80 z-10"></div>

                      {/* Kağıt */}
                      <div className="bg-white text-sena-sena font-signature p-4 pt-6 shadow-md">
                        <ul className="text-xl font-medium space-y-1 text-center">
                          {project.tech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
