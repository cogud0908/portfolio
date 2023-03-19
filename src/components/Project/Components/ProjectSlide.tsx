import React, { useState } from "react";
import SlideButton from "./SlideButton";

const ProjectSlide = () => {
  const [projectSlideFocusIndex, setProjectSlideFocusIndex] =
    useState<number>(0);

  const handleClickSlide = (item) => {
    setProjectSlideFocusIndex(item);
  };

  return (
    <div
      id="project-portfolio"
      className="theme-portfolio portfolio slide mb-5"
      data-ride="portfolio"
    >
      <ol className="portfolio-indicators">
        {[0, 1, 2].map((item) => (
          <li
            data-bs-target="#project-portfolio"
            data-bs-slide-to={item}
            className={item === projectSlideFocusIndex ? "active" : ""}
            onClick={() => handleClickSlide(item)}
          />
        ))}
      </ol>

      <div className="portfolio-inner">
        {[0, 1, 2].map((item) => (
          <div
            className={`portfolio-item${
              projectSlideFocusIndex === item ? " active" : ""
            }`}
          >
            <img
              className="d-block w-100"
              src={`/assets/images/projects/project-slide-${item + 1}.png`}
              alt=""
            />
          </div>
        ))}
      </div>

      <SlideButton
        type="prev"
        setProjectSlideFocusIndex={setProjectSlideFocusIndex}
      />
      <SlideButton
        type="next"
        setProjectSlideFocusIndex={setProjectSlideFocusIndex}
      />
    </div>
  );
};

export default ProjectSlide;
