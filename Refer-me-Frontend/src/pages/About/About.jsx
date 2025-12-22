import React from "react";
import { Title } from "react-head";
import WhatWeDo from "./WhatWeDo";
import SEOManagement from "../../components/seo/SEOManagement";

const About = () => {
  return (
    <>
      <SEOManagement
        title="About Us | Empower Your Career with Refer Me Group"
        description="Empower your career with Refer Me Group. Access expert-led training, AI automation programs, skill development, and job-focused guidance to grow professionally."
        keywords="Refer Me Group, Empower your career, Career advancement training, Professional skill development, AI automation training"
        canonical="/"
      />

      <main className="w-full">
        <WhatWeDo />
      </main>
    </>
  );
};

export default About;
