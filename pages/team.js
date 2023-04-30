import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import TeamCard from "../components/Team/TeamCard";

export default function Team() {
  return (
    <>
      <PageBanner
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
      />

      <TeamCard />

      <Footer />
    </>
  );
}
