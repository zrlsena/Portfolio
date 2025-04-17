import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className=" flex flex-col justify-center items-center bg-flat bg-sena-flat text-sena-textDark relative overflow-hidden px-4 py-24"
    >
      {/* Sayfa başlığı */}
      <div className="absolute top-10 w-full text-center">
        <h2
          className="text-5xl text-sena-sena font-signature"
          style={{ letterSpacing: "3px" }}
        >
          Contact Me!!
        </h2>
      </div>

      {/* Not kağıdı */}
      <div className="relative bg-paper bg-white shadow-xl px-6 py-8 sm:px-10 sm:py-10 max-w-xs sm:max-w-md md:max-w-lg w-full z-10 rotate-[-0.5deg] sm:rotate-[-1.5deg] my-20 mx-4 sm:mx-auto">
        {/* Bantlar */}
        <div className="absolute top-[-12px] left-[-12px] w-16 h-5 sm:w-20 sm:h-6 bg-gray-400 rotate-[-8deg] opacity-30 shadow-md z-20"></div>
        <div className="absolute top-[-12px] right-[-12px] w-16 h-5 sm:w-20 sm:h-6 bg-gray-400 rotate-[8deg] opacity-30 shadow-md z-20"></div>

        {/* İçerik */}
        <div className="text-center space-y-6 z-30 relative">
          <p className="text-xl sm:text-2xl text-gray-700 font-signature">
            Let's connect ✨
          </p>
          <ul className="space-y-4 text-lg sm:text-2xl text-gray-700 font-signature">
            <li className="flex items-center justify-center gap-3 hover:text-sena-sena">
              <FaGithub className="w-5 h-5 text-gray-700 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]" />
              <a
                href="https://github.com/zrlsena"
                target="_blank"
                rel="noreferrer"
              >
                github.com/senazorlu
              </a>
            </li>
            <li className="flex items-center justify-center gap-3 hover:text-sena-sena">
              <FaLinkedin className="w-5 h-5 text-gray-700 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] " />
              <a
                href="https://www.linkedin.com/in/sena-z-4b57721a3/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/senazorlu
              </a>
            </li>
            <li className="flex items-center justify-center gap-3 hover:text-sena-sena">
              <FaEnvelope className="w-5 h-5 text-gray-700 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]" />
              <a href="mailto:ssenazorlu@gmail.com">ssenazorlu@gmail.com</a>
            </li>
            <div className="flex justify-center items-center mt-6">
              <a
                href="https://drive.google.com/uc?export=download&id=13rItv_pTNalExUy63I-pAVaKkfjDYLXl"
                target="_blank"
                rel="noreferrer"
                className="relative group inline-block font-signature text-xl sm:text-2xl text-gray-700 transition duration-300 hover:text-sena-sena"
              >
                <span className="block group-hover:hidden">Grab My CV</span>
                <span className="hidden group-hover:block">
                  Includes all my dev magic ✨
                </span>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}
