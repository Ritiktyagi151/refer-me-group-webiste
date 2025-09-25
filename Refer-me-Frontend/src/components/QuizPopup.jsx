import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const CareerQuizPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [careerPath, setCareerPath] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [recommendedCategory, setRecommendedCategory] = useState("");

  const questions = [
    {
      id: 1,
      question:
        "What do you think about coding in languages like Java or Python?",
      options: [
        {
          id: "A",
          text: "I love it! I'm comfortable with OOP concepts and syntax",
          value: 4,
          correct: true,
        },
        {
          id: "B",
          text: "It's okay, I need to brush up on my skills",
          value: 3,
          correct: true,
        },
        {
          id: "C",
          text: "I'm new to programming, but eager to learn",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "I'm more of a hands-on person, not a fan of coding",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "How do you feel about working with data structures and algorithms?",
      options: [
        {
          id: "A",
          text: "I'm a master of data structures and algorithms",
          value: 4,
          correct: true,
        },
        {
          id: "B",
          text: "I'm comfortable with basic data structures, but need practice with complex algorithms",
          value: 3,
          correct: true,
        },
        {
          id: "C",
          text: "I've worked with data structures, but algorithms are not my strong suit",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "I'm not familiar with data structures and algorithms",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Are you interested in cloud computing and deployment?",
      options: [
        {
          id: "A",
          text: "Yes, I'm experienced with cloud platforms like AWS or Azure",
          value: 4,
          correct: true,
        },
        {
          id: "B",
          text: "I'm interested in learning more about cloud computing",
          value: 3,
          correct: true,
        },
        {
          id: "C",
          text: "I've heard of cloud computing, but not sure how it works",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "Not really, I'm more focused on on-premises solutions",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question:
        "How do you feel about working with front-end development frameworks like React or Angular?",
      options: [
        {
          id: "A",
          text: "I'm a pro at building responsive web applications",
          value: 4,
          correct: true,
        },
        {
          id: "B",
          text: "I've worked with front-end frameworks, but need to improve my skills",
          value: 3,
          correct: true,
        },
        {
          id: "C",
          text: "I'm familiar with HTML, CSS, and JavaScript, but not with frameworks",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "I'm more of a back-end developer",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "Are you interested in artificial intelligence and machine learning?",
      options: [
        {
          id: "A",
          text: "Yes, I've built AI/ML models and deployed them",
          value: 4,
          correct: true,
        },
        {
          id: "B",
          text: "I'm interested in learning more about AI/ML",
          value: 3,
          correct: true,
        },
        {
          id: "C",
          text: "I've heard of AI/ML, but not sure how it works",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "Not really, I'm more focused on traditional programming",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "How do you feel about working with databases and SQL?",
      options: [
        {
          id: "A",
          text: "I'm a database admin, comfortable with complex queries",
          value: 4,
          correct: true,
        },
        {
          id: "B",
          text: "I've worked with databases, but need to improve my SQL skills",
          value: 3,
          correct: true,
        },
        {
          id: "C",
          text: "I'm familiar with basic SQL, but not with advanced concepts",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "I'm not familiar with databases and SQL",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Are you interested in cybersecurity and threat analysis?",
      options: [
        {
          id: "A",
          text: "Yes, I'm experienced with security frameworks and threat modeling",
          value: 4,
          correct: true,
        },
        {
          id: "B",
          text: "I'm interested in learning more about cybersecurity",
          value: 3,
          correct: true,
        },
        {
          id: "C",
          text: "I've heard of cybersecurity, but not sure how it works",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "Not really, I'm more focused on development",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        "How do you feel about working with DevOps tools like Jenkins or Docker?",
      options: [
        {
          id: "A",
          text: "I'm a DevOps expert, comfortable with CI/CD pipelines",
          value: 4,
          correct: true,
        },
        {
          id: "B",
          text: "I've worked with DevOps tools, but need to improve my skills",
          value: 3,
          correct: true,
        },
        {
          id: "C",
          text: "I'm familiar with basic DevOps concepts, but not with tools",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "I'm not familiar with DevOps",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Are you interested in Internet of Things (IoT) development?",
      options: [
        {
          id: "A",
          text: "Yes, I've built IoT projects and deployed them",
          value: 4,
          correct: true,
        },
        {
          id: "B",
          text: "I'm interested in learning more about IoT",
          value: 3,
          correct: true,
        },
        {
          id: "C",
          text: "I've heard of IoT, but not sure how it works",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "Not really, I'm more focused on traditional computing",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question:
        "How do you feel about working with agile methodologies and team collaboration?",
      options: [
        {
          id: "A",
          text: "I'm a Scrum master, comfortable with agile principles",
          value: 4,
          correct: true,
        },
        {
          id: "B",
          text: "I've worked with agile teams, but need to improve my skills",
          value: 3,
          correct: true,
        },
        {
          id: "C",
          text: "I'm familiar with basic agile concepts, but not with methodologies",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "I'm not familiar with agile",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Your preferred method of problem-solving is?",
      options: [
        {
          id: "A",
          text: "Following a logical, step-by-step process",
          value: 3,
          correct: true,
        },
        {
          id: "B",
          text: "Using creative and abstract thinking to design new solutions",
          value: 4,
          correct: true,
        },
        {
          id: "C",
          text: "Active listening and clear communication to understand the root cause",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "Thinking like an adversary to anticipate potential attacks",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What kind of work environment energizes you the most?",
      options: [
        {
          id: "A",
          text: "A data center or server room where you are surrounded by physical technology",
          value: 3,
          correct: true,
        },
        {
          id: "B",
          text: "A quiet space where you can focus deeply on solving a complex problem",
          value: 4,
          correct: true,
        },
        {
          id: "C",
          text: "A collaborative setting where you constantly interact with different people",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "A dynamic, high-stakes environment where you need to be constantly vigilant",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What's your approach to a big project with a tight deadline?",
      options: [
        {
          id: "A",
          text: "Methodically plan out each step, ensuring a robust and stable foundation",
          value: 3,
          correct: true,
        },
        {
          id: "B",
          text: "Break it into smaller, manageable coding tasks and get started immediately",
          value: 4,
          correct: true,
        },
        {
          id: "C",
          text: "Create a detailed project plan, and coordinate with all stakeholders to manage expectations",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "Focus on the most critical vulnerabilities and build a strategy to protect the core assets first",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What you think about Data & AI?",
      options: [
        {
          id: "A",
          text: "Data visualization (charts/dashboards) excites me",
          value: 3,
          correct: true,
        },
        {
          id: "B",
          text: "I am curious about AI and Machine Learning",
          value: 4,
          correct: true,
        },
        {
          id: "C",
          text: "I like SQL, Python (pandas), or BI tools",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "I would enjoy building models that predict outcomes",
          value: 1,
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "How would you rate yourself on Leadership & Collaboration?",
      options: [
        {
          id: "A",
          text: "I enjoy facilitating discussions and decision-making",
          value: 3,
          correct: true,
        },
        {
          id: "B",
          text: "I prefer focusing on outcomes rather than coding myself",
          value: 4,
          correct: true,
        },
        {
          id: "C",
          text: "I am passionate about Agile practices (Scrum, Kanban)",
          value: 2,
          correct: false,
        },
        {
          id: "D",
          text: "I am comfortable managing conflicts and aligning stakeholders",
          value: 1,
          correct: false,
        },
      ],
    },
  ];

  // Calculate scores for each category
  const calculateScores = () => {
    const categoryScores = {
      "Cloud Computing and DevOps": 0,
      "Artificial Intelligence and Machine Learning": 0,
      Cybersecurity: 0,
      "Full Stack Development": 0,
      "Data Science and Analytics": 0,
      "Internet of Things (IoT)": 0,
      "Project Manager": 0,
    };

    // Question mapping to categories
    const questionCategories = {
      1: ["Full Stack Development", "Data Science and Analytics"],
      2: [
        "Full Stack Development",
        "Data Science and Analytics",
        "Artificial Intelligence and Machine Learning",
      ],
      3: ["Cloud Computing and DevOps"],
      4: ["Full Stack Development"],
      5: [
        "Artificial Intelligence and Machine Learning",
        "Data Science and Analytics",
      ],
      6: ["Data Science and Analytics", "Full Stack Development"],
      7: ["Cybersecurity"],
      8: ["Cloud Computing and DevOps"],
      9: ["Internet of Things (IoT)"],
      10: ["Project Manager"],
      11: [
        "Artificial Intelligence and Machine Learning",
        "Data Science and Analytics",
        "Cybersecurity",
      ],
      12: [
        "Cloud Computing and DevOps",
        "Internet of Things (IoT)",
        "Cybersecurity",
      ],
      13: ["Project Manager", "Cybersecurity"],
      14: [
        "Data Science and Analytics",
        "Artificial Intelligence and Machine Learning",
      ],
      15: ["Project Manager"],
    };

    // Calculate scores for each category
    Object.keys(answers).forEach((qIndex) => {
      const questionId = parseInt(qIndex) + 1;
      const answerValue = answers[qIndex].value;

      if (questionCategories[questionId]) {
        questionCategories[questionId].forEach((category) => {
          categoryScores[category] += answerValue;
        });
      }
    });

    return categoryScores;
  };

  // Determine career path based on scores
  const determineCareerPath = (scores) => {
    const careerPaths = {
      "Cloud Computing and DevOps": [
        "Cloud Architect",
        "DevOps Engineer",
        "Cloud Engineer",
      ],
      "Artificial Intelligence and Machine Learning": [
        "AI/ML Engineer",
        "Data Scientist",
        "Research Scientist",
      ],
      Cybersecurity: [
        "Security Analyst",
        "Penetration Tester",
        "Chief Information Security Officer (CISO)",
      ],
      "Full Stack Development": [
        "Full Stack Developer",
        "Front-end Developer",
        "Back-end Developer",
      ],
      "Data Science and Analytics": [
        "Data Scientist",
        "Data Analyst",
        "Business Analyst",
      ],
      "Internet of Things (IoT)": [
        "IoT Developer",
        "IoT Architect",
        "Embedded Systems Engineer",
      ],
      "Project Manager": [
        "Project Manager",
        "Scrum Master",
        "Agile Coach",
        "Delivery Manager",
        "Technical Project Manager",
      ],
    };

    let maxScore = 0;
    let recommendedCategory = "";

    // Find category with highest score
    Object.keys(scores).forEach((category) => {
      if (scores[category] > maxScore) {
        maxScore = scores[category];
        recommendedCategory = category;
      }
    });

    // Return random career from the highest scoring category
    const careers = careerPaths[recommendedCategory];
    const randomCareer = careers[Math.floor(Math.random() * careers.length)];

    return {
      category: recommendedCategory,
      career: randomCareer,
      score: maxScore,
    };
  };

  // Progress update
  useEffect(() => {
    const answeredCount = Object.keys(answers).length;
    const newProgress = (answeredCount / questions.length) * 100;
    setProgress(newProgress);
  }, [answers, questions.length]);

  const handleOptionChange = (qIndex, option) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: option }));

    // Auto-navigate to next question after a short delay
    setTimeout(() => {
      if (qIndex < questions.length - 1) {
        setCurrentQuestion(qIndex + 1);
      }
    }, 500);
  };

  const handleNext = () => {
    // Validate if current question is answered
    if (!answers[currentQuestion]) {
      toast.error("⚠️ Please select an answer before proceeding!");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      toast.error("⚠️ Please answer all questions before submitting!");
      return;
    }

    setIsSubmitting(true);

    // Calculate correct and incorrect answers
    let correctCount = 0;
    let incorrectCount = 0;

    Object.keys(answers).forEach((qIndex) => {
      if (answers[qIndex].correct) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    setCorrectAnswers(correctCount);
    setIncorrectAnswers(incorrectCount);
    setShowScore(true);

    setTimeout(() => {
      const categoryScores = calculateScores();
      const careerResult = determineCareerPath(categoryScores);

      setScore(careerResult.score);
      setCareerPath(careerResult.career);
      setRecommendedCategory(careerResult.category);
      setShowResultPopup(true);
      setIsSubmitting(false);
      toast.success("🎉 Quiz submitted successfully!");

      // Redirect to appropriate course page based on career path
      setTimeout(() => {
        setShowResultPopup(false);

        // Map career categories to course routes
        const careerToRoute = {
          "Cloud Computing and DevOps": "/courses/cloud-engineering-aws-devops",
          "Artificial Intelligence and Machine Learning":
            "/courses/ai-automation",
          Cybersecurity: "/courses/cloud-engineering-azure-devops",
          "Full Stack Development": "/courses/cypress-typescript-ai",
          "Data Science and Analytics": "/courses/data-science",
          "Internet of Things (IoT)": "/courses/api-automation-ai",
          "Project Manager": "/courses/selenium-ai",
        };

        navigate(careerToRoute[careerResult.category] || "/courses");
      }, 10000); // Increased timeout to 10 seconds to allow user to read the information
    }, 800);
  };

  const getDotColor = (index) => {
    return answers[index] ? "#4a6cf7" : "#e2e8f0";
  };

  const getDotTextColor = (index) => {
    return answers[index] ? "white" : "#64748b";
  };

  // Get career options for the recommended category
  const getCareerOptions = (category) => {
    const careerOptions = {
      "Cloud Computing and DevOps": [
        "Cloud Architect",
        "DevOps Engineer",
        "Cloud Engineer",
      ],
      "Artificial Intelligence and Machine Learning": [
        "AI/ML Engineer",
        "Data Scientist",
        "Research Scientist",
      ],
      Cybersecurity: [
        "Security Analyst",
        "Penetration Tester",
        "Chief Information Security Officer (CISO)",
      ],
      "Full Stack Development": [
        "Full Stack Developer",
        "Front-end Developer",
        "Back-end Developer",
      ],
      "Data Science and Analytics": [
        "Data Scientist",
        "Data Analyst",
        "Business Analyst",
      ],
      "Internet of Things (IoT)": [
        "IoT Developer",
        "IoT Architect",
        "Embedded Systems Engineer",
      ],
      "Project Manager": [
        "Project Manager",
        "Scrum Master",
        "Agile Coach",
        "Delivery Manager",
        "Technical Project Manager",
      ],
    };

    return careerOptions[category] || [];
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          Width: "100%",
          margin: "0 auto",
          background: "white",
          borderRadius: "12px",
          padding: "25px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#4a6cf7",
            marginBottom: "10px",
            fontSize: "32px",
            fontWeight: "700",
          }}
        >
          Career Assessment Quiz
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "30px",
          }}
        >
          Discover your ideal tech career path by answering these 15 questions
        </p>

        {/* Progress bar */}
        <div
          style={{
            height: "12px",
            backgroundColor: "#e9ecef",
            borderRadius: "6px",
            marginBottom: "25px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "#4a6cf7",
              borderRadius: "6px",
              transition: "width 0.5s ease",
            }}
          />
        </div>

        {/* Question Card */}
        <div
          key={currentQuestion}
          style={{
            marginBottom: "25px",
            padding: "20px",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            backgroundColor: "#f8fafc",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "15px",
              color: "#1e293b",
            }}
          >
            {currentQuestion + 1}. {questions[currentQuestion].question}
          </p>
          {questions[currentQuestion].options.map((opt, i) => (
            <label
              key={i}
              style={{
                display: "block",
                padding: "12px 15px",
                marginBottom: "10px",
                backgroundColor:
                  answers[currentQuestion] &&
                  answers[currentQuestion].id === opt.id
                    ? "#edf2ff"
                    : "white",
                border:
                  answers[currentQuestion] &&
                  answers[currentQuestion].id === opt.id
                    ? "2px solid #4a6cf7"
                    : "2px solid #e2e8f0",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={opt.id}
                checked={
                  answers[currentQuestion] &&
                  answers[currentQuestion].id === opt.id
                }
                onChange={() => handleOptionChange(currentQuestion, opt)}
                style={{ marginRight: "10px" }}
              />
              {opt.text}
            </label>
          ))}
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "25px",
            justifyContent: "center",
          }}
        >
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                // Validate if user can navigate to this question
                // Allow navigation to any answered question or the next unanswered question
                const lastAnsweredIndex = Math.max(
                  ...Object.keys(answers).map(Number)
                );

                if (answers[index] || index <= lastAnsweredIndex + 1) {
                  setCurrentQuestion(index);
                } else {
                  toast.error("⚠️ Please complete questions in order!");
                }
              }}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: getDotColor(index),
                color: getDotTextColor(index),
                cursor:
                  answers[index] ||
                  index <= Math.max(...Object.keys(answers).map(Number), -1) + 1
                    ? "pointer"
                    : "not-allowed",
                fontWeight: "600",
                opacity:
                  answers[index] ||
                  index <= Math.max(...Object.keys(answers).map(Number), -1) + 1
                    ? 1
                    : 0.6,
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Navigation buttons at bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            style={{
              padding: "10px 20px",
              background: currentQuestion === 0 ? "#ccc" : "#4a6cf7",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: currentQuestion === 0 ? "not-allowed" : "pointer",
              fontWeight: "600",
              minWidth: "100px",
            }}
          >
            Previous
          </button>

          <span
            style={{ fontWeight: "600", color: "#495057", textAlign: "center" }}
          >
            Question {currentQuestion + 1} of {questions.length}
          </span>

          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={handleNext}
              style={{
                padding: "10px 20px",
                background: "#4a6cf7",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
                minWidth: "100px",
              }}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              style={{
                padding: "10px 20px",
                background: isSubmitting ? "#ccc" : "#10b981",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontWeight: "600",
                minWidth: "100px",
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit Quiz"}
            </button>
          )}
        </div>

        {/* Result Popup */}
        {showResultPopup && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 4000,
              padding: "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "600px",
                background: "white",
                padding: "30px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              <h3
                style={{
                  marginBottom: "15px",
                  color: "#0f172a",
                  fontSize: "24px",
                }}
              >
                Career Assessment Result
              </h3>

              {/* Score display - only shown after submission */}
              {showScore && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    marginBottom: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "#10B981",
                      color: "white",
                      borderRadius: "8px",
                      fontWeight: "600",
                      minWidth: "120px",
                    }}
                  >
                    Correct: {correctAnswers}
                  </div>
                  <div
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "#EF4444",
                      color: "white",
                      borderRadius: "8px",
                      fontWeight: "600",
                      minWidth: "120px",
                    }}
                  >
                    Incorrect: {incorrectAnswers}
                  </div>
                </div>
              )}

              <p
                style={{
                  color: "#334155",
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Recommended Career Path:
              </p>
              <p
                style={{
                  color: "#4a6cf7",
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                {careerPath}
              </p>

              {/* Additional information about career options */}
              <div
                style={{
                  backgroundColor: "#f8fafc",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "#334155",
                  }}
                >
                  On the basis of answers given by you, we recommend that you
                  can try for these roles in {recommendedCategory}:
                </p>
                <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
                  {getCareerOptions(recommendedCategory).map(
                    (option, index) => (
                      <li key={index} style={{ marginBottom: "5px" }}>
                        {option}
                      </li>
                    )
                  )}
                </ul>
                <p style={{ marginBottom: "10px" }}>
                  If you are interested to grow your career in these fields, you
                  can explore our course{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const careerToRoute = {
                        "Cloud Computing and DevOps":
                          "/courses/cloud-computing",
                        "Artificial Intelligence and Machine Learning":
                          "/courses/ai-ml",
                        Cybersecurity: "/courses/cybersecurity",
                        "Full Stack Development": "/courses/full-stack",
                        "Data Science and Analytics": "/courses/data-science",
                        "Internet of Things (IoT)": "/courses/iot",
                        "Project Manager": "/courses/project-management",
                      };
                      navigate(
                        careerToRoute[recommendedCategory] || "/courses"
                      );
                    }}
                    style={{
                      color: "#4a6cf7",
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                  >
                    (click here)
                  </a>
                </p>
                <p style={{ fontStyle: "italic", color: "#64748b" }}>
                  1400+ Professionals have changed their career with us and are
                  living their dream jobs
                </p>
              </div>

              <p
                style={{
                  color: "#334155",
                  fontSize: "16px",
                }}
              >
                Redirecting to relevant course in 10 seconds...
              </p>

              <button
                onClick={() => {
                  setShowResultPopup(false);
                  const careerToRoute = {
                    "Cloud Computing and DevOps": "/courses/cloud-computing",
                    "Artificial Intelligence and Machine Learning":
                      "/courses/ai-ml",
                    Cybersecurity: "/courses/cybersecurity",
                    "Full Stack Development": "/courses/full-stack",
                    "Data Science and Analytics": "/courses/data-science",
                    "Internet of Things (IoT)": "/courses/iot",
                    "Project Manager": "/courses/project-management",
                  };
                  navigate(careerToRoute[recommendedCategory] || "/courses");
                }}
                style={{
                  padding: "10px 20px",
                  background: "#4a6cf7",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "600",
                  marginTop: "15px",
                }}
              >
                Go to Course Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Toast */}
      <ToastContainer position="top-center" autoClose={2500} />

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .quiz-container {
              padding: 15px;
            }
            
            .navigation-buttons {
              flex-direction: column;
              gap: 15px;
            }
            
            .navigation-buttons button {
              width: 100%;
            }
            
            .question-dots {
              gap: 5px;
            }
            
            .question-dots button {
              width: 32px;
              height: 32px;
              font-size: 14px;
            }
          }
          
          @media (max-width: 480px) {
            .quiz-title {
              font-size: 24px;
            }
            
            .question-text {
              font-size: 16px;
            }
            
            .option-label {
              padding: 10px;
              font-size: 14px;
            }
            
            .result-popup {
              padding: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CareerQuizPage;
