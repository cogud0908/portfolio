// import Head from "next/head";

import Footer from "../src/components/Footer/Footer";
import Profile from "../src/components/Header/Profile";
import Content from "../src/components/Projects/Content";
import SkillOverview from "../src/components/SkillOver/SkillOverview";

export default function Home() {
  return (
    <>
      <Profile />

      <SkillOverview />

      <Content />

      <Footer />
    </>
  );
}
