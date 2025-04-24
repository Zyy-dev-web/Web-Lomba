function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
  {
    question: "Who can participate in Stock Summit 2025?",
    answer: "Stock Summit 2025 is open to all undergraduate and postgraduate students currently enrolled in recognized universities or colleges. Teams can consist of 2-3 members, and can be from the same or different institutions."
  },
  {
    question: "Do I need prior experience in finance or investing?",
    answer: "While some basic understanding of finance and investment concepts is helpful, Stock Summit is designed to be accessible to students with varying levels of experience. We will provide preparatory materials and resources to help you succeed in the competition."
  },
  {
    question: "Can I participate in multiple competition categories?",
    answer: "Yes, participants can register for multiple competition categories, but please note that there will be separate registration fees for each category. We recommend focusing on one category for first-time participants."
  },
  {
    question: "What is the refund policy?",
    answer: "Registrations can be refunded with a 70% refund if canceled before December 5, 2024. After this date, no refunds will be provided. However, team member substitutions are allowed until January 1, 2025."
  },
  {
    question: "Will there be training sessions before the competition?",
    answer: "Yes, all registered participants will receive access to preparatory webinars, resource materials, and optional training sessions conducted by industry professionals to help prepare for the competition."
  },
  {
    question: "Is attendance required for the final event?",
    answer: "Physical attendance at the finals and award ceremony in Jakarta on April 5-6, 2025 is highly encouraged for finalists. However, we will accommodate virtual participation for teams unable to attend in person."
  },
  {
    question: "How are the winners determined?",
    answer: "Each competition category has specific evaluation criteria. Generally, judging is based on analytical rigor, strategic thinking, presentation quality, and overall performance. Detailed scoring rubrics will be shared with participants."
  },
  {
    question: "Can international students participate?",
    answer: "Yes, Stock Summit welcomes international students. All competition materials will be in English, and virtual participation options are available for the entire competition process."
  }];


  return (
    <section id="faq" className="py-20 bg-gray-50" data-id="wwacgtmex" data-path="components/FAQ.js">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" data-id="nqjwlvo1f" data-path="components/FAQ.js">
        <div className="text-center" data-id="9hor98d51" data-path="components/FAQ.js">
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl" data-id="4qg1wiyro" data-path="components/FAQ.js">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto" data-id="kwecsmdsw" data-path="components/FAQ.js">
            Find answers to commonly asked questions about Stock Summit 2025
          </p>
        </div>

        <div className="mt-12 space-y-4" data-id="dnwbirfgc" data-path="components/FAQ.js">
          {faqs.map((faq, index) =>
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden" data-id="stpb1y169" data-path="components/FAQ.js">

              <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" data-id="y22vo5evr" data-path="components/FAQ.js">

                <span className="text-lg font-medium text-navy-blue" data-id="4zl3j1wb8" data-path="components/FAQ.js">{faq.question}</span>
                <span className="ml-6 flex-shrink-0" data-id="50xzhb6t6" data-path="components/FAQ.js">
                  <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'} text-soft-blue`} data-id="3kvflihy4" data-path="components/FAQ.js"></i>
                </span>
              </button>
              
              {openIndex === index &&
            <div className="px-6 pb-4" data-id="b6amxske8" data-path="components/FAQ.js">
                  <p className="text-gray-600" data-id="tzvszym9k" data-path="components/FAQ.js">{faq.answer}</p>
                </div>
            }
            </div>
          )}
        </div>

        <div className="mt-12 text-center" data-id="7qvjdjr92" data-path="components/FAQ.js">
          <p className="text-gray-600 mb-6" data-id="knjcxrv4b" data-path="components/FAQ.js">
            Still have questions? Feel free to reach out to us directly.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-navy-blue hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-blue" data-id="8pxttduq3" data-path="components/FAQ.js">

            Contact Us <i className="fas fa-arrow-right ml-2" data-id="68p1qt9ba" data-path="components/FAQ.js"></i>
          </a>
        </div>
      </div>
    </section>);

}