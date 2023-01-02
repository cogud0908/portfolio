import React from "react";
import Footer from "../Footer/Footer";
import Profile from "../Header/Profile";
import Content from "../Content/Content";
import SkillOverview from "../SkillOver/SkillOverview";

const MainPage = () => {
  return (
    <>
      <Profile />

      <SkillOverview />

      <Content />

      <Footer />
    </>
  );
};

export default MainPage;
