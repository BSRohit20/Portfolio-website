import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import resume from "../../../B S Rohit_resume (1).pdf";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-10 lg:-bottom-12 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="w-full max-w-4xl text-center">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] font-semibold mb-8`}
          >
            AI/ML & Full-Stack Developer
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal text-gray-600`}
          >
            <p className={``}>
              Extensive hands-on experience in designing, developing, and deploying scalable AI-driven 
              software solutions. Skilled in computer vision, NLP, deep learning, cloud technologies, and 
              full-stack development with a strong foundation in algorithms and system design.
            </p>
            <p className="mt-3">
              Proven track record of delivering high-impact projects in industrial and research settings, 
              recognized for innovation and technical excellence through hackathon wins and publications.
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#portfolio"
            >
              My Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary text-xs xxs:text-[14px] sm:text-[16px]`}
              href={resume}
              download="B_S_Rohit_Resume.pdf"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
          
          {/* Social media section */}
          <div className="mt-8">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
