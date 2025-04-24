function FAQPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = React.useState('general');
  const [searchQuery, setSearchQuery] = React.useState('');

  const faqCategories = [
  { id: 'general', name: 'General' },
  { id: 'registration', name: 'Registration' },
  { id: 'competition', name: 'Competition' },
  { id: 'technical', name: 'Technical' },
  { id: 'prizes', name: 'Prizes & Rewards' }];


  const allFaqs = {
    general: [
    {
      question: "What is Stock Summit?",
      answer: "Stock Summit is a national-level finance and investment competition organized by CMSC UI (Capital Market Study Club of University of Indonesia). It challenges students to demonstrate their financial knowledge, analytical skills, and investment strategies through various competitive tracks."
    },
    {
      question: "Who can participate in Stock Summit 2025?",
      answer: "Stock Summit 2025 is open to all undergraduate and postgraduate students currently enrolled in recognized universities or colleges. Teams can consist of 2-3 members, and can be from the same or different institutions."
    },
    {
      question: "When and where will Stock Summit 2025 take place?",
      answer: "Stock Summit 2025 will begin in January 2025 with various online components. The finals and award ceremony will be held in Jakarta on April 5-6, 2025. Specific venue details will be shared with finalists."
    },
    {
      question: "Is this competition only for finance students?",
      answer: "No, Stock Summit welcomes students from all academic backgrounds. While some financial knowledge is helpful, we believe diverse perspectives lead to better investment strategies. We provide preparatory materials to help teams succeed regardless of their background."
    }],

    registration: [
    {
      question: "How do I register for Stock Summit 2025?",
      answer: "Registration can be completed through our website by filling out the registration form, submitting required documents, and paying the registration fee. The registration process is outlined in detail on our registration page."
    },
    {
      question: "What is the registration fee?",
      answer: "Registration fees vary by competition category: Stock Trading Simulation (₹3,000), Financial Analysis Case Competition (₹3,500), and Investment Strategy Challenge (₹3,200). Early bird discounts of 15% are available until November 30, 2024."
    },
    {
      question: "Can I register for multiple competition categories?",
      answer: "Yes, participants can register for multiple competition categories, but please note that there will be separate registration fees for each category. We recommend focusing on one category for first-time participants."
    },
    {
      question: "What is the refund policy?",
      answer: "Registrations can be refunded with a 70% refund if canceled before December 5, 2024. After this date, no refunds will be provided. However, team member substitutions are allowed until January 1, 2025."
    }],

    competition: [
    {
      question: "What are the different competition categories?",
      answer: "Stock Summit 2025 features three main categories: Stock Trading Simulation (virtual portfolio management), Financial Analysis Case Competition (company valuation and investment recommendations), and Investment Strategy Challenge (comprehensive investment strategy development)."
    },
    {
      question: "How are the winners determined?",
      answer: "Each competition category has specific evaluation criteria. Generally, judging is based on analytical rigor, strategic thinking, presentation quality, and overall performance. Detailed scoring rubrics will be shared with participants."
    },
    {
      question: "Will there be training sessions before the competition?",
      answer: "Yes, all registered participants will receive access to preparatory webinars, resource materials, and optional training sessions conducted by industry professionals to help prepare for the competition."
    },
    {
      question: "Is attendance required for the final event?",
      answer: "Physical attendance at the finals and award ceremony in Jakarta on April 5-6, 2025 is highly encouraged for finalists. However, we will accommodate virtual participation for teams unable to attend in person."
    }],

    technical: [
    {
      question: "What software or tools will we need for the competition?",
      answer: "For the Stock Trading Simulation, we provide access to a specialized trading platform. For other categories, basic proficiency in Microsoft Excel is expected. For presentations, teams can use PowerPoint, Google Slides, or similar presentation software."
    },
    {
      question: "Will we have access to financial databases for research?",
      answer: "Yes, registered teams will receive access to a curated set of financial data and resources. Additionally, teams can use publicly available information. The specific databases will be announced to registered participants."
    },
    {
      question: "Can we use AI tools or advanced software for analysis?",
      answer: "Yes, teams are encouraged to use any analytical tools at their disposal. However, all sources must be properly cited, and teams should be prepared to explain their methodologies in detail."
    },
    {
      question: "What happens if we experience technical difficulties during the competition?",
      answer: "We have a dedicated technical support team available throughout the competition. In case of widespread technical issues, appropriate accommodations will be made regarding deadlines or submission requirements."
    }],

    prizes: [
    {
      question: "What prizes are available for winners?",
      answer: "Each competition category offers substantial prizes: First place (₹100,000-₹150,000 plus special opportunities), Second place (₹50,000-₹75,000), and Third place (₹25,000-₹35,000). Additional special category prizes will also be awarded."
    },
    {
      question: "Are there any non-monetary benefits for participants?",
      answer: "Yes! All participants receive certificates, networking opportunities with industry professionals, and access to exclusive recruitment channels. Finalists also receive mentorship opportunities and feature in our annual competition publication."
    },
    {
      question: "How and when will prizes be distributed?",
      answer: "Monetary prizes will be distributed within 30 days of the competition conclusion. Certificates will be provided at the awards ceremony or sent electronically. Other benefits like internships will be coordinated individually with winners."
    },
    {
      question: "Are there prizes for non-winning participants?",
      answer: "While main prizes are for top performers, we also offer special recognition awards for innovation, best presentation, team spirit, and most improved performance. All participants receive participation certificates and networking opportunities."
    }]

  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredFaqs = React.useMemo(() => {
    if (!searchQuery.trim()) {
      return allFaqs[activeCategory];
    }

    const query = searchQuery.toLowerCase();
    const results = [];

    Object.values(allFaqs).forEach((categoryFaqs) => {
      categoryFaqs.forEach((faq) => {
        if (
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query))
        {
          results.push(faq);
        }
      });
    });

    return results;
  }, [searchQuery, activeCategory]);

  return (
    <div className="pt-16" data-id="ueh7mlioc" data-path="pages/FAQPage.js">
      <div className="bg-navy-blue text-white py-20" data-id="ubwub0cr9" data-path="pages/FAQPage.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-id="idy6ati7u" data-path="pages/FAQPage.js">
          <h1 className="text-4xl font-extrabold sm:text-5xl" data-id="3jgkrsqi2" data-path="pages/FAQPage.js">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-soft-blue max-w-3xl mx-auto" data-id="eg6kd2mz5" data-path="pages/FAQPage.js">
            Find answers to your questions about Stock Summit 2025
          </p>
        </div>
      </div>
      
      <section className="py-20" data-id="lr69d79f8" data-path="pages/FAQPage.js">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" data-id="4og4ebk39" data-path="pages/FAQPage.js">
          <div className="mb-10" data-id="jhm37gdkj" data-path="pages/FAQPage.js">
            <div className="relative max-w-md mx-auto" data-id="s91ab2j6f" data-path="pages/FAQPage.js">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-soft-blue focus:border-soft-blue" data-id="7ev3di2qh" data-path="pages/FAQPage.js" />

              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-id="48czhiuzc" data-path="pages/FAQPage.js">
                <i className="fas fa-search text-gray-400" data-id="mgdvdq0v9" data-path="pages/FAQPage.js"></i>
              </div>
            </div>
          </div>
          
          {!searchQuery &&
          <div className="mb-10 flex overflow-x-auto scrollbar-hide" data-id="2xbxvsih3" data-path="pages/FAQPage.js">
              <div className="flex space-x-2 mx-auto" data-id="jbyxpyz29" data-path="pages/FAQPage.js">
                {faqCategories.map((category) =>
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category.id ?
                'bg-navy-blue text-white' :
                'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
                } data-id="mfkdue3vk" data-path="pages/FAQPage.js">

                    {category.name}
                  </button>
              )}
              </div>
            </div>
          }
          
          <div className="space-y-4" data-id="fq59uhs76" data-path="pages/FAQPage.js">
            {filteredFaqs.length > 0 ?
            filteredFaqs.map((faq, index) =>
            <FAQ.FaqItem key={index} question={faq.question} answer={faq.answer} data-id="hoa3kw0z6" data-path="pages/FAQPage.js" />
            ) :

            <div className="text-center py-10" data-id="uz0it551k" data-path="pages/FAQPage.js">
                <i className="fas fa-search text-gray-300 text-5xl mb-4" data-id="r1lmez7dm" data-path="pages/FAQPage.js"></i>
                <p className="text-gray-500 text-lg" data-id="cku9zg1a2" data-path="pages/FAQPage.js">No results found for "{searchQuery}"</p>
                <p className="text-gray-400 mt-2" data-id="0yp61n5yq" data-path="pages/FAQPage.js">Try using different keywords or browse by category.</p>
              </div>
            }
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8" data-id="z4jmy9tvi" data-path="pages/FAQPage.js">
            <h2 className="text-2xl font-bold text-navy-blue mb-4 text-center" data-id="gdtsod9ys" data-path="pages/FAQPage.js">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 text-center mb-6" data-id="zmm047bu5" data-path="pages/FAQPage.js">
              If you couldn't find the answer to your question, please feel free to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4" data-id="q53693uez" data-path="pages/FAQPage.js">
              <a
                href="mailto:stocksummit@cmscui.org"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-navy-blue text-white font-semibold hover:bg-indigo-800 transition duration-300" data-id="43q2lp2bn" data-path="pages/FAQPage.js">

                <i className="fas fa-envelope mr-2" data-id="zvqampjtm" data-path="pages/FAQPage.js"></i> Email Us
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-accent-green hover:bg-green-600 text-white font-semibold transition duration-300" data-id="u2x1kpv83" data-path="pages/FAQPage.js">

                <i className="fas fa-comment-alt mr-2" data-id="r39bjolko" data-path="pages/FAQPage.js"></i> Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Contact data-id="3ygzv2axo" data-path="pages/FAQPage.js" />
    </div>);

}

// Define a nested FaqItem component that can be used in both the FAQ and FAQPage components
FAQ.FaqItem = function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" data-id="szj1kjdp2" data-path="pages/FAQPage.js">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" data-id="vu1r8zuou" data-path="pages/FAQPage.js">

        <span className="text-lg font-medium text-navy-blue" data-id="5orj4rilt" data-path="pages/FAQPage.js">{question}</span>
        <span className="ml-6 flex-shrink-0" data-id="3ov7cuvi0" data-path="pages/FAQPage.js">
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-soft-blue`} data-id="yx8tpily8" data-path="pages/FAQPage.js"></i>
        </span>
      </button>
      
      {isOpen &&
      <div className="px-6 pb-4" data-id="rxmbklf9b" data-path="pages/FAQPage.js">
          <p className="text-gray-600" data-id="m99mk6wxl" data-path="pages/FAQPage.js">{answer}</p>
        </div>
      }
    </div>);

};