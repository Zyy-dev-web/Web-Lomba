function Timeline() {
  const timelineEvents = [
  {
    date: "November 15, 2024",
    title: "Registration Opens",
    description: "Early bird registration begins with special pricing and benefits for early registrants."
  },
  {
    date: "December 20, 2024",
    title: "Registration Closes",
    description: "Last day to register and secure your spot in the competition."
  },
  {
    date: "January 5, 2025",
    title: "Orientation Webinar",
    description: "Virtual kickoff event with competition guidelines, expectations, and Q&A session."
  },
  {
    date: "January 15, 2025",
    title: "Stock Trading Simulation Begins",
    description: "Start of the two-month virtual trading simulation."
  },
  {
    date: "February 1, 2025",
    title: "Case Competition Brief Released",
    description: "Teams receive the financial analysis case study materials."
  },
  {
    date: "February 20, 2025",
    title: "Investment Strategy Challenge Begins",
    description: "Client profiles distributed to participants for the investment strategy challenge."
  },
  {
    date: "March 15, 2025",
    title: "Trading Simulation Ends",
    description: "Final day of the stock trading simulation component."
  },
  {
    date: "March 20, 2025",
    title: "Submission Deadline",
    description: "Final deadline for all competition materials and presentations."
  },
  {
    date: "April 5-6, 2025",
    title: "Finals & Award Ceremony",
    description: "Finalist presentations, judging, and grand award ceremony in Jakarta."
  }];


  return (
    <section id="timeline" className="py-20 bg-gray-50" data-id="jx48wwd1m" data-path="components/Timeline.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="vqu4efzgb" data-path="components/Timeline.js">
        <div className="text-center" data-id="kqqvqnrji" data-path="components/Timeline.js">
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl" data-id="c8036xymc" data-path="components/Timeline.js">
            Competition Timeline
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto" data-id="bu3wd91pb" data-path="components/Timeline.js">
            Mark your calendar with these important dates for Stock Summit 2025
          </p>
        </div>

        <div className="mt-16" data-id="lrgjx9s4u" data-path="components/Timeline.js">
          {/* Desktop Timeline */}
          <div className="hidden md:grid md:grid-cols-7 gap-4" data-id="gyczbnuxs" data-path="components/Timeline.js">
            <div className="col-span-7 h-2 bg-soft-blue rounded-full relative" data-id="wvlfwk2bd" data-path="components/Timeline.js">
              {timelineEvents.map((_, index) =>
              <div
                key={index}
                className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-navy-blue border-4 border-soft-blue"
                style={{ left: `${index / (timelineEvents.length - 1) * 100}%` }} data-id="ewcseeckj" data-path="components/Timeline.js">
              </div>
              )}
            </div>
            
            {timelineEvents.map((event, index) =>
            <div
              key={index}
              className={`col-span-1 mt-8 ${index % 2 === 0 ? '' : 'mt-32'}`} data-id="dvwpi9r58" data-path="components/Timeline.js">

                <div className="bg-white p-4 rounded-lg shadow-md h-full" data-id="mlqw0enoy" data-path="components/Timeline.js">
                  <div className="text-accent-green font-semibold text-sm mb-2" data-id="jgbqjjocq" data-path="components/Timeline.js">{event.date}</div>
                  <h4 className="text-navy-blue font-bold mb-2" data-id="v5mhwjy5a" data-path="components/Timeline.js">{event.title}</h4>
                  <p className="text-gray-600 text-sm" data-id="xvzc0frkz" data-path="components/Timeline.js">{event.description}</p>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative" data-id="sgd7br9m8" data-path="components/Timeline.js">
            <div className="timeline-connector" data-id="lld582jnh" data-path="components/Timeline.js"></div>
            
            {timelineEvents.map((event, index) =>
            <div key={index} className="relative pl-10 pb-10" data-id="ccj0ze7u5" data-path="components/Timeline.js">
                <div className="timeline-dot" data-id="a3dzvsktw" data-path="components/Timeline.js"></div>
                <div className="bg-white p-5 rounded-lg shadow-md" data-id="qx7nv2i9p" data-path="components/Timeline.js">
                  <div className="text-accent-green font-semibold text-sm mb-1" data-id="ibx4x4zs5" data-path="components/Timeline.js">{event.date}</div>
                  <h4 className="text-navy-blue font-bold mb-2" data-id="q1d5od8ph" data-path="components/Timeline.js">{event.title}</h4>
                  <p className="text-gray-600 text-sm" data-id="isfp44yu8" data-path="components/Timeline.js">{event.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 text-center" data-id="aq5ijez1w" data-path="components/Timeline.js">
          <p className="text-gray-600 italic" data-id="lmefh189e" data-path="components/Timeline.js">
            * All dates are subject to minor adjustments. Participants will be notified of any changes.
          </p>
        </div>
      </div>
    </section>);

}