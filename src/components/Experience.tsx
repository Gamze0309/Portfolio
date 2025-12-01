import { experiences } from "../data/experiences";

const Experience = () => {
  return (
    <div id="experience" className="section-container bg-light">
      <div className="container md:px-20">
        <h2 className="section-title mb-12">
          My Career Journey{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h2>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="card-base">
              <h3 className="card-title">{exp.role}</h3>
              <span className="text-sm text-orange font-bold mb-2 block font-primary-family">
                {exp.company}
              </span>
              <span className="text-xs text-dark/70 mb-3 block font-content-family">
                {exp.period}
              </span>
              <p className="card-text">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
