const StatsSection = () => {
    const stats = [
      {
        icon: "📈",
        value: "126% Avg. CTC Hike",
        highlight: "126%",
        description: "Proven career growth",
      },
      {
        icon: "👨‍🏫",
        value: "World-Class Instructors",
        highlight: "Experts",
        description: "Learn from top professionals",
      },
      {
        icon: "⏱️",
        value: "Flexible Timings",
        highlight: "24/7 Access",
        description: "Learn at your convenience",
      },
      {
        icon: "💻",
        value: "Real Projects",
        highlight: "Hands-on",
        description: "Portfolio-ready work",
      },
    ];
  
    return (
      <section className="relative py-4 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
    //   style={{
    //         backgroundImage: "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3)),url('src/assets/bg-img/geom.jpg')",
    //         backgroundSize: "contain",
    //         backgroundPosition: "center",
    //         backgroundRepeat: "repeat",
    //       }}
      >
        {/* Floating Particles Background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-cyan-100"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            />
          ))}
        </div>
  
        <div className="relative max-w-7xl mx-auto px-4"
        
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-2">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-70"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-cyan-100 to-blue-200">
                  Transformative Learning
                </span>
              </span>
            </h2>
            <p className="text-l text-blue-200 max-w-3xl mx-auto">
              Where ambition meets measurable outcomes
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group perspective-1000"
              >
                {/* Floating Card */}
                <div className="relative rounded-3xl p-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-cyan-400/30 transition-all duration-500 group-hover:scale-105">
  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  
                  {/* Icon inside Circle */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 text-white text-3xl mx-auto mb-3 shadow-md group-hover:rotate-6 transition-all duration-500">
                    {stat.icon}
                  </div>
  
                  {/* Main Content */}
                  <h3 className="text-2xl font-bold text-white mb-1 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-200">
                      {stat.highlight}
                    </span>
                  </h3>
                  <p className="text-blue-100 font-medium mb-3 text-center">{stat.value}</p>
                  <p className="text-blue-200/80 text-center">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Floating Animation Keyframes */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
        `}</style>
      </section>
    );
  };
  
  export default StatsSection;
  