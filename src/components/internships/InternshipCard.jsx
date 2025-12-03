import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InternshipCard = ({ data }) => {
  return (
    <div className="card bg-white border shadow-sm rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <figure className="relative overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-picto-primary text-white px-3 py-1 rounded-md text-xs font-semibold">
          {data.role}
        </div>
      </figure>
      <div className="card-body p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-0.5">
            {data.company}
          </h3>
          <p className="text-xs text-picto-primary font-medium mb-1">
            {data.period}
          </p>
        </div>
        <h4 className="text-base font-semibold text-gray-800 mb-2">
          {data.title}
        </h4>
        <p className="text-xs text-gray-600 mb-3 leading-relaxed">
          {data.description}
        </p>
        <div className="mb-3">
          <ul className="space-y-1.5">
            {data.achievements.slice(0, 2).map((achievement, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-start leading-snug">
                <span className="text-picto-primary mr-1.5 mt-0.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-actions justify-start">
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-picto-primary hover:text-picto-primary/80 font-semibold text-sm inline-flex items-center transition-colors duration-200"
          >
            View Details
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
