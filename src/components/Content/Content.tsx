import React from "react";
import Project from "./ProjectSummary";

const Section = () => {
  return (
    <section className="section-featured-projects py-5">
      <div className="container">
        <h3 className="section-title font-weight-bold text-center mb-5">Featured Projects</h3>

        <div className="project-cards row mb-5">
          <Project
            href={"/project/component"}
            title={"사내 컴포넌트 개발/유지보수"}
            thumbnail={"assets/images/projects/component.png"}
            skilles={["React", "Javascript"]}
            summary={[
              <>컴포넌트를 공통화하여 만든 사내용 컴포넌트 라이브러리 프로젝트입니다.</>,
              <br />,
              <br />,
              <>개발기간: 2019.09 ~ 현재</>,
            ]}
          />
          <Project
            // href={"/project/webstorage"}
            title={"웹스토리지 서비스 UI 개발"}
            thumbnail={"assets/images/projects/webStorage.png"}
            skilles={["React", "Typescript", "Recoil"]}
            summary={[
              <>스토리지 서비스를 제공하는 프로젝트입니다.</>,
              <br />,
              <br />,
              <>개발기간: 2020.07 ~ 2020.12</>,
            ]}
          />
          <Project
            // href={"/project/electron"}
            title={"회계관리 DeskTop Application 개발"}
            thumbnail={"assets/images/projects/Electron_Main.png"}
            skilles={["React", "Javascript", "Electron", "Node.js"]}
            summary={[
              <>경영관리 서비스를 DeskTop Application로 제공하는 프로젝트입니다. </>,
              <br />,
              <br />,
              <>개발기간: 2020.04 ~ 2020.09</>,
            ]}
          />
          <Project
            // href={"/project/electionApp"}
            title={"유권자 서비스 Full-Stack 개발"}
            thumbnail={"assets/images/projects/ElectionApp.png"}
            skilles={["React", "Typescript", "NextJS", "NestJS", "postgresql"]}
            summary={[
              <>유권자에 대한 정보 및 활동기록 등 다양한 정보와 접근성을 제공하는 프로젝트입니다.</>,
              <br />,
              <br />,
              <>개발기간: 2022.02 ~ 2022.05</>,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
