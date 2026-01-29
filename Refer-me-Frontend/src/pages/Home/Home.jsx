import React, { useState, useEffect } from "react";
// ❌ "react-head" hata diya hai taaki conflict na ho
// import { Title } from "react-head";

// ✅ Apna SEO component import karo
import SEOManagement from "../../components/seo/SEOManagement";

import HomeBanner from "../../components/HomeBanner";
import Testimonials from "../../components/Testimonial";
import StatsSection from "../../components/StatsSection";
import WhyChooseUs from "../../components/WhyChooseUs";
import HeroSection from "../../components/HeroSection";
import KnowledgeFLOSection from "../../components/KnowledgeFLOSection";
import AchievementSection from "../../components/AchievementSection";
import JobReadySection from "../../components/JobReadySection";
import VedioFAQSection from "../../components/VedioFAQSection";
import Certificate from "../../components/Certificate";
import Companies from "../../components/Companies";
import DomainsSection from "../../components/DomainsSection";
import TestimonialSection from "../../components/TestimonialSection";
import LearningSection from "../../components/LearningSection";
import CourseGallerySection from "../../components/CourseGallerySection";
import EnquiryModal from "../../components/EnquiryModal";
import WhatsAppWidget from "../../components/WhatsAppWidget";
import HiringSection from "../../components/HiringSection";
import JobAssistanceSection from "../../components/PlacementRecordsSection";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    const delay = setInterval(() => {
      setIsModalOpen(true);
      clearInterval(delay);
    }, 8000);

    return () => clearInterval(delay);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* ✅ Yahan SEO data add kiya hai */}
      <SEOManagement
        title="Refer Me Group | Career Growth, Training & Job Referrals"
        description="Refer Me Group helps professionals grow with industry-led training, job referrals, freelancing, webinars, and career mentorship."
        keywords="Refer Me Group, career growth platform, job referrals, professional training, skill development"
        canonical="/"
      />

      <main className="w-full">
        <WhatsAppWidget />
        <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
        {/* <Quiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} /> */}
        <HomeBanner />
        <Companies />
        <WhyChooseUs />
        <TestimonialSection />
        <HeroSection />
        <CourseGallerySection />
        <LearningSection />
        <HiringSection />
        <KnowledgeFLOSection />
        <JobReadySection />
        <AchievementSection />
        <VedioFAQSection />
        <Certificate />
        <DomainsSection />
        {/* <JobAssistanceSection /> */}
      </main>
    </>
  );
};

export default Home;
