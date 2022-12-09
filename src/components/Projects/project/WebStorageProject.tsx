import React from "react";

interface ProjectProps {
  Skilles: string[];
}

const WebStorageProject: React.FC<ProjectProps> = (props) => {
  const { Skilles } = props;

  return (
    <div className="col-12 col-lg-4">
      <div className="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
        <div className="card-img-container position-relative">
          <img className="card-img-top rounded-0" src={`assets/images/projects/webStorage.png`} alt="" height={200} />
          <a className="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
            <h5 className="card-title font-weight-bold">웹스토리지 서비스</h5>
            <p className="card-text">Storage</p>
          </a>
        </div>
        <div className="card-body pb-0">
          <h4 className="card-title text-truncate text-center mb-0">
            <a className="text-link" href="project.html">
              웹스토리지 서비스 UI 개발
            </a>
          </h4>
        </div>

        <div className="card-footer border-0 text-center bg-white pb-4">
          <ul className="list-inline mb-0 mx-auto">
            {Skilles.map((skill) => {
              return (
                <li key={skill} className="list-inline-item">
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

export default WebStorageProject;
