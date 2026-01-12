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
        title="Career Advancement & Professional Training | Refer Me Group"
        description="Upskill with expert-led training in AI, Cloud, BA, PMP, Scrum & more. Join Refer Me Group to boost your career with job-focused programs & live mentoring."
        keywords="career advancement training, professional IT courses online, AI automation training, business analyst certification, project management training programs"
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
