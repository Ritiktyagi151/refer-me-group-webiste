import React from "react";
import { Title } from "react-head";
import HomeBanner from "../../components/HomeBanner";
import Testimonials from "../../components/Testimonial";
import { useState, useEffect } from "react";
import StatsSection from "../../components/StatsSection";

import WhyChooseUs from "../../components/WhyChooseUs";
import HeroSection from "../../components/HeroSection";
import KnowledgeFLOSection from "../../components/KnowledgeFLOSection";

import AchievementSection from "../../components/AchievementSection";
import JobReadySection from "../../components/JobReadySection";
// import SectionGreen from "../../components/SectionGreen";
import PlacementRecordsSection from "../../components/PlacementRecordsSection";
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
// import Quiz from "../../components/QuizPopup";
// import ReferMeGroupSection from '../../components/ReferMeGroupSection'
// import BusinessSection from '../../components/BusinessSection'
// import Identity from '../../components/Identity'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Initialize to true for immediate render
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    const delay = setInterval(() => {
      setIsModalOpen(true); // Reinforce on mount
      clearInterval(delay);
    }, 8000);

    return () => clearInterval(delay);
  }, []); // Empty dependency array ensures it runs once on mount

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Title>Refer Me Group</Title>
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
        <PlacementRecordsSection />
      </main>
    </>
  );
};

export default Home;
