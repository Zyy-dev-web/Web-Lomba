function Competition() {
  return (
    <section id="competition" className="py-20" data-id="hsnbri7l6" data-path="components/Competition.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="cp5di8w88" data-path="components/Competition.js">
        <div className="text-center" data-id="kgrwi8nvx" data-path="components/Competition.js">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-accent-green bg-green-100 rounded-full mb-4" data-id="850vb6xxf" data-path="components/Competition.js">
            National Competition
          </span>
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl mb-6" data-id="2hep1a6ob" data-path="components/Competition.js">
            About Stock Summit 2025
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto" data-id="cld36lj7m" data-path="components/Competition.js">
            The premier platform for university students to showcase their financial acumen,
            investment strategies, and problem-solving skills on a national stage.
          </p>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12 shadow-md" data-id="ib2t5fnto" data-path="components/Competition.js">
          <h3 className="text-2xl font-bold text-navy-blue mb-6" data-id="l4xx5gpq9" data-path="components/Competition.js">Our Mission</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="4u3nbx5p8" data-path="components/Competition.js">
            <div className="bg-white p-6 rounded-lg shadow" data-id="c21pfol2a" data-path="components/Competition.js">
              <div className="w-12 h-12 rounded-full bg-navy-blue flex items-center justify-center text-white mb-4" data-id="3a83os3hm" data-path="components/Competition.js">
                <i className="fas fa-lightbulb text-xl" data-id="hp323eka4" data-path="components/Competition.js"></i>
              </div>
              <h4 className="text-lg font-semibold text-navy-blue mb-2" data-id="7qlt4acc1" data-path="components/Competition.js">Educate</h4>
              <p className="text-gray-600" data-id="0x3a12msq" data-path="components/Competition.js">
                Promote financial literacy and investment knowledge among university students across the country.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow" data-id="n6xjcyj07" data-path="components/Competition.js">
              <div className="w-12 h-12 rounded-full bg-soft-blue flex items-center justify-center text-white mb-4" data-id="fcydmr198" data-path="components/Competition.js">
                <i className="fas fa-users text-xl" data-id="h18fx50n6" data-path="components/Competition.js"></i>
              </div>
              <h4 className="text-lg font-semibold text-navy-blue mb-2" data-id="hmoa04y1s" data-path="components/Competition.js">Connect</h4>
              <p className="text-gray-600" data-id="c83hytbto" data-path="components/Competition.js">
                Create networking opportunities between students and industry professionals in the finance sector.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow" data-id="kzm9ghne7" data-path="components/Competition.js">
              <div className="w-12 h-12 rounded-full bg-accent-green flex items-center justify-center text-white mb-4" data-id="clhncp32u" data-path="components/Competition.js">
                <i className="fas fa-trophy text-xl" data-id="rwz3jgxr3" data-path="components/Competition.js"></i>
              </div>
              <h4 className="text-lg font-semibold text-navy-blue mb-2" data-id="qaplv2g7x" data-path="components/Competition.js">Challenge</h4>
              <p className="text-gray-600" data-id="0f7eiwvnh" data-path="components/Competition.js">
                Test and showcase the analytical skills and investment knowledge of participating students.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16" data-id="dqoa1sgkf" data-path="components/Competition.js">
          <h3 className="text-2xl font-bold text-navy-blue mb-10 text-center" data-id="itggn0kqs" data-path="components/Competition.js">Competition Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="4ys634tto" data-path="components/Competition.js">
            {[
            {
              title: "Stock Trading Simulation",
              icon: "chart-line",
              description: "Manage a virtual portfolio through a two-month simulation with real market conditions. Make strategic investment decisions to maximize returns while managing risk.",
              features: ["Virtual $100,000 starting capital", "Real-time market data", "Risk management assessment", "2-month simulation period"]
            },
            {
              title: "Financial Analysis Case Competition",
              icon: "file-alt",
              description: "Analyze a real company's financial data, develop valuation models, and present investment recommendations to a panel of industry experts.",
              features: ["Company financial analysis", "Valuation modeling", "Strategic recommendations", "Professional presentation"]
            },
            {
              title: "Investment Strategy Challenge",
              icon: "chess",
              description: "Develop a comprehensive investment strategy for a fictional client with specific financial goals, time horizons, and risk tolerance.",
              features: ["Client profile analysis", "Asset allocation", "Portfolio construction", "Long-term strategy planning"]
            }].
            map((category, index) =>
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col card-hover" data-id="bs3casz7f" data-path="components/Competition.js">
                <div className="px-6 pt-6" data-id="215pmxvfb" data-path="components/Competition.js">
                  <div className="w-16 h-16 rounded-full bg-navy-blue flex items-center justify-center text-white mb-4 mx-auto" data-id="zut3c6obr" data-path="components/Competition.js">
                    <i className={`fas fa-${category.icon} text-2xl`} data-id="cnd0jpa21" data-path="components/Competition.js"></i>
                  </div>
                  <h4 className="text-xl font-bold text-navy-blue mb-3 text-center" data-id="9vi98b3tb" data-path="components/Competition.js">{category.title}</h4>
                  <p className="text-gray-600 mb-6" data-id="mjgd2q656" data-path="components/Competition.js">{category.description}</p>
                </div>
                <div className="px-6 pb-6 mt-auto" data-id="ey1edjluh" data-path="components/Competition.js">
                  <h5 className="font-semibold text-soft-blue mb-2" data-id="j2mkitjna" data-path="components/Competition.js">Key Features:</h5>
                  <ul className="text-gray-600 space-y-1" data-id="cn0v9fz7n" data-path="components/Competition.js">
                    {category.features.map((feature, i) =>
                  <li key={i} className="flex items-start" data-id="5qqil2m4q" data-path="components/Competition.js">
                        <i className="fas fa-check text-accent-green mt-1 mr-2" data-id="u551ie1n1" data-path="components/Competition.js"></i>
                        <span data-id="10o9lozfn" data-path="components/Competition.js">{feature}</span>
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 bg-navy-blue text-white rounded-xl p-8 md:p-12" data-id="vn2incpps" data-path="components/Competition.js">
          <h3 className="text-2xl font-bold mb-6 text-center" data-id="160z7vb92" data-path="components/Competition.js">What Makes Stock Summit Different?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="flbzmeolw" data-path="components/Competition.js">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg" data-id="4iy68qko9" data-path="components/Competition.js">
              <h4 className="text-xl font-semibold text-accent-green mb-3" data-id="x7bpkg91r" data-path="components/Competition.js">Industry Mentorship</h4>
              <p className="text-gray-200" data-id="p73d81sam" data-path="components/Competition.js">
                Participants receive guidance from industry professionals throughout the competition,
                providing valuable insights and feedback to enhance your learning experience.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg" data-id="xfeezfd7h" data-path="components/Competition.js">
              <h4 className="text-xl font-semibold text-accent-green mb-3" data-id="e0jv5yjgt" data-path="components/Competition.js">Real-World Scenarios</h4>
              <p className="text-gray-200" data-id="g961ydp4r" data-path="components/Competition.js">
                Our challenges are designed based on real market conditions and scenarios,
                giving you practical experience that directly translates to professional settings.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg" data-id="j2mnl0vhf" data-path="components/Competition.js">
              <h4 className="text-xl font-semibold text-accent-green mb-3" data-id="lzo0vtvcw" data-path="components/Competition.js">Networking Opportunities</h4>
              <p className="text-gray-200" data-id="1meqzpg94" data-path="components/Competition.js">
                Connect with industry leaders, recruiters, and like-minded students,
                building a professional network that can open doors to future career opportunities.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg" data-id="b4eunwdxc" data-path="components/Competition.js">
              <h4 className="text-xl font-semibold text-accent-green mb-3" data-id="vzeqdmum3" data-path="components/Competition.js">Comprehensive Feedback</h4>
              <p className="text-gray-200" data-id="14b1g94nl" data-path="components/Competition.js">
                Receive detailed feedback on your performance from judges and mentors,
                helping you identify strengths and areas for improvement in your financial skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}