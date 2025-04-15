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
        require('../assets/nano.png'),
      "/images/biotech2.png",
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
        require('../assets/intern.png'),
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
              className="bg-sena-dark bg-texture text-sena-light rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-8 shadow-xl transition duration-300 "
            >
              {/* Slider */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-sena-light/20">
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
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-sm mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center gap-2"
                      >
                        <div className="p-[2px] rounded-full bg-gradient-to-br from-sena-light via-sena-sena to-sena-sena shadow-lg transform transition-all ">
                          <div className="flex flex-col items-center justify-center bg-sena-dark rounded-full px-4 py-3 gap-2 text-center">
                            <span className="text-sena-light opacity-80 text-sm sm:text-sm md:text-sm font-semibold">
                              {tech}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-sena-sena hover:bg-sena-header text-sena-light font-medium py-2 px-6 rounded-none  shadow-md hover:scale-110 inline-flex items-center gap-2 transition duration-300"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.more}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border  border-sena-sena text-sena-light rounded-lg text-sm font-medium inline-flex items-center gap-2 transition duration-300"
                  >
                    More <FaGithub />
                  </a>
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
