import InternshipCard from "./InternshipCard";
import intelImage from "../../../intel unnati.jpeg";
import drdoImage from "../../../drdo.webp";
import infosysImage from "../../../infosys.png";

const internshipData = [
  {
    id: 1,
    image: intelImage,
    company: "Intel® Unnati",
    role: "Industrial Training",
    title: "Image Sharpening using Knowledge Distillation",
    period: "May 2025 - July 2025",
    description:
      "Designed student-teacher pipelines for lightweight image sharpening using Knowledge Distillation. Improved inference speed while preserving perceptual quality in vision tasks.",
    achievements: [
      "Designed student-teacher pipelines for lightweight image sharpening",
      "Improved inference speed while preserving perceptual quality",
      "Conducted experiments across multiple datasets for optimization"
    ],
    link: "https://github.com/BSRohit20/Vision-aid",
  },
  {
    id: 2,
    image: drdoImage,
    company: "CVRDE (DRDO), Avadi",
    role: "Research Intern",
    title: "Vehicle Detection and Classification using R-CNN and SSD",
    period: "June 2024 - July 2024",
    description:
      "Developed real-time detection system using SSD and R-CNN, achieving 95% accuracy. Optimized pipeline for 30% faster inference under diverse conditions.",
    achievements: [
      "Achieved 95% accuracy in real-time vehicle detection",
      "Optimized pipeline for 30% faster inference",
      "Used Faster R-CNN with ResNet-50 backbone for precise classification"
    ],
    link: "https://github.com/BSRohit20/Vehicle-Detection-and-Classification-Using-R-CNN-",
  },
  {
    id: 3,
    image: infosysImage,
    company: "Infosys Springboard",
    role: "Artificial Intelligence Intern",
    title: "AI-Driven Guest Experience Personalization",
    period: "Dec 2024 - Feb 2025",
    description:
      "Built FastAPI-based hospitality platform with DistilBERT and PyTorch for real-time sentiment analysis. Implemented recommendation engine with containerized Docker deployment.",
    achievements: [
      "Built FastAPI platform with DistilBERT for real-time sentiment analysis",
      "Implemented recommendation engine using scikit-learn",
      "Designed admin dashboard with Slack alerts and Docker deployment"
    ],
    link: "https://github.com/BSRohit20/AI-POWERED-GUEST-EXPERIENCE-AND-PERSONALISATION-SYSTEM",
  },
];

const Internships = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="internships"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">Professional Experience</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            My hands-on experience in industrial and research settings, working on 
            cutting-edge AI/ML projects with leading organizations.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {internshipData.map((data, index) => (
            <InternshipCard data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internships;
