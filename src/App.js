import React from "react";
import "./App.css";
import {
  FaBootstrap,
  FaJs,
  FaReact,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"; // FontAwesome ikonları
import { SiTailwindcss, SiTypescript } from "react-icons/si"; // Special ikonlar

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-800 font-sans">
      <header
        className="text-black py-6 shadow-md"
        style={{
          height: "120px",
          backgroundImage: "url(./bg.png)", // Görsel yolu buraya eklenmeli
          backgroundSize: "repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="max-w-7xl mx-auto flex items-center justify-between px-6"
          style={{ marginTop: "80px" }}
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
            <button className="bg-[#f5f5f5] border-2 border-black text-black px-3 py-1 rounded-full hover:bg-[#1a202c] hover:text-white transition duration-300">
              <a
                href="./SenaZorlu CV.pdf"
                download
                className="flex items-center text-black-500 "
              >
                CV
                <img
                  src="./arrow.png"
                  alt="Download Arrow"
                  className="w-4 h-4 ml-2"
                />
              </a>
            </button>
            <button className="bg-[#2b6cb0] text-white px-4 py-2 rounded-full hover:bg-[#2c5282] transition duration-300">
              e-mail
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
            <h2 className="text-2xl mb-4  font-semibold text-[#2d3748]">
              Work Experience
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-0 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                {/* Resim Kısmı */}
                <div className="relative mb-4 w-full h-40">
                  <img
                    src="./intern.png"
                    alt="Profile"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Başlık */}
                <h3 className="text-xl font-semibold text-black ml-3 text-left mt-4">
                  Shopney
                </h3>

                {/* Açıklama */}
                <p className="text-gray-500 text-left ml-3">
                  Intern Front-end developer
                </p>
                <div className="flex justify-center space-x-4 mt-3">
                  <div className="text-sm mb-3 border-2 border-gray text-black px-3 py-2 rounded-full">
                    JavaScript
                  </div>
                  <div className="text-sm ml-2 mb-3 border-2 border-gray text-black px-3 py-2 rounded-full">
                    React
                  </div>
                  <div className="text-sm mr-4 mb-3 border-2 border-gray text-black px-3 py-2 rounded-full">
                    Bootstrap
                  </div>
                </div>
              </div>

              <div className="p-0 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                {/* Resim Kısmı */}
                <div className="relative mb-4 w-full h-40">
                  <img
                    src="./nano.png"
                    alt="Profile"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Başlık */}
                <h3 className="text-xl font-semibold text-black ml-3 text-left mt-4">
                  nanoWiss
                </h3>

                {/* Açıklama */}
                <p className="text-gray-500 text-left ml-3">Web developer</p>
                <div className="flex justify-center space-x-4 mt-3">
                  <div className="text-sm mb-3 border-2 border-gray text-black px-3 py-2 rounded-full">
                    JavaScript
                  </div>
                  <div className="text-sm ml-2 mb-3 border-2 border-gray text-black px-3 py-2 rounded-full">
                    React
                  </div>
                  <div className="text-sm mr-4 mb-3 border-2 border-gray text-black px-3 py-2 rounded-full">
                    Bootstrap
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        {/* Sağ Kısım: Project ve My Tech Stack */}
        <div className="space-y-10 ml-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project */}
            

            {/* My Tech Stack */}
            <div>
              <div className="p-8 bg-white items-center shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                <h2 className="text-xl font-semibold  text-[#2d3748]">
                  My Tech Stack
                </h2>
                <p className="text-l text-gray-700 mt-2">
                  Technologies I’ve Been Working With Recently
                </p>
                <div className="flex space-x-6 mt-6">
                  <FaBootstrap
                    className="text-purple-600 w-8 h-12"
                    title="Bootstrap"
                  />
                  <FaJs
                    className="text-yellow-500 w-8 h-12"
                    title="JavaScript"
                  />
                  <FaReact className="text-blue-500 w-8 h-12" title="React" />
                </div>
                <div className="flex space-x-6 mt-4 ">
                  <SiTailwindcss
                    className="text-blue-400 w-8 h-12"
                    title="Tailwind"
                  />
                  <SiTypescript
                    className="text-blue-600 w-8 h-12"
                    title="TypeScript"
                  />
                  <FaGithub className="text-gray-700 w-8 h-12" title="GitHub" />
                </div>
              </div>
            </div>
            <div>
            <h2 className="text-2xl mb-4 font-semibold text-[#2d3748]">
              GitHub Contributions
            </h2>

            <p className="text-sm text-gray-500">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=zrlsena"
                alt="GitHub Stats"
              />
            </p>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
