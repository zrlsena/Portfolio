import React, { useEffect, useState } from "react";
import "./style.css";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [firstLineDone, setFirstLineDone] = useState(false);
  const [secondLineDone, setSecondLineDone] = useState(false);


  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setFirstLineDone(true), 0);
      setTimeout(() => setSecondLineDone(true), 3500);
    }
  }, [isVisible]);

  return (
    <header className="min-h-screen bg-flat bg-sena-flat flex flex-col justify-center items-center text-gray-800 px-4 relative overflow-hidden">
      <div className="relative z-10 text-center">
        <h1
          className={`mb-4 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="text-black font-playfair block"
            style={{
              fontSize: "clamp(48px, 7vw, 64px)", // Responsive font büyüklüğü
              lineHeight: "110%",
              fontWeight: 500,
            }}
          >
            IT'S ME
          </span>
          <br />
          <span
            className="text-sena-sena font-signature"
            style={{
              fontFamily: "'Just Me Again Down Here', cursive",
              fontSize: "clamp(40px, 6vw, 48px)", // Responsive font büyüklüğü
              fontWeight: "normal",
              transform: "rotate(-12deg)", // Açıyı arttırdık
              transformOrigin: "center",
              position: "absolute",
              left: "60%", // Yüzdeyle kaydırma, ekran boyutuna göre uyumlu
              top: "50%",
              zIndex: 10,
              overflow: "visible",
              whiteSpace: "nowrap",
            }}
          >
            Sena Zorlu
          </span>
        </h1>

        <p
          className={`text-sm md:text-base font-librebaskerville text-gray-500 mb-6 transition-all mt-12 duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className={` firstLetter typing-effect ${
              firstLineDone ? "typing-effect-show" : "hidden"
            }`}
          >
            Minimal design. Clean code. Big dreams.
          </span>
          <br className="hidden sm:block" />
          <span
            className={`typing-effect ${
              secondLineDone ? "typing-effect-show" : "hidden"
            }`}
          >
            Here to make the web a better place.
          </span>
        </p>

        <a
          href="#projects"
          className="inline-block bg-sena-sena hover:bg-sena-header text-sena-light font-medium py-2 px-6 rounded-none transition-all duration-300 shadow-md hover:scale-110"
        >
          View My Work
        </a>
      </div>
    </header>
  );
}
