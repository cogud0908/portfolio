import React from "react";
import Section from "./Section";

const frontend = {
  title: "Frontend",
  icon: "assets/images/frontend-icon.svg",
  skill: ["React", "Javascript/TypeScripts", "Electron", "NestJS", "Storybook", "HTML/CSS"],
};

const backend = {
  title: "Backend",
  icon: "assets/images/backend-icon.svg",
  skill: ["NestJS", "PostgresSQL"],
};

const others = {
  title: "Others",
  icon: "assets/images/other-skills-icon.svg",
  skill: ["Webpack", "Testing UI (E2E - cypress)"],
};

const SkillOverview = () => {
  return (
    <section className="skills-section section py-5">
      <div className="container">
        <h3 className="section-title font-weight-bold text-center mb-3">Skills Overview</h3>
        {/* <div className="section-intro mx-auto text-center mb-5 text-secondary">
          Frontend 개발 3년차로써 여러 가지 기술스택으로 개발을 하였습니다. <br />
          Backend 개발도 경험하면서 전반적인 소프트웨어 개발의 흐름을 인지하고 있습니다.
        </div> */}

        <div className="skills-blocks mx-auto pt-5">
          <div className="row">
            <Section data={frontend} />
            <Section data={backend} />
            <Section data={others} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillOverview;
