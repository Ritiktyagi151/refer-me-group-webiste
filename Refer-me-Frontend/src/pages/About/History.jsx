import {
  FaUsers,
  FaChalkboardTeacher,
  FaGlobe,
  FaStar,
  FaHandshake,
  FaAward,
  FaFacebook,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
  FaTwitter,
  FaQuora,
} from "react-icons/fa";
// Removed GiGrowth, GiAchievement as they weren't directly used or better covered by Fa icons
import { GiGrowth, GiAchievement } from "react-icons/gi"; // Corrected: GiGrowth and GiAchievement imported
import Vision from "./Vision";

const History = () => {
  // Data from your prompt, structured for easier use in the component
  const companyData = {
    howItStarted: {
      established: "2013-14",
      vision: "Empowering individuals to achieve their career aspirations.",
      gapIdentified:
        "Between Job Recruiter & Job Seekers, especially for internal referrals.",
    },
    credentials: [
      "Registered under MSME",
      "ISO 20000-1:2018 Certified",
      "Member of International Accreditation Forum",
      "ISO 9001:2015 Certified",
      "GST Registered",
      "Registered Trade Mark",
      "Affiliation with ITB",
    ],
    stats: {
      corporateTrained: "10+",
      countriesTrained: "20+",
      trainedProfessionals: "1400+",
      totalTrainingHours: "12000+",
      trainers: {
        count: "10+",
        minExperience: "17 Years",
      },
    },
    community: {
      name: "Referme-ians",
      telegram: "5 Telegram Groups with 6,059 Professionals",
      whatsapp: "30 WhatsApp Groups/Channel with 33,000+ Professionals",
      linkedInGroups: "5 LinkedIn Groups/Page with 20,090 Professionals",
      facebookFollowers: "12,240 Professionals (refermegroup.qa)",
      linkedInGroupPageFollowers: "1,11,186 Profiles on LinkedIn",
      twitterFollowers: "101 Followers on X (Twitter)",
      quoraFollowers: "150+ Followers on Quora",
      linkedInTotalFollowers: "1,11,186+ Followers on LinkedIn", // Updated based on total profiles
      otherPlatforms: "15,000+ Professionals on other platforms",
    },
    whatWeDo: {
      dailyJobs: "200+ Jobs",
      dailyCounseling: "30+ Professionals & do FREE CAREER COUNSELING",
      dailyMails: "40+ Mails",
      jobsByYear: [
        { year: 2023, jobs: 55569 },
        { year: 2024, jobs: 57550 },
        { year: 2025, jobs: 19720 }, // Current year's data
      ],
    },
    whyUs: [
      "Life Time Job Assistance",
      "Referral Program",
      "Life Time Recording",
      "Direct Interaction with Trainers & Students",
      "Support After Training Completion",
      "Dedicated Person in Each Program",
      "Live Projects",
      "Interview Preparation",
      "Resume Service",
      "LinkedIn Service",
      "Exclusive Network",
      "Support Professional having no Job/Financial Chalenge",
    ],
  };

  return (
    <>
      <Vision />
      <div className="bg-gray-50 font-sans antialiased">
        {/* Hero Section */}
        {/* Awesome Styled: Use a dynamic background (e.g., subtle gradient animation),
                cool typography for the headline, and a gentle fade-in for text. */}
        <section className="relative bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
            src="/assets/creatives/vedio.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          {/* Background animation idea: absolute positioned SVGs or subtle particle effects */}
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up">
              Refer Me Group
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 animate-fade-in delay-200">
              Empowering careers, fostering connections.
              <br className="hidden sm:inline" /> Bridging talent and
              opportunity since **{companyData.howItStarted.established}**.
            </p>
          </div>
        </section>
        {/* Our Story */}
        {/* Awesome Styled: Interactive timeline component if possible, or staggered reveal of text. */}
        <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0 transform transition-transform duration-700 hover:scale-[1.01]">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in-left">
                Our Journey
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in delay-200">
                Founded in **{companyData.howItStarted.established}**, Refer Me
                Group emerged from a critical insight: the inherent gap between
                job recruiters and job seekers, particularly for individuals
                seeking to refer known contacts within organizations. Our core
                dedication is to **empower individuals to achieve their career
                aspirations**.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in delay-300">
                This incidental discovery paved the way for our mission to build
                a robust platform that connects talent with opportunities,
                creating a seamless and trustworthy referral ecosystem.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 animate-fade-in-right delay-400">
              <div className="bg-gradient-to-br from-indigo-700 to-blue-800 text-white p-8 rounded-xl shadow-lg flex flex-col justify-center items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                <FaStar className="text-yellow-400 text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">10+ Years</h3>
                <p className="text-sm opacity-90">Of empowering careers</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Professional team collaborating"
                className="rounded-xl shadow-xl object-cover h-full min-h-[250px] transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Credentials */}
        {/* Awesome Styled: Use a dynamic grid layout, with icons animating on hover or on scroll. */}
        <section className="bg-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in-down">
              Our Credentials
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {companyData.credentials.map((credential, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg flex items-center space-x-6 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl animate-fade-in delay-100"
                >
                  <div className="text-blue-600 text-5xl flex-shrink-0">
                    <FaAward /> {/* Generic icon, could be dynamic */}
                  </div>
                  <p className="text-xl font-semibold text-gray-800">
                    {credential}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        {/* Awesome Styled: Animated number counters, visually distinct cards for each stat. */}
        <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in-down">
            Our Impact by the Numbers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up delay-100">
              <FaChalkboardTeacher className="text-blue-600 text-5xl mx-auto mb-4" />
              <div className="text-5xl font-extrabold text-indigo-700 mb-2 count-up">
                {companyData.stats.trainedProfessionals}
              </div>
              <p className="text-lg text-gray-700">Trained Professionals</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up delay-200">
              <GiAchievement className="text-green-600 text-5xl mx-auto mb-4" />
              <div className="text-5xl font-extrabold text-indigo-700 mb-2 count-up">
                {companyData.stats.totalTrainingHours}
              </div>
              <p className="text-lg text-gray-700">Training Hours Completed</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up delay-300">
              <FaGlobe className="text-purple-600 text-5xl mx-auto mb-4" />
              <div className="text-5xl font-extrabold text-indigo-700 mb-2 count-up">
                {companyData.stats.countriesTrained}
              </div>
              <p className="text-lg text-gray-700">Countries Served</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up delay-400">
              <FaHandshake className="text-teal-600 text-5xl mx-auto mb-4" />
              <div className="text-5xl font-extrabold text-indigo-700 mb-2 count-up">
                {companyData.stats.corporateTrained}
              </div>
              <p className="text-lg text-gray-700">Corporate Trainings</p>
            </div>
          </div>
        </section>

        {/* Community */}
        {/* Awesome Styled: Cards with platform-specific colors/icons, subtle ripple effect on hover. */}
        <section className="bg-gradient-to-br from-indigo-700 to-blue-800 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-down">
              Our Extended Family: The "Refermegroup-ians"
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
              {/* Digital Presence */}
              <div className="bg-white bg-opacity-15 p-8 rounded-xl backdrop-blur-md shadow-xl border border-white border-opacity-20 transform transition-transform duration-300 hover:scale-[1.02] animate-fade-in-left">
                <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center">
                  <FaUsers className="mr-3" /> Digital Presence & We're still
                  Growing...
                </h3>
                <ul className="text-lg opacity-90 space-y-3">
                  <li className="flex items-center">
                    <FaTelegramPlane className="mr-3 text-blue-400" />{" "}
                    {companyData.community.telegram}
                  </li>
                  <li className="flex items-center">
                    <FaWhatsapp className="mr-3 text-green-400" />{" "}
                    {companyData.community.whatsapp}
                  </li>
                  <li className="flex items-center">
                    <FaLinkedinIn className="mr-3 text-blue-500" />{" "}
                    {companyData.community.linkedInGroups}
                  </li>
                  <li className="flex items-center">
                    <FaLinkedinIn className="mr-3 text-blue-500" />{" "}
                    {companyData.community.linkedInTotalFollowers}
                  </li>
                  <li className="flex items-center">
                    <FaFacebook className="mr-3 text-blue-600" />{" "}
                    {companyData.community.facebookFollowers}
                  </li>
                  <li className="flex items-center">
                    <FaTwitter className="mr-3 text-blue-300" />{" "}
                    {companyData.community.twitterFollowers}
                  </li>
                  <li className="flex items-center">
                    <FaQuora className="mr-3 text-red-500" />{" "}
                    {companyData.community.quoraFollowers}
                  </li>
                  <li className="flex items-center">
                    <FaGlobe className="mr-3 text-gray-300" />{" "}
                    {companyData.community.otherPlatforms}
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-8">
                {/* Daily Impact */}
                <div className="bg-white bg-opacity-15 p-8 rounded-xl backdrop-blur-md shadow-xl border border-white border-opacity-20 transform transition-transform duration-300 hover:scale-[1.02] animate-fade-in delay-200">
                  <h3 className="text-2xl font-bold mb-4 text-green-300 flex items-center">
                    <FaHandshake className="mr-3" /> Our Daily Impact
                  </h3>
                  <ul className="text-lg opacity-90 space-y-3">
                    <li className="flex items-center">
                      <FaChalkboardTeacher className="mr-3" />{" "}
                      {companyData.whatWeDo.dailyCounseling}
                    </li>
                    <li className="flex items-center">
                      <FaAward className="mr-3" />{" "}
                      {companyData.whatWeDo.dailyJobs} shared daily
                    </li>
                    <li className="flex items-center">
                      <FaUsers className="mr-3" />{" "}
                      {companyData.whatWeDo.dailyMails} responded daily
                    </li>
                  </ul>
                </div>

                {/* Annual Reach - Job Placements */}
                <div className="bg-white bg-opacity-15 p-8 rounded-xl backdrop-blur-md shadow-xl border border-white border-opacity-20 transform transition-transform duration-300 hover:scale-[1.02] animate-fade-in-right">
                  <h3 className="text-2xl font-bold mb-4 text-red-300 flex items-center">
                    <GiGrowth className="mr-3" /> Jobs Placed Annually
                  </h3>
                  <ul className="text-lg opacity-90 space-y-3">
                    {companyData.whatWeDo.jobsByYear.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span>**{item.year}:**</span>{" "}
                        <span className="text-yellow-300 font-semibold">
                          {item.jobs.toLocaleString()}+ Jobs
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        {/* Awesome Styled: Feature cards with subtle animations on hover, grouped benefits. */}
        <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in-down">
            Why Choose Refer Me Group?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.whyUs.map((benefit, index) => {
              let icon;
              let description;

              switch (benefit) {
                case "Life Time Job Assistance":
                  icon = <FaHandshake className="text-green-500" />;
                  description =
                    "Continuous support beyond training completion, ensuring you land your dream job.";
                  break;
                case "Transparent Policies":
                  icon = <FaAward className="text-yellow-500" />;
                  description =
                    "Upfront pricing and transparent policies. Please note: No refunds are applicable.";
                  break;
                case "Referral Program":
                  icon = <FaUsers className="text-blue-500" />;
                  description =
                    "Earn while helping others grow and expanding your professional network.";
                  break;
                case "Life Time Recording":
                  icon = <FaChalkboardTeacher className="text-purple-500" />;
                  description =
                    "Access to all session recordings for continuous learning and revision.";
                  break;
                case "Direct Interaction with Trainers & Students":
                  icon = <FaGlobe className="text-orange-500" />;
                  description =
                    "Engage directly with industry experts and a vibrant community of peers.";
                  break;
                case "Support After Training Completion":
                  icon = <FaStar className="text-red-500" />;
                  description =
                    "Our dedicated support extends well beyond your training period.";
                  break;
                case "Dedicated Person in Each Program":
                  icon = <FaUsers className="text-teal-500" />;
                  description =
                    "Personalized guidance from a dedicated coordinator for each program.";
                  break;
                case "Live Projects":
                  icon = <GiAchievement className="text-indigo-500" />;
                  description =
                    "Gain invaluable real-world experience through hands-on live projects.";
                  break;
                case "Interview Preparation":
                  icon = <FaAward className="text-pink-500" />;
                  description =
                    "Master your interviews with our expert-led preparation sessions.";
                  break;
                case "Resume Service":
                  icon = <FaChalkboardTeacher className="text-cyan-500" />;
                  description =
                    "Craft a compelling resume that stands out to recruiters.";
                  break;
                case "LinkedIn Service":
                  icon = <FaLinkedinIn className="text-blue-600" />;
                  description =
                    "Optimize your LinkedIn profile for maximum visibility and opportunities.";
                  break;
                case "Exclusive Network":
                  icon = <FaGlobe className="text-lime-500" />;
                  description =
                    "Access to a private network of professionals and industry leaders.";
                  break;
                case "Support Professional having no Job/Financial Chalenge":
                  icon = <FaHandshake className="text-gray-500" />;
                  description =
                    "Special assistance for professionals facing employment or financial difficulties.";
                  break;
                case "Got Jobs":
                  icon = <FaStar className="text-amber-500" />;
                  description =
                    "Our ultimate goal: helping you secure meaningful employment.";
                  break;
                default:
                  icon = <FaAward className="text-gray-400" />;
                  description =
                    "Comprehensive benefit provided by Refer Me Group.";
              }

              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500 animate-fade-in delay-100"
                >
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit}
                  </h3>
                  <p className="text-gray-700 text-sm">{description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        {/* Awesome Styled: Parallax effect for background, glowing buttons. */}
      </div>
    </>
  );
};

export default History;
