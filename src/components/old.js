import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FaBootstrap,
  FaJs,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa"; // FontAwesome ikonları
import { SiTailwindcss, SiTypescript } from "react-icons/si"; // Special ikonlar
import SparkleEffect from "./SparkleEffect";
import { Sun, Moon } from "lucide-react"; // Lucide ikonları kullanıyoruz


function Old() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);
  
  
  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-[#200020] text-white" : "bg-[#f5f5f5] text-gray-800"} font-sans`}>
      <SparkleEffect />
      <header
        className={`py-6 shadow-md ${isDarkMode ? "bg-[#2d3748]" : "bg-[#f5f5f5]"} `}
        style={{
          height: "80px",
          backgroundImage: "url(./pg.png)", // Görsel yolu buraya eklenmeli
          backgroundSize: "repeat",
          backgroundPosition: "center",
        }}
      >
        <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`fixed top-5 right-5 p-3 rounded-full shadow-md transition-all
      ${isDarkMode ? " bg-yellow-400 text-white" : "bg-purple-800 text-black"}`}
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
      
        <div
          className="max-w-7xl mx-auto flex items-center justify-between px-6"
          style={{ marginTop: "30px" }}
        >
          {/* Sol Kısım */}
          <div className="text-left">
            <h1 className="text-xl font-bold">Front-end Developer</h1>
          </div>

          {/* Orta Kısım */}
          <div className="flex items-center space-x-5">
            <h1 className="text-2xl font-bold ">Sena Zorlu</h1>
            <img
              src="./IMG_5870.PNG"
              alt="Profile"
              className="w-24 h-30 -mt-2 rounded-full border-0 border-white"
            />
            <div className="flex space-x-6 text-gray-400">
              <a
                href="https://github.com/zrlsena"
                className="hover:text-white transition duration-300"
              >
                <FaGithub className="text-gray-700 w-8 h-12" title="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/sena-z-4b57721a3/"
                className="hover:text-white transition duration-300"
              >
                <FaLinkedin
                  className="text-gray-700 w-7 h-12 mr-7"
                  title="Linkedin"
                />
              </a>
            </div>
          </div>

          {/* Sağ Kısım */}
          <div className="flex space-x-4">
          <button className="bg-[#f5f5f5] border-2 border-grey text-black px-2 py-1 rounded-full hover:bg-[#1a202c] hover:text-white transition duration-300">
  <a
    href="https://drive.google.com/uc?export=download&id=13rItv_pTNalExUy63I-pAVaKkfjDYLXl"
    download
    className="flex items-center text-black-500"
  >
    CV
    <img
      src="./arrow.png"
      alt="Download Arrow"
      className="w-5 h-5 ml-1"
    />
  </a>
</button>

<button
  className="bg-[#e6cee9] text-black border-2 border-grey px-2 py-1 rounded-full hover:bg-[#e6cee9] hover:text-white transition duration-300"
  style={{ backgroundColor: "#e6cee9 !important" }}
>
  <a href="mailto:ssenazorlu@gmail.com" className="text-black">
    e-mail
  </a>
</button>


          </div>
        </div>
      </header>

      <main
        className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10"
        style={{ marginTop: "100px" }}
      >
        {/* Sol Kısım: Work Experience ve GitHub Calendar */}
        <div className="space-y-10">
          {/* Work Experience */}
          <div>
            <h2 className="text-2xl mb-4 dark:bg-gray-900 dark:text-white font-semibold  mt-0">
              Work Experience
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="p-0 bg-white shadow-lg rounded-lg ">
                
                {/* Resim Kısmı */}
                <div className="relative mb-4 w-full h-40">
                  <img
                    src="./intern.png"
                    alt="Shopney"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-black px-3 text-left mt-2">
                  Shopney
                </h3>
                <p className="text-gray-500 text-left px-3 py-1">
                  Intern Front-end developer
                </p>
                <div className="flex justify-center space-x-4 m-1 ">
                  <div className="text-sm mb-3 border-2 border-gray text-black px-2 py-2 rounded-full">
                    JavaScript
                  </div>
                  <div className="text-sm mb-3 border-2 border-gray text-black px-2 py-2 rounded-full">
                    React
                  </div>
                  <div className="text-sm mb-3 border-2 border-gray text-black px-2 py-2 rounded-full">
                    Bootstrap
                  </div>
                </div>
              </div>

              <div onClick={() => window.location.href = 'https://nano-wiss-senas-projects-72057643.vercel.app/'}  className="p-0 bg-white shadow-lg rounded-lg  hover:shadow-[0px_10px_30px_rgba(128,0,128,0.9)] transition duration-300">
                <div className="relative mb-4 w-full h-40">
                  <img
                    src="./nano.png"
                    alt="nanoWiss"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-black px-3 text-left mt-2">
                  nanoWiss
                </h3>
                <p className="text-gray-500 text-left px-3 py-1">
                  Web developer
                </p>
                <div className="flex justify-center space-x-4 m-1">
                  <div className="text-sm mb-3 border-2 border-gray text-black px-2 py-2 rounded-full">
                    JavaScript
                  </div>
                  <div className="text-sm mb-3 border-2 border-gray text-black px-2 py-2 rounded-full">
                    React
                  </div>
                  <div className="text-sm mb-3 border-2 border-gray text-black px-2 py-2 rounded-full">
                    Bootstrap
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Kısım: Project ve My Tech Stack */}
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-6">
          {/* Project */}
          <div className="flex-1 flex flex-col ">
            <h2 className="text-2xl font-semibold dark:bg-gray-900 dark:text-white mt-0 mb-4">
              Project
            </h2>
            <div className="p-0 bg-white shadow-lg rounded-lg  flex flex-col h-full mt-1">
              <div className="relative w-full h-80 overflow-hidden rounded-t-lg">
                <img
                  src="./my.jpg"
                  alt="Agenda"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* İçerik Kısmı */}
              <h3 className="text-xl font-semibold text-black px-3 text-left mt-2">
                Agenda
              </h3>
              <p className="text-gray-500 text-left px-3 py-1">
                Front-end developer
              </p>
              <div className="flex justify-start space-x-4 m-1">
                <div className="text-sm border-2 border-gray text-black px-2 py-2 rounded-full">
                  TypeScript
                </div>
                <div className="text-xs border-2 border-gray text-black px-2 py-2 rounded-full">
                  React-Native
                </div>
                <div className="text-sm  border-2 border-gray text-black px-2 py-2 rounded-full">
                  Firebase
                </div>
              </div>
            </div>
          </div>

          {/* My Tech Stack + GitHub Stats */}
          <div className="flex-1 flex flex-col items-center space-y-3">
            {/* My Tech Stack Section */}
            <div className="p-4 bg-white shadow-lg rounded-lg  w-full ">
              <h2 className="text-lg font-semibold text-center text-[#2d3748]">
                My Tech Stack
              </h2>
              <p className="text-xs text-center text-gray-400 mt-2">
                Technologies I’ve Been Working With Recently
              </p>
              <div className="flex justify-center space-x-6 mt-6">
                <FaBootstrap
                  className="text-purple-600 w-7 h-8"
                  title="Bootstrap"
                />
                <FaJs className="text-yellow-500 w-6 h-8" title="JavaScript" />
                <FaReact className="text-blue-500 w-7 h-8" title="React" />
                <FaDatabase
                  className="text-green-500 w-6 h-8"
                  title="MongoDB"
                />
              </div>
              <div className="flex justify-center space-x-6 mt-4 mb-3">
                <SiTailwindcss
                  className="text-blue-400 w-7 h-8"
                  title="Tailwind"
                />
                <SiTypescript
                  className="text-blue-600 w-6 h-8"
                  title="TypeScript"
                />
                <FaGithub className="text-gray-700 w-7 h-8" title="GitHub" />
                <FaNodeJs className="text-green-600 w-6 h-8" title="Node.js" />
              </div>
            </div>

            {/* GitHub Stats Section */}
            <div className="bg-white shadow-lg rounded-lg  w-full ">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=zrlsena"
                alt="GitHub Stats"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Old;
/*
bunu projects e uygula!!!!!!!!!!!


import React, { useState } from "react";

const projects = [
  {
    title: "Biotechnology Company Website",
    images: [
      "https://private-user-images.githubusercontent.com/96860750/392361396-ee832064-977b-41da-827a-5d5ea7687299.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ3NTc0MzQsIm5iZiI6MTc0NDc1NzEzNCwicGF0aCI6Ii85Njg2MDc1MC8zOTIzNjEzOTYtZWU4MzIwNjQtOTc3Yi00MWRhLTgyN2EtNWQ1ZWE3Njg3Mjk5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE1VDIyNDUzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNjMjQ5ZWIxNTQxZjk1NmE5YzRlMTlmMTgzNGNkZGFiYjlhZjkxZTc4OWQ0OTdkYTE3NTZjNzRiMmIzMThjNGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.YO8mDXy_IMJeO9cW2zAIBTnpE0Rk4YRV0iA3jiXLOrg",
      "https://via.placeholder.com/300x200?text=Image+2",
      "https://via.placeholder.com/300x200?text=Image+3",
    ],
  },
  {
    title: "Shopney Front-End Internship",
    images: [
      "https://via.placeholder.com/300x200?text=Image+A",
      "https://via.placeholder.com/300x200?text=Image+B",
      "https://via.placeholder.com/300x200?text=Image+C",
    ],
  },
];

const Projects = () => {
  // Her proje için aktif resim index'ini ayrı ayrı tutalım
  const [activeImageIndexes, setActiveImageIndexes] = useState(
    projects.map(() => 0) // Başlangıçta her proje için aktif index 0 olsun
  );

  const handleImageClick = (projectIndex, index) => {
    const newActiveImageIndexes = [...activeImageIndexes];
    newActiveImageIndexes[projectIndex] = index;
    setActiveImageIndexes(newActiveImageIndexes);
  };

  return (
    <div className="projects-container">
      {projects.map((project, projectIndex) => (
        <div key={projectIndex} className="project">
          <h2>{project.title}</h2>

          {/* Büyük Resim *//*}
          <div className="large-image">
            <img
              src={project.images[activeImageIndexes[projectIndex]]}
              alt="Active project"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Küçük Resimler *//*}
          <div className="small-images">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => handleImageClick(projectIndex, index)}
                style={{
                  width: "80px",
                  height: "auto",
                  marginRight: "10px",
                  cursor: "pointer",
                  border: activeImageIndexes[projectIndex] === index ? "2px solid #000" : "none",
                  transition: "0.3s",
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
*/