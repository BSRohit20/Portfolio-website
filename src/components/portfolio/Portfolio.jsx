import { useState } from "react";
import Projects from "./Projects";
import netArmorImage from "../../../net armor.jpg";
import smartEnergyImage from "../../../smart energy management system.webp";
import voiceBotImage from "../../../voice bot.png";
import ticketingImage from "../../../multilingual ticket.png";

const projectData = [
  {
    id: 1,
    image: netArmorImage,
    category: "CYBERSECURITY & AI",
    title: "NET-ARMOR Security Platform",
    description:
      "Full-stack system with Flask backend and React frontend featuring domain scanning, vulnerability detection, password auditing, AES-256 encryption, and JWT authentication with TOTP-based 2FA.",
    technologies: ["Flask", "React", "AES-256", "JWT", "Docker"],
    link: "https://github.com/BSRohit20/Net-Armor",
  },
  {
    id: 2,
    image: smartEnergyImage,
    category: "IoT & MACHINE LEARNING",
    title: "Smart Energy Grid System",
    description:
      "IoT-powered grid using ESP32 and solar panels with ML forecasting models (CatBoost, XGBoost, LightGBM) achieving R² up to 0.9971, featuring real-time monitoring and anomaly detection.",
    technologies: ["ESP32", "CatBoost", "XGBoost", "ThingSpeak", "IoT"],
    link: "https://github.com/BSRohit20/Smart-Energy-Distribution-and-Monitoring-Grid-System",
  },
  {
    id: 3,
    image: voiceBotImage,
    category: "NLP & SPEECH AI",
    title: "Speech Recognition Voice Bot",
    description:
      "NLP-based system using PyTorch and SpeechRecognition APIs with 98% accuracy for real-time voice command processing. Published at IEEE ICSES 2023.",
    technologies: ["PyTorch", "NLP", "Speech Recognition", "Python"],
    link: "https://ieeexplore.ieee.org/document/10465431",
  },
  {
    id: 4,
    image: ticketingImage,
    category: "FULL-STACK WEB",
    title: "SmartChat Museum Ticketing",
    description:
      "Multilingual ticketing platform using React, Express, and MongoDB with support for 3+ languages, improving booking efficiency by 40% with real-time availability tracking.",
    technologies: ["React", "Express", "MongoDB", "Node.js"],
    link: "https://github.com/Rev0212/museum-ticket-booking-system",
  },
];

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Show first 3 projects initially
  const initialProjects = projectData.slice(0, 3);
  const additionalProject = projectData.slice(3, 4);

  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Personal and academic projects showcasing innovation in AI/ML, 
            full-stack development, and delivering impactful solutions.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {initialProjects.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      
      {/* Show additional project in center when "More Projects" is clicked */}
      {showAllProjects && (
        <div className="mx-auto flex justify-center mt-6">
          <div className="max-w-106">
            {additionalProject.map((data, index) => (
              <Projects data={data} key={index} />
            ))}
          </div>
        </div>
      )}

      <div className="text-center">
        {!showAllProjects ? (
          <button
            onClick={() => setShowAllProjects(true)}
            className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
          >
            More Projects
          </button>
        ) : (
          <button
            onClick={() => setShowAllProjects(false)}
            className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
