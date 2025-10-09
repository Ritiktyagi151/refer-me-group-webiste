import { useEffect, useRef, useState } from "react";

const AchievementSection = () => {
  const sectionRef = useRef(null);
  const [countersActive, setCountersActive] = useState(false);
  const [values, setValues] = useState({
    learners: 0,
    trainers: 0,
    countries: 0,
    hours: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountersActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!countersActive) return;

    const targetValues = {
      learners: 5000, // Updated for India focus
      trainers: 25,
      countries: 10,
      hours: 15000,
    };

    const duration = 2000; // animation duration in ms
    const startTime = Date.now();

    const animateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setValues({
        learners: Math.floor(progress * targetValues.learners),
        trainers: Math.floor(progress * targetValues.trainers),
        countries: Math.floor(progress * targetValues.countries),
        hours: Math.floor(progress * targetValues.hours),
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  }, [countersActive]);

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 sm:px-6 lg:px-8 text-gray-800"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(255, 200, 100, 0.1), rgba(200, 230, 255, 0.2)), url('/assets/bg-img/bg.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Impact Across India
          </h2>
          <p className="text-xl text-indigo-600 max-w-3xl mx-auto">
            Empowering thousands of learners with industry-relevant skills,
            expert mentorship, and career guidance to achieve their professional
            goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4">
          {/* Learners */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 text-center transform transition-all hover:scale-105 hover:bg-white/60">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-gray-500">
              {values.learners.toLocaleString()}
            </div>
            <h3 className="text-xl font-semibold">Learners Trained</h3>
          </div>

          {/* Trainers */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 text-center transform transition-all hover:scale-105 hover:bg-white/60">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-gray-500">
              {values.trainers}
            </div>
            <h3 className="text-xl font-semibold">Industry Expert Mentors</h3>
          </div>

          {/* Countries */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 text-center transform transition-all hover:scale-105 hover:bg-white/60">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-gray-500">
              {values.countries}
            </div>
            <h3 className="text-xl font-semibold">States & Regions in India</h3>
          </div>

          {/* Hours */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 text-center transform transition-all hover:scale-105 hover:bg-white/60">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-gray-500">
              {values.hours.toLocaleString()}
            </div>
            <h3 className="text-xl font-semibold">Hours of Expert Training</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
