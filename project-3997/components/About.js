function About() {
  return (
    <section id="about" className="py-20 bg-gray-50" data-id="brl2gdojl" data-path="components/About.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="dfxaz605z" data-path="components/About.js">
        <div className="text-center" data-id="n0nrtac55" data-path="components/About.js">
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl" data-id="mls9ekuta" data-path="components/About.js">
            About CMSC UI
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto" data-id="pv2px5kof" data-path="components/About.js">
            Empowering students to excel in the world of finance and investment
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12" data-id="5g1qt3yeh" data-path="components/About.js">
          <div className="bg-white rounded-xl shadow-md overflow-hidden" data-id="oqaqmfoib" data-path="components/About.js">
            <div className="p-8" data-id="jitaq4olh" data-path="components/About.js">
              <h3 className="text-2xl font-bold text-navy-blue mb-4" data-id="6f8o7upw6" data-path="components/About.js">Our Story</h3>
              <p className="text-gray-600 mb-6" data-id="yjh7w4f4p" data-path="components/About.js">
                Founded in 2015, CMSC UI (Capital Market Study Club of University of Indonesia) 
                is a leading student organization dedicated to fostering knowledge and practical skills 
                in finance, investment, and capital markets. What started as a small group of passionate 
                finance students has grown into one of the most influential student organizations in the field.
              </p>
              <p className="text-gray-600" data-id="xycps3yrq" data-path="components/About.js">
                Through workshops, seminars, competitions, and networking events, we bridge the gap between 
                academic knowledge and real-world financial expertise, preparing students to thrive in 
                the dynamic world of finance.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden" data-id="iaftyra3j" data-path="components/About.js">
            <div className="p-8" data-id="4v8utqjjf" data-path="components/About.js">
              <h3 className="text-2xl font-bold text-navy-blue mb-4" data-id="eh7t162oj" data-path="components/About.js">Vision & Mission</h3>
              <div className="mb-6" data-id="z1csb19hh" data-path="components/About.js">
                <h4 className="font-semibold text-soft-blue mb-2" data-id="mcfza25eo" data-path="components/About.js">Our Vision</h4>
                <p className="text-gray-600" data-id="6jqm1l3bm" data-path="components/About.js">
                  To be the catalyst for developing financial literacy and investment acumen among 
                  university students, creating a generation of financially savvy professionals.
                </p>
              </div>
              <div data-id="3xfn2mbzr" data-path="components/About.js">
                <h4 className="font-semibold text-soft-blue mb-2" data-id="p3yyv7crp" data-path="components/About.js">Our Mission</h4>
                <ul className="text-gray-600 space-y-2 list-disc pl-5" data-id="js0plxd0w" data-path="components/About.js">
                  <li data-id="qvw6p60t6" data-path="components/About.js">Provide practical education in capital markets and investment</li>
                  <li data-id="yjlir95u2" data-path="components/About.js">Foster networking opportunities with industry professionals</li>
                  <li data-id="iorlyp4qu" data-path="components/About.js">Organize high-quality events and competitions</li>
                  <li data-id="2lyw8hbqk" data-path="components/About.js">Develop leadership and professional skills</li>
                  <li data-id="p1bfwrqm9" data-path="components/About.js">Promote ethical financial practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16" data-id="xy7qeri09" data-path="components/About.js">
          <h3 className="text-2xl font-bold text-navy-blue text-center mb-10" data-id="2g8914frv" data-path="components/About.js">Past Activities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-id="afpfpp9pi" data-path="components/About.js">
            {[
            {
              title: "Financial Modeling Workshop",
              date: "November 2024",
              image: "https://images.unsplash.com/photo-1611095973763-414019e72400?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              description: "A hands-on workshop teaching students how to build comprehensive financial models for company valuation."
            },
            {
              title: "Investment Banking Seminar",
              date: "September 2024",
              image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              description: "A seminar featuring speakers from top investment banks discussing career paths and industry insights."
            },
            {
              title: "Stock Trading Competition",
              date: "August 2024",
              image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              description: "A month-long virtual trading competition where participants managed virtual portfolios in real market conditions."
            }].
            map((activity, index) =>
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover" data-id="sq8v3s750" data-path="components/About.js">
                <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover" data-id="agez6e1dt" data-path="components/About.js" />
                <div className="p-6" data-id="0wqvkeq4m" data-path="components/About.js">
                  <div className="text-xs text-gray-500 mb-1" data-id="1pfzgq11v" data-path="components/About.js">{activity.date}</div>
                  <h4 className="text-lg font-semibold text-navy-blue mb-2" data-id="p76al64ex" data-path="components/About.js">{activity.title}</h4>
                  <p className="text-gray-600 text-sm" data-id="904vzx4np" data-path="components/About.js">{activity.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}