import React from "react";
import ProjectSlide from "./ProjectSlide";

const ContentHeader = () => {
  return (
    <div className="section-row">
      <div className="mb-5">
        <img
          className="img-fluid"
          src="/assets/images/projects/project-figure-main.jpg"
          alt=""
        />
      </div>
      <h3 className="section-title">프로젝트 배경</h3>

      <p>
        회사 내에서 생산성을 높이기 위해 재사용이 높은 공통 컴포넌트를 개발하여
        라이브러리로 관리함으로써 사용하기 편하고 범용성이 있는 컴포넌트 제작을
        목표로 한 프로젝트입니다. 범용적으로 사용되는 컴포넌트를 개발한
        프로젝트부터 Grid 형식의 Form Element를 키보드로만 입력 할 수 있게
        만드는 프로젝트, Grid를 손쉽게 사용할 수 있는 프로젝트 등 회사에 필요한
        공통 컴포넌트를 개발하였습니다.
      </p>

      <ProjectSlide />
    </div>
  );
};

export default ContentHeader;
