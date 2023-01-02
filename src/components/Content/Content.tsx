import React from "react";
import Project from "./ProjectSummary";

const Section = () => {
  return (
    <section className="section-featured-projects py-5">
      <div className="container">
        <h3 className="section-title font-weight-bold text-center mb-5">Featured Projects</h3>

        <div className="project-cards row mb-5">
          <Project
            title={"사내 컴포넌트 개발/유지보수"}
            href={"/project/component"}
            thumbnail={"assets/images/projects/component.png"}
            skilles={["React", "Javascript"]}
            content={[
              <>컴포넌트를 공통화하여 만든 사내용 컴포넌트 라이브러리 프로젝트입니다.</>,
              <br />,
              <>개발 속도와 효율성을 높이기 위해 고안된 프로젝트입니다.</>,
            ]}
          />
          <Project
            href={"/project/webstorage"}
            title={"웹스토리지 서비스 UI 개발"}
            thumbnail={"assets/images/projects/webStorage.png"}
            skilles={["React", "Typescript", "Recoil"]}
            content={[
              <>컴포넌트를 공통화하여 만든 사내용 컴포넌트 라이브러리 프로젝트입니다.</>,
              <br />,
              <>개발 속도와 효율성을 높이기 위해 고안된 프로젝트입니다.</>,
            ]}
          />
          <Project
            href={"/project/electron"}
            title={"회계관리 DeskTop Application 개발"}
            thumbnail={"assets/images/projects/Electron_Main.png"}
            skilles={["React", "Javascript", "Electron", "Node.js"]}
            content={[
              <>컴포넌트를 공통화하여 만든 사내용 컴포넌트 라이브러리 프로젝트입니다.</>,
              <br />,
              <>개발 속도와 효율성을 높이기 위해 고안된 프로젝트입니다.</>,
            ]}
          />
          <Project
            href={"/project/electionApp"}
            title={"유권자 서비스 Full-Stack 개발"}
            thumbnail={"assets/images/projects/ElectionApp.png"}
            skilles={["React", "Typescript", "NextJS", "NestJS", "postgresql"]}
            content={[
              <>컴포넌트를 공통화하여 만든 사내용 컴포넌트 라이브러리 프로젝트입니다.</>,
              <br />,
              <>개발 속도와 효율성을 높이기 위해 고안된 프로젝트입니다.</>,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
