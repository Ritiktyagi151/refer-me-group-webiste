import { useEffect, useRef, useState } from "react";

const AchievementSection = () => {
  const sectionRef = useRef(null);
  const [countersActive, setCountersActive] = useState(false);
  // Step 1: Add 'courses' to the state
  const [values, setValues] = useState({
    professionals: 0,
    courses: 0,
    hours: 0,
    countries: 0,
    mentors: 0,
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!countersActive) return;

    // Step 2: Update target values with your data
    const targetValues = {
      professionals: 1200,
      courses: 15,
      hours: 12000, // 12K = 12000
      countries: 20,
      mentors: 15,
    };

    const duration = 2000; // animation duration in ms
    const startTime = Date.now();

    const animateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Step 3: Update the animation logic for all 5 values
      setValues({
        professionals: Math.floor(progress * targetValues.professionals),
        courses: Math.floor(progress * targetValues.courses),
        hours: Math.floor(progress * targetValues.hours),
        countries: Math.floor(progress * targetValues.countries),
        mentors: Math.floor(progress * targetValues.mentors),
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        // Ensure final values are set exactly
        setValues(targetValues);
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
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering professionals across the globe with industry-relevant
            skills and expert mentorship.
          </p>
        </div>

        {/* Step 4: Update the grid to have 5 columns and add the new items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pb-4">
          {/* Trained Professionals */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all hover:scale-105 hover:bg-white/60">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-indigo-600">
              {values.professionals.toLocaleString()}+
            </div>
            <h3 className="text-lg font-semibold">Trained Professionals</h3>
          </div>

          {/* Courses & Videos */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all hover:scale-105 hover:bg-white/60">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-indigo-600">
              {values.courses}+
            </div>
            <h3 className="text-lg font-semibold">Courses & Videos</h3>
          </div>

          {/* Training Hours */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all hover:scale-105 hover:bg-white/60">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-indigo-600">
              {values.hours.toLocaleString()}+
            </div>
            <h3 className="text-lg font-semibold">Training Hours</h3>
          </div>

          {/* Countries */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all hover:scale-105 hover:bg-white/60">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-indigo-600">
              {values.countries}+
            </div>
            <h3 className="text-lg font-semibold">
              Countries Professional Trained
            </h3>
          </div>

          {/* Industry Expert Mentors */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all hover:scale-105 hover:bg-white/60">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-indigo-600">
              {values.mentors}+
            </div>
            <h3 className="text-lg font-semibold">Industry Expert Mentors</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
