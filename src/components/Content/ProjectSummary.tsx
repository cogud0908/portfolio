import React from "react";
import { ProjectProps } from "./types";

const ProjectSummary: React.FC<ProjectProps> = (props) => {
  const { summary, href, skilles, thumbnail, title } = props;

  return (
    <div className="col-12 col-lg-4">
      <div className="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
        <div className="card-img-container position-relative">
          <img className="card-img-top rounded-0" src={thumbnail} alt="" height={200} />
          <a className="card-img-overlay overlay-content text-start p-lg-4" href={href || ""}>
            <h5 className="card-title font-weight-bold">{title}</h5>
            <p className="card-text">{summary}</p>
          </a>
        </div>
        <div className="card-body pb-0">
          <h4 className="card-title text-truncate text-center mb-0">
            <a className="text-link" href={href}>
              {title}
            </a>
          </h4>
        </div>

        <div className="card-footer border-0 text-center bg-white pb-4">
          <ul className="list-inline mb-0 mx-auto">
            {skilles.map((skill) => {
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

export default ProjectSummary;
