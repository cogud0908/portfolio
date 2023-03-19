import React from "react";

const ContentIssue = () => {
  return (
    <div className="section-row">
      <h3 className="section-title">이슈대응 및 결과물</h3>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus.
      </p>
      <ul className="list-unstyled ps-4 mb-5 ms-md-5">
        <li className="mb-4">
          <i className="fas fa-check text-primary me-3"></i>Lorem ipsum dolor
          sit amet consectetuer.
        </li>
        <li className="mb-4">
          <i className="fas fa-check text-primary me-3"></i>Aenean commodo
          ligula eget dolor.
        </li>
        <li className="mb-4">
          <i className="fas fa-check text-primary me-3"></i>Aenean massa cum
          sociis natoque penatibus.
        </li>
        <li className="mb-4">
          <i className="fas fa-check text-primary me-3"></i>Pellentesque auctor
          neque nec urna.
        </li>
        <li className="mb-4">
          <i className="fas fa-check text-primary me-3"></i>Aenean tellus metus,
          bibendum sed.
        </li>
      </ul>

      <p>
        Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam,
        nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor
        lectus quis orci.
      </p>

      <div className="testimonial bg-white my-5">
        <div className="position-relative p-5 shadow-sm">
          <blockquote className="blockquote ps-4">
            <p className="mb-4">
              Steve is a great developer! Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto.
            </p>
            <i className="quote-icon fas fa-quote-left fa-lg position-absolute text-primary"></i>
            <footer className="blockquote-footer presudo-hidden mt-4">
              <div className="row client-profile">
                <div className="col-12 col-md-auto">
                  <img src="/assets/images/clients/profile-2.jpg" alt="" />
                </div>
                <div className="col">
                  <cite
                    title="Source"
                    className="quote-source d-inline-block font-style-normal pt-3"
                  >
                    <span className="d-block">Cheryl Bell</span>
                    <span className="d-block">Product Manager, Dropbox</span>
                    <span className="d-block position-absolute source-link">
                      <i
                        className="fab fa-linkedin fa-2x me-1"
                        data-fa-transform="down-3"
                      ></i>{" "}
                      <a
                        className="text-secondary text-link"
                        href="#"
                        target="_blank"
                      >
                        View on Linkedin{" "}
                        <i
                          className="fas fa-external-link-alt ms-1"
                          data-fa-transform="up-1"
                        ></i>
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
  );
};

export default ContentIssue;
