import React from "react";
import Header from "../Project/Components/Header";
import Conclusions from "./Components/Conclusions";
import ContentHeader from "./Components/ContentHeader";
import ContentIssue from "./Components/ContentIssue";
import ContentRequirements from "./Components/ContentRequirements";
import SkillSpeck from "./Components/SkillSpeck";

type ProjectType = "component" | "electionApp" | "electron" | "webStorage";

interface ProjcetProps {
  project: ProjectType;
}

const Project: React.FC<ProjcetProps> = (props) => {
  const { project } = props;

  return (
    <>
      <Header />

      <section className="project-wrapper single-col-max-width py-5 px-4 mx-auto">
        <ContentHeader />
        <ContentRequirements />
        <ContentIssue />
        <SkillSpeck />
        <Conclusions />
      </section>

      <section className="section pt-5 related-projects-section bg-white">
        <div className="container">
          <h3 className="section-title font-weight-bold text-center mb-4">Other Project Case Studies</h3>
          <div className="project-cards row">
            <div className="col-12 col-lg-4">
              <div className="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
                <div className="card-img-container position-relative">
                  <img className="card-img-top rounded-0" src="/assets/images/projects/project-3-thumb.jpg" alt="" />
                  <div className="card-img-overlay overlay-logo text-center">
                    <div className="project-logo">
                      <img className="img-fluid w-50" src="/assets/images/logos/logo-3-inverse.svg" />
                    </div>
                  </div>
                  <a className="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                    <h5 className="card-title font-weight-bold">Client: Airbnb</h5>
                    <p className="card-text">
                      Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
                      sapien quis nulla dictum euismod...
                    </p>
                  </a>
                </div>
                <div className="card-body pb-0">
                  <h4 className="card-title text-truncate text-center mb-0">
                    <a className="text-link" href="project.html">
                      Mobile app development
                    </a>
                  </h4>
                </div>

                <div className="card-footer border-0 text-center bg-white pb-4">
                  <ul className="list-inline mb-0 mx-auto">
                    <li className="list-inline-item">
                      <span className="badge bg-secondary badge-pill">React</span>
                    </li>
                    <li className="list-inline-item">
                      <span className="badge bg-secondary badge-pill">Python</span>
                    </li>
                    <li className="list-inline-item">
                      <span className="badge bg-secondary badge-pill">MySQL</span>
                    </li>
                    <li className="list-inline-item">
                      <span className="badge bg-secondary badge-pill">Webpack</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card rounded-0 border-0 shadow-sm mb-5">
                <div className="card-img-container position-relative">
                  <img className="card-img-top rounded-0" src="/assets/images/projects/project-7-thumb.jpg" alt="" />
                  <div className="card-img-overlay overlay-logo text-center">
                    <div className="project-logo">
                      <img className="img-fluid w-50" src="/assets/images/logos/logo-7-inverse.svg" />
                    </div>
                  </div>
                  <a className="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                    <h5 className="card-title font-weight-bold">Client: Facebook</h5>
                    <p className="card-text">
                      Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
                      sapien quis nulla dictum euismod...
                    </p>
                  </a>
                </div>
                <div className="card-body pb-0">
                  <h4 className="card-title text-truncate text-center mb-0">
                    <a className="text-link" href="project.html">
                      Facebook Ads Manager
                    </a>
                  </h4>
                </div>

                <div className="card-footer border-0 text-center bg-white pb-4">
                  <ul className="list-inline mb-0 mx-auto">
                    <li className="list-inline-item">
                      <span className="badge bg-secondary badge-pill">Angular</span>
                    </li>
                    <li className="list-inline-item">
                      <span className="badge bg-secondary badge-pill">PHP</span>
                    </li>
                    <li className="list-inline-item">
                      <span className="badge bg-secondary badge-pill">HTML/SaSS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card rounded-0 border-0 shadow-sm mb-5">
                <div className="card-img-container position-relative">
                  <img className="card-img-top rounded-0" src="/assets/images/projects/project-9-thumb.jpg" alt="" />
                  <div className="card-img-overlay overlay-logo text-center">
                    <div className="project-logo">
                      <img className="img-fluid w-50" src="/assets/images/logos/logo-9-inverse.svg" />
                    </div>
                  </div>
                  <a className="card-img-overlay overlay-content text-start p-lg-4" href="project.html">
                    <h5 className="card-title font-weight-bold">Client: Coinbase</h5>
                    <p className="card-text">
                      Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
                      sapien quis nulla dictum euismod...
                    </p>
                  </a>
                </div>
                <div className="card-body pb-0">
                  <h4 className="card-title text-truncate text-center mb-0">
                    <a className="text-link" href="project.html">
                      App Development
                    </a>
                  </h4>
                </div>

                <div className="card-footer border-0 text-center bg-white pb-4">
                  <ul className="list-inline mb-0 mx-auto">
                    <li className="list-inline-item">
                      <span className="badge bg-secondary badge-pill">Angular</span>
                    </li>
                    <li className="list-inline-item">
                      <span className="badge bg-secondary badge-pill">Python</span>
                    </li>
                    <li className="list-inline-item">
                      <span className="badge bg-secondary badge-pill">HTML/SaSS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
