import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "AI/ML Development",
    description:
      "I develop intelligent systems using TensorFlow, PyTorch, and scikit-learn, specializing in computer vision, NLP, deep learning, and ML pipeline optimization for real-world applications.",
  },
  {
    id: 2,
    title: "Full-Stack Development",
    description:
      "I build scalable web applications using React, Express, Flask, and FastAPI, integrating RESTful APIs, databases (MongoDB, MySQL), and deploying with Docker and cloud services.",
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    description:
      "I design and deploy cloud-based solutions on Azure, implement CI/CD pipelines, containerize applications with Docker, and ensure seamless serverless deployments for production systems.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in developing AI/ML solutions, building full-stack applications, 
            and deploying scalable systems that deliver real-world impact through innovative technology.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines cutting-edge AI research with robust software engineering 
            to create intelligent, efficient, and user-centric solutions.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
