import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import Internships from "../components/internships/Internships";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative bg-white">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      <div className="bg-white">
        <Internships />
        <Portfolio />
      </div>
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <div className="bg-soft-white">
        <Profession />
      </div>
      <div className="bg-white pb-15">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
