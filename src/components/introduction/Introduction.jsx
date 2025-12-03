import photo from "../../../photo.jpeg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "CGPA",
    description: "9.15",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "15+",
  },
  {
    id: 3,
    title: "Certifications",
    description: "5+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between items-center pt-10 lg:pt-20 lg:mb-10 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-0 lg:me-31.5 w-full transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full text-left max-lg:text-center">
            Hello, I'm
            <span className="block w-full">
              B S Rohit
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-left max-lg:text-center">
            I'm an <span className="bg-highlight">AI/ML Developer</span>{" "}
            and <span className="bg-highlight">Full-Stack Engineer</span> based in
            Chennai, India. I specialize in building scalable AI-driven solutions, optimizing ML pipelines, 
            and developing real-time applications with expertise in computer vision, NLP, and cloud technologies.
          </p>
          <p className="text-left max-lg:text-center">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:rohitbs2004@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Profile Photo - Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end max-lg:mb-8">
        <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
          <img
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
            src={photo}
            alt="B S Rohit"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
