import React from "react";

interface ProjectProps {
  Skilles: String[];
}
const ComponentProject: React.FC<ProjectProps> = (props) => {
  const { Skilles } = props;

  return (
    <div className="col-12 col-lg-4">
      <div className="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
        <div className="card-img-container position-relative">
          <img className="card-img-top rounded-0" src={`assets/images/projects/component.png`} alt="" />
          <a className="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
            <h5 className="card-title font-weight-bold">컴포넌트 개발/유지보수</h5>
            <p className="card-text">
              컴포넌트를 공통화하여 만든 사내용 컴포넌트 라이브러리 프로젝트입니다. <br />
              개발 속도와 효율성을 높이기 위해 고안된 프로젝트입니다.
            </p>
          </a>
        </div>
        <div className="card-body pb-0">
          <h4 className="card-title text-truncate text-center mb-0">
            <a className="text-link" href="project.html">
              사내 컴포넌트 개발/유지보수
            </a>
          </h4>
        </div>

        <div className="card-footer border-0 text-center bg-white pb-4">
          <ul className="list-inline mb-0 mx-auto">
            {Skilles.map((skill) => {
              return (
                <li className="list-inline-item">
                  <span className="badge bg-secondary badge-pill">{skill}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComponentProject;
