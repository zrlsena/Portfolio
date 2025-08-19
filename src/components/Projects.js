import React from "react";
import Slider from "react-slick";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Admin Dashbooard Panel Website",
    description:
      "Redesigned and developed the admin dashboard using Vue.js & Tailwind. Implemented state management with Pinia, integrated frontend with backend APIs, and ensured a responsive, modern user experience.",
      tech: ["Vue.js", "Tailwind CSS", "TypeScript", "Responsive Design", "UI/UX"],
      images: [
      require("../assets/dashboard.png"),
      require("../assets/secondstatic.png"),
      require("../assets/performancemonitor.png"),
      require("../assets/passwors.png"),

    ],
    
  },
  {
    title: "Biotechnology Company Website",
    description:
      "A comprehensive and visually striking corporate website built from scratch for a biotechnology startup. Designed and developed entirely by me using React and Bootstrap. Focused on clean UI/UX, responsive layout, and professional branding tailored to a modern tech-driven audience.",
      tech: ["React", "Bootstrap", "JavaScript", "Responsive Design", "UI/UX"],
      images: [
      require("../assets/nano.png"),
      require("../assets/nano2.png"),
      require("../assets/nano3.png"),
    ],
    live: "https://nano-wiss.vercel.app",
    more: "https://github.com/zrlsena/NanoWiss",
  },
  {
    title: "Shopney Front-End Internship",
    description:
      "Contributed to the front-end development of a Shopify-to-mobile app converter as part of a team. Translated complex Figma designs into responsive and dynamic UI components using React and Bootstrap. Integrated the given backend seamlessly, focusing on user flow and pixel-perfect implementation.",
      tech: ["React", "Bootstrap", "JavaScript", "Figma to Code", "Team Collaboration"],
      images: [
      require("../assets/intern.png"),
      require("../assets/intern2.png"),
      require("../assets/intern3.png"),
    ],
    more: "https://github.com/zrlsena/EticPlus",
  },
  {
    title: "Art E-Commerce Website",
    description:
      "A fully functional e-commerce platform crafted end-to-end for art enthusiasts. Built with modern technologies including React, Node.js, MongoDB, and Vite. Features dynamic product display, real-time cart, secure routing, and a responsive UI — all designed and developed by me with a minimalist aesthetic.",
      tech: ["React", "Node.js", "MongoDB", "Bootstrap", "Vite", "Full-Stack"],
      images: [
      require("../assets/art1.png"),
      require("../assets/art2.png"),
      require("../assets/art3.png"),
    ],
    more: "https://github.com/zrlsena/E-commerce",
  },
];

const sliderSettings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  dots: true,
};

const Projects = () => {
  return (
    <section
  id="projects"
  className="min-h-screen flex flex-col justify-center items-center bg-flat bg-sena-flat text-sena-textDark relative overflow-hidden px-4 sm:px-6 py-16"
>

      {/* Title */}
      <div className="absolute top-6 w-full text-center">
        <h2
          className="text-5xl text-black font-playfair block"
          style={{ letterSpacing: "3px" }}
        >
          MY PROJECTS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto ">
        <div className="space-y-10 mt-20 ">
          {projects.map((project, index) => (
            <div
            key={index}
            className="w-full max-w-screen-lg mx-auto text-sena-light rounded-3xl px-4 sm:px-6 py-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 transition duration-300"
          >
          
              {/* Slider */}
              <div className=" overflow-hidden border border-none w-full max-w-full ">
                <Slider {...sliderSettings}>
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="object-cover h-auto w-full filter opacity-80"
                    />
                  ))}
                </Slider>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between ">
                <div>
                  <h3
                    className="text-2xl text-gray-700 font-playfair block mb-2 font-bold"
                    style={{ letterSpacing: "3px" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-m font-librebaskerville leading-relaxed max-w-md text-gray-600 firstLetter mb-5"
                    style={{ letterSpacing: "1.2px", fontSize: "1rem" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex  items-start gap-6">
                    {/* Bantlı Not Kağıdı */}

                    <div className="flex gap-4 mr-6 mt-5">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-sena-sena hover:bg-sena-header text-sena-light font-medium py-2 px-6 rounded-none shadow-md hover:scale-110 inline-flex items-center gap-2 transition duration-300"
                        >
                          Live <FaExternalLinkAlt />
                        </a>
                      )}

                      {project.more && (
                        <a
                          href={project.more}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-sena-sena text-sena-sena rounded-lg text-sm font-medium inline-flex items-center gap-2 transition duration-300"
                        >
                          More <FaGithub />
                        </a>
                      )}
                    </div>

                    <div
                      className={`relative rotate-[5deg] mt-5 ml-auto w-[160px] min-w-[140px]`}
                      style={{
                        width: `${Math.max(120, project.tech.length * 35)}px`, // Dinamik genişlik
                      }}
                    >
                      {/* Bantlar */}
                      <div className="absolute top-[-8px] left-[-12px] w-12 h-4 bg-gray-400 rotate-[-10deg] opacity-30 shadow-md  z-10"></div>
                      <div className="absolute top-[-8px] bg-gray-400 right-[-12px] w-12 h-4 bg-sena-yellow rotate-[12deg] shadow-md opacity-30 z-10"></div>

                      {/* Kağıt */}
                      <div className="bg-white text-sena-sena font-signature p-4 pt-3 shadow-md">
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
