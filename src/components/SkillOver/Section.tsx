import React from "react";

interface SectionProps {
  data: {
    title: string;
    skill: string[];
    icon: string;
  };
}

const Section: React.FC<SectionProps> = (props) => {
  const { icon, title, skill } = props.data;

  return (
    // <div className="skills-block col-12 col-lg-4">
    <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
      <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
        <h4 className="skills-cat text-center mb-3 mt-5">{title}</h4>
        <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
          <img className="skills-icon" src={icon} />
        </div>
        <ul className="skills-list list-unstyled text-secondary">
          {skill.map((item) => {
            return (
              <li className="mb-2" key={item}>
                <i className="fas fa-check me-2 text-primary"></i>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Section;
