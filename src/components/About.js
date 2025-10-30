import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faCss3Alt,
  faReact,
  faNodeJs,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import ProfileIcon from "../assets/female.png";

// SVG’leri React component olarak import ediyoruz
import { ReactComponent as TypeScriptIcon } from "../assets/typescript.svg";
import { ReactComponent as MongoDBIcon } from "../assets/mongodb.svg";
import { ReactComponent as TailwindIcon } from "../assets/tailwind.svg";

export default function About() {
  return (
    <div className="min-h-screen bg-flat bg-sena-flat text-sena-light flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl gap-12 pt-16 pb-10">
        <div className="absolute top-1 transform -translate-x-14 w-48 h-20 bg-sena-highlight opacity-25 z-10"></div>

        <div className="absolute top-0 w-full text-center">
          <h2 className="text-5xl text-black font-playfair block font-medium">
            ABOUT
          </h2>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-6xl mb-10 items-center lg:items-start justify-between gap-12">
          {/* Sol taraf */}
          <div className="flex flex-col items-center text-center w-full lg:w-1/2 gap-6">
            <div className="mb-5 mt-20">
              <img
                src={ProfileIcon}
                alt="Profile Icon"
                className="w-28 h-28 object-contain mx-auto drop-shadow-[1px_1px_2px_rgba(153,27,27,0.3)]"
              />
            </div>
            <p className="text-m font-librebaskerville leading-relaxed max-w-sm text-gray-900 firstLetter tracking-[1.5px] text-[1rem]">
              I'm a full-stack developer with a deep passion for JavaScript,
              React, and creative web technologies. I thrive on building elegant
              solutions and exploring new tech every day. When I'm not coding, 
              I focus on exploring new places, staying active, and finding ways 
              to stay inspired and grow.
            </p>
          </div>

          {/* Sağ taraf */}
          <div className="flex flex-col items-center mt-20 w-full lg:w-1/2 gap-6 p-10">
            {/* 1. Satır */}
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <Tech icon={faHtml5} label="HTML" rotation="rotate-6" />
              <Tech icon={faJs} label="JavaScript" rotation="-rotate-4" />
              <Tech icon={<TypeScriptIcon className="w-10 h-10 text-gray-700 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]" />} label="TypeScript" rotation="rotate-3" />
            </div>

            {/* 2. Satır */}
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <Tech icon={faCss3Alt} label="CSS" rotation="rotate-8" />
              <Tech icon={faReact} label="React" rotation="-rotate-12" />
              <Tech icon={faVuejs} label="Vue.js" rotation="rotate-10" />
            </div>

            {/* 3. Satır */}
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <Tech icon={faNodeJs} label="Node.js" rotation="-rotate-5" />
              <Tech icon={<MongoDBIcon className="w-10 h-10 text-gray-700 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]" />} label="MongoDB" rotation="rotate-4" />
              <Tech icon={<TailwindIcon className="w-10 h-10 text-gray-700 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]" />} label="Tailwind" rotation="-rotate-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tech({ icon, label, rotation = "-rotate-2" }) {
  const labelLength = label.length;
  const labelFontSize =
    labelLength <= 18 ? "text-xl" : labelLength <= 10 ? "text-lg" : "text-[16px]";

  const isFontAwesome = typeof icon !== "object" || icon.iconName;

  return (
    <div className="group relative flex flex-col items-center justify-center gap-2 transition-transform duration-300">
      <div
        className={`transform ${rotation} group-hover:rotate-0 group-hover:scale-105 transition-transform duration-300`}
      >
        {/* Bant efekti */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-yellow-200 bg-opacity-60 rounded-sm rotate-[2deg] shadow-sm z-20" />

        <div className="w-28 h-28 bg-gradient-to-br from-gray-100 to-white shadow-xl flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center gap-1">
            {isFontAwesome ? (
              <FontAwesomeIcon
                icon={icon}
                className="w-10 h-10 text-black drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]"
              />
            ) : (
              icon
            )}
            <span
              className={`font-signature opacity-90 text-sena-sena ${labelFontSize}`}
              style={{ letterSpacing: "1px" }}
            >
              {label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
