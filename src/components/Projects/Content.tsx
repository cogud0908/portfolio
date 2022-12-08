import React from "react";
import ComponentProject from "./project/ComponentProject";
import ElectronProject from "./project/ElectronProject";
import WebStorageProject from "./project/WebStorageProject";
import WebViewProject from "./project/WebViewProject";

const Section = () => {
  return (
    <section className="section-featured-projects py-5">
      <div className="container">
        <h3 className="section-title font-weight-bold text-center mb-5">Featured Projects</h3>

        <div className="project-cards row mb-5">
          <ComponentProject Skilles={["React", "Javascript"]} />
          <WebStorageProject Skilles={["React", "Typescript", "Recoil"]} />
          <ElectronProject Skilles={["React", "Javascript", "Electron", "Node.js"]} />
          <WebViewProject Skilles={["React", "Typescript", "NextJS", "NestJS", "postgresql"]} />
        </div>
      </div>
    </section>
  );
};

export default Section;
