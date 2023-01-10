import React from "react";
import Header from "../Project/Components/Header";

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
        <div className="section-row">
          <div className="mb-5">
            <img className="img-fluid" src="/assets/images/projects/project-figure-main.jpg" alt="" />
          </div>
          <h3 className="section-title">프로젝트 배경</h3>

          <p>
            회사 내에서 생산성을 높이기 위해 재사용이 높은 공통 컴포넌트를 개발하여 라이브러리로 관리함으로써 사용하기
            편하고 범용성이 있는 컴포넌트 제작을 목표로 한 프로젝트입니다. 범용적으로 사용되는 컴포넌트를 개발한
            프로젝트부터 Grid 형식의 Form Element를 키보드로만 입력 할 수 있게 만드는 프로젝트, Grid를 손쉽게 사용할 수
            있는 프로젝트 등 회사에 필요한 공통 컴포넌트를 개발하였습니다.
          </p>

          <div className="alert bg-white shadow-sm mb-4">
            This template <strong>includes the original Sketch source file</strong> for making the browser window in the
            portfolio.
          </div>

          <div id="project-portfolio" className="theme-portfolio portfolio slide mb-5" data-ride="portfolio">
            <ol className="portfolio-indicators">
              <li data-bs-target="#project-portfolio" data-bs-slide-to="0" className="active" />
              <li data-bs-target="#project-portfolio" data-bs-slide-to="1" className="active" />
              <li data-bs-target="#project-portfolio" data-bs-slide-to="2" className="active" />
            </ol>

            <div className="portfolio-inner">
              <div className="portfolio-item active">
                <img className="d-block w-100" src="/assets/images/projects/project-slide-1.png" alt="" />
              </div>
              <div className="portfolio-item">
                <img className="d-block w-100" src="/assets/images/projects/project-slide-2.png" alt="" />
              </div>
              <div className="portfolio-item">
                <img className="d-block w-100" src="/assets/images/projects/project-slide-3.png" alt="" />
              </div>
            </div>

            <a className="portfolio-control-prev" href="#project-portfolio" role="button" data-bs-slide="prev">
              <svg width="40px" height="40px" viewBox="0 0 150 258" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="arrow-left" fill="#FFFFFF" fillRule="nonzero">
                    <path
                      d="M4.1,120.5 L121.9,4.5 C126.6,-0.2 134.2,-0.2 138.9,4.5 L146,11.6 C150.7,16.3 150.7,23.9 146,28.6 L43.7,129 L145.9,229.4 C150.6,234.1 150.6,241.7 145.9,246.4 L138.8,253.5 C134.1,258.2 126.5,258.2 121.8,253.5 L4,137.5 C-0.6,132.8 -0.6,125.2 4.1,120.5 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <a className="portfolio-control-next" href="#project-portfolio" role="button" data-bs-slide="next">
              <svg width="40px" height="40px" viewBox="0 0 150 258" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="arrow-right" fill="#FFFFFF" fillRule="nonzero">
                    <path
                      d="M145.9,137.5 L28.1,253.5 C23.4,258.2 15.8,258.2 11.1,253.5 L4,246.4 C-0.7,241.7 -0.7,234.1 4,229.4 L106.3,129 L4.1,28.6 C-0.6,23.9 -0.6,16.3 4.1,11.6 L11.2,4.5 C15.9,-0.2 23.5,-0.2 28.2,4.5 L146,120.5 C150.6,125.2 150.6,132.8 145.9,137.5 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div className="section-row">
          <h3 className="section-title">과제 및 요구사항</h3>
          <p>
            Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus
            quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis
            non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis.
            Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
            lacus.{" "}
          </p>

          <ul className="mb-5 ms-md-5">
            <li className="mb-3">Lorem ipsum dolor sit amet consectetuer.</li>
            <li className="mb-3">Aenean commodo ligula eget dolor.</li>
            <li className="mb-3">Aenean massa cum sociis natoque penatibus.</li>
            <li>Pellentesque auctor neque nec urna.</li>
          </ul>

          <p>
            Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar,
            augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius
            tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget,
            vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque
            nec urna.
          </p>
        </div>
        <div className="section-row">
          <h3 className="section-title">이슈대응 및 결과물</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus.
          </p>
          <ul className="list-unstyled ps-4 mb-5 ms-md-5">
            <li className="mb-4">
              <i className="fas fa-check text-primary me-3"></i>Lorem ipsum dolor sit amet consectetuer.
            </li>
            <li className="mb-4">
              <i className="fas fa-check text-primary me-3"></i>Aenean commodo ligula eget dolor.
            </li>
            <li className="mb-4">
              <i className="fas fa-check text-primary me-3"></i>Aenean massa cum sociis natoque penatibus.
            </li>
            <li className="mb-4">
              <i className="fas fa-check text-primary me-3"></i>Pellentesque auctor neque nec urna.
            </li>
            <li className="mb-4">
              <i className="fas fa-check text-primary me-3"></i>Aenean tellus metus, bibendum sed.
            </li>
          </ul>

          <p>
            Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus
            quis orci.
          </p>

          <div className="testimonial bg-white my-5">
            <div className="position-relative p-5 shadow-sm">
              <blockquote className="blockquote ps-4">
                <p className="mb-4">
                  Steve is a great developer! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto.
                </p>
                <i className="quote-icon fas fa-quote-left fa-lg position-absolute text-primary"></i>
                <footer className="blockquote-footer presudo-hidden mt-4">
                  <div className="row client-profile">
                    <div className="col-12 col-md-auto">
                      <img src="/assets/images/clients/profile-2.jpg" alt="" />
                    </div>
                    <div className="col">
                      <cite title="Source" className="quote-source d-inline-block font-style-normal pt-3">
                        <span className="d-block">Cheryl Bell</span>
                        <span className="d-block">Product Manager, Dropbox</span>
                        <span className="d-block position-absolute source-link">
                          <i className="fab fa-linkedin fa-2x me-1" data-fa-transform="down-3"></i>{" "}
                          <a className="text-secondary text-link" href="#" target="_blank">
                            View on Linkedin <i className="fas fa-external-link-alt ms-1" data-fa-transform="up-1"></i>
                          </a>
                        </span>
                      </cite>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="section-row">
          <h3 className="section-title">프로젝트 기술스택</h3>
          <br />

          <div className="webdev-icons row mb-5 justify-content-center">
            <div className="webdev-icon col-3 col-md-2 me-0 mb-4 px-4">
              <img className="img-fluid svg-ie-fix" src="/assets/images/icons/react.svg" />
            </div>
            <div className="webdev-icon col-3 col-md-2 me-0 mb-4 px-4">
              <img className="img-fluid svg-ie-fix" src="/assets/images/icons/javascript.svg" />
            </div>
            <div className="webdev-icon col-3 col-md-2 me-0 mb-4 px-4">
              <img className="img-fluid svg-ie-fix" src="/assets/images/icons/html5.svg" />
            </div>
            <div className="webdev-icon col-3 col-md-2 me-0 mb-4 px-4">
              <img className="img-fluid svg-ie-fix" src="/assets/images/icons/css3.svg" />
            </div>
            <div className="webdev-icon col-3 col-md-2 me-0 mb-4 px-4">
              <img className="img-fluid svg-ie-fix" src="/assets/images/icons/webpack.svg" />
            </div>
          </div>
        </div>

        <div className="section-row">
          <h3 className="section-title">Conclusions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
            justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
            nisi. Aenean vulputate eleifend tellus.{" "}
          </p>
        </div>
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
