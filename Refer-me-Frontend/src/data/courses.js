// Updated courses data with JSON content
const courses = [
  {
    id: "data-science",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Data Science Content (1).pdf",
    category: "Data Science, AI & Automation",
    title: "Data Science",
    shortDesc:
      "Master data science with hands-on training in Python, machine learning, deep learning, and data visualization using Tableau.",
    longDesc:
      "This Data Science course transforms you into a job-ready data scientist in 16 weeks. Learn Python, statistics, machine learning algorithms, deep learning, NLP, and data visualization with Tableau. Guided by industry experts, you’ll work on real-world projects to build a strong portfolio for roles in data science and analytics.",
    type: "Instructor-led Live Classes",
    duration: "16 Weeks (160 Hours)",
    schedule: "Weekdays: 6-8 PM | Weekends: 9 AM-12 PM",
    enrolled: "5,800+ Enrolled",
    price: "₹ 29,999",
    originalPrice: "₹ 39,999",
    discount: "25% OFF",
    gradient: "from-teal-600 to-green-500",
    bannerImage: "/assets/products/data-science.jpg",
    videoPresentation: "/assets/bg-img/gif2.gif",
    instructors: [
      {
        name: "Neha Sharma",
        role: "Senior Data Scientist at Amazon",
        experience: "9 years",
        image:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        rating: 4.8,
        reviews: 900,
        bio: "Neha specializes in machine learning and data visualization, with extensive experience in Python and Tableau.",
        expertise: ["Machine Learning", "Tableau", "Python"],
      },
      {
        name: "Vivek Patel",
        role: "Data Science Consultant",
        experience: "7 years",
        image:
          "https://images.unsplash.com/photo-1503443207922-3b3f5e7e9e0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        rating: 4.7,
        reviews: 680,
        bio: "Vivek focuses on deep learning and NLP, helping students master complex algorithms and real-world applications.",
        expertise: ["Deep Learning", "NLP", "XGBoost"],
      },
    ],
    images: [
      "/assets/products/datascience.png",
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    ],
    videos: [
      "https://www.youtube.com/embed/Ke90Tje7VS0",
      "https://www.youtube.com/embed/zg9ih6SVACc",
    ],
    features: [
      "Master Python, ML, and Tableau",
      "Build real-world data science projects",
      "1-on-1 mentorship sessions",
      "Job placement assistance",
      "Lifetime access to resources",
      "Certificate of completion",
      "Access to premium job groups",
      "Lifetime recorded sessions",
    ],
    curriculum: [
      {
        module: "Foundations",
        topics: [
          { title: "Basic Python", duration: "6 Hours", completed: false },
          { title: "Basic Statistics", duration: "5 Hours", completed: false },
        ],
      },
      {
        module: "Data Science Basics",
        topics: [
          {
            title: "Introduction to Data Science",
            duration: "4 Hours",
            completed: false,
          },
          {
            title: "Introduction to Machine Learning",
            duration: "4 Hours",
            completed: false,
          },
          {
            title: "Data Pre-processing",
            duration: "5 Hours",
            completed: false,
          },
        ],
      },
      {
        module: "Machine Learning Algorithms",
        topics: [
          {
            title: "Simple Linear Regression",
            duration: "4 Hours",
            completed: false,
          },
          {
            title: "Multiple Linear Regression",
            duration: "4 Hours",
            completed: false,
          },
          {
            title: "Polynomial Regression",
            duration: "3 Hours",
            completed: false,
          },
          {
            title: "Support Vector Machine",
            duration: "4 Hours",
            completed: false,
          },
          {
            title: "Decision Tree Regression",
            duration: "3 Hours",
            completed: false,
          },
          {
            title: "Random Forest Regression",
            duration: "3 Hours",
            completed: false,
          },
          {
            title: "Logistic Regression",
            duration: "4 Hours",
            completed: false,
          },
          { title: "KNN", duration: "3 Hours", completed: false },
          {
            title: "SVM for Classification",
            duration: "3 Hours",
            completed: false,
          },
          { title: "Naïve Bayes", duration: "3 Hours", completed: false },
          {
            title: "Decision Tree Classification",
            duration: "3 Hours",
            completed: false,
          },
          {
            title: "Random Forest Classification",
            duration: "3 Hours",
            completed: false,
          },
        ],
      },
      {
        module: "Advanced Machine Learning",
        topics: [
          {
            title: "K-Means Clustering",
            duration: "3 Hours",
            completed: false,
          },
          {
            title: "Hierarchical Clustering",
            duration: "3 Hours",
            completed: false,
          },
          {
            title: "Apriori (Association Rule Learning)",
            duration: "3 Hours",
            completed: false,
          },
          {
            title: "Eclat (Association Rule Learning)",
            duration: "3 Hours",
            completed: false,
          },
          {
            title: "UCD (Reinforcement Learning)",
            duration: "3 Hours",
            completed: false,
          },
          {
            title: "Thomson Sampling (Reinforcement Learning)",
            duration: "3 Hours",
            completed: false,
          },
        ],
      },
      {
        module: "Deep Learning and NLP",
        topics: [
          {
            title: "Natural Language Processing (NLP)",
            duration: "5 Hours",
            completed: false,
          },
          {
            title: "Artificial Neural Network (ANN)",
            duration: "5 Hours",
            completed: false,
          },
          {
            title: "Convolutional Neural Network (CNN)",
            duration: "5 Hours",
            completed: false,
          },
        ],
      },
      {
        module: "Dimensionality Reduction and Model Boosting",
        topics: [
          {
            title: "Principal Component Analysis (PCA)",
            duration: "3 Hours",
            completed: false,
          },
          {
            title: "Linear Discriminant Analysis (LDA)",
            duration: "3 Hours",
            completed: false,
          },
          { title: "Model Selection", duration: "3 Hours", completed: false },
          { title: "XGBoost", duration: "4 Hours", completed: false },
        ],
      },
      {
        module: "Data Visualization",
        topics: [
          {
            title: "Data Visualization using Tableau",
            duration: "5 Hours",
            completed: false,
          },
        ],
      },
    ],
    projects: [
      {
        title: "Customer Churn Prediction",
        description:
          "Build a machine learning model to predict customer churn using regression and classification techniques",
        skills: ["Python", "Logistic Regression", "Random Forest"],
      },
      {
        title: "Sentiment Analysis System",
        description:
          "Develop an NLP-based system to analyze sentiments in customer reviews using deep learning",
        skills: ["NLP", "ANN", "Python"],
      },
    ],
    testimonials: [
      {
        name: "Riya Kapoor",
        role: "Data Scientist at Accenture",
        rating: 4.9,
        content:
          "This course gave me a deep understanding of machine learning and Tableau. The projects were key to my job placement.",
        image: "https://randomuser.me/api/portraits/women/51.jpg",
      },
      {
        name: "Kunal Verma",
        role: "Data Analyst",
        rating: 4.7,
        content:
          "The hands-on projects and mentorship helped me master data science concepts and secure a great role.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need prior data science experience?",
        answer:
          "No, we start with Python and statistics basics, making it suitable for beginners and intermediate learners.",
      },
      {
        question: "What tools will I learn?",
        answer:
          "You’ll master Python, Tableau, and machine learning frameworks for real-world data science applications.",
      },
    ],
    placementStats: {
      placementRate: "90%",
      averageSalary: "₹ 9.0 LPA",
      hiringPartners: ["Amazon", "Accenture", "IBM", "Deloitte", "PayPal"],
    },
    recommended: true,

    badges: ["Bestseller", "Trending", "Limited Seats"],
    instituteDetails: {
      description:
        "Refer Me Group is a leading Edu-Tech institution with over 10 years of experience, dedicated to providing high-quality training in data science at affordable fees. With a network of 180,000+ professionals and affiliations with multiple certification boards, we ensure job-ready skills through practical training and robust career support.",
      keyOfferings: [
        "Live Projects: Work on industry-relevant data science projects",
        "Advanced IT Labs: Equipped with tools like Python, Tableau, and ML frameworks",
        "Placement Assistance: Resume preparation, LinkedIn profile updates, and access to premium job groups",
        "Expert Faculty: Learn from professionals with extensive experience in data science",
        "Flexible Learning: Online and offline classes with lifetime access to recorded sessions",
        "Community Support: Access to WhatsApp and LinkedIn job groups with 25,000+ professionals",
      ],
      featuresTable: [
        {
          feature: "Live Projects",
          details: "Develop data science models for real-world applications",
        },
        {
          feature: "IT Lab Facilities",
          details: "Modern labs with Python, Tableau, and ML environments",
        },
        {
          feature: "Placement Assistance",
          details:
            "Support with resume building, LinkedIn updates, and job placements",
        },
        {
          feature: "Certification Support",
          details:
            "Affiliation with multiple certification boards for global recognition",
        },
      ],
      agileActivities: [
        {
          activity: "Data Science Sprints",
          description: "Fast-paced challenges to build and evaluate ML models",
        },
        {
          activity: "Team Projects",
          description:
            "Collaborate on data science projects to simulate industry workflows",
        },
        {
          activity: "Model Reviews",
          description: "Receive feedback to optimize machine learning models",
        },
        {
          activity: "Agile Workshops",
          description:
            "Learn Agile methodologies for efficient data science workflows",
        },
      ],
      highlights: [
        "Practical Training: 5,800+ professionals trained with hands-on data science projects",
        "Modern Infrastructure: Access cutting-edge tools for data analysis and visualization",
        "Career Support: Comprehensive placement assistance and a 180,000+ professional network",
        "Mentorship: Personalized guidance and lifetime access to recorded sessions",
        "Global Reach: Trained professionals from 15+countries across multiple industries",
        "Reputation: 4.8 rating from 740+ learners on Google",
        "Extensive Training: Over 11,000 hours of expert-led instruction delivered",
        "Corporate Experience: Partnered with and served 10+ corporates worldwide",
        "Community Presence: 10 million+ LinkedIn impressions and 1,20,000+ connections",
        "Support Ecosystem: Dedicated staff, resume building, LinkedIn optimization, and premium job groups",
        "Certified Outcomes: 2,800+ ISTQB certified professionals with 99.8% pass rate",
        "Versatility: 2500+ trained in automation, 510+ in business analysis, 350+ in AWS & DevOps, 400+ agile certified",
      ],
      studentAvatars: [
        "images/employee_5employee.png",
        "images/Avatar-Image-15.png",
        "images/Avatar-Image-16.png",
        "images/Avatar-Image-2.png",
      ],
      studentsCount: "5800+",
    },
    demandSection: {
      title: "India’s growing demand for skilled Data Scientists",
      description:
        "Refer Me Group’s Data Science course is renowned for producing job-ready data scientists. With a focus on practical skills and industry-relevant projects, we ensure students meet the demands of the thriving data science industry.",
      trainingOptions: [
        {
          title: "Data Science Classroom Course",
          image: "custom/image_section/offline-ds-class.png",
          description:
            "Experience an engaging classroom environment designed to make learning data science practical and effective.",
        },
        {
          title: "Data Science Online Course",
          image: "custom/image_section/online-ds-class.png",
          description:
            "Our online Data Science course offers flexible learning with the latest tools and technologies to help you excel.",
        },
      ],
    },
    aboutInstitute: {
      title: "About - Refer Me Group",
      description:
        "Refer Me Group, with over 10 years of experience, is dedicated to empowering professionals with cutting-edge skills in data science. Our mission is to make quality education accessible and affordable.",
      features: [
        {
          icon: "cube",
          content:
            "Our courses are designed to help you master data science and secure high-demand roles in the tech industry.",
        },
        {
          icon: "cube",
          content:
            "With a network of 180,000+ professionals, we connect you to opportunities worldwide.",
        },
        {
          icon: "briefcase",
          title: "Placement Assistance",
          content:
            "Access resume preparation, LinkedIn updates, and premium job groups to land your dream job.",
        },
        {
          icon: "briefcase",
          content:
            "Our team is committed to your success with personalized mentorship and lifetime support.",
        },
      ],
      reviews: [
        {
          platform: "Google",
          rating: "4.8/5",
          count: "740+",
          icon: "images/Google_Icon.svg",
        },
        {
          platform: "LinkedIn",
          rating: "4.9/5",
          count: "3500+",
          icon: "images/linkedin_icon.svg",
        },
        {
          platform: "Facebook",
          rating: "4.8/5",
          count: "12000+",
          icon: "images/Facebook-1.svg",
        },
      ],
    },
    certificationSection: {
      title: "Global certification is critical for Data Science professionals.",
      description:
        "Refer Me Group is affiliated with multiple certification boards, offering practical training to prepare you for real-world data science challenges.",
      features: [
        {
          icon: "images/3_5.png",
          title: "Classroom Infrastructure for Data Science Training",
          description:
            "Modern labs equipped with Python, Tableau, and ML frameworks.",
        },
        {
          icon: "images/1_5.png",
          title: "Online Data Science Classes",
          description:
            "Flexible, expert-led online courses to master data science tools and techniques.",
        },
      ],
    },
    addOnBenefits: [
      "TRAINING WHATSAPP GROUP",
      "PERSONAL MENTORSHIP",
      "SUPPORT AFTER TRAINING COMPLETION",
      "DEDICATED STAFF DURING TRAINING PROGRAM",
      "LIFE TIME CLASSROOM RECORDED SESSIONS",
      "RESUME PREPARATION",
      "LINKEDIN PROFILE UPDATE",
      "PREMIUM JOB GROUP",
    ],
    ourNetwork: [
      "10 MILLION+ IMPRESSION ON LINKEDIN",
      "1,20,00+ LINKEDIN CONNECTIONS",
      "12000+ FOLLOWERS ON FACEBOOK PAGE",
      "11000+ PROFESSIONALS ON TELEGRAM JOB GROUPS",
      "15000+ PROFESSIONALS ON WHATSAPP JOB GROUPS",
      "10000+ PROFESSIONALS ON LINKEDIN JOB GROUPS",
      "3500+ FOLLOWERS ON LINKEDIN PAGE",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM TRANSFORMATION",
        "200+ OTHER TOOLS/TECHNOLOGIES",
        "350+ PROFESSIONALS TRAINED IN AWS + DEVOPS",
        "400+ AGILE CERTIFIED PROFESSIONALS",
        "510+ BUSINESS ANALYST TRANSFORMATION SUCCESS STORIES",
        "2500+ AUTOMATION TRANSFORMATION SUCCESS STORIES",
        "2800+ (99.8%) PASSED ISTQB PROFESSIONALS",
      ],
      tagline: "You can also roar",
    },
    programExecution: {
      details: [
        "Online Trainer",
        "Start",
        "Let Session",
        "Course",
        "Complete Module",
        "Assessment",
        "Case Studies &",
        "Post",
      ],
      note: "The content on this page appears incomplete or ambiguous in the OCR output. Additional details (e.g., steps or numbered items) may be missing.",
    },
  },
  {
    id: "ai-for-leaders",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_AI for LEADERS Training Content (1).pdf",
    category: "Artificial Intelligence",
    title: "AI for Leaders",
    shortDesc:
      "Master AI leadership skills with practical training in machine learning, generative AI, and ethical AI implementation for business transformation.",
    longDesc:
      "This AI for Leaders course empowers professionals to harness artificial intelligence for strategic decision-making. Covering machine learning foundations, generative AI, LLMs, and ethical considerations, the program provides leaders with the tools to implement AI solutions across business functions. Through case studies and hands-on projects, participants will learn to identify AI opportunities and manage AI-driven products effectively.",
    type: "Instructor-led Live Classes",
    duration: "8 Weeks (80 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "1,500+ Enrolled",
    price: "₹ 34,999",
    originalPrice: "₹ 44,999",
    discount: "22% OFF",
    gradient: "from-purple-600 to-blue-500",
    bannerImage: "/assets/products/AI for leaders.jpg",
    videoPresentation: "/assets/bg-img/gif1.gif",
    instructors: [
      {
        name: "Dr. Anil Kumar",
        role: "AI Strategy Consultant",
        experience: "12 years",
        image: "/assets/instructors/anil-kumar.jpg",
        rating: 4.9,
        reviews: 450,
        bio: "Former Head of AI at a Fortune 500 company, specializing in AI implementation strategies for business leaders.",
        expertise: [
          "AI Strategy",
          "Machine Learning",
          "Business Transformation",
        ],
        social: {
          linkedIn: "https://linkedin.com/in/anilkumar-ai",
          twitter: "https://twitter.com/anilkumar_ai",
        },
      },
      {
        name: "Priya Mehta",
        role: "Generative AI Expert",
        experience: "8 years",
        image: "/assets/instructors/priya-mehta.jpg",
        rating: 4.8,
        reviews: 380,
        bio: "Leading researcher in generative AI applications for business, with multiple published papers on AI ethics.",
        expertise: ["Generative AI", "LLMs", "AI Ethics"],
        social: {
          linkedIn: "https://linkedin.com/in/priyamehta-ai",
          twitter: "https://twitter.com/priyamehta_ai",
        },
      },
    ],
    images: [
      "/assets/courses/ai-leaders-1.jpg",
      "/assets/courses/ai-leaders-2.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/ai-leaders-preview1",
      "https://www.youtube.com/embed/ai-leaders-preview2",
    ],
    features: [
      "Master AI leadership strategies",
      "Hands-on with Gen AI tools",
      "Case studies from real businesses",
      "Ethical AI implementation framework",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Machine Learning Foundations",
        topics: [
          { title: "What is Machine Learning?", duration: "2 Hours" },
          { title: "The Modeling Process", duration: "3 Hours" },
          { title: "Evaluating & Interpreting Models", duration: "3 Hours" },
          {
            title: "Linear Models for Regression & Classification",
            duration: "4 Hours",
          },
          {
            title: "Tree Models, Ensembles and Clustering",
            duration: "4 Hours",
          },
          { title: "Deep Learning", duration: "3 Hours" },
        ],
      },
      {
        module: "Generative AI",
        topics: [
          { title: "Introduction to Generative AI", duration: "3 Hours" },
          { title: "Business Applications and Use Cases", duration: "4 Hours" },
          { title: "Understanding the Workflow", duration: "3 Hours" },
          { title: "Generative AI Projects", duration: "5 Hours" },
        ],
      },
      {
        module: "Text, Image, Video Generation",
        topics: [
          { title: "Deep Dive into Generative AI", duration: "4 Hours" },
          {
            title: "Text, Image, Video Generation Projects",
            duration: "6 Hours",
          },
          { title: "RAGS and LLMs", duration: "5 Hours" },
        ],
      },
      {
        module: "Human Factors in AI",
        topics: [
          { title: "Design of AI Product Experiences", duration: "3 Hours" },
          { title: "Data Privacy and AI", duration: "3 Hours" },
          { title: "Ethics in AI", duration: "3 Hours" },
          { title: "Human and Societal Considerations", duration: "3 Hours" },
        ],
      },
      {
        module: "Managing ML Products",
        topics: [
          { title: "Identifying Opportunities for ML", duration: "3 Hours" },
          { title: "Organizing ML Products", duration: "3 Hours" },
          { title: "Data Considerations", duration: "3 Hours" },
          { title: "ML System Design & Technology", duration: "4 Hours" },
          { title: "Model Life Cycle Management", duration: "3 Hours" },
          { title: "Roles Mapping in ML Projects", duration: "3 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "AI Implementation Strategy",
        description: "Develop an AI adoption roadmap for a business case study",
        skills: ["AI Strategy", "Business Analysis", "ROI Calculation"],
      },
      {
        title: "Generative AI Solution",
        description:
          "Design and prototype a generative AI application for a specific business need",
        skills: [
          "Generative AI",
          "Prompt Engineering",
          "Ethical Considerations",
        ],
      },
    ],
    testimonials: [
      {
        name: "Rajiv Malhotra",
        role: "Product Director at TechCorp",
        rating: 4.9,
        content:
          "This course transformed how I view AI implementation in business. The strategic frameworks are immediately applicable.",
        image: "/assets/testimonials/rajiv-m.jpg",
      },
      {
        name: "Neha Kapoor",
        role: "Senior Project Manager",
        rating: 4.8,
        content:
          "The generative AI modules gave me practical tools to lead AI initiatives in my organization.",
        image: "/assets/testimonials/neha-k.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need technical background for this course?",
        answer:
          "No, this course is designed for leaders and managers who want to understand and implement AI strategically.",
      },
      {
        question: "What AI tools will we learn?",
        answer:
          "You'll work with tools like ChatGPT, Hugging Face, Google Vertex AI, Midjourney, and ethical AI frameworks.",
      },
    ],
    placementStats: {
      placementRate: "85%",
      averageSalary: "₹ 12.5 LPA",
      hiringPartners: ["Accenture", "TCS", "Infosys", "Wipro", "Tech Mahindra"],
    },
    badges: ["Leadership", "Cutting-edge", "Executive Program"],
    instituteDetails: {
      description:
        "Refer Me Group is a 10+ year old Edu-Tech institution affiliated with multiple certification boards. We've trained professionals from 15+countries and served 10+ corporates with our practical, industry-relevant programs.",
      keyOfferings: [
        "Live Online Sessions with AI experts",
        "Case Studies from real business implementations",
        "Job Assistance with resume and LinkedIn optimization",
        "Access to premium AI tools and frameworks",
        "Lifetime recorded sessions and community access",
      ],
      featuresTable: [
        {
          feature: "AI Strategy Frameworks",
          details: "Learn to develop and implement AI adoption roadmaps",
        },
        {
          feature: "Hands-on Tools",
          details:
            "Work with ChatGPT, Midjourney, Hugging Face and other industry tools",
        },
        {
          feature: "Ethical AI",
          details: "Understand and implement responsible AI practices",
        },
        {
          feature: "Leadership Certification",
          details: "Globally recognized certification in AI Leadership",
        },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        {
          content: "Affiliated with multiple Certification Boards",
        },
        {
          content: "10+ Years old Edu-Tech Institution",
        },
        {
          content: "Served/Serving 10+ Corporates",
        },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12000+ Followers on Facebook Page",
      "11000+ Professionals on Telegram Job Groups",
      "15000+ Professionals on WhatsApp Job Groups",
      "10000+ Professionals on LinkedIn Job Groups",
      "3500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2500+ Automation Transformation Success Stories",
        "2800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also ROAR",
    },
    toolsCovered: [
      "Google Teachable Machine",
      "Fast.ai Kaggle",
      "LIME",
      "SHAP",
      "Hugging Face",
      "Perplexity.ai",
      "Elicit",
      "Jasper",
      "Futurpedia",
      "ChatGPT",
      "Adobe Firefly",
      "Midjourney",
      "RunwayML",
      "Flowise",
      "Tome.app",
      "Notion AI",
      "Synthesis",
      "Figma",
      "GDPR Guide",
      "AI Ethics Guidelines (EU)",
      "AI Now Institute",
    ],
  },

  {
    id: "advanced-data-science",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Advance Data Science Content (1).pdf",
    category: "Data Science & AI",
    title: "Advanced Data Science",
    shortDesc:
      "Master advanced data science techniques with Python, financial analysis, and AI/ML applications in finance.",
    longDesc:
      "This Advanced Data Science course covers Python programming fundamentals, data analysis with NumPy/Pandas, financial modeling, and AI/ML applications in finance. Learn to analyze stock data, perform portfolio optimization, and implement machine learning algorithms for financial predictions through hands-on projects.",
    type: "Instructor-led Live Classes",
    duration: "12 Weeks (120 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "2,500+ Enrolled",
    price: "₹ 32,999",
    originalPrice: "₹ 42,999",
    discount: "23% OFF",
    gradient: "from-blue-600 to-indigo-600",
    bannerImage: "/assets/products/adv datascience.jpg",
    videoPresentation: "/assets/bg-img/gif2.gif",
    instructors: [
      {
        name: "Dr. Sanjay Verma",
        role: "Financial Data Scientist",
        experience: "10 years",
        image: "/assets/instructors/sanjay-verma.jpg",
        rating: 4.8,
        reviews: 520,
        bio: "Former lead data scientist at a major investment bank, specializing in algorithmic trading and financial modeling.",
        expertise: ["Financial Analysis", "Algorithmic Trading", "Python"],
        social: {
          linkedIn: "https://linkedin.com/in/sanjayverma-ds",
          twitter: "https://twitter.com/sanjayverma_ds",
        },
      },
      {
        name: "Priyanka Joshi",
        role: "AI in Finance Expert",
        experience: "7 years",
        image: "/assets/instructors/priyanka-joshi.jpg",
        rating: 4.7,
        reviews: 430,
        bio: "Machine learning specialist with extensive experience in stock price prediction and customer segmentation models.",
        expertise: ["Machine Learning", "NLP", "Financial AI"],
        social: {
          linkedIn: "https://linkedin.com/in/priyankajoshi-ai",
          twitter: "https://twitter.com/priyankajoshi_ai",
        },
      },
    ],
    images: [
      "/assets/courses/advanced-ds-1.jpg",
      "/assets/courses/advanced-ds-2.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/advanced-ds-preview1",
      "https://www.youtube.com/embed/advanced-ds-preview2",
    ],
    features: [
      "Master Python for financial analysis",
      "Stock data analysis and visualization",
      "Portfolio optimization techniques",
      "AI/ML applications in finance",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Python Programming Fundamentals",
        topics: [
          { title: "Variables and Data Types", duration: "3 Hours" },
          { title: "Operators and Loops", duration: "4 Hours" },
          { title: "Functions and Files", duration: "3 Hours" },
          { title: "Data Analysis using NumPy", duration: "5 Hours" },
          { title: "Data Analysis using Pandas", duration: "6 Hours" },
          {
            title: "Data Visualization (Matplotlib/Seaborn/Plotly)",
            duration: "6 Hours",
          },
        ],
      },
      {
        module: "Financial Analysis in Python",
        topics: [
          { title: "Capital Asset Pricing Model (CAPM)", duration: "4 Hours" },
          { title: "Portfolio Assets Allocation", duration: "4 Hours" },
          {
            title: "Stock Data Analysis and Visualization",
            duration: "5 Hours",
          },
          {
            title: "Trading Strategies (Momentum/Moving Average)",
            duration: "5 Hours",
          },
          { title: "Stock Risk and Return Analysis", duration: "4 Hours" },
          { title: "Portfolio Optimization", duration: "5 Hours" },
          { title: "Monte Carlo Simulations", duration: "4 Hours" },
          { title: "Sharpe Ratio, Efficient Frontier", duration: "4 Hours" },
        ],
      },
      {
        module: "AI and ML in Finance",
        topics: [
          { title: "Machine Learning Algorithms", duration: "5 Hours" },
          {
            title: "Stock Price Predictions Using Regression LSTM",
            duration: "6 Hours",
          },
          { title: "Bank Customers Segmentation", duration: "5 Hours" },
          { title: "Stock Sentiment Analysis Using AI", duration: "5 Hours" },
          { title: "K-means Clustering", duration: "4 Hours" },
          { title: "PCA for Customer Segmentation", duration: "4 Hours" },
          { title: "NLP for Stock Sentiment Analysis", duration: "5 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "Algorithmic Trading Strategy",
        description:
          "Develop and backtest a trading strategy using momentum and moving average techniques",
        skills: ["Python", "Pandas", "Financial Modeling"],
      },
      {
        title: "Customer Segmentation Model",
        description:
          "Build a machine learning model to segment banking customers for targeted marketing",
        skills: ["Clustering", "PCA", "Data Visualization"],
      },
    ],
    testimonials: [
      {
        name: "Amit Sharma",
        role: "Quantitative Analyst",
        rating: 4.9,
        content:
          "The financial analysis modules transformed how I approach portfolio management. The practical projects were invaluable.",
        image: "/assets/testimonials/amit-s.jpg",
      },
      {
        name: "Neha Patel",
        role: "Data Scientist",
        rating: 4.8,
        content:
          "The AI in finance applications gave me cutting-edge skills that set me apart in job interviews.",
        image: "/assets/testimonials/neha-p.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need finance background for this course?",
        answer:
          "No, we cover financial concepts from basics. Programming experience is helpful but we start with Python fundamentals.",
      },
      {
        question: "What financial datasets will we work with?",
        answer:
          "You'll analyze real stock market data, banking customer data, and economic indicators from various sources.",
      },
    ],
    placementStats: {
      placementRate: "88%",
      averageSalary: "₹ 10.5 LPA",
      hiringPartners: [
        "Goldman Sachs",
        "JP Morgan",
        "Morgan Stanley",
        "ICICI Bank",
        "HDFC Bank",
      ],
    },
    badges: ["Advanced", "Finance Focus", "Hands-on"],
    instituteDetails: {
      description:
        "Refer Me Group is a 10+ year old Edu-Tech institution with extensive experience in data science training. We've successfully transformed 510+ professionals into Business Analysts and 2,500+ in Automation.",
      keyOfferings: [
        "Real-world financial datasets and case studies",
        "Hands-on projects with stock market data",
        "Industry-relevant AI/ML applications",
        "Placement assistance with financial firms",
        "Lifetime access to course materials",
      ],
      featuresTable: [
        {
          feature: "Financial Python",
          details: "Master Pandas, NumPy for financial analysis",
        },
        {
          feature: "Algorithmic Trading",
          details: "Build and backtest trading strategies",
        },
        {
          feature: "AI in Finance",
          details: "Implement ML models for financial predictions",
        },
        {
          feature: "Portfolio Management",
          details: "Optimize investment portfolios using quantitative methods",
        },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        {
          content: "Affiliated with multiple Certification Boards",
        },
        {
          content: "10+ Years old Edu-Tech Institution",
        },
        {
          content: "Served/Serving 10+ Corporates",
        },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12000+ Followers on Facebook Page",
      "11000+ Professionals on Telegram Job Groups",
      "15000+ Professionals on WhatsApp Job Groups",
      "10000+ Professionals on LinkedIn Job Groups",
      "3500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2500+ Automation Transformation Success Stories",
        "2800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also ROAR",
    },
    toolsCovered: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "NLTK",
    ],
  },
  {
    id: "tosca-automation",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Tosca Training Content (1).pdf",
    category: "Automation Testing",
    title: "Tosca Automation",
    shortDesc:
      "Master Tosca automation tool for end-to-end testing of SAP, Salesforce, and web applications with real-world projects.",
    longDesc:
      "This comprehensive Tosca Automation course covers all aspects of test automation using Tricentis Tosca. Learn module creation, test case design, API testing, and integration with CI/CD pipelines. Gain hands-on experience with SAP and Salesforce automation, along with best practices for test data management and execution.",
    type: "Instructor-led Live Classes",
    duration: "8 Weeks (80 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "1,800+ Enrolled",
    price: "₹ 35,999",
    originalPrice: "₹ 45,999",
    discount: "22% OFF",
    gradient: "from-green-600 to-teal-500",
    bannerImage: "/assets/products/tosca-1.jpg",
    videoPresentation: "/assets/bg-img/gif3.gif",
    instructors: [
      {
        name: "Rahul Mehta",
        role: "Tosca Architect",
        experience: "9 years",
        image: "/assets/instructors/rahul-mehta.jpg",
        rating: 4.8,
        reviews: 480,
        bio: "Certified Tosca automation architect with extensive experience in SAP and Salesforce test automation.",
        expertise: ["Tosca", "SAP Testing", "Salesforce Automation"],
        social: {
          linkedIn: "https://linkedin.com/in/rahulmehta-tosca",
          twitter: "https://twitter.com/rahulmehta_tosca",
        },
      },
      {
        name: "Ananya Reddy",
        role: "Test Automation Lead",
        experience: "7 years",
        image: "/assets/instructors/ananya-reddy.jpg",
        rating: 4.7,
        reviews: 390,
        bio: "Specialist in CI/CD integration and API test automation with Tosca across various domains.",
        expertise: ["API Testing", "CI/CD", "Test Data Management"],
        social: {
          linkedIn: "https://linkedin.com/in/ananyareddy-qa",
          twitter: "https://twitter.com/ananyareddy_qa",
        },
      },
    ],
    images: ["/assets/courses/tosca-1.jpg", "/assets/courses/tosca-2.jpg"],
    videos: [
      "https://www.youtube.com/embed/tosca-preview1",
      "https://www.youtube.com/embed/tosca-preview2",
    ],
    features: [
      "End-to-end Tosca automation training",
      "SAP and Salesforce automation",
      "API testing with Tosca",
      "CI/CD integration",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Introduction to Tosca & Technical Requirements",
        topics: [
          { title: "Introduction to Tosca", duration: "3 Hours" },
          { title: "Tosca Architecture", duration: "3 Hours" },
          { title: "System Requirements and Setup", duration: "2 Hours" },
          { title: "Tosca Licensing Modes", duration: "2 Hours" },
        ],
      },
      {
        module: "Modules Section",
        topics: [
          { title: "Creation of Modules", duration: "4 Hours" },
          { title: "Control Identification Methods", duration: "4 Hours" },
          { title: "Module Standard Structuring", duration: "3 Hours" },
          { title: "Rescan and Best Practices", duration: "3 Hours" },
        ],
      },
      {
        module: "Test Case Section",
        topics: [
          { title: "Test Case Components", duration: "3 Hours" },
          { title: "Test Case Structuring", duration: "3 Hours" },
          { title: "Action Modes", duration: "3 Hours" },
          { title: "Expression Evaluation Tool", duration: "3 Hours" },
        ],
      },
      {
        module: "Test Case Development Concepts",
        topics: [
          { title: "Dynamic Buffers", duration: "4 Hours" },
          { title: "Random Data Generation", duration: "4 Hours" },
          { title: "Regular Expressions", duration: "4 Hours" },
          { title: "Recovery Scenarios", duration: "4 Hours" },
        ],
      },
      {
        module: "Table Identification & Steering",
        topics: [
          { title: "Table Steering", duration: "3 Hours" },
          { title: "Static & Dynamic Steering", duration: "3 Hours" },
          { title: "Embedded Control Steering", duration: "3 Hours" },
        ],
      },
      {
        module: "Loops & Conditions",
        topics: [
          { title: "Conditional Statements", duration: "4 Hours" },
          { title: "While & Do While", duration: "4 Hours" },
          { title: "Iterations/Repetitions", duration: "4 Hours" },
        ],
      },
      {
        module: "Test Case Design",
        topics: [
          { title: "Combinatorics Techniques", duration: "5 Hours" },
          { title: "Test Case Templates", duration: "5 Hours" },
          { title: "Generating Test Cases", duration: "5 Hours" },
        ],
      },
      {
        module: "Execution & Defect Logging",
        topics: [
          { title: "Execution Set Creation", duration: "4 Hours" },
          { title: "Test Execution Results", duration: "4 Hours" },
          { title: "Defect Logging", duration: "4 Hours" },
        ],
      },
      {
        module: "Excel Automation & Integration",
        topics: [
          { title: "Excel Standard Modules", duration: "3 Hours" },
          { title: "CI/CD Integration (Jenkins)", duration: "4 Hours" },
          { title: "Database Integration", duration: "4 Hours" },
        ],
      },
      {
        module: "SAP & Salesforce Automation",
        topics: [
          { title: "SAP Standard Modules", duration: "6 Hours" },
          { title: "Salesforce Application Testing", duration: "6 Hours" },
          { title: "API Scan and Methods", duration: "6 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "Salesforce Automation Framework",
        description:
          "Build an end-to-end test automation framework for Salesforce application",
        skills: ["Tosca", "Salesforce", "Test Framework"],
      },
      {
        title: "SAP Regression Test Suite",
        description:
          "Create comprehensive regression test cases for SAP modules",
        skills: ["SAP Testing", "Tosca", "Regression Testing"],
      },
    ],
    testimonials: [
      {
        name: "Vikram Singh",
        role: "Test Automation Engineer",
        rating: 4.9,
        content:
          "The SAP automation modules helped me secure a position at a top IT firm. The hands-on approach was exceptional.",
        image: "/assets/testimonials/vikram-s.jpg",
      },
      {
        name: "Priya Nair",
        role: "QA Lead",
        rating: 4.8,
        content:
          "The CI/CD integration knowledge I gained set me apart in my current role. Highly recommend for automation professionals.",
        image: "/assets/testimonials/priya-n.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need prior Tosca experience?",
        answer:
          "No, we start from basics. Some testing experience is helpful but not required.",
      },
      {
        question: "Will we get Tosca license for practice?",
        answer:
          "Yes, we provide trial licenses and guidance for setup during the course.",
      },
    ],
    placementStats: {
      placementRate: "85%",
      averageSalary: "₹ 8.5 LPA",
      hiringPartners: [
        "Accenture",
        "Capgemini",
        "Cognizant",
        "Infosys",
        "Wipro",
      ],
    },
    badges: ["SAP Testing", "Salesforce", "Hands-on"],
    instituteDetails: {
      description:
        "Refer Me Group has trained 2,500+ professionals in test automation with a 99.8% ISTQB pass rate. Our practical approach ensures job-ready skills in Tosca automation.",
      keyOfferings: [
        "Real-world SAP and Salesforce automation projects",
        "Hands-on Tosca workspace setup",
        "Industry-standard test frameworks",
        "Placement assistance with top IT firms",
        "Lifetime access to learning materials",
      ],
      featuresTable: [
        {
          feature: "End-to-End Tosca",
          details: "Master all aspects of Tosca automation",
        },
        {
          feature: "SAP Automation",
          details: "Specialized training for SAP testing",
        },
        {
          feature: "Salesforce Testing",
          details: "Build test cases for Salesforce apps",
        },
        {
          feature: "CI/CD Integration",
          details: "Integrate Tosca with Jenkins pipelines",
        },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        {
          content: "Affiliated with multiple Certification Boards",
        },
        {
          content: "10+ Years old Edu-Tech Institution",
        },
        {
          content: "Served/Serving 10+ Corporates",
        },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12000+ Followers on Facebook Page",
      "11000+ Professionals on Telegram Job Groups",
      "15000+ Professionals on WhatsApp Job Groups",
      "10000+ Professionals on LinkedIn Job Groups",
      "3500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2500+ Automation Transformation Success Stories",
        "2800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also ROAR",
    },
    toolsCovered: [
      "Tosca",
      "Jenkins",
      "SAP",
      "Salesforce",
      "Excel",
      "Test Data Services",
      "API Testing Tools",
    ],
  },
  {
    id: "business-analyst-tools",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Business Analyst with Tools (1).pdf",
    category: "Business Analysis",
    title: "Business Analyst with Tools",
    shortDesc:
      "Comprehensive business analysis training covering requirements gathering, agile methodologies, and essential BA tools like JIRA and SQL.",
    longDesc:
      "This Business Analyst course provides end-to-end training in business analysis processes, from requirements elicitation to solution validation. Learn agile methodologies, UML modeling, and tools like JIRA, Tableau, and SQL. Through hands-on exercises and case studies, you'll master the skills needed to succeed as a business analyst in both waterfall and agile environments.",
    type: "Instructor-led Live Classes",
    duration: "10 Weeks (100 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "3,200+ Enrolled",
    price: "₹ 28,999",
    originalPrice: "₹ 38,999",
    discount: "26% OFF",
    gradient: "from-purple-600 to-indigo-600",
    bannerImage: "/assets/products/ba-tools.jpg",
    videoPresentation: "/assets/bg-img/gif2.gif",
    instructors: [
      {
        name: "Nisha Patel",
        role: "Senior Business Analyst",
        experience: "11 years",
        image: "/assets/instructors/nisha-patel.jpg",
        rating: 4.8,
        reviews: 550,
        bio: "IIBA-certified business analyst with extensive experience in banking and healthcare domains.",
        expertise: [
          "Requirements Analysis",
          "Agile BA",
          "Stakeholder Management",
        ],
        social: {
          linkedIn: "https://linkedin.com/in/nishapatel-ba",
          twitter: "https://twitter.com/nishapatel_ba",
        },
      },
      {
        name: "Rohit Malhotra",
        role: "Product Owner",
        experience: "8 years",
        image: "/assets/instructors/rohit-malhotra.jpg",
        rating: 4.7,
        reviews: 420,
        bio: "Agile transformation specialist helping BAs transition to product ownership roles.",
        expertise: ["Agile Methodologies", "Product Ownership", "User Stories"],
        social: {
          linkedIn: "https://linkedin.com/in/rohitmalhotra-po",
          twitter: "https://twitter.com/rohitmalhotra_po",
        },
      },
    ],
    images: ["/assets/courses/ba-1.jpg", "/assets/courses/ba-2.jpg"],
    videos: [
      "https://www.youtube.com/embed/ba-preview1",
      "https://www.youtube.com/embed/ba-preview2",
    ],
    features: [
      "Master business analysis fundamentals",
      "Agile BA and product ownership skills",
      "Hands-on with JIRA, SQL, Tableau",
      "Real-world case studies",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Introduction to Business Analysis",
        topics: [
          { title: "About IIBA and Certifications", duration: "3 Hours" },
          { title: "Role of Business Analyst", duration: "4 Hours" },
          { title: "Business Analysis Process", duration: "3 Hours" },
          { title: "BABOK V3 Knowledge Areas", duration: "4 Hours" },
        ],
      },
      {
        module: "SDLC Methodologies",
        topics: [
          { title: "Waterfall and V-Model", duration: "3 Hours" },
          { title: "Iterative and Incremental Models", duration: "3 Hours" },
          { title: "Agile & Scrum", duration: "4 Hours" },
          { title: "BA Role in Different Models", duration: "3 Hours" },
        ],
      },
      {
        module: "Requirements Scope and Planning",
        topics: [
          { title: "Defining Solution Scope", duration: "4 Hours" },
          { title: "Use Case and Context Diagrams", duration: "5 Hours" },
          { title: "Business Analysis Planning", duration: "4 Hours" },
          { title: "Stakeholder Analysis Techniques", duration: "4 Hours" },
        ],
      },
      {
        module: "Documenting Requirements",
        topics: [
          { title: "BRD/FRD/SRS Documentation", duration: "5 Hours" },
          { title: "Requirements Prioritization", duration: "4 Hours" },
          { title: "Use Case Documentation", duration: "5 Hours" },
          { title: "Process Mapping", duration: "4 Hours" },
        ],
      },
      {
        module: "Requirements Verification",
        topics: [
          { title: "V&V Tools and Techniques", duration: "4 Hours" },
          { title: "Requirements Sign-off", duration: "3 Hours" },
          { title: "Change Control Process", duration: "4 Hours" },
          { title: "Managing Traceability", duration: "3 Hours" },
        ],
      },
      {
        module: "Strategy Analysis",
        topics: [
          { title: "Current and Future State Analysis", duration: "4 Hours" },
          { title: "Risk Assessment", duration: "3 Hours" },
          { title: "Business Case and ROI", duration: "5 Hours" },
          { title: "Elicitation Techniques", duration: "5 Hours" },
        ],
      },
      {
        module: "Agile Business Analysis",
        topics: [
          { title: "Agile Fundamentals", duration: "4 Hours" },
          { title: "Product Backlog Management", duration: "5 Hours" },
          {
            title: "User Stories and Acceptance Criteria",
            duration: "5 Hours",
          },
          { title: "Release Planning", duration: "4 Hours" },
        ],
      },
      {
        module: "Scrum Fundamentals",
        topics: [
          { title: "Scrum Roles and Responsibilities", duration: "4 Hours" },
          { title: "Sprint Flow", duration: "4 Hours" },
          { title: "Agile Estimation", duration: "4 Hours" },
          { title: "Product Vision and MVP", duration: "4 Hours" },
        ],
      },
      {
        module: "BA Tools",
        topics: [
          { title: "UML and Process Modeling", duration: "5 Hours" },
          { title: "JIRA and Trello", duration: "5 Hours" },
          { title: "Wireframing Tools", duration: "4 Hours" },
          { title: "SQL and Data Visualization", duration: "6 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "End-to-End Requirements Package",
        description:
          "Create complete business requirements documentation for a sample project",
        skills: ["BRD", "Use Cases", "Process Maps"],
      },
      {
        title: "Agile Product Backlog",
        description:
          "Develop and prioritize a product backlog with user stories for an agile project",
        skills: ["User Stories", "Backlog Grooming", "Agile Planning"],
      },
    ],
    testimonials: [
      {
        name: "Arjun Kapoor",
        role: "Business Analyst",
        rating: 4.9,
        content:
          "The comprehensive coverage of both waterfall and agile methodologies helped me transition smoothly into my BA role.",
        image: "/assets/testimonials/arjun-k.jpg",
      },
      {
        name: "Meena Desai",
        role: "Product Owner",
        rating: 4.8,
        content:
          "The hands-on JIRA and agile training was exactly what I needed to move from traditional BA to Product Owner.",
        image: "/assets/testimonials/meena-d.jpg",
      },
    ],
    faqs: [
      {
        question: "Is this course suitable for beginners?",
        answer:
          "Yes, we start from fundamentals and build up to advanced BA skills. No prior experience required.",
      },
      {
        question: "Will I learn technical skills like SQL?",
        answer:
          "Yes, we cover SQL basics, data visualization, and other technical skills needed for modern BAs.",
      },
    ],
    placementStats: {
      placementRate: "90%",
      averageSalary: "₹ 7.5 LPA",
      hiringPartners: ["Deloitte", "EY", "PwC", "TCS", "Infosys"],
    },
    badges: ["IIBA Aligned", "Agile BA", "Tools Included"],
    instituteDetails: {
      description:
        "Refer Me Group has successfully transformed 510+ professionals into Business Analysts through our practical, industry-focused training approach. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive BA skill development",
        "Both waterfall and agile methodologies",
        "Hands-on with industry tools",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        {
          feature: "Requirements Engineering",
          details: "Master elicitation, analysis and documentation",
        },
        {
          feature: "Agile Transformation",
          details: "Learn Scrum and product ownership skills",
        },
        {
          feature: "BA Tools",
          details: "Hands-on with JIRA, SQL, Tableau and more",
        },
        {
          feature: "Case Studies",
          details: "Real-world projects from various domains",
        },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        {
          content: "Affiliated with multiple Certification Boards",
        },
        {
          content: "10+ Years old Edu-Tech Institution",
        },
        {
          content: "Served/Serving 10+ Corporates",
        },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],

    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: [
      "JIRA",
      "Confluence",
      "SQL",
      "UML Diagrams",
      "Use Cases",
      "Swimlane Diagram",
      "Process Flow Diagram",
      "Functional Specification and Wireframing",
      "Data Dictionary/Data Mapping",
      "RAIDS (Risk Analysis)",
      "RACI Matrix",
      "Requirement Traceability Matrix (RTM)",
    ],
  },
  {
    id: "advance-automation",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Advance Automation Content (1).pdf",
    category: "Automation Testing",
    title: "Advance Automation Testing",
    shortDesc:
      "Comprehensive automation testing training covering Java, Selenium, SOAP UI, Rest Assured, JMeter, Playwright, Cypress, and DevOps tools like Jenkins and Docker.",
    longDesc:
      "This Advance Automation Testing course offers in-depth training in automation testing frameworks and tools. Master core Java concepts, Selenium WebDriver, API testing with SOAP UI and Rest Assured, performance testing with JMeter, and modern tools like Playwright and Cypress. Learn DevOps integration with Jenkins, Git, Maven, Docker, and Kubernetes through hands-on projects and real-world case studies.",
    type: "Instructor-led Live Classes",
    duration: "12 Weeks (120 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "2,500+ Enrolled",
    price: "₹ 32,999",
    originalPrice: "₹ 45,999",
    discount: "28% OFF",
    gradient: "from-blue-600 to-teal-600",
    bannerImage: "/assets/products/adv aotomation.jpg",
    videoPresentation: "/assets/bg-img/gif7.gif",
    instructors: [
      {
        name: "Anil Sharma",
        role: "Senior Automation Engineer",
        experience: "12 years",
        image: "/assets/instructors/anil-sharma.jpg",
        rating: 4.9,
        reviews: 600,
        bio: "ISTQB-certified automation expert with extensive experience in web and API automation across multiple domains.",
        expertise: ["Selenium", "Rest Assured", "DevOps Integration"],
        social: {
          linkedIn: "https://linkedin.com/in/anilsharma-auto",
          twitter: "https://twitter.com/anilsharma_auto",
        },
      },
      {
        name: "Priya Gupta",
        role: "Test Automation Architect",
        experience: "9 years",
        image: "/assets/instructors/priya-gupta.jpg",
        rating: 4.8,
        reviews: 450,
        bio: "Expert in performance testing and modern automation tools like Playwright and Cypress.",
        expertise: ["JMeter", "Playwright", "Cypress"],
        social: {
          linkedIn: "https://linkedin.com/in/priyagupta-ta",
          twitter: "https://twitter.com/priyagupta_ta",
        },
      },
    ],
    images: [
      "/assets/courses/automation-1.jpg",
      "/assets/courses/automation-2.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/automation-preview1",
      "https://www.youtube.com/embed/automation-preview2",
    ],
    features: [
      "Master core Java for automation",
      "Hands-on with Selenium, SOAP UI, Rest Assured",
      "Performance testing with JMeter",
      "Modern automation with Playwright and Cypress",
      "DevOps tools: Jenkins, Git, Docker",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Introduction to Automation Testing",
        topics: [
          { title: "What is Automation Testing", duration: "2 Hours" },
          { title: "Advantages and Disadvantages", duration: "2 Hours" },
        ],
      },
      {
        module: "Core Java Concepts",
        topics: [
          { title: "Basic Java and JDK Installation", duration: "5 Hours" },
          { title: "Object-Oriented Programming", duration: "6 Hours" },
          { title: "Data Types and Variables", duration: "4 Hours" },
          {
            title: "Access Modifiers and Control Structures",
            duration: "5 Hours",
          },
          { title: "Java Collections and Exceptions", duration: "5 Hours" },
        ],
      },
      {
        module: "Selenium WebDriver",
        topics: [
          {
            title: "Browser Launching and WebDriver Methods",
            duration: "4 Hours",
          },
          { title: "Locators and WebElement Methods", duration: "5 Hours" },
          {
            title: "Handling UI Elements (Radio, Checkbox, Dropdown)",
            duration: "5 Hours",
          },
          {
            title: "Advanced Selenium (Web Tables, Frames, Alerts)",
            duration: "6 Hours",
          },
          {
            title: "Javascript Executor and Mouse Actions",
            duration: "4 Hours",
          },
        ],
      },
      {
        module: "Automation Frameworks",
        topics: [
          { title: "Page Object Model", duration: "4 Hours" },
          { title: "Data Driven Framework", duration: "4 Hours" },
          { title: "Cucumber Framework", duration: "5 Hours" },
        ],
      },
      {
        module: "SOAP UI for Web Services",
        topics: [
          {
            title: "Web Services Basics and SOAP UI Setup",
            duration: "4 Hours",
          },
          { title: "SOAP vs REST Services", duration: "3 Hours" },
          { title: "SOAP UI Test Steps and Assertions", duration: "5 Hours" },
          { title: "Data Driven Testing in SOAP UI", duration: "4 Hours" },
        ],
      },
      {
        module: "Rest Assured for API Testing",
        topics: [
          { title: "Client-Server Architecture and HTTP", duration: "3 Hours" },
          { title: "REST API Basics and Setup", duration: "4 Hours" },
          { title: "GET, POST, PUT, DELETE Requests", duration: "6 Hours" },
          {
            title: "REST API Testing Framework with Maven",
            duration: "5 Hours",
          },
        ],
      },
      {
        module: "JMeter for Performance Testing",
        topics: [
          { title: "Introduction to Performance Testing", duration: "3 Hours" },
          { title: "JMeter Setup and Components", duration: "4 Hours" },
          { title: "Test Plan and Thread Group", duration: "4 Hours" },
          { title: "Parametrization and Listeners", duration: "4 Hours" },
        ],
      },
      {
        module: "Playwright",
        topics: [
          { title: "Architecture and Environment Setup", duration: "3 Hours" },
          { title: "Test Runner and Basic Commands", duration: "4 Hours" },
          { title: "Locators and Assertions", duration: "4 Hours" },
          { title: "Handling UI Elements and Actions", duration: "5 Hours" },
        ],
      },
      {
        module: "Cypress",
        topics: [
          { title: "Introduction and Environment Setup", duration: "3 Hours" },
          { title: "Test Runner and Basic Commands", duration: "4 Hours" },
          {
            title: "Locators, Assertions, and UI Handling",
            duration: "5 Hours",
          },
          { title: "Cypress Dashboard and Debugging", duration: "4 Hours" },
        ],
      },
      {
        module: "DevOps Integration",
        topics: [
          { title: "Jenkins and Continuous Integration", duration: "4 Hours" },
          { title: "Git for Version Control", duration: "3 Hours" },
          { title: "Maven for Build Automation", duration: "3 Hours" },
          { title: "Docker and Kubernetes Basics", duration: "4 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "Web Application Automation",
        description:
          "Automate a web application using Selenium and Cucumber framework",
        skills: ["Selenium", "Cucumber", "Java"],
      },
      {
        title: "API Automation Framework",
        description:
          "Build a REST API testing framework using Rest Assured and Maven",
        skills: ["Rest Assured", "Maven", "API Testing"],
      },
      {
        title: "Performance Test Suite",
        description:
          "Create a performance test suite for a web application using JMeter",
        skills: ["JMeter", "Performance Testing"],
      },
    ],
    testimonials: [
      {
        name: "Vikram Singh",
        role: "Automation Test Engineer",
        rating: 4.9,
        content:
          "The course's hands-on approach with Selenium and Rest Assured helped me land a role in automation testing.",
        image: "/assets/testimonials/vikram-s.jpg",
      },
      {
        name: "Sneha Reddy",
        role: "Test Automation Lead",
        rating: 4.8,
        content:
          "Learning modern tools like Playwright and Cypress gave me a competitive edge in the industry.",
        image: "/assets/testimonials/sneha-r.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need programming experience for this course?",
        answer:
          "No, we cover Java from scratch, making it suitable for beginners and experienced professionals.",
      },
      {
        question: "What tools will I learn in this course?",
        answer:
          "You'll master Selenium, SOAP UI, Rest Assured, JMeter, Playwright, Cypress, Jenkins, Git, Maven, Docker, and Kubernetes.",
      },
    ],
    placementStats: {
      placementRate: "92%",
      averageSalary: "₹ 8 LPA",
      hiringPartners: ["TCS", "Infosys", "Wipro", "HCL", "Accenture"],
    },
    badges: ["ISTQB Aligned", "DevOps Integrated", "Tools Mastery"],
    instituteDetails: {
      description:
        "Refer Me Group has transformed 2,500+ professionals into automation testers with our industry-aligned training. Our 10+ years of experience ensures top-quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive automation testing skills",
        "Hands-on with industry-standard tools",
        "DevOps integration training",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        { feature: "Core Java", details: "Master Java for automation testing" },
        {
          feature: "Web Automation",
          details: "Selenium, Playwright, and Cypress",
        },
        { feature: "API Testing", details: "SOAP UI and Rest Assured" },
        {
          feature: "Performance Testing",
          details: "JMeter for load and stress testing",
        },
        {
          feature: "DevOps Tools",
          details: "Jenkins, Git, Maven, Docker, Kubernetes",
        },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        {
          content: "Affiliated with multiple Certification Boards",
        },
        {
          content: "10+ Years old Edu-Tech Institution",
        },
        {
          content: "Served/Serving 10+ Corporates",
        },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: [
      "Java",
      "Selenium WebDriver",
      "SOAP UI",
      "Rest Assured",
      "JMeter",
      "Playwright",
      "Cypress",
      "Jenkins",
      "Git",
      "Maven",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: "program-manager",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Program Manager Content (2).pdf",
    category: "Program Management",
    title: "Program Manager (Skills 360 Degree)",
    shortDesc:
      "Comprehensive program management training covering PMI standards, agile methodologies, stakeholder management, and risk mitigation strategies.",
    longDesc:
      "This Program Manager course provides end-to-end training in managing complex programs, aligning with organizational strategies, and mastering governance, risk, and stakeholder management. Learn PMI standards, agile and hybrid methodologies, and skills like budgeting, resource allocation, and change management through practical case studies and hands-on exercises.",
    type: "Instructor-led Live Classes",
    duration: "8 Weeks (80 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "150+ Enrolled",
    price: "₹ 34,999",
    originalPrice: "₹ 49,999",
    discount: "30% OFF",
    gradient: "from-green-600 to-blue-600",
    bannerImage: "/assets/products/prgm mangr.jpg",
    videoPresentation: "/assets/bg-img/gif1.gif",
    instructors: [
      {
        name: "Rahul Mehra",
        role: "Senior Program Manager",
        experience: "15 years",
        image: "/assets/instructors/rahul-mehra.jpg",
        rating: 4.9,
        reviews: 500,
        bio: "PMP-certified program manager with expertise in delivering large-scale programs in IT and finance.",
        expertise: [
          "Program Governance",
          "Risk Management",
          "Stakeholder Engagement",
        ],
        social: {
          linkedIn: "https://linkedin.com/in/rahulmehra-pm",
          twitter: "https://twitter.com/rahulmehra_pm",
        },
      },
      {
        name: "Anita Desai",
        role: "Agile Coach",
        experience: "10 years",
        image: "/assets/instructors/anita-desai.jpg",
        rating: 4.7,
        reviews: 380,
        bio: "Expert in agile and hybrid program management, guiding teams through complex transformations.",
        expertise: [
          "Agile Methodologies",
          "Team Leadership",
          "Change Management",
        ],
        social: {
          linkedIn: "https://linkedin.com/in/anitadesai-ac",
          twitter: "https://twitter.com/anitadesai_ac",
        },
      },
    ],
    images: ["/assets/courses/pm-1.jpg", "/assets/courses/pm-2.jpg"],
    videos: [
      "https://www.youtube.com/embed/pm-preview1",
      "https://www.youtube.com/embed/pm-preview2",
    ],
    features: [
      "Master program management frameworks",
      "Agile and hybrid methodologies",
      "Stakeholder and risk management",
      "Hands-on case studies",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Introduction to Program Management",
        topics: [
          { title: "Definition and Importance", duration: "3 Hours" },
          { title: "Program vs. Project", duration: "2 Hours" },
          { title: "Program Management Life Cycle", duration: "4 Hours" },
        ],
      },
      {
        module: "Program Management Framework",
        topics: [
          { title: "PMI Standards and PRINCE2", duration: "4 Hours" },
          { title: "Program Governance and Compliance", duration: "4 Hours" },
          {
            title: "Alignment with Organizational Strategy",
            duration: "3 Hours",
          },
        ],
      },
      {
        module: "Program Lifecycle Management",
        topics: [
          { title: "Initiation and Charter Creation", duration: "4 Hours" },
          { title: "Planning (Schedule, Scope, Budget)", duration: "5 Hours" },
          { title: "Execution and Monitoring", duration: "5 Hours" },
          { title: "Closure and Transition", duration: "4 Hours" },
        ],
      },
      {
        module: "Stakeholder and Communication Management",
        topics: [
          {
            title: "Stakeholder Identification and Analysis",
            duration: "4 Hours",
          },
          { title: "Communication Planning", duration: "3 Hours" },
          { title: "Conflict Resolution Strategies", duration: "3 Hours" },
        ],
      },
      {
        module: "Risk and Issue Management",
        topics: [
          { title: "Risk Identification and Assessment", duration: "4 Hours" },
          { title: "Risk Mitigation Strategies", duration: "3 Hours" },
          { title: "Issue Resolution and Escalations", duration: "3 Hours" },
        ],
      },
      {
        module: "Financial and Resource Management",
        topics: [
          { title: "Budgeting and Cost Management", duration: "4 Hours" },
          {
            title: "Resource Allocation and Optimization",
            duration: "4 Hours",
          },
        ],
      },
      {
        module: "Leadership and Team Management",
        topics: [
          {
            title: "Leadership Styles and Emotional Intelligence",
            duration: "4 Hours",
          },
          { title: "Team Building and Motivation", duration: "4 Hours" },
        ],
      },
      {
        module: "Quality and Performance Management",
        topics: [
          { title: "Quality Management Plan", duration: "3 Hours" },
          { title: "Performance Tracking (KPIs, EVM)", duration: "4 Hours" },
        ],
      },
      {
        module: "Change Management",
        topics: [
          { title: "Managing Change Requests", duration: "3 Hours" },
          {
            title: "Impact Analysis and Plan Adjustments",
            duration: "3 Hours",
          },
        ],
      },
    ],
    projects: [
      {
        title: "Program Management Plan",
        description:
          "Develop a comprehensive program management plan for a sample initiative",
        skills: ["Program Charter", "Stakeholder Analysis", "Risk Planning"],
      },
      {
        title: "Agile Program Execution",
        description:
          "Simulate an agile program execution with dependency management",
        skills: [
          "Agile Methodologies",
          "Performance Metrics",
          "Communication Plan",
        ],
      },
    ],
    testimonials: [
      {
        name: "Karan Joshi",
        role: "Program Manager",
        rating: 4.9,
        content:
          "The course's focus on governance and stakeholder management was key to my career growth.",
        image: "/assets/testimonials/karan-j.jpg",
      },
      {
        name: "Pooja Sharma",
        role: "Agile Program Lead",
        rating: 4.8,
        content:
          "The practical case studies and agile training prepared me for real-world challenges.",
        image: "/assets/testimonials/pooja-s.jpg",
      },
    ],
    faqs: [
      {
        question: "Is this course aligned with PMI's PgMP certification?",
        answer:
          "This course covers PMI standards but is not specifically for PgMP certification preparation.",
      },
      {
        question: "Do I need prior PM experience?",
        answer:
          "No, the course starts with fundamentals and is suitable for aspiring program managers.",
      },
    ],
    placementStats: {
      placementRate: "88%",
      averageSalary: "₹ 12 LPA",
      hiringPartners: ["Deloitte", "EY", "PwC", "TCS", "Infosys"],
    },
    badges: ["PMI Aligned", "Agile PM", "Leadership Focus"],
    instituteDetails: {
      description:
        "Refer Me Group has transformed 150+ professionals into skilled program managers with our practical, industry-focused training approach. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive program management skills",
        "Agile and hybrid methodologies",
        "Hands-on governance and risk management",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        {
          feature: "Program Governance",
          details: "Master governance structures and compliance",
        },
        {
          feature: "Stakeholder Management",
          details: "Learn stakeholder analysis and communication",
        },
        {
          feature: "Risk Management",
          details: "Proactive and reactive risk strategies",
        },
        {
          feature: "Leadership",
          details: "Develop leadership and team-building skills",
        },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        {
          content: "Affiliated with multiple Certification Boards",
        },
        {
          content: "10+ Years old Edu-Tech Institution",
        },
        {
          content: "Served/Serving 10+ Corporates",
        },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: [
      "PMI Standards",
      "PRINCE2",
      "Stakeholder Mapping",
      "Risk Management Frameworks",
      "Earned Value Management (EVM)",
      "Program Charter Templates",
    ],
  },
  {
    id: "ai-automation",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Artificial Intelligence Automation (1).pdf",
    category: "Artificial Intelligence & Automation",
    title: "Artificial Intelligence Automation Testing",
    shortDesc:
      "Comprehensive training in AI-powered automation testing, covering Python programming, AI integration with Selenium, Cypress, Playwright, and CI/CD pipelines.",
    longDesc:
      "This Artificial Intelligence Automation Testing course equips you with skills to leverage AI in test automation. Master Python programming, integrate AI with tools like Selenium, Cypress, and Playwright, and learn to implement CI/CD pipelines with Cucumber. Through hands-on projects like CASTPONE, you'll gain expertise in AI-driven automation frameworks.",
    type: "Instructor-led Live Classes",
    duration: "10 Weeks (100 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "1,000+ Enrolled",
    price: "₹ 29,999",
    originalPrice: "₹ 39,999",
    discount: "25% OFF",
    gradient: "from-orange-600 to-red-600",
    bannerImage: "/assets/products/AItest.jpg",
    videoPresentation: "/assets/bg-img/gif3.gif",
    instructors: [
      {
        name: "Suresh Kumar",
        role: "AI Automation Specialist",
        experience: "10 years",
        image: "/assets/instructors/suresh-kumar.jpg",
        rating: 4.8,
        reviews: 400,
        bio: "Expert in AI-driven automation testing with extensive experience in Python and CI/CD integration.",
        expertise: ["Python", "AI Automation", "Selenium"],
        social: {
          linkedIn: "https://linkedin.com/in/sureshkumar-ai",
          twitter: "https://twitter.com/sureshkumar_ai",
        },
      },
      {
        name: "Neha Verma",
        role: "Test Automation Engineer",
        experience: "7 years",
        image: "/assets/instructors/neha-verma.jpg",
        rating: 4.7,
        reviews: 350,
        bio: "Specialist in integrating AI with modern automation tools like Cypress and Playwright.",
        expertise: ["Cypress", "Playwright", "CI/CD"],
        social: {
          linkedIn: "https://linkedin.com/in/nehaverma-ta",
          twitter: "https://twitter.com/nehaverma_ta",
        },
      },
    ],
    images: [
      "/assets/courses/ai-automation-1.jpg",
      "/assets/courses/ai-automation-2.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/ai-automation-preview1",
      "https://www.youtube.com/embed/ai-automation-preview2",
    ],
    features: [
      "Master Python for automation",
      "AI integration with Selenium, Cypress, Playwright",
      "CI/CD with Cucumber",
      "Hands-on CASTPONE project",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Python Programming",
        topics: [
          { title: "Using the Python Interpreter", duration: "3 Hours" },
          { title: "Control Flow Tools (if, for, range)", duration: "4 Hours" },
          {
            title: "Data Structures (Lists, Tuples, Sets, Dictionaries)",
            duration: "5 Hours",
          },
          { title: "Modules and Packages", duration: "3 Hours" },
          { title: "Input/Output and Exception Handling", duration: "4 Hours" },
        ],
      },
      {
        module: "AI in Automation",
        topics: [
          { title: "AI Installation and Basics", duration: "3 Hours" },
          { title: "AI Methods and Tools Introduction", duration: "4 Hours" },
          { title: "AI with Automation Frameworks", duration: "5 Hours" },
          { title: "AI with Selenium", duration: "4 Hours" },
          { title: "AI with Cypress or Playwright", duration: "4 Hours" },
        ],
      },
      {
        module: "Advanced AI Automation",
        topics: [
          { title: "AI with CI/CD Pipelines", duration: "4 Hours" },
          { title: "AI with Cucumber Framework", duration: "4 Hours" },
          { title: "AI with Java/JavaScript", duration: "4 Hours" },
          { title: "CASTPONE Project", duration: "6 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "CASTPONE AI Automation Project",
        description:
          "Develop an AI-driven automation framework integrating Selenium and Cucumber",
        skills: ["Python", "AI", "Selenium", "Cucumber"],
      },
      {
        title: "CI/CD Pipeline with AI",
        description:
          "Implement a CI/CD pipeline for AI-powered test automation",
        skills: ["CI/CD", "Python", "Cucumber"],
      },
    ],
    testimonials: [
      {
        name: "Arvind Patel",
        role: "AI Test Engineer",
        rating: 4.9,
        content:
          "The AI integration with automation tools was a game-changer for my career.",
        image: "/assets/testimonials/arvind-p.jpg",
      },
      {
        name: "Riya Sharma",
        role: "Automation Tester",
        rating: 4.8,
        content:
          "The CASTPONE project gave me hands-on experience in AI-driven testing.",
        image: "/assets/testimonials/riya-s.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need prior AI knowledge for this course?",
        answer:
          "No, the course covers AI basics and is suitable for beginners.",
      },
      {
        question: "What tools will I learn?",
        answer:
          "You'll learn Python, Selenium, Cypress, Playwright, Cucumber, and CI/CD integration.",
      },
    ],
    placementStats: {
      placementRate: "90%",
      averageSalary: "₹ 9 LPA",
      hiringPartners: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture"],
    },
    badges: ["AI-Powered", "Automation Mastery", "ISTQB Aligned"],
    instituteDetails: {
      description:
        "Refer Me Group has transformed 2,500+ professionals into automation experts, with a focus on cutting-edge AI integration. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "AI-driven automation testing skills",
        "Hands-on with Python and modern tools",
        "CI/CD pipeline integration",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        {
          feature: "Python Programming",
          details: "Master Python for automation",
        },
        {
          feature: "AI Integration",
          details: "Learn AI with Selenium, Cypress, Playwright",
        },
        {
          feature: "CI/CD Pipelines",
          details: "Implement automation with CI/CD",
        },
        {
          feature: "CASTPONE Project",
          details: "Real-world AI automation project",
        },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        { content: "Affiliated with multiple Certification Boards" },
        { content: "10+ Years old Edu-Tech Institution" },
        { content: "Served/Serving 10+ Corporates" },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: [
      "Python",
      "Selenium",
      "Cypress",
      "Playwright",
      "Cucumber",
      "Java",
      "JavaScript",
    ],
  },
  {
    id: "digital-marketing",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Digital Marketing (1).pdf",
    category: "Digital Marketing",
    title: "Digital Marketing Essentials & Executive Program",
    shortDesc:
      "Comprehensive digital marketing training covering SEO, social media, paid advertising, YouTube marketing, influencer marketing, and e-commerce strategies.",
    longDesc:
      "This Digital Marketing course combines basic and advanced programs to master marketing fundamentals, SEO, social media, paid advertising, YouTube marketing, influencer strategies, and e-commerce. Learn to create impactful campaigns using CMS for website design, blogging, and Google AdSense through practical projects and case studies.",
    type: "Instructor-led Live Classes",
    duration: "8 Weeks (80 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "1,500+ Enrolled",
    price: "₹ 24,999",
    originalPrice: "₹ 34,999",
    discount: "29% OFF",
    gradient: "from-purple-600 to-pink-600",
    bannerImage: "/assets/products/dm.jpg",
    videoPresentation: "/assets/bg-img/gif3.gif",
    instructors: [
      {
        name: "Vikram Rao",
        role: "Digital Marketing Strategist",
        experience: "12 years",
        image: "/assets/instructors/vikram-rao.jpg",
        rating: 4.9,
        reviews: 450,
        bio: "Expert in SEO, social media, and paid advertising with a track record of successful campaigns.",
        expertise: ["SEO", "Social Media Marketing", "Paid Ads"],
        social: {
          linkedIn: "https://linkedin.com/in/vikramrao-dm",
          twitter: "https://twitter.com/vikramrao_dm",
        },
      },
      {
        name: "Anjali Nair",
        role: "Influencer Marketing Specialist",
        experience: "8 years",
        image: "/assets/instructors/anjali-nair.jpg",
        rating: 4.8,
        reviews: 300,
        bio: "Specializes in YouTube and influencer marketing strategies for brand growth.",
        expertise: ["YouTube Marketing", "Influencer Marketing", "E-commerce"],
        social: {
          linkedIn: "https://linkedin.com/in/anjali-nair-dm",
          twitter: "https://twitter.com/anjali_nair_dm",
        },
      },
    ],
    images: ["/assets/courses/dm-1.jpg", "/assets/courses/dm-2.jpg"],
    videos: [
      "https://www.youtube.com/embed/dm-preview1",
      "https://www.youtube.com/embed/dm-preview2",
    ],
    features: [
      "Master digital marketing fundamentals",
      "SEO and social media strategies",
      "Hands-on with CMS and paid ads",
      "YouTube and influencer marketing",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Digital Marketing Essentials",
        topics: [
          { title: "Marketing Fundamentals", duration: "3 Hours" },
          { title: "Designing Fundamentals", duration: "3 Hours" },
          { title: "Video Marketing", duration: "4 Hours" },
          { title: "Website Designing using CMS", duration: "5 Hours" },
          { title: "Blogging & SEO", duration: "5 Hours" },
          { title: "Social Media Marketing", duration: "5 Hours" },
          { title: "Paid Marketing/Online Advertising", duration: "5 Hours" },
        ],
      },
      {
        module: "Executive Digital Marketing",
        topics: [
          { title: "YouTube Marketing", duration: "4 Hours" },
          { title: "Influencer Marketing", duration: "4 Hours" },
          { title: "Copywriting", duration: "3 Hours" },
          { title: "Email Marketing", duration: "4 Hours" },
          { title: "Online Reputation Management", duration: "3 Hours" },
          { title: "E-commerce", duration: "4 Hours" },
          { title: "Google AdSense", duration: "3 Hours" },
          { title: "Sales & Pitching", duration: "4 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "Digital Marketing Campaign",
        description:
          "Create a full-fledged digital marketing campaign using SEO, social media, and paid ads",
        skills: ["SEO", "Social Media", "Paid Advertising"],
      },
      {
        title: "YouTube Channel Strategy",
        description:
          "Develop a YouTube marketing strategy with influencer collaboration",
        skills: ["YouTube Marketing", "Influencer Marketing"],
      },
    ],
    testimonials: [
      {
        name: "Rohan Gupta",
        role: "Digital Marketing Manager",
        rating: 4.9,
        content:
          "The course's practical approach to SEO and paid ads boosted my career.",
        image: "/assets/testimonials/rohan-g.jpg",
      },
      {
        name: "Sneha Patel",
        role: "Social Media Strategist",
        rating: 4.8,
        content:
          "Learning YouTube and influencer marketing gave me a competitive edge.",
        image: "/assets/testimonials/sneha-p.jpg",
      },
    ],
    faqs: [
      {
        question: "Is this course suitable for beginners?",
        answer:
          "Yes, it covers fundamentals and advances to executive-level strategies.",
      },
      {
        question: "Will I learn hands-on tools?",
        answer:
          "Yes, you'll work with CMS, Google AdSense, and social media platforms.",
      },
    ],
    placementStats: {
      placementRate: "85%",
      averageSalary: "₹ 6 LPA",
      hiringPartners: ["Google", "Facebook", "Amazon", "Dentsu", "Ogilvy"],
    },
    badges: ["SEO Mastery", "Social Media Expert", "E-commerce Ready"],
    instituteDetails: {
      description:
        "Refer Me Group has trained thousands in digital marketing, offering industry-aligned skills for modern marketing roles. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive digital marketing skills",
        "Hands-on with SEO and social media tools",
        "YouTube and influencer marketing",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        {
          feature: "SEO & Blogging",
          details: "Master search engine optimization and blogging",
        },
        {
          feature: "Social Media",
          details: "Learn strategies for major platforms",
        },
        {
          feature: "Paid Advertising",
          details: "Hands-on with Google Ads and more",
        },
        {
          feature: "E-commerce",
          details: "Develop online store marketing strategies",
        },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        { content: "Affiliated with multiple Certification Boards" },
        { content: "10+ Years old Edu-Tech Institution" },
        { content: "Served/Serving 10+ Corporates" },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: [
      "CMS (WordPress)",
      "Google AdSense",
      "Google Ads",
      "Facebook Ads",
      "YouTube Analytics",
      "SEO Tools (SEMRush, Ahrefs)",
    ],
  },
  {
    id: "power-automate",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Power Automate Content (1).pdf",
    category: "Automation",
    title: "Power Automate",
    shortDesc:
      "Comprehensive training in Microsoft Power Automate, covering workflows, email, Excel, PDF, database automation, and intelligent automation with OCR.",
    longDesc:
      "This Power Automate course provides hands-on training in automating business processes using Microsoft Power Automate. Learn to create workflows for email, Excel, PDF, and database automation, along with advanced features like OCR and intelligent automation. Master scheduling, monitoring, and debugging flows through practical projects.",
    type: "Instructor-led Live Classes",
    duration: "6 Weeks (60 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "800+ Enrolled",
    price: "₹ 19,999",
    originalPrice: "₹ 29,999",
    discount: "33% OFF",
    gradient: "from-teal-600 to-cyan-600",
    bannerImage: "/assets/products/power-automate.jpg",
    videoPresentation: "/assets/bg-img/gif4.gif",
    instructors: [
      {
        name: "Amit Joshi",
        role: "Power Automate Consultant",
        experience: "9 years",
        image: "/assets/instructors/amit-joshi.jpg",
        rating: 4.8,
        reviews: 350,
        bio: "Expert in Microsoft Power Platform with extensive experience in business process automation.",
        expertise: ["Power Automate", "Workflows", "OCR"],
        social: {
          linkedIn: "https://linkedin.com/in/amitjoshi-pa",
          twitter: "https://twitter.com/amitjoshi_pa",
        },
      },
      {
        name: "Priyanka Sharma",
        role: "Automation Specialist",
        experience: "6 years",
        image: "/assets/instructors/priyanka-sharma.jpg",
        rating: 4.7,
        reviews: 280,
        bio: "Specializes in intelligent automation and database integration using Power Automate.",
        expertise: [
          "Database Automation",
          "Excel Automation",
          "Intelligent Automation",
        ],
        social: {
          linkedIn: "https://linkedin.com/in/priyankasharma-pa",
          twitter: "https://twitter.com/priyankasharma_pa",
        },
      },
    ],
    images: ["/assets/courses/pa-1.jpg", "/assets/courses/pa-2.jpg"],
    videos: [
      "https://www.youtube.com/embed/pa-preview1",
      "https://www.youtube.com/embed/pa-preview2",
    ],
    features: [
      "Master Power Automate workflows",
      "Email, Excel, and PDF automation",
      "Intelligent automation with OCR",
      "Hands-on projects",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Introduction to Power Automate",
        topics: [
          { title: "Introduction and Installation", duration: "2 Hours" },
          { title: "Basic Information", duration: "2 Hours" },
        ],
      },
      {
        module: "Core Automation Concepts",
        topics: [
          { title: "Conditional Activities", duration: "3 Hours" },
          { title: "Loops", duration: "3 Hours" },
          { title: "Files and Folder Automation", duration: "4 Hours" },
          { title: "Windows Automation", duration: "3 Hours" },
        ],
      },
      {
        module: "Advanced Automation",
        topics: [
          { title: "Web Automation", duration: "4 Hours" },
          { title: "Email Automation", duration: "4 Hours" },
          { title: "Excel Automation", duration: "4 Hours" },
          { title: "PDF Automation", duration: "3 Hours" },
        ],
      },
      {
        module: "Flow Management",
        topics: [
          { title: "Recording and Sub-flows", duration: "4 Hours" },
          { title: "Exception Handling and Debugging", duration: "4 Hours" },
          { title: "Data Manipulation", duration: "3 Hours" },
          { title: "Scheduling and Monitoring Flows", duration: "3 Hours" },
        ],
      },
      {
        module: "Intelligent Automation",
        topics: [
          { title: "Database Automation", duration: "4 Hours" },
          { title: "Working with OCR", duration: "3 Hours" },
          {
            title: "Introduction to Intelligent Automation",
            duration: "3 Hours",
          },
        ],
      },
    ],
    projects: [
      {
        title: "Business Process Automation",
        description:
          "Create an automated workflow for email and Excel processes",
        skills: ["Email Automation", "Excel Automation", "Workflows"],
      },
      {
        title: "Intelligent Document Processing",
        description: "Develop a flow using OCR for PDF and database automation",
        skills: ["OCR", "PDF Automation", "Database Automation"],
      },
    ],
    testimonials: [
      {
        name: "Vivek Sharma",
        role: "Automation Consultant",
        rating: 4.9,
        content:
          "The course's focus on practical automation with Power Automate was a career booster.",
        image: "/assets/testimonials/vivek-s.jpg",
      },
      {
        name: "Anita Reddy",
        role: "Business Process Analyst",
        rating: 4.8,
        content:
          "Learning OCR and database automation gave me an edge in process optimization.",
        image: "/assets/testimonials/anita-r.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need prior automation experience?",
        answer:
          "No, the course starts with basics and is suitable for beginners.",
      },
      {
        question: "What tools will I learn?",
        answer:
          "You'll master Microsoft Power Automate for workflows, email, Excel, PDF, and database automation.",
      },
    ],
    placementStats: {
      placementRate: "87%",
      averageSalary: "₹ 7 LPA",
      hiringPartners: ["Microsoft", "Deloitte", "EY", "TCS", "Infosys"],
    },
    badges: [
      "Microsoft Certified",
      "Intelligent Automation",
      "Workflow Mastery",
    ],
    instituteDetails: {
      description:
        "Refer Me Group has trained thousands in automation, with a focus on Microsoft Power Automate for business process optimization. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive Power Automate skills",
        "Hands-on with email, Excel, and PDF automation",
        "Intelligent automation with OCR",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        {
          feature: "Workflow Automation",
          details: "Master Power Automate workflows",
        },
        { feature: "Email & Excel", details: "Automate business processes" },
        {
          feature: "OCR Integration",
          details: "Intelligent document processing",
        },
        {
          feature: "Database Automation",
          details: "Connect and automate databases",
        },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        { content: "Affiliated with multiple Certification Boards" },
        { content: "10+ Years old Edu-Tech Institution" },
        { content: "Served/Serving 10+ Corporates" },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: [
      "Microsoft Power Automate",
      "Excel",
      "OCR",
      "Database Connectors",
    ],
  },
  {
    id: "agile-project-manager",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Agile Project Manager Content (1).pdf",
    category: "Project Management",
    title: "Agile Project Manager",
    shortDesc:
      "Comprehensive training in Agile and Scrum methodologies, equipping you with skills to manage projects effectively as an Agile Project Manager.",
    longDesc:
      "This Agile Project Manager course provides in-depth training in Agile and Scrum frameworks, covering Scrum life cycles, roles, and advanced topics like transformation and transition projects. Learn to manage distributed teams, implement Kanban, SAFe, and Lean methodologies, and master tools like Jira through hands-on case studies and mock interviews.",
    type: "Instructor-led Live Classes",
    duration: "8 Weeks (80 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "900+ Enrolled",
    price: "₹ 24,999",
    originalPrice: "₹ 34,999",
    discount: "29% OFF",
    gradient: "from-blue-600 to-indigo-600",
    bannerImage: "/assets/products/agile.jpg",
    videoPresentation: "/assets/bg-img/gif5.gif",
    instructors: [
      {
        name: "Rahul Desai",
        role: "Agile Coach",
        experience: "10 years",
        image: "/assets/instructors/rahul-desai.jpg",
        rating: 4.8,
        reviews: 380,
        bio: "Expert in Agile and Scrum methodologies with a focus on project management and team empowerment.",
        expertise: ["Agile", "Scrum", "Jira"],
        social: {
          linkedIn: "https://linkedin.com/in/rahuldesai-agile",
          twitter: "https://twitter.com/rahuldesai_agile",
        },
      },
      {
        name: "Shalini Gupta",
        role: "Scrum Master",
        experience: "7 years",
        image: "/assets/instructors/shalini-gupta.jpg",
        rating: 4.7,
        reviews: 320,
        bio: "Specializes in Kanban, SAFe, and distributed team management.",
        expertise: ["Kanban", "SAFe", "Team Building"],
        social: {
          linkedIn: "https://linkedin.com/in/shalini-gupta-sm",
          twitter: "https://twitter.com/shalini_gupta_sm",
        },
      },
    ],
    images: [
      "/assets/courses/agile-pm-1.jpg",
      "/assets/courses/agile-pm-2.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/agile-pm-preview1",
      "https://www.youtube.com/embed/agile-pm-preview2",
    ],
    features: [
      "Master Agile and Scrum methodologies",
      "Hands-on with Jira and case studies",
      "Learn Kanban, SAFe, and Lean frameworks",
      "Mock interviews and resume preparation",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Scrum Fundamentals",
        topics: [
          {
            title: "History and Basics of Scrum and Agile",
            duration: "3 Hours",
          },
          { title: "Agile Methodologies and Why Agile", duration: "3 Hours" },
          { title: "Scrum Life Cycle and Terminologies", duration: "4 Hours" },
          { title: "Sprints, Timebox, and Advantages", duration: "3 Hours" },
          {
            title: "Daily Scrum, User Stories, and Definition of Done",
            duration: "4 Hours",
          },
          { title: "Product and Sprint Backlog", duration: "3 Hours" },
          {
            title: "Sprint Planning, Review, and Retrospective",
            duration: "4 Hours",
          },
        ],
      },
      {
        module: "Scrum Roles and Teams",
        topics: [
          {
            title: "Product Owner Role and Responsibilities",
            duration: "3 Hours",
          },
          {
            title: "Scrum Master Role and Best Practices",
            duration: "3 Hours",
          },
          {
            title: "Building Scrum Teams and Empowerment",
            duration: "4 Hours",
          },
          { title: "Distributed Scrum Teams", duration: "3 Hours" },
        ],
      },
      {
        module: "Agile Frameworks and Closure",
        topics: [
          { title: "Kanban Framework", duration: "3 Hours" },
          { title: "SAFe Framework and Lean", duration: "3 Hours" },
          { title: "Extreme Programming Techniques", duration: "3 Hours" },
          {
            title: "Assumption, Change, Issue, and Risk Logs",
            duration: "3 Hours",
          },
          { title: "Project Closure and Lessons Learned", duration: "3 Hours" },
        ],
      },
      {
        module: "Advanced Topics",
        topics: [
          { title: "Role of Agile Project Manager", duration: "3 Hours" },
          { title: "Transition and Transformation Lead", duration: "3 Hours" },
          {
            title: "Case Studies: Transformation and Transition Projects",
            duration: "4 Hours",
          },
          {
            title: "Billing Methods: T&M and User Story Points",
            duration: "3 Hours",
          },
          { title: "Critical Path Analysis", duration: "3 Hours" },
        ],
      },
      {
        module: "Practical Training",
        topics: [
          { title: "Jira Tool Training", duration: "4 Hours" },
          { title: "Mock Interviews and Feedback", duration: "3 Hours" },
          {
            title: "Resume Preparation and Practice Sessions",
            duration: "3 Hours",
          },
        ],
      },
    ],
    projects: [
      {
        title: "Agile Transformation Project",
        description:
          "Lead an Agile transformation for a simulated project using Scrum and Jira",
        skills: ["Scrum", "Jira", "Project Management"],
      },
      {
        title: "Kanban Implementation",
        description:
          "Implement a Kanban board for a real-world project scenario",
        skills: ["Kanban", "Team Management"],
      },
    ],
    testimonials: [
      {
        name: "Karan Mehta",
        role: "Agile Project Manager",
        rating: 4.9,
        content:
          "The course's practical approach to Scrum and Jira transformed my career.",
        image: "/assets/testimonials/karan-m.jpg",
      },
      {
        name: "Pooja Singh",
        role: "Scrum Master",
        rating: 4.8,
        content:
          "The mock interviews and case studies prepared me for real-world challenges.",
        image: "/assets/testimonials/pooja-s.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need prior Agile experience?",
        answer:
          "No, the course covers Agile and Scrum from basics to advanced levels.",
      },
      {
        question: "What tools will I learn?",
        answer:
          "You'll master Jira and learn frameworks like Scrum, Kanban, and SAFe.",
      },
    ],
    placementStats: {
      placementRate: "88%",
      averageSalary: "₹ 10 LPA",
      hiringPartners: ["TCS", "Infosys", "Wipro", "Capgemini", "HCL"],
    },
    badges: ["Agile Certified", "Scrum Mastery", "Jira Expert"],
    instituteDetails: {
      description:
        "Refer Me Group has trained thousands in project management, with a focus on Agile methodologies. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive Agile and Scrum training",
        "Hands-on with Jira and case studies",
        "Mock interviews and job assistance",
        "Lifetime access to learning resources",
        "Premium networking opportunities",
      ],
      featuresTable: [
        {
          feature: "Scrum Fundamentals",
          details: "Master Agile and Scrum methodologies",
        },
        {
          feature: "Jira Tool",
          details: "Hands-on project management with Jira",
        },
        {
          feature: "Kanban and SAFe",
          details: "Learn advanced Agile frameworks",
        },
        {
          feature: "Transformation Projects",
          details: "Real-world case studies",
        },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        { content: "Affiliated with multiple Certification Boards" },
        { content: "10+ Years old Edu-Tech Institution" },
        { content: "Served/Serving 10+ Corporates" },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: ["Jira", "Scrum", "Kanban", "SAFe", "Lean"],
  },
  {
    id: "uipath",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_UiPath Content (1).pdf",
    category: "Robotic Process Automation",
    title: "UiPath RPA",
    shortDesc:
      "Comprehensive training in UiPath for robotic process automation, covering workflows, automation of web, email, Excel, and advanced features like Orchestrator.",
    longDesc:
      "This UiPath course equips you with skills to automate business processes using UiPath. Learn to create workflows for web, email, Excel, PDF, and database automation, along with advanced topics like Orchestrator and Re-Framework. Through hands-on projects, mock tests, and 35+ assignments, you'll master RPA best practices.",
    type: "Instructor-led Live Classes",
    duration: "7 Weeks (70 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "850+ Enrolled",
    price: "₹ 22,999",
    originalPrice: "₹ 32,999",
    discount: "30% OFF",
    gradient: "from-green-600 to-teal-600",
    bannerImage: "/assets/products/UI.png",
    videoPresentation: "/assets/bg-img/gif8.gif",
    instructors: [
      {
        name: "Sanjay Patel",
        role: "RPA Consultant",
        experience: "8 years",
        image: "/assets/instructors/sanjay-patel.jpg",
        rating: 4.8,
        reviews: 360,
        bio: "Expert in UiPath and robotic process automation with extensive project experience.",
        expertise: ["UiPath", "RPA", "Orchestrator"],
        social: {
          linkedIn: "https://linkedin.com/in/sanjaypatel-rpa",
          twitter: "https://twitter.com/sanjaypatel_rpa",
        },
      },
      {
        name: "Divya Rao",
        role: "Automation Engineer",
        experience: "6 years",
        image: "/assets/instructors/divya-rao.jpg",
        rating: 4.7,
        reviews: 300,
        bio: "Specializes in web and database automation using UiPath.",
        expertise: ["Web Automation", "Database Automation", "Re-Framework"],
        social: {
          linkedIn: "https://linkedin.com/in/divyarao-rpa",
          twitter: "https://twitter.com/divyarao_rpa",
        },
      },
    ],
    images: ["/assets/courses/uipath-1.jpg", "/assets/courses/uipath-2.jpg"],
    videos: [
      "https://www.youtube.com/embed/uipath-preview1",
      "https://www.youtube.com/embed/uipath-preview2",
    ],
    features: [
      "Master UiPath for RPA",
      "Automate web, email, and Excel processes",
      "Hands-on with Orchestrator and Re-Framework",
      "35+ assignments and 5 projects",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Introduction to RPA and UiPath",
        topics: [
          { title: "Introduction to RPA", duration: "2 Hours" },
          { title: "UiPath Intro and Installation", duration: "2 Hours" },
          { title: "Introduction to Variables", duration: "3 Hours" },
          { title: "Loops and Conditions", duration: "3 Hours" },
        ],
      },
      {
        module: "Core Automation",
        topics: [
          { title: "Word Automation", duration: "3 Hours" },
          { title: "PDF Automation", duration: "3 Hours" },
          { title: "Web Automation", duration: "4 Hours" },
          { title: "Selectors", duration: "3 Hours" },
          { title: "Window Automation", duration: "3 Hours" },
          { title: "Excel Automation", duration: "4 Hours" },
        ],
      },
      {
        module: "Advanced Automation",
        topics: [
          { title: "Application and File Automation", duration: "3 Hours" },
          { title: "Email Automation", duration: "3 Hours" },
          { title: "Database Automation", duration: "4 Hours" },
          { title: "Thin Client (Citrix) Automation", duration: "3 Hours" },
        ],
      },
      {
        module: "Flow Management",
        topics: [
          { title: "Debugging", duration: "3 Hours" },
          { title: "Exception Handling", duration: "3 Hours" },
          { title: "Recording and User Events", duration: "3 Hours" },
          { title: "Arguments and Data Manipulation", duration: "3 Hours" },
        ],
      },
      {
        module: "RPA Infrastructure",
        topics: [
          { title: "RPA Life Cycle", duration: "3 Hours" },
          { title: "Robots Introduction", duration: "3 Hours" },
          { title: "Orchestrator", duration: "4 Hours" },
          { title: "Re-Framework", duration: "4 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "RPA Workflow Automation",
        description:
          "Develop a UiPath workflow to automate email and Excel processes",
        skills: ["Email Automation", "Excel Automation", "UiPath"],
      },
      {
        title: "Database Automation Project",
        description:
          "Create an automation flow for database operations using UiPath",
        skills: ["Database Automation", "Selectors", "Re-Framework"],
      },
    ],
    testimonials: [
      {
        name: "Nikhil Sharma",
        role: "RPA Developer",
        rating: 4.9,
        content:
          "The hands-on projects and Orchestrator training were invaluable.",
        image: "/assets/testimonials/nikhil-s.jpg",
      },
      {
        name: "Meera Iyer",
        role: "Automation Analyst",
        rating: 4.8,
        content: "The 35+ assignments helped me master UiPath automation.",
        image: "/assets/testimonials/meera-i.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need prior RPA experience?",
        answer:
          "No, the course starts with RPA basics and progresses to advanced UiPath features.",
      },
      {
        question: "What will I learn?",
        answer:
          "You'll master UiPath for web, email, Excel, and database automation, plus Orchestrator and Re-Framework.",
      },
    ],
    placementStats: {
      placementRate: "86%",
      averageSalary: "₹ 8 LPA",
      hiringPartners: ["UiPath", "TCS", "Infosys", "Accenture", "Wipro"],
    },
    badges: ["RPA Certified", "UiPath Expert", "Orchestrator Mastery"],
    instituteDetails: {
      description:
        "Refer Me Group has trained thousands in automation, with a focus on RPA using UiPath. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive UiPath RPA training",
        "Hands-on with web, email, and Excel automation",
        "Orchestrator and Re-Framework expertise",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        {
          feature: "RPA Fundamentals",
          details: "Master UiPath and RPA concepts",
        },
        {
          feature: "Automation Workflows",
          details: "Automate web, email, and Excel",
        },
        { feature: "Orchestrator", details: "Manage RPA bots effectively" },
        {
          feature: "Projects & Assignments",
          details: "35+ assignments and 5 projects",
        },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        { content: "Affiliated with multiple Certification Boards" },
        { content: "10+ Years old Edu-Tech Institution" },
        { content: "Served/Serving 10+ Corporates" },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: [
      "UiPath",
      "Orchestrator",
      "Re-Framework",
      "Excel",
      "Database Connectors",
    ],
  },
  {
    id: "capital-market",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Capital Market Content (1).pdf",
    category: "Finance",
    title: "Capital Market",
    shortDesc:
      "Comprehensive training in financial markets, covering equity, derivatives, fixed income, mutual funds, forex, and trade life cycle.",
    longDesc:
      "This Capital Market course provides a deep dive into financial markets, including equity markets, derivatives, fixed income securities, mutual funds, and forex trading. Learn about IPOs, bonds, trade life cycles, and portfolio management through practical case studies and real-world scenarios.",
    type: "Instructor-led Live Classes",
    duration: "9 Weeks (90 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "950+ Enrolled",
    price: "₹ 26,999",
    originalPrice: "₹ 36,999",
    discount: "27% OFF",
    gradient: "from-yellow-600 to-orange-600",
    bannerImage: "/assets/products/capital-market.jpg",
    videoPresentation: "/assets/bg-img/gif2.gif",
    instructors: [
      {
        name: "Vikash Kumar",
        role: "Financial Analyst",
        experience: "10 years",
        image: "/assets/instructors/vikash-kumar.jpg",
        rating: 4.8,
        reviews: 400,
        bio: "Expert in capital markets and derivatives with extensive industry experience.",
        expertise: ["Derivatives", "Equity Markets", "Forex"],
        social: {
          linkedIn: "https://linkedin.com/in/vikashkumar-fin",
          twitter: "https://twitter.com/vikashkumar_fin",
        },
      },
      {
        name: "Nisha Aggarwal",
        role: "Investment Consultant",
        experience: "8 years",
        image: "/assets/instructors/nisha-aggarwal.jpg",
        rating: 4.7,
        reviews: 340,
        bio: "Specializes in fixed income securities and mutual funds.",
        expertise: ["Fixed Income", "Mutual Funds", "Portfolio Management"],
        social: {
          linkedIn: "https://linkedin.com/in/nisha-aggarwal-fin",
          twitter: "https://twitter.com/nisha_aggarwal_fin",
        },
      },
    ],
    images: ["/assets/courses/cm-1.jpg", "/assets/courses/cm-2.jpg"],
    videos: [
      "https://www.youtube.com/embed/cm-preview1",
      "https://www.youtube.com/embed/cm-preview2",
    ],
    features: [
      "Master financial markets",
      "Learn equity, derivatives, and forex",
      "Hands-on case studies",
      "Portfolio management skills",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Introduction to Financial Markets",
        topics: [
          { title: "What is a Financial Market?", duration: "3 Hours" },
          {
            title: "Need and Participants in Financial Markets",
            duration: "3 Hours",
          },
          { title: "Price Discovery and Risk Transfer", duration: "3 Hours" },
          { title: "Classification and Types of Markets", duration: "4 Hours" },
        ],
      },
      {
        module: "Equity Markets",
        topics: [
          { title: "IPO and FPO", duration: "3 Hours" },
          { title: "Book Building and Fixed Bid", duration: "3 Hours" },
          { title: "Index, Benchmark, and Order Types", duration: "4 Hours" },
          { title: "Primary vs Secondary Market", duration: "3 Hours" },
        ],
      },
      {
        module: "Derivatives Market",
        topics: [
          { title: "Basics and Types of Derivatives", duration: "4 Hours" },
          {
            title: "Futures, Forwards, Options, and Swaps",
            duration: "4 Hours",
          },
          { title: "Option Terminology and Participants", duration: "3 Hours" },
          { title: "Futures vs Forwards", duration: "3 Hours" },
        ],
      },
      {
        module: "Fixed Income Securities",
        topics: [
          {
            title: "Features and Characteristics of Bonds",
            duration: "3 Hours",
          },
          { title: "Types of Bonds and Fixed Income", duration: "3 Hours" },
          { title: "Bond Ratings, Yield, and Coupon", duration: "4 Hours" },
          { title: "Optionality in Bonds", duration: "3 Hours" },
        ],
      },
      {
        module: "Mutual Funds and Forex",
        topics: [
          { title: "Structure and Types of Mutual Funds", duration: "3 Hours" },
          { title: "NAV, AMC, and Entry/Exit Loads", duration: "3 Hours" },
          { title: "Forex Basics and Currency Pairs", duration: "4 Hours" },
          { title: "Advantages of Forex Trading", duration: "3 Hours" },
        ],
      },
      {
        module: "Trade Life Cycle and Case Studies",
        topics: [
          { title: "Front, Middle, and Back Office", duration: "3 Hours" },
          { title: "Case Study: Analyzing Quotes", duration: "4 Hours" },
          { title: "Portfolio Management", duration: "4 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "Portfolio Management Case Study",
        description:
          "Develop a portfolio management strategy based on market scenarios",
        skills: ["Portfolio Management", "Equity Markets", "Derivatives"],
      },
      {
        title: "Derivatives Trading Simulation",
        description: "Simulate trading in futures and options markets",
        skills: ["Derivatives", "Futures", "Options"],
      },
    ],
    testimonials: [
      {
        name: "Amitabh Roy",
        role: "Financial Analyst",
        rating: 4.9,
        content:
          "The course's case studies on derivatives and forex were highly practical.",
        image: "/assets/testimonials/amitabh-r.jpg",
      },
      {
        name: "Swati Jain",
        role: "Investment Banker",
        rating: 4.8,
        content:
          "Learning about bonds and mutual funds gave me a competitive edge.",
        image: "/assets/testimonials/swati-j.jpg",
      },
    ],
    faqs: [
      {
        question: "Is prior finance knowledge required?",
        answer:
          "No, the course starts with basics and progresses to advanced topics.",
      },
      {
        question: "What will I learn?",
        answer:
          "You'll master equity, derivatives, fixed income, mutual funds, forex, and trade life cycles.",
      },
    ],
    placementStats: {
      placementRate: "85%",
      averageSalary: "₹ 9 LPA",
      hiringPartners: [
        "HDFC Bank",
        "ICICI Bank",
        "Goldman Sachs",
        "JPMorgan",
        "SBI",
      ],
    },
    badges: [
      "Capital Market Expert",
      "Derivatives Specialist",
      "Portfolio Management",
    ],
    instituteDetails: {
      description:
        "Refer Me Group has trained thousands in finance, with a focus on capital markets. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive capital market training",
        "Hands-on with equity, derivatives, and forex",
        "Practical case studies",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        { feature: "Equity Markets", details: "Master IPOs and order types" },
        {
          feature: "Derivatives",
          details: "Learn futures, options, and swaps",
        },
        { feature: "Fixed Income", details: "Understand bonds and yields" },
        { feature: "Portfolio Management", details: "Real-world case studies" },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        { content: "Affiliated with multiple Certification Boards" },
        { content: "10+ Years old Edu-Tech Institution" },
        { content: "Served/Serving 10+ Corporates" },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: [
      "Financial Modeling",
      "Portfolio Management Tools",
      "Trading Platforms",
    ],
  },

  {
    id: "cloud-engineering-azure-devops",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Cloud Engineering Content_Azure DevOps (1).pdf",
    category: "Cloud Computing",
    title: "Cloud Engineering with Azure DevOps",
    shortDesc:
      "Comprehensive training in Microsoft Azure and DevOps, covering cloud infrastructure, virtual machines, networking, and CI/CD pipelines.",
    longDesc:
      "This Cloud Engineering with Azure DevOps course provides hands-on training in Microsoft Azure and DevOps practices. Learn to manage cloud infrastructure, virtual machines, networking, storage, and databases, while mastering CI/CD pipelines using tools like Terraform, Jenkins, and Kubernetes. Real-time use cases and projects prepare you for cloud engineering roles.",
    type: "Instructor-led Live Classes",
    duration: "12 Weeks (120 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "1,200+ Enrolled",
    price: "₹ 34,999",
    originalPrice: "₹ 44,999",
    discount: "22% OFF",
    gradient: "from-cyan-600 to-blue-600",
    bannerImage: "/assets/products/azure.jpg",
    videoPresentation: "/assets/bg-img/gif6.gif",
    instructors: [
      {
        name: "Kunal Sharma",
        role: "Cloud Architect",
        experience: "12 years",
        image: "/assets/instructors/kunal-sharma.jpg",
        rating: 4.9,
        reviews: 450,
        bio: "Expert in Azure cloud infrastructure and DevOps automation.",
        expertise: ["Azure", "DevOps", "Kubernetes"],
        social: {
          linkedIn: "https://linkedin.com/in/kunalsharma-cloud",
          twitter: "https://twitter.com/kunalsharma_cloud",
        },
      },
      {
        name: "Ritu Mehra",
        role: "DevOps Engineer",
        experience: "8 years",
        image: "/assets/instructors/ritu-mehra.jpg",
        rating: 4.8,
        reviews: 380,
        bio: "Specializes in CI/CD pipelines and Terraform automation.",
        expertise: ["Terraform", "Jenkins", "CI/CD"],
        social: {
          linkedIn: "https://linkedin.com/in/ritumehra-devops",
          twitter: "https://twitter.com/ritumehra_devops",
        },
      },
    ],
    images: [
      "/assets/courses/azure-devops-1.jpg",
      "/assets/courses/azure-devops-2.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/azure-devops-preview1",
      "https://www.youtube.com/embed/azure-devops-preview2",
    ],
    features: [
      "Master Azure cloud infrastructure",
      "Implement CI/CD pipelines",
      "Hands-on with Terraform, Jenkins, and Kubernetes",
      "Real-time use cases",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Introduction to Cloud and Azure",
        topics: [
          { title: "Cloud Computing Basics", duration: "3 Hours" },
          { title: "Introduction to Microsoft Azure", duration: "3 Hours" },
          {
            title: "Azure Account and Subscription Setup",
            duration: "3 Hours",
          },
          { title: "Azure Infrastructure Overview", duration: "3 Hours" },
        ],
      },
      {
        module: "Azure Identity and Virtual Machines",
        topics: [
          { title: "Azure Identity Access Management", duration: "4 Hours" },
          { title: "Creation of Virtual Machines", duration: "4 Hours" },
          { title: "Azure VM Disks and Snapshots", duration: "3 Hours" },
          { title: "Configuring VM Network Settings", duration: "3 Hours" },
        ],
      },
      {
        module: "Azure Networking and Storage",
        topics: [
          { title: "Azure Virtual Networking", duration: "4 Hours" },
          { title: "Subnets and Network Security Groups", duration: "3 Hours" },
          { title: "Azure Storage Accounts", duration: "4 Hours" },
          {
            title: "Blob, File, Table, and Queue Storage",
            duration: "3 Hours",
          },
        ],
      },
      {
        module: "Azure Load Balancers and Scaling",
        topics: [
          { title: "Azure Load Balancers Setup", duration: "4 Hours" },
          { title: "Azure VM Scale Sets", duration: "3 Hours" },
          { title: "Auto Scaling Implementation", duration: "3 Hours" },
        ],
      },
      {
        module: "Azure Monitoring, DNS, and Databases",
        topics: [
          { title: "Azure Monitoring and Alerts", duration: "3 Hours" },
          { title: "Azure DNS Setup", duration: "3 Hours" },
          { title: "Azure SQL and Cosmos DB", duration: "4 Hours" },
        ],
      },
      {
        module: "Azure App Services and Active Directory",
        topics: [
          { title: "Azure App Services for PaaS", duration: "3 Hours" },
          { title: "Azure Active Directory Setup", duration: "3 Hours" },
          { title: "Azure AD Connect", duration: "3 Hours" },
        ],
      },
      {
        module: "Azure Backup and DevOps Introduction",
        topics: [
          { title: "Azure Backup and Recovery", duration: "3 Hours" },
          { title: "Introduction to Azure DevOps", duration: "3 Hours" },
          { title: "Python Basics for DevOps", duration: "4 Hours" },
          { title: "Linux Basics for DevOps", duration: "3 Hours" },
        ],
      },
      {
        module: "Azure DevOps Tools",
        topics: [
          { title: "Azure PowerShell", duration: "3 Hours" },
          { title: "Azure ARM Templates", duration: "4 Hours" },
          { title: "Azure Terraform", duration: "4 Hours" },
          { title: "Azure Kubernetes Service", duration: "4 Hours" },
        ],
      },
      {
        module: "Advanced DevOps",
        topics: [
          { title: "Azure Jenkins for CI/CD", duration: "4 Hours" },
          { title: "Azure Functions", duration: "3 Hours" },
          { title: "Azure Ansible", duration: "3 Hours" },
          { title: "Azure CLI", duration: "3 Hours" },
          { title: "Azure Docker", duration: "3 Hours" },
        ],
      },
      {
        module: "Real-Time Use Cases",
        topics: [
          { title: "CI/CD Pipeline with Azure DevOps", duration: "4 Hours" },
          {
            title: "Container CI/CD with Jenkins and Kubernetes",
            duration: "4 Hours",
          },
          {
            title: "Immutable Infrastructure with Terraform",
            duration: "4 Hours",
          },
          { title: "Java/Python CI/CD with Jenkins", duration: "4 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "CI/CD Pipeline Implementation",
        description:
          "Design and implement a CI/CD pipeline using Azure DevOps and Jenkins",
        skills: ["Azure DevOps", "Jenkins", "CI/CD"],
      },
      {
        title: "Kubernetes Deployment",
        description: "Deploy a web application on Azure Kubernetes Service",
        skills: ["Kubernetes", "Azure", "Docker"],
      },
    ],
    testimonials: [
      {
        name: "Ravi Kumar",
        role: "Cloud Engineer",
        rating: 4.9,
        content:
          "The real-time use cases and Terraform training were exceptional.",
        image: "/assets/testimonials/ravi-k.jpg",
      },
      {
        name: "Anjali Patel",
        role: "DevOps Engineer",
        rating: 4.8,
        content:
          "Learning Kubernetes and CI/CD pipelines prepared me for my dream job.",
        image: "/assets/testimonials/anjali-p.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need prior cloud experience?",
        answer:
          "No, the course covers cloud computing and Azure from basics to advanced levels.",
      },
      {
        question: "What tools will I learn?",
        answer:
          "You'll master Azure, Terraform, Jenkins, Kubernetes, Docker, and more.",
      },
    ],
    placementStats: {
      placementRate: "90%",
      averageSalary: "₹ 12 LPA",
      hiringPartners: ["Microsoft", "Amazon", "Google", "TCS", "Infosys"],
    },
    badges: ["Azure Certified", "DevOps Expert", "Kubernetes Specialist"],
    instituteDetails: {
      description:
        "Refer Me Group has trained thousands in cloud computing, with a focus on Azure and DevOps. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive Azure and DevOps training",
        "Hands-on with CI/CD and Kubernetes",
        "Real-time use cases",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        {
          feature: "Azure Infrastructure",
          details: "Master VMs, networking, and storage",
        },
        {
          feature: "CI/CD Pipelines",
          details: "Implement with Jenkins and Azure DevOps",
        },
        { feature: "Kubernetes", details: "Deploy and scale applications" },
        { feature: "Terraform", details: "Automate infrastructure" },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        { content: "Affiliated with multiple Certification Boards" },
        { content: "10+ Years old Edu-Tech Institution" },
        { content: "Served/Serving 10+ Corporates" },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: [
      "Azure",
      "Terraform",
      "Jenkins",
      "Kubernetes",
      "Docker",
      "Azure CLI",
      "PowerShell",
      "Ansible",
    ],
  },

  {
    id: "api-automation-ai",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/API Automation Course Content Using AI (1).docx",
    category: "Test Automation",
    title: "API Automation with AI Integration",
    shortDesc:
      "Master API automation using REST Assured with AI-powered features like intelligent test case generation and self-healing scripts.",
    longDesc:
      "This course provides comprehensive training in API automation using REST Assured, enhanced with AI capabilities. Learn to automate GET, POST, PUT, PATCH, and DELETE requests, create robust JSON payloads, and integrate AI for intelligent test case generation, self-healing locators, and optimized assertions. Hands-on projects and AI-driven tools ensure you build maintainable automation frameworks.",
    type: "Instructor-led Live Classes",
    duration: "10 Weeks (100 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "800+ Enrolled",
    price: "₹ 27,999",
    originalPrice: "₹ 37,999",
    discount: "26% OFF",
    gradient: "from-purple-600 to-pink-600",
    bannerImage: "/assets/products/api-integration.jpg",
    videoPresentation: "/assets/bg-img/gif7.gif",
    instructors: [
      {
        name: "Arjun Kapoor",
        role: "Automation Architect",
        experience: "9 years",
        image: "/assets/instructors/arjun-kapoor.jpg",
        rating: 4.8,
        reviews: 390,
        bio: "Expert in API automation and AI-driven testing frameworks.",
        expertise: ["REST Assured", "AI Testing", "Jackson API"],
        social: {
          linkedIn: "https://linkedin.com/in/arjunkapoor-automation",
          twitter: "https://twitter.com/arjunkapoor_auto",
        },
      },
      {
        name: "Neha Sharma",
        role: "Test Automation Engineer",
        experience: "6 years",
        image: "/assets/instructors/neha-sharma.jpg",
        rating: 4.7,
        reviews: 330,
        bio: "Specializes in JSON schema validation and AI-enhanced test scripts.",
        expertise: ["JSON Schema", "BDD Testing", "AI Tools"],
        social: {
          linkedIn: "https://linkedin.com/in/nehasharma-test",
          twitter: "https://twitter.com/nehasharma_test",
        },
      },
    ],
    images: [
      "/assets/courses/api-automation-ai-1.jpg",
      "/assets/courses/api-automation-ai-2.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/api-automation-ai-preview1",
      "https://www.youtube.com/embed/api-automation-ai-preview2",
    ],
    features: [
      "Master REST Assured for API automation",
      "AI-driven test case generation",
      "Hands-on with JSON, Jackson, and Gson",
      "BDD-style testing with Gherkin",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Introduction to API Automation and AI",
        topics: [
          {
            title: "Introduction to REST Assured and AI Testing",
            duration: "3 Hours",
          },
          {
            title: "Setup REST Assured Maven Project with AI Tools",
            duration: "3 Hours",
          },
          {
            title: "Static Imports and AI-Assisted Best Practices",
            duration: "2 Hours",
          },
        ],
      },
      {
        module: "Basic API Testing",
        topics: [
          {
            title: "Writing First GET Request with AI Assertions",
            duration: "3 Hours",
          },
          {
            title: "Abstraction and AI-Driven Refactoring",
            duration: "3 Hours",
          },
          { title: "Interfaces and AI Design Patterns", duration: "3 Hours" },
          {
            title: "Builder Pattern with AI Parameter Suggestions",
            duration: "3 Hours",
          },
          {
            title: "BDD Style Testing with AI-Guided Gherkin",
            duration: "4 Hours",
          },
        ],
      },
      {
        module: "Advanced API Requests",
        topics: [
          {
            title: "POST Request with AI Payload Generation",
            duration: "3 Hours",
          },
          { title: "PUT Request with AI Data Updates", duration: "3 Hours" },
          {
            title: "PATCH Request with AI Field Suggestions",
            duration: "3 Hours",
          },
          { title: "DELETE Request with AI Validation", duration: "3 Hours" },
        ],
      },
      {
        module: "JSON Handling and Specifications",
        topics: [
          {
            title: "Writing API Response to JSON File with AI Formatting",
            duration: "3 Hours",
          },
          {
            title: "RequestSpecification with AI Headers",
            duration: "3 Hours",
          },
          {
            title: "Multiple HTTP Methods with AI Syntax",
            duration: "3 Hours",
          },
          {
            title: "RequestSpecBuilder with AI Configurations",
            duration: "3 Hours",
          },
          {
            title: "Default RequestSpecification with AI Defaults",
            duration: "3 Hours",
          },
        ],
      },
      {
        module: "Advanced JSON and Serialization",
        topics: [
          {
            title: "JSON Object and Array with AI Mapping",
            duration: "4 Hours",
          },
          {
            title: "Jackson API for JSON Objects and Arrays",
            duration: "4 Hours",
          },
          { title: "POJO Classes with AI Field Mapping", duration: "4 Hours" },
          {
            title: "Serialization and Deserialization with Jackson and Gson",
            duration: "4 Hours",
          },
          {
            title: "JSON Annotations with AI Field Exclusion",
            duration: "3 Hours",
          },
        ],
      },
      {
        module: "JSON Schema and JsonPath",
        topics: [
          {
            title: "JSON Schema Validation with AI Tests",
            duration: "3 Hours",
          },
          {
            title: "JsonPath for Simple and Nested Structures",
            duration: "4 Hours",
          },
          {
            title: "Deserialize Using JsonPath with AI Extraction",
            duration: "3 Hours",
          },
        ],
      },
      {
        module: "Framework Enhancements",
        topics: [
          {
            title: "Headers and Content-Type with AI Configurations",
            duration: "3 Hours",
          },
          {
            title: "ResponseSpecification with AI Templates",
            duration: "3 Hours",
          },
          {
            title: "TestNG Data Passing with AI Strategies",
            duration: "3 Hours",
          },
          {
            title: "JSON Comparison with Jackson and JSONassert",
            duration: "4 Hours",
          },
        ],
      },
    ],
    projects: [
      {
        title: "API Automation Framework",
        description:
          "Build an API automation framework with REST Assured and AI-driven test generation",
        skills: ["REST Assured", "AI Testing", "JSON Schema"],
      },
      {
        title: "BDD Test Suite",
        description:
          "Create a BDD-style test suite with AI-generated Gherkin scenarios",
        skills: ["BDD", "Gherkin", "REST Assured"],
      },
    ],
    testimonials: [
      {
        name: "Vikram Singh",
        role: "Test Automation Engineer",
        rating: 4.9,
        content:
          "The AI-driven test generation and JSON handling were game-changers.",
        image: "/assets/testimonials/vikram-s.jpg",
      },
      {
        name: "Priya Menon",
        role: "QA Analyst",
        rating: 4.8,
        content: "The course made complex API automation simple with AI tools.",
        image: "/assets/testimonials/priya-m.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need prior API testing experience?",
        answer:
          "No, the course covers REST Assured and AI integration from basics.",
      },
      {
        question: "What AI tools will I learn?",
        answer:
          "You'll explore AI for test case generation, payload creation, and schema validation.",
      },
    ],
    placementStats: {
      placementRate: "87%",
      averageSalary: "₹ 9 LPA",
      hiringPartners: ["Cognizant", "Accenture", "TCS", "Infosys", "Capgemini"],
    },
    badges: [
      "API Automation Expert",
      "AI Testing Specialist",
      "REST Assured Certified",
    ],
    instituteDetails: {
      description:
        "Refer Me Group has trained thousands in test automation, with a focus on AI-driven frameworks. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive API automation training",
        "AI-driven test case generation",
        "Hands-on with REST Assured and JSON",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        { feature: "REST Assured", details: "Master API automation" },
        { feature: "AI Integration", details: "Intelligent test generation" },
        { feature: "JSON Handling", details: "Advanced payload management" },
        { feature: "BDD Testing", details: "Gherkin-based scenarios" },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        { content: "Affiliated with multiple Certification Boards" },
        { content: "10+ Years old Edu-Tech Institution" },
        { content: "Served/Serving 10+ Corporates" },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: [
      "REST Assured",
      "Jackson API",
      "Gson API",
      "JSONassert",
      "JsonPath",
      "Maven",
      "TestNG",
    ],
  },
  {
    id: "core-java",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Core_Java_CourseContent (1).docx",
    category: "Programming",
    title: "Core Java",
    shortDesc:
      "Learn the fundamentals of Java programming, including OOP concepts, exception handling, and collections.",
    longDesc:
      "This Core Java course covers essential programming concepts, including operators, loops, data types, classes, objects, and OOP principles like inheritance, polymorphism, and encapsulation. Master advanced topics like exception handling, collections, file handling, and regular expressions through practical exercises and real-world examples.",
    type: "Instructor-led Live Classes",
    duration: "8 Weeks (80 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "1,000+ Enrolled",
    price: "₹ 19,999",
    originalPrice: "₹ 29,999",
    discount: "33% OFF",
    gradient: "from-orange-600 to-red-600",
    bannerImage: "/assets/products/java.jpg",
    videoPresentation: "/assets/bg-img/gif8.gif",
    instructors: [
      {
        name: "Sameer Khan",
        role: "Java Developer",
        experience: "10 years",
        image: "/assets/instructors/sameer-khan.jpg",
        rating: 4.8,
        reviews: 420,
        bio: "Expert in Java programming and enterprise applications.",
        expertise: ["Java", "OOP", "Collections"],
        social: {
          linkedIn: "https://linkedin.com/in/sameerkhan-java",
          twitter: "https://twitter.com/sameerkhan_java",
        },
      },
      {
        name: "Anita Desai",
        role: "Software Engineer",
        experience: "7 years",
        image: "/assets/instructors/anita-desai.jpg",
        rating: 4.7,
        reviews: 350,
        bio: "Specializes in Java collections and exception handling.",
        expertise: ["Exception Handling", "File Handling", "Generics"],
        social: {
          linkedIn: "https://linkedin.com/in/anitadesai-java",
          twitter: "https://twitter.com/anitadesai_java",
        },
      },
    ],
    images: [
      "/assets/courses/core-java-1.jpg",
      "/assets/courses/core-java-2.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/core-java-preview1",
      "https://www.youtube.com/embed/core-java-preview2",
    ],
    features: [
      "Master Java fundamentals",
      "Learn OOP concepts",
      "Hands-on with collections and file handling",
      "Build real-world projects",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Java Basics",
        topics: [
          {
            title: "Operators: Arithmetic, Logical, Conditional",
            duration: "4 Hours",
          },
          { title: "Statements: if, if-else, Switch", duration: "3 Hours" },
          {
            title: "Loops: For, While, Do-While, For-Each",
            duration: "4 Hours",
          },
          { title: "Data Types and Variables", duration: "3 Hours" },
        ],
      },
      {
        module: "Object-Oriented Programming",
        topics: [
          { title: "Classes and Objects", duration: "4 Hours" },
          { title: "Methods and Constructors", duration: "4 Hours" },
          { title: "This and Super Keywords", duration: "3 Hours" },
          { title: "Inheritance and Aggregation", duration: "4 Hours" },
          { title: "Polymorphism and Encapsulation", duration: "4 Hours" },
        ],
      },
      {
        module: "Advanced Java Concepts",
        topics: [
          { title: "Access Modifiers and Packages", duration: "3 Hours" },
          { title: "Abstraction and Interfaces", duration: "4 Hours" },
          {
            title: "Final Keyword and Exception Handling",
            duration: "4 Hours",
          },
          { title: "Strings and Regular Expressions", duration: "3 Hours" },
        ],
      },
      {
        module: "Collections and File Handling",
        topics: [
          { title: "Arrays and Collections Framework", duration: "4 Hours" },
          { title: "File Handling", duration: "3 Hours" },
          { title: "Wrapper Classes and Type Casting", duration: "3 Hours" },
        ],
      },
      {
        module: "Design Patterns and Advanced Topics",
        topics: [
          { title: "Singleton Pattern", duration: "3 Hours" },
          { title: "Generics and Enumeration", duration: "3 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "Library Management System",
        description:
          "Build a Java-based library management system using OOP concepts",
        skills: ["OOP", "Collections", "File Handling"],
      },
      {
        title: "Employee Database",
        description:
          "Create a database application with exception handling and collections",
        skills: ["Exception Handling", "Collections", "Java"],
      },
    ],
    testimonials: [
      {
        name: "Rahul Gupta",
        role: "Java Developer",
        rating: 4.9,
        content: "The OOP and collections modules were incredibly practical.",
        image: "/assets/testimonials/rahul-g.jpg",
      },
      {
        name: "Sneha Patel",
        role: "Software Developer",
        rating: 4.8,
        content: "The hands-on projects prepared me for real-world coding.",
        image: "/assets/testimonials/sneha-p.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need prior programming experience?",
        answer:
          "No, the course starts with Java basics and progresses to advanced topics.",
      },
      {
        question: "What will I learn?",
        answer:
          "You'll master Java fundamentals, OOP, collections, and file handling.",
      },
    ],
    placementStats: {
      placementRate: "85%",
      averageSalary: "₹ 7 LPA",
      hiringPartners: ["TCS", "Infosys", "Wipro", "HCL", "Cognizant"],
    },
    badges: ["Java Certified", "OOP Specialist", "Collections Expert"],
    instituteDetails: {
      description:
        "Refer Me Group has trained thousands in programming, with a focus on Java. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive Java training",
        "Hands-on OOP and collections",
        "Practical projects",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        { feature: "Java Basics", details: "Master operators and loops" },
        {
          feature: "OOP Concepts",
          details: "Learn inheritance and polymorphism",
        },
        { feature: "Collections", details: "Handle arrays and lists" },
        { feature: "Projects", details: "Real-world applications" },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        { content: "Affiliated with multiple Certification Boards" },
        { content: "10+ Years old Edu-Tech Institution" },
        { content: "Served/Serving 10+ Corporates" },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: ["Java", "Eclipse", "Maven"],
  },
  {
    id: "cypress-typescript-ai",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Cypress Course Content with TypeScript and AI-Driven Framework (1).docx",
    category: "Test Automation",
    title: "Cypress with TypeScript and AI-Driven Framework",
    shortDesc:
      "Learn end-to-end testing with Cypress and TypeScript, enhanced by AI-driven frameworks for self-healing tests and visual validation.",
    longDesc:
      "This course covers Cypress and TypeScript for robust end-to-end testing, integrated with AI-driven frameworks. Master test writing, page object models, API testing, and advanced AI features like self-healing tests, visual testing, and predictive test prioritization. Build scalable frameworks with CI/CD integration and real-world projects.",
    type: "Instructor-led Live Classes",
    duration: "9 Weeks (90 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "850+ Enrolled",
    price: "₹ 28,999",
    originalPrice: "₹ 38,999",
    discount: "26% OFF",
    gradient: "from-teal-600 to-cyan-600",
    bannerImage: "/assets/products/cypress.jpg",
    videoPresentation: "/assets/bg-img/gif5.gif",
    instructors: [
      {
        name: "Rohit Verma",
        role: "Test Automation Lead",
        experience: "10 years",
        image: "/assets/instructors/rohit-verma.jpg",
        rating: 4.8,
        reviews: 400,
        bio: "Expert in Cypress and AI-driven test automation frameworks.",
        expertise: ["Cypress", "TypeScript", "AI Testing"],
        social: {
          linkedIn: "https://linkedin.com/in/rohitverma-test",
          twitter: "https://twitter.com/rohitverma_test",
        },
      },
      {
        name: "Shalini Nair",
        role: "QA Engineer",
        experience: "7 years",
        image: "/assets/instructors/shalini-nair.jpg",
        rating: 4.7,
        reviews: 340,
        bio: "Specializes in TypeScript and visual testing with AI.",
        expertise: ["TypeScript", "Visual Testing", "CI/CD"],
        social: {
          linkedIn: "https://linkedin.com/in/shalininair-qa",
          twitter: "https://twitter.com/shalininair_qa",
        },
      },
    ],
    images: [
      "/assets/courses/cypress-typescript-ai-1.jpg",
      "/assets/courses/cypress-typescript-ai-2.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/cypress-typescript-ai-preview1",
      "https://www.youtube.com/embed/cypress-typescript-ai-preview2",
    ],
    features: [
      "Master Cypress with TypeScript",
      "AI-driven self-healing tests",
      "Visual testing with AI",
      "CI/CD integration",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Introduction to Cypress and TypeScript",
        topics: [
          {
            title: "Introduction to Cypress and TypeScript",
            duration: "3 Hours",
          },
          {
            title: "TypeScript Basics: Types, Interfaces, Classes",
            duration: "3 Hours",
          },
          {
            title: "Cypress Project Setup with AI Optimization",
            duration: "3 Hours",
          },
        ],
      },
      {
        module: "Cypress Fundamentals",
        topics: [
          { title: "Writing First Test with TypeScript", duration: "3 Hours" },
          { title: "Cypress Commands and Selectors", duration: "3 Hours" },
          { title: "AI-Powered Selector Generation", duration: "3 Hours" },
          {
            title: "Assertions and Custom Assertions with AI",
            duration: "3 Hours",
          },
          {
            title: "Handling Asynchronous Behavior with AI Waits",
            duration: "3 Hours",
          },
          { title: "Debugging with AI-Assisted Tools", duration: "3 Hours" },
        ],
      },
      {
        module: "Advanced Cypress Testing",
        topics: [
          {
            title: "Page Object Model with AI Generation",
            duration: "4 Hours",
          },
          { title: "Data and Fixtures with AI Test Data", duration: "3 Hours" },
          { title: "API Testing with AI Strategies", duration: "3 Hours" },
          { title: "Handling Dynamic Elements with AI", duration: "3 Hours" },
          { title: "Cross-Browser Testing with AI Tools", duration: "3 Hours" },
        ],
      },
      {
        module: "AI-Driven Framework Creation",
        topics: [
          { title: "Framework Design Principles with AI", duration: "3 Hours" },
          { title: "AI Tools for Framework Generation", duration: "3 Hours" },
          {
            title: "Core Framework Components with AI Code",
            duration: "3 Hours",
          },
          { title: "AI-Powered Reporting and Logging", duration: "3 Hours" },
          {
            title: "CI/CD Integration with AI Optimization",
            duration: "3 Hours",
          },
        ],
      },
      {
        module: "Advanced AI Integration",
        topics: [
          { title: "Self-Healing Tests with AI", duration: "3 Hours" },
          {
            title: "Visual Testing with AI Screenshot Analysis",
            duration: "3 Hours",
          },
          { title: "AI-Driven Test Prioritization", duration: "3 Hours" },
          { title: "Predictive Testing with AI", duration: "3 Hours" },
          { title: "AI-Powered Test Data Management", duration: "3 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "E2E Testing Framework",
        description:
          "Build a Cypress framework with TypeScript and AI-driven self-healing tests",
        skills: ["Cypress", "TypeScript", "AI Testing"],
      },
      {
        title: "Visual Testing Suite",
        description:
          "Create a visual testing suite with AI-powered screenshot validation",
        skills: ["Visual Testing", "Cypress", "AI"],
      },
    ],
    testimonials: [
      {
        name: "Kiran Rao",
        role: "QA Lead",
        rating: 4.9,
        content:
          "The AI-driven framework and visual testing were standout features.",
        image: "/assets/testimonials/kiran-r.jpg",
      },
      {
        name: "Aarti Sharma",
        role: "Test Engineer",
        rating: 4.8,
        content: "Learning TypeScript with Cypress was seamless and practical.",
        image: "/assets/testimonials/aarti-s.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need prior testing experience?",
        answer: "No, the course covers Cypress and TypeScript from basics.",
      },
      {
        question: "What AI features will I learn?",
        answer:
          "You'll explore self-healing tests, visual testing, and test prioritization with AI.",
      },
    ],
    placementStats: {
      placementRate: "88%",
      averageSalary: "₹ 10 LPA",
      hiringPartners: ["Accenture", "Cognizant", "TCS", "Infosys", "Wipro"],
    },
    badges: ["Cypress Certified", "AI Testing Expert", "TypeScript Specialist"],
    instituteDetails: {
      description:
        "Refer Me Group has trained thousands in test automation, with a focus on AI-driven frameworks. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive Cypress and TypeScript training",
        "AI-driven testing frameworks",
        "Hands-on visual and API testing",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        { feature: "Cypress Basics", details: "Master end-to-end testing" },
        { feature: "TypeScript", details: "Robust test scripting" },
        { feature: "AI Features", details: "Self-healing and visual testing" },
        { feature: "CI/CD", details: "Integrate with pipelines" },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        { content: "Affiliated with multiple Certification Boards" },
        { content: "10+ Years old Edu-Tech Institution" },
        { content: "Served/Serving 10+ Corporates" },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: ["Cypress", "TypeScript", "Mocha", "Chai", "Jenkins", "Git"],
  },
  {
    id: "selenium-ai",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Selenium Course Content Using AI (1).docx",
    category: "Test Automation",
    title: "Selenium with AI Integration",
    shortDesc:
      "Master Selenium 4 with AI-driven automation, featuring self-healing locators, intelligent synchronization, and visual validation.",
    longDesc:
      "This course combines Selenium 4 with AI technologies to create intelligent automation frameworks. Learn to handle web elements with AI-powered locators, implement self-healing synchronization, and perform visual testing. Master TestNG, Cucumber, and AI-enhanced frameworks with CI/CD integration through hands-on projects.",
    type: "Instructor-led Live Classes",
    duration: "11 Weeks (110 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "900+ Enrolled",
    price: "₹ 29,999",
    originalPrice: "₹ 39,999",
    discount: "25% OFF",
    gradient: "from-blue-600 to-purple-600",
    bannerImage: "/assets/products/selenium.jpg",
    videoPresentation: "/assets/bg-img/gif3.gif",
    instructors: [
      {
        name: "Manish Patel",
        role: "Automation Consultant",
        experience: "11 years",
        image: "/assets/instructors/manish-patel.jpg",
        rating: 4.9,
        reviews: 430,
        bio: "Expert in Selenium and AI-driven test automation.",
        expertise: ["Selenium", "AI Testing", "TestNG"],
        social: {
          linkedIn: "https://linkedin.com/in/manishpatel-auto",
          twitter: "https://twitter.com/manishpatel_auto",
        },
      },
      {
        name: "Deepa Rao",
        role: "QA Architect",
        experience: "8 years",
        image: "/assets/instructors/deepa-rao.jpg",
        rating: "4.8",
        reviews: 360,
        bio: "Specializes in Cucumber and AI-powered frameworks.",
        expertise: ["Cucumber", "AI Locators", "CI/CD"],
        social: {
          linkedIn: "https://linkedin.com/in/deeparao-qa",
          twitter: "https://twitter.com/deeparao_qa",
        },
      },
    ],
    images: [
      "/assets/courses/selenium-ai-1.jpg",
      "/assets/courses/selenium-ai-2.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/selenium-ai-preview1",
      "https://www.youtube.com/embed/selenium-ai-preview2",
    ],
    features: [
      "Master Selenium 4 with AI",
      "Self-healing locators and synchronization",
      "AI-driven visual validation",
      "Cucumber and TestNG frameworks",
      "Certificate of completion",
      "Job assistance program",
      "Lifetime access to resources",
      "Premium networking groups",
    ],
    curriculum: [
      {
        module: "Introduction to Intelligent Automation",
        topics: [
          {
            title: "Introduction to Intelligent Automation",
            duration: "3 Hours",
          },
          {
            title: "AI-Powered Automation Testing Benefits",
            duration: "3 Hours",
          },
          { title: "Selenium 4 and AI Integration", duration: "3 Hours" },
        ],
      },
      {
        module: "Selenium WebDriver with AI",
        topics: [
          { title: "Intelligent WebDriver Architecture", duration: "3 Hours" },
          { title: "AI-Enhanced WebDriver Workflow", duration: "3 Hours" },
          { title: "Smart Locators with AI", duration: "4 Hours" },
          { title: "AI-Powered XPath and CSS Selectors", duration: "4 Hours" },
        ],
      },
      {
        module: "Self-Healing Synchronization",
        topics: [
          { title: "Implicit Wait with AI Monitoring", duration: "3 Hours" },
          {
            title: "Explicit Wait with Intelligent Conditions",
            duration: "3 Hours",
          },
          { title: "Fluent Wait with Adaptive Polling", duration: "3 Hours" },
        ],
      },
      {
        module: "Intelligent Web Elements",
        topics: [
          { title: "Smart UI Elements with AI", duration: "4 Hours" },
          { title: "AI-Driven Window and Frame Handling", duration: "3 Hours" },
          { title: "Intelligent Alert and Date Picker", duration: "3 Hours" },
          { title: "AI-Assisted Scrolling and Drag-Drop", duration: "3 Hours" },
          { title: "Visual Validation with AI", duration: "3 Hours" },
        ],
      },
      {
        module: "Intelligent Data Handling",
        topics: [
          { title: "Excel Reading with AI Validation", duration: "3 Hours" },
          { title: "JSON Reading with Semantic Analysis", duration: "3 Hours" },
          { title: "Property File Reading with AI", duration: "3 Hours" },
        ],
      },
      {
        module: "TestNG with AI Integration",
        topics: [
          { title: "Intelligent TestNG Overview", duration: "3 Hours" },
          {
            title: "AI-Driven Test Sequencing and Grouping",
            duration: "3 Hours",
          },
          { title: "Adaptive Parallel Testing with AI", duration: "3 Hours" },
          { title: "AI-Powered Parameterization", duration: "3 Hours" },
        ],
      },
      {
        module: "AI-Enhanced Frameworks",
        topics: [
          { title: "Intelligent Automation Frameworks", duration: "3 Hours" },
          { title: "Cucumber with AI-Augmented Features", duration: "4 Hours" },
          { title: "Maven and Jenkins with AI Plugins", duration: "3 Hours" },
          { title: "Git with AI-Assisted Code Review", duration: "3 Hours" },
          { title: "AI-Powered Reporting and CI/CD", duration: "3 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "AI-Driven Automation Framework",
        description:
          "Build a Selenium framework with AI-powered locators and self-healing tests",
        skills: ["Selenium", "AI Testing", "TestNG"],
      },
      {
        title: "Cucumber Test Suite",
        description:
          "Create a Cucumber-based test suite with AI-generated scenarios",
        skills: ["Cucumber", "Selenium", "AI"],
      },
    ],
    testimonials: [
      {
        name: "Suresh Kumar",
        role: "Automation Engineer",
        rating: 4.9,
        content: "The AI locators and visual testing modules were exceptional.",
        image: "/assets/testimonials/suresh-k.jpg",
      },
      {
        name: "Lakshmi Nair",
        role: "QA Lead",
        rating: 4.8,
        content: "The course transformed my approach to automation with AI.",
        image: "/assets/testimonials/lakshmi-n.jpg",
      },
    ],
    faqs: [
      {
        question: "Do I need prior Selenium experience?",
        answer:
          "No, the course covers Selenium and AI integration from basics.",
      },
      {
        question: "What AI features will I learn?",
        answer:
          "You'll master self-healing locators, visual validation, and intelligent synchronization.",
      },
    ],
    placementStats: {
      placementRate: "89%",
      averageSalary: "₹ 11 LPA",
      hiringPartners: ["TCS", "Infosys", "Accenture", "Cognizant", "Wipro"],
    },
    badges: [
      "Selenium Certified",
      "AI Automation Expert",
      "Cucumber Specialist",
    ],
    instituteDetails: {
      description:
        "Refer Me Group has trained thousands in test automation, with a focus on AI-driven frameworks. Our 10+ years of experience ensures quality education at affordable fees.",
      keyOfferings: [
        "Comprehensive Selenium and AI training",
        "Self-healing and visual testing",
        "Hands-on with Cucumber and TestNG",
        "Placement assistance with top firms",
        "Lifetime access to learning resources",
      ],
      featuresTable: [
        { feature: "Selenium 4", details: "Master web automation" },
        {
          feature: "AI Locators",
          details: "Self-healing element identification",
        },
        { feature: "Visual Testing", details: "AI-driven screenshot analysis" },
        { feature: "Frameworks", details: "Cucumber and TestNG integration" },
      ],
      highlights: [
        "510+ Professionals Trained as Business Analysts",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Professionals Trained in Automation",
        "2,800+ (99.8%) Passed ISTQB Professionals",
        "5,800+ Professionals Trained",
        "11,000+ Hours of Training",
        "1,80,000+ Professionals Network",
      ],
    },
    aboutInstitute: {
      title: "About Refer Me Group",
      description:
        "For over 10 years, we've been growing from scratch and today we are on a mission to help the community with our dedication and honesty. Our mission is to provide best knowledge at affordable fee with great quality.",
      features: [
        { content: "Affiliated with multiple Certification Boards" },
        { content: "10+ Years old Edu-Tech Institution" },
        { content: "Served/Serving 10+ Corporates" },
      ],
      reviews: [
        { platform: "Google", rating: "4.8/5", count: "740+" },
        { platform: "LinkedIn", rating: "4.7/5", count: "3500+" },
        { platform: "Facebook", rating: "4.8/5", count: "12000+" },
      ],
    },
    programExecution: [
      "Online Trainer Led Sessions",
      "Case Studies & Practical Projects",
      "Assessment Modules",
      "Mock Interview & Resume Preparation",
      "Job Assistance",
    ],
    addOnBenefits: [
      "Training WhatsApp Group",
      "Personal Mentorship",
      "Support After Training Completion",
      "Dedicated Staff During Training Program",
      "Lifetime Classroom Recorded Sessions",
      "Resume Preparation",
      "LinkedIn Profile Update",
      "Premium Job Group",
    ],
    ourNetwork: [
      "10 Million+ Impression on LinkedIn",
      "1,20,000+ LinkedIn Connections",
      "12,000+ Followers on Facebook Page",
      "11,000+ Professionals on Telegram Job Groups",
      "15,000+ Professionals on WhatsApp Job Groups",
      "10,000+ Professionals on LinkedIn Job Groups",
      "3,500+ Followers on LinkedIn Page",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformation",
        "200+ Other Tools/Technologies",
        "350+ Professionals Trained in AWS + DevOps",
        "400+ Agile Certified Professionals",
        "510+ Business Analyst Transformation Success Stories",
        "2,500+ Automation Transformation Success Stories",
        "2,800+ (99.8%) Passed ISTQB Professionals",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: [
      "Selenium 4",
      "TestNG",
      "Cucumber",
      "Maven",
      "Jenkins",
      "Git",
    ],
  },

  {
    id: "product-management",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Product Management Content (2).pdf",
    category: "Product Management",
    title: "Product Management Certification",
    shortDesc:
      "Master end-to-end product management, from ideation to launch, with agile methodologies and data-driven strategies.",
    longDesc:
      "This course equips you with skills to manage products across their lifecycle. Learn market research, roadmap development, agile methodologies, and leadership strategies. Gain hands-on experience through capstone projects and case studies.",
    type: "Instructor-led Live Classes",
    duration: "10 Weeks (100 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "400+ Enrolled",
    price: "₹ 24,999",
    originalPrice: "₹ 34,999",
    discount: "28% OFF",
    gradient: "from-green-600 to-blue-600",
    bannerImage: "/assets/products/product-mgt.jpg",
    videoPresentation: "/assets/bg-img/gif7.gif",
    instructors: [
      {
        name: "Priya Sharma",
        role: "Senior Product Manager",
        experience: "9 years",
        image: "/assets/instructors/priya-sharma.jpg",
        rating: 4.8,
        reviews: 320,
        bio: "Ex-FAMG PM with expertise in B2C products.",
        expertise: ["Agile", "GTM Strategy", "User Research"],
        social: {
          linkedIn: "https://linkedin.com/in/priyasharma-pm",
          twitter: "https://twitter.com/priyasharma_pm",
        },
      },
      {
        name: "Rahul Mehta",
        role: "Product Lead",
        experience: "7 years",
        image: "/assets/instructors/rahul-mehta.jpg",
        rating: 4.7,
        reviews: 280,
        bio: "Specializes in SaaS and data-driven product development.",
        expertise: ["Roadmapping", "Metrics", "Scrum"],
        social: {
          linkedIn: "https://linkedin.com/in/rahulmehta-pm",
          twitter: "https://twitter.com/rahulmehta_pm",
        },
      },
    ],
    images: [
      "/assets/courses/product-mgmt-1.jpg",
      "/assets/courses/product-mgmt-2.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/product-mgmt-preview1",
      "https://www.youtube.com/embed/product-mgmt-preview2",
    ],
    features: [
      "End-to-end product lifecycle training",
      "Agile and Scrum methodologies",
      "Data-driven decision making",
      "Capstone project with real-world scenarios",
      "Interview preparation modules",
      "Lifetime access to resources",
      "1:1 mentorship sessions",
    ],
    curriculum: [
      {
        module: "Introduction to Product Management",
        topics: [
          { title: "Role of a Product Manager", duration: "3 Hours" },
          { title: "Product Life Cycle Stages", duration: "3 Hours" },
          { title: "Stakeholder Management", duration: "2 Hours" },
        ],
      },
      {
        module: "Market & User Needs",
        topics: [
          { title: "Market Research Techniques", duration: "4 Hours" },
          { title: "Customer Persona Development", duration: "3 Hours" },
          { title: "User Journey Mapping", duration: "3 Hours" },
        ],
      },
      {
        module: "Strategy & Roadmap",
        topics: [
          { title: "Product Vision & Mission", duration: "3 Hours" },
          {
            title: "Prioritization Techniques (MoSCoW, RICE)",
            duration: "4 Hours",
          },
          { title: "Roadmap Communication", duration: "2 Hours" },
        ],
      },
      {
        module: "Agile Development",
        topics: [
          { title: "Scrum & Kanban", duration: "4 Hours" },
          { title: "User Story Writing", duration: "3 Hours" },
          { title: "Prototyping with Figma", duration: "3 Hours" },
        ],
      },
      {
        module: "Launch & Marketing",
        topics: [
          { title: "Go-to-Market Strategy", duration: "4 Hours" },
          { title: "Post-Launch Monitoring", duration: "3 Hours" },
        ],
      },
      {
        module: "Leadership & Interviews",
        topics: [
          {
            title: "Behavioral Interview Prep (STAR Method)",
            duration: "3 Hours",
          },
          { title: "Product Design Case Studies", duration: "4 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "Product Roadmap for a FinTech App",
        description:
          "Develop a prioritized roadmap with KPIs for a hypothetical app.",
        skills: ["Roadmapping", "Prioritization", "Stakeholder Alignment"],
      },
      {
        title: "User Research for E-Commerce",
        description:
          "Conduct market research and create personas for an online store.",
        skills: ["User Interviews", "Personas", "Journey Mapping"],
      },
    ],
    testimonials: [
      {
        name: "Ananya Reddy",
        role: "Associate PM",
        rating: 4.9,
        content:
          "The roadmap prioritization module helped me secure my current role.",
        image: "/assets/testimonials/ananya-r.jpg",
      },
      {
        name: "Vikram Joshi",
        role: "Technical PM",
        rating: 4.7,
        content: "The agile training was industry-ready and practical.",
        image: "/assets/testimonials/vikram-j.jpg",
      },
    ],
    faqs: [
      {
        question: "Is coding knowledge required?",
        answer: "No, but understanding tech concepts is beneficial.",
      },
      {
        question: "Will I get interview prep?",
        answer:
          "Yes, dedicated modules cover behavioral and case study interviews.",
      },
    ],
    placementStats: {
      placementRate: "85%",
      averageSalary: "₹ 12 LPA",
      hiringPartners: ["Amazon", "Flipkart", "Paytm", "Zomato", "Swiggy"],
    },
    badges: [
      "Agile Certified",
      "Product Strategy Pro",
      "UX Research Specialist",
    ],
    instituteDetails: {
      description:
        "Refer Me Group has trained 5,800+ professionals with a 4.8/5 rating. Our mission is to deliver affordable, high-quality product management education.",
      keyOfferings: [
        "Industry-aligned curriculum",
        "Capstone projects",
        "1:1 mentorship",
        "Placement assistance",
      ],
      highlights: [
        "510+ Business Analysts trained",
        "400+ Agile Certified Professionals",
        "2,800+ ISTQB passed (99.8%)",
        "11,000+ training hours",
      ],
    },
    addOnBenefits: [
      "Lifetime recorded sessions",
      "LinkedIn profile review",
      "Premium job groups",
      "Resume building",
    ],
    ourNetwork: [
      "10M+ LinkedIn impressions",
      "120K+ LinkedIn connections",
      "15K+ WhatsApp job group members",
    ],
    riseToRoar: {
      achievements: [
        "150+ SM/PM Transformations",
        "400+ Agile Certified",
        "510+ BA Success Stories",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: ["Jira", "Trello", "Figma", "Google Analytics", "Mixpanel"],
    recommended: true,
    certificationSection: {
      title: "Globally recognized Product Management certification",
      description:
        "Our program prepares you for industry-standard certifications in Agile and Product Management frameworks.",
      features: [
        {
          icon: "images/3_5.png",
          title: "Product Strategy Certification",
          description:
            "Earn certification in product roadmap development and strategic planning.",
        },
        {
          icon: "images/1_5.png",
          title: "Agile Product Owner Certification",
          description:
            "Get certified in Agile methodologies and Scrum frameworks.",
        },
      ],
    },
    aboutInstitute: {
      title: "About - Refer Me Group",
      description:
        "With over 10 years of experience in professional education, we've transformed thousands of careers through practical, industry-focused training.",
      features: [
        {
          icon: "cube",
          content:
            "Our Product Management course is designed by industry experts from top tech companies.",
        },
        {
          icon: "briefcase",
          title: "Placement Assistance",
          content:
            "We provide dedicated support with resume building, interview prep, and job placement.",
        },
      ],
      reviews: [
        {
          platform: "Google",
          rating: "4.8/5",
          count: "740+",
          icon: "images/Google_Icon.svg",
        },
        {
          platform: "LinkedIn",
          rating: "4.9/5",
          count: "3500+",
          icon: "images/linkedin_icon.svg",
        },
      ],
    },
    demandSection: {
      title: "India's growing demand for skilled Product Managers",
      description:
        "With digital transformation accelerating across industries, companies are actively seeking product managers who can bridge business and technology.",
      trainingOptions: [
        {
          title: "Classroom Product Management Course",
          image: "custom/image_section/offline-pm-class.png",
          description:
            "Interactive classroom sessions with hands-on product development exercises.",
        },
        {
          title: "Online Product Management Program",
          image: "custom/image_section/online-pm-class.png",
          description:
            "Flexible online learning with live projects and mentor guidance.",
        },
      ],
    },
  },
  {
    id: "business-analyst",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Business Analyst Content (2).pdf",
    category: "Business Analysis",
    title: "Business Analyst Certification",
    shortDesc:
      "Master end-to-end business analysis with hands-on training in requirements gathering, Agile methodologies, and SQL basics.",
    longDesc:
      "This comprehensive course covers the Business Analysis Core Concept Model (BACCM), requirements lifecycle management, UML diagrams, Agile/Scrum frameworks, and JIRA/Confluence tools. Gain practical experience through real-world projects including BRD/FRD creation and user story writing.",
    type: "Instructor-led Live Classes",
    duration: "10 Weeks (100 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "510+ Enrolled",
    price: "₹ 22,999",
    originalPrice: "₹ 32,999",
    discount: "30% OFF",
    gradient: "from-purple-600 to-indigo-600",
    bannerImage: "/assets/products/buss-analyst.jpg",
    videoPresentation: "/assets/bg-img/gif2.gif",
    instructors: [
      {
        name: "Neha Gupta",
        role: "Senior Business Analyst",
        experience: "8 years",
        image: "/assets/instructors/neha-gupta.jpg",
        rating: 4.8,
        reviews: 290,
        bio: "Specializes in requirements engineering and Agile transformations.",
        expertise: ["BACCM", "JIRA", "Scrum"],
        social: {
          linkedIn: "https://linkedin.com/in/nehagupta-ba",
          twitter: "https://twitter.com/nehagupta_ba",
        },
      },
      {
        name: "Arjun Kapoor",
        role: "Product Owner",
        experience: "6 years",
        image: "/assets/instructors/arjun-kapoor.jpg",
        rating: 4.7,
        reviews: 210,
        bio: "Expert in BRD development and stakeholder management.",
        expertise: ["UML", "User Stories", "Confluence"],
        social: {
          linkedIn: "https://linkedin.com/in/arjunkapoor-po",
          twitter: "https://twitter.com/arjunkapoor_po",
        },
      },
    ],
    images: ["/assets/courses/ba-1.jpg", "/assets/courses/ba-2.jpg"],
    videos: [
      "https://www.youtube.com/embed/ba-preview1",
      "https://www.youtube.com/embed/ba-preview2",
    ],
    features: [
      "BACCM and requirements lifecycle training",
      "Hands-on JIRA & Confluence labs",
      "Real-world BRD/FRD projects",
      "Agile & Scrum certification prep",
      "SQL basics for analysts",
      "Resume and LinkedIn profile support",
      "Lifetime access to materials",
    ],
    curriculum: [
      {
        module: "Introduction to Business Analysis",
        topics: [
          {
            title: "Business Analysis Core Concept Model (BACCM)",
            duration: "4 Hours",
          },
          { title: "Stakeholder Management", duration: "3 Hours" },
          { title: "Requirements Classification", duration: "3 Hours" },
        ],
      },
      {
        module: "Elicitation & Requirements Management",
        topics: [
          { title: "Brainstorming & Focus Groups", duration: "3 Hours" },
          {
            title: "BRD/FRD Development (Hands-on Project)",
            duration: "6 Hours",
          },
          { title: "UML Diagrams & Process Flows", duration: "5 Hours" },
        ],
      },
      {
        module: "Agile & Scrum",
        topics: [
          { title: "Scrum Ceremonies & Artifacts", duration: "4 Hours" },
          { title: "User Story Writing & Prioritization", duration: "4 Hours" },
          { title: "JIRA Board Setup (Hands-on Lab)", duration: "4 Hours" },
        ],
      },
      {
        module: "Tools & Techniques",
        topics: [
          { title: "Confluence Documentation", duration: "3 Hours" },
          { title: "Gap Analysis & RACI Matrix", duration: "3 Hours" },
          { title: "SQL Basics for Analysts", duration: "4 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "BRD for E-Commerce Platform",
        description:
          "Develop a complete Business Requirements Document with UML diagrams.",
        skills: ["BRD", "UML", "Stakeholder Analysis"],
      },
      {
        title: "Agile Project in JIRA",
        description:
          "Create product backlog, user stories, and run sprints in JIRA.",
        skills: ["JIRA", "Scrum", "User Stories"],
      },
    ],
    testimonials: [
      {
        name: "Riya Malhotra",
        role: "Junior BA at Accenture",
        rating: 4.9,
        content: "The BRD project helped me crack my first BA role!",
        image: "/assets/testimonials/riya-m.jpg",
      },
      {
        name: "Karan Singh",
        role: "Scrum Master",
        rating: 4.7,
        content: "Best JIRA/Confluence hands-on training I've seen.",
        image: "/assets/testimonials/karan-s.jpg",
      },
    ],
    faqs: [
      {
        question: "Is coding knowledge required?",
        answer: "No, but SQL basics are covered for data analysis.",
      },
      {
        question: "Will I get Agile certification?",
        answer: "Yes, the course prepares you for Scrum.org certifications.",
      },
    ],
    placementStats: {
      placementRate: "87%",
      averageSalary: "₹ 9 LPA",
      hiringPartners: ["Accenture", "TCS", "Deloitte", "Capgemini", "Infosys"],
    },
    badges: ["BACCM Certified", "Agile Analyst", "JIRA Specialist"],
    instituteDetails: {
      description:
        "Refer Me Group has trained 510+ Business Analysts with a 4.8/5 rating. Our mission is to deliver industry-aligned BA training at affordable fees.",
      keyOfferings: [
        "Real-world BRD/FRD projects",
        "JIRA & Confluence labs",
        "Agile/Scrum certification prep",
        "Placement assistance",
      ],
      highlights: [
        "510+ Business Analysts trained",
        "400+ Agile Certified Professionals",
        "2,800+ ISTQB passed (99.8%)",
        "11,000+ training hours",
      ],
    },
    programExecution: [
      "Online Trainer-Led Sessions",
      "Case Studies & BRD Projects",
      "JIRA/Confluence Labs",
      "Mock Interviews",
      "Resume Workshops",
    ],
    addOnBenefits: [
      "Lifetime recorded sessions",
      "LinkedIn profile review",
      "Premium job groups",
      "1:1 mentorship",
    ],
    ourNetwork: [
      "10M+ LinkedIn impressions",
      "120K+ LinkedIn connections",
      "15K+ WhatsApp job group members",
    ],
    riseToRoar: {
      achievements: [
        "510+ BA Transformations",
        "400+ Agile Certified",
        "2,800+ ISTQB Passed",
      ],
      tagline: "You can also roar.",
    },
    toolsCovered: ["JIRA", "Confluence", "SQL", "UML Tools", "Microsoft Visio"],
    recommended: true,
    certificationSection: {
      title: "Globally recognized Business Analysis certification",
      description:
        "Our program prepares you for industry-standard certifications in Business Analysis and Agile methodologies.",
      features: [
        {
          icon: "images/3_5.png",
          title: "IIBA Certification Prep",
          description: "Preparation for ECBA/CCBA certification exams.",
        },
        {
          icon: "images/1_5.png",
          title: "Agile Analysis Certification",
          description: "Certification in Agile business analysis techniques.",
        },
      ],
    },
    aboutInstitute: {
      title: "About - Refer Me Group",
      description:
        "With over 10 years of experience in professional education, we've transformed thousands of careers through practical, industry-focused training.",
      features: [
        {
          icon: "cube",
          content:
            "Our Business Analysis curriculum is designed by experts from top consulting firms.",
        },
        {
          icon: "briefcase",
          title: "Placement Assistance",
          content:
            "We provide dedicated support with resume building, interview prep, and job placement.",
        },
      ],
      reviews: [
        {
          platform: "Google",
          rating: "4.8/5",
          count: "740+",
          icon: "images/Google_Icon.svg",
        },
        {
          platform: "LinkedIn",
          rating: "4.9/5",
          count: "3500+",
          icon: "images/linkedin_icon.svg",
        },
      ],
    },
    demandSection: {
      title: "High demand for skilled Business Analysts in India",
      description:
        "With digital transformation across industries, companies need BAs who can bridge business and IT with analytical and technical skills.",
      trainingOptions: [
        {
          title: "Classroom Business Analysis Course",
          image: "custom/image_section/offline-ba-class.png",
          description:
            "Interactive classroom sessions with hands-on requirements engineering exercises.",
        },
        {
          title: "Online Business Analysis Program",
          image: "custom/image_section/online-ba-class.png",
          description:
            "Flexible online learning with live projects and mentor guidance.",
        },
      ],
    },
  },
  {
    id: "cloud-engineering-aws-devops",
    curriculumPdfUrl:
      "/assets/Course-Curriculam/Refer Me Group_Cloud Engineering Content_Aws DevOps (2).pdf",
    category: "Cloud Computing",
    title: "Cloud Engineering with AWS DevOps",
    shortDesc:
      "Master AWS cloud infrastructure and DevOps tools like Terraform, Docker, Kubernetes, and Jenkins. Build scalable, automated solutions with hands-on projects.",
    longDesc:
      "This comprehensive AWS DevOps course covers cloud computing fundamentals, AWS services (EC2, S3, VPC, Lambda), and DevOps tools (Ansible, Jenkins, Docker, Kubernetes). Learn to automate deployments, manage CI/CD pipelines, and implement infrastructure as code (IaC) with real-world use cases. Includes job assistance and certification guidance.",
    type: "Instructor-led Live Classes",
    duration: "12 Weeks (120 Hours)",
    schedule: "Weekdays: 7-9 PM | Weekends: 10 AM-1 PM",
    enrolled: "350+ Enrolled",
    price: "₹ 32,999",
    originalPrice: "₹ 42,999",
    discount: "23% OFF",
    gradient: "from-orange-500 to-yellow-600",
    bannerImage: "/assets/products/aws.png",
    videoPresentation: "/assets/bg-img/gif2.gif",
    instructors: [
      {
        name: "Rajesh Verma",
        role: "AWS Solutions Architect",
        experience: "10 years",
        image: "/assets/instructors/rajesh-verma.jpg",
        rating: 4.8,
        reviews: 400,
        bio: "Expert in AWS cloud architecture and automation with Terraform.",
        expertise: ["AWS", "Terraform", "DevOps"],
        social: {
          linkedIn: "https://linkedin.com/in/rajeshverma-aws",
          twitter: "https://twitter.com/rajeshverma_cloud",
        },
      },
      {
        name: "Priya Nair",
        role: "DevOps Engineer",
        experience: "7 years",
        image: "/assets/instructors/priya-nair.jpg",
        rating: 4.7,
        reviews: 320,
        bio: "Specializes in CI/CD pipelines and Kubernetes orchestration.",
        expertise: ["Kubernetes", "Jenkins", "Docker"],
        social: {
          linkedIn: "https://linkedin.com/in/priyanair-devops",
          twitter: "https://twitter.com/priyanair_devops",
        },
      },
    ],
    images: [
      "/assets/courses/aws-devops-1.jpg",
      "/assets/courses/aws-devops-2.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/aws-devops-preview1",
      "https://www.youtube.com/embed/aws-devops-preview2",
    ],
    features: [
      "Master AWS core services (EC2, S3, VPC, Lambda)",
      "Automate infrastructure with Terraform & Ansible",
      "Build CI/CD pipelines using Jenkins",
      "Deploy containers with Docker & Kubernetes",
      "Real-world projects & use cases",
      "AWS certification guidance",
      "Job assistance & mock interviews",
      "Lifetime access to resources",
    ],
    curriculum: [
      {
        module: "AWS Fundamentals",
        topics: [
          { title: "Cloud Computing Basics", duration: "3 Hours" },
          { title: "AWS Global Infrastructure", duration: "2 Hours" },
          { title: "IAM, EC2, and S3", duration: "5 Hours" },
          { title: "VPC, ELB, and Auto Scaling", duration: "5 Hours" },
        ],
      },
      {
        module: "AWS Advanced Services",
        topics: [
          { title: "RDS, DynamoDB, and ElastiCache", duration: "4 Hours" },
          { title: "Lambda and Serverless Architecture", duration: "3 Hours" },
          { title: "CloudFront and Route 53", duration: "3 Hours" },
          { title: "CloudWatch and SNS", duration: "3 Hours" },
        ],
      },
      {
        module: "DevOps Tools",
        topics: [
          { title: "Python & Boto3 for AWS Automation", duration: "6 Hours" },
          { title: "Infrastructure as Code (Terraform)", duration: "6 Hours" },
          { title: "Configuration Management (Ansible)", duration: "5 Hours" },
          { title: "CI/CD with Jenkins", duration: "6 Hours" },
        ],
      },
      {
        module: "Containerization & Orchestration",
        topics: [
          { title: "Docker Fundamentals", duration: "4 Hours" },
          { title: "Kubernetes on AWS (EKS)", duration: "6 Hours" },
          { title: "ELK Stack for Monitoring", duration: "4 Hours" },
        ],
      },
    ],
    projects: [
      {
        title: "Automated AWS Infrastructure",
        description:
          "Deploy a scalable web app using Terraform, EC2, and Auto Scaling.",
        skills: ["Terraform", "EC2", "Auto Scaling"],
      },
      {
        title: "CI/CD Pipeline for Microservices",
        description:
          "Build a Jenkins pipeline to deploy Docker containers on EKS.",
        skills: ["Jenkins", "Docker", "Kubernetes"],
      },
    ],
    testimonials: [
      {
        name: "Arjun Menon",
        role: "Cloud Engineer",
        rating: 4.9,
        content:
          "The hands-on labs on Terraform and EKS were game-changers for my career.",
        image: "/assets/testimonials/arjun-m.jpg",
      },
      {
        name: "Sneha Reddy",
        role: "DevOps Lead",
        rating: 4.8,
        content:
          "Loved the practical approach to AWS troubleshooting and automation.",
        image: "/assets/testimonials/sneha-r.jpg",
      },
    ],
    faqs: [
      {
        question: "Is Linux knowledge required?",
        answer:
          "Basic Linux familiarity is helpful; the course includes a Linux refresher module.",
      },
      {
        question: "Will I get AWS certification support?",
        answer:
          "Yes, the course covers exam patterns and provides practice tests.",
      },
    ],
    placementStats: {
      placementRate: "85%",
      averageSalary: "₹ 10 LPA",
      hiringPartners: ["Amazon", "Accenture", "Wipro", "Capgemini"],
    },
    badges: ["AWS Certified", "DevOps Engineer", "Kubernetes Expert"],
    instituteDetails: {
      description:
        "Refer Me Group has trained 350+ professionals in AWS DevOps, with a focus on practical, job-ready skills. Our 10+ years of experience ensure quality training at affordable fees.",
      keyOfferings: [
        "Hands-on AWS and DevOps labs",
        "Real-time project simulations",
        "1:1 mentorship",
        "Resume and LinkedIn profile workshops",
      ],
      highlights: [
        "350+ Professionals Trained in AWS + DevOps",
        "4.8 Rating by 740+ Professionals on Google",
        "2,500+ Automation Success Stories",
        "11,000+ Hours of Training Delivered",
      ],
    },
    programExecution: [
      "Online Trainer-Led Sessions",
      "Module-wise Case Studies",
      "Mock Interviews",
      "Resume & LinkedIn Optimization",
    ],
    addOnBenefits: [
      "Lifetime Session Recordings",
      "Dedicated WhatsApp Support Group",
      "Premium Job Portal Access",
    ],
    toolsCovered: [
      "AWS EC2/S3/VPC",
      "Terraform",
      "Ansible",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Python Boto3",
    ],
    recommended: true,
    certificationSection: {
      title: "Globally recognized AWS and DevOps certifications",
      description:
        "Our program prepares you for industry-standard AWS certifications and DevOps tool certifications.",
      features: [
        {
          icon: "images/3_5.png",
          title: "AWS Certified Solutions Architect",
          description:
            "Preparation for AWS Solutions Architect - Associate certification.",
        },
        {
          icon: "images/1_5.png",
          title: "Certified Kubernetes Administrator",
          description: "Hands-on training for CKA certification.",
        },
      ],
    },
    aboutInstitute: {
      title: "About - Refer Me Group",
      description:
        "With over 10 years of experience in professional education, we've transformed thousands of careers through practical, industry-focused training.",
      features: [
        {
          icon: "cube",
          content:
            "Our AWS DevOps curriculum is designed by certified architects from top cloud companies.",
        },
        {
          icon: "briefcase",
          title: "Placement Assistance",
          content:
            "We provide dedicated support with resume building, interview prep, and job placement.",
        },
      ],
      reviews: [
        {
          platform: "Google",
          rating: "4.8/5",
          count: "740+",
          icon: "images/Google_Icon.svg",
        },
        {
          platform: "LinkedIn",
          rating: "4.9/5",
          count: "3500+",
          icon: "images/linkedin_icon.svg",
        },
      ],
    },
    demandSection: {
      title: "Skyrocketing demand for AWS and DevOps professionals",
      description:
        "As cloud adoption accelerates, companies are urgently seeking professionals skilled in AWS and DevOps automation tools.",
      trainingOptions: [
        {
          title: "Classroom AWS DevOps Course",
          image: "custom/image_section/offline-aws-class.png",
          description:
            "Hands-on labs with AWS infrastructure and DevOps toolchains.",
        },
        {
          title: "Online Cloud Engineering Program",
          image: "custom/image_section/online-aws-class.png",
          description:
            "Flexible online learning with real-world cloud projects.",
        },
      ],
    },
  },
];

export default courses;
