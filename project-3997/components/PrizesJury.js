function PrizesJury() {
  const prizes = [
  {
    category: "Stock Trading Simulation",
    first: "₹150,000 + Trophy + Internship Opportunity",
    second: "₹75,000 + Certificate",
    third: "₹35,000 + Certificate"
  },
  {
    category: "Financial Analysis Case Competition",
    first: "₹120,000 + Trophy + Mentorship Program",
    second: "₹60,000 + Certificate",
    third: "₹30,000 + Certificate"
  },
  {
    category: "Investment Strategy Challenge",
    first: "₹100,000 + Trophy + Bloomberg Terminal Access",
    second: "₹50,000 + Certificate",
    third: "₹25,000 + Certificate"
  }];


  const juryMembers = [
  {
    name: "Dr. Amelia Patel",
    title: "Investment Director, Apex Capital",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    expertise: "Equity Research, Portfolio Management"
  },
  {
    name: "Michael Chen",
    title: "Chief Investment Officer, Global Ventures",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    expertise: "Global Markets, Strategic Investments"
  },
  {
    name: "Sarah Williams",
    title: "Head of Research, Morgan Stanley",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    expertise: "Financial Analysis, Valuation"
  },
  {
    name: "Rajiv Mehta",
    title: "Partner, PwC Financial Advisory",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    expertise: "Corporate Finance, M&A"
  },
  {
    name: "Prof. Lisa Zhang",
    title: "Finance Department Chair, Harvard Business School",
    image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    expertise: "Investment Theory, Market Behavior"
  },
  {
    name: "David Okonkwo",
    title: "Managing Director, BlackRock",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    expertise: "Asset Management, Alternative Investments"
  }];


  return (
    <section id="prizes-jury" className="py-20" data-id="5hvnfny7q" data-path="components/PrizesJury.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="euuerkse4" data-path="components/PrizesJury.js">
        <div className="text-center" data-id="81wvo22hd" data-path="components/PrizesJury.js">
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl" data-id="w3vvxk4g9" data-path="components/PrizesJury.js">
            Prizes & Jury
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto" data-id="g90gv715u" data-path="components/PrizesJury.js">
            Compete for substantial prizes and be evaluated by industry leaders
          </p>
        </div>

        <div className="mt-16" data-id="nuvg36vap" data-path="components/PrizesJury.js">
          <h3 className="text-2xl font-bold text-navy-blue mb-8 text-center" data-id="jtrmuut34" data-path="components/PrizesJury.js">Prize Pool: ₹500,000+</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="uuc3fke34" data-path="components/PrizesJury.js">
            {prizes.map((prize, index) =>
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover" data-id="vtku2eyzd" data-path="components/PrizesJury.js">
                <div className="bg-navy-blue py-4 text-center" data-id="x2h5pu7aa" data-path="components/PrizesJury.js">
                  <h4 className="text-white font-bold text-lg" data-id="ztl3f1snj" data-path="components/PrizesJury.js">{prize.category}</h4>
                </div>
                <div className="p-6" data-id="jogzx19l7" data-path="components/PrizesJury.js">
                  <div className="mb-6" data-id="xhfyco0zh" data-path="components/PrizesJury.js">
                    <div className="flex items-center mb-2" data-id="6lsq1yq9l" data-path="components/PrizesJury.js">
                      <div className="w-8 h-8 rounded-full bg-accent-green flex items-center justify-center text-white font-bold mr-3" data-id="linw0nbdh" data-path="components/PrizesJury.js">1</div>
                      <h5 className="font-semibold text-navy-blue" data-id="ozy0voquy" data-path="components/PrizesJury.js">First Place</h5>
                    </div>
                    <p className="text-gray-600 pl-11" data-id="2htoqsfh8" data-path="components/PrizesJury.js">{prize.first}</p>
                  </div>
                  
                  <div className="mb-6" data-id="4yakip5t6" data-path="components/PrizesJury.js">
                    <div className="flex items-center mb-2" data-id="7rbti8hly" data-path="components/PrizesJury.js">
                      <div className="w-8 h-8 rounded-full bg-soft-blue flex items-center justify-center text-white font-bold mr-3" data-id="9xbgrm52f" data-path="components/PrizesJury.js">2</div>
                      <h5 className="font-semibold text-navy-blue" data-id="ehopzcpda" data-path="components/PrizesJury.js">Second Place</h5>
                    </div>
                    <p className="text-gray-600 pl-11" data-id="xcf0fynx6" data-path="components/PrizesJury.js">{prize.second}</p>
                  </div>
                  
                  <div data-id="tylf350nu" data-path="components/PrizesJury.js">
                    <div className="flex items-center mb-2" data-id="ibbsi47h3" data-path="components/PrizesJury.js">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold mr-3" data-id="rsstta561" data-path="components/PrizesJury.js">3</div>
                      <h5 className="font-semibold text-navy-blue" data-id="kuctkyopw" data-path="components/PrizesJury.js">Third Place</h5>
                    </div>
                    <p className="text-gray-600 pl-11" data-id="nk6ae5nkv" data-path="components/PrizesJury.js">{prize.third}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center text-gray-600" data-id="8xjrmkkzm" data-path="components/PrizesJury.js">
            <p data-id="w1vor842f" data-path="components/PrizesJury.js">* Additional special prizes for innovation, best presentation, and team spirit will be announced during the competition.</p>
          </div>
        </div>

        <div className="mt-20" data-id="b7hybk235" data-path="components/PrizesJury.js">
          <h3 className="text-2xl font-bold text-navy-blue mb-10 text-center" data-id="jtqox6gl0" data-path="components/PrizesJury.js">Meet Our Distinguished Jury</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-id="88nw8j6ai" data-path="components/PrizesJury.js">
            {juryMembers.map((member, index) =>
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover" data-id="vjlkls2kb" data-path="components/PrizesJury.js">
                <div className="p-6 text-center" data-id="rk3fskuyi" data-path="components/PrizesJury.js">
                  <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-soft-blue" data-id="rpir31wp0" data-path="components/PrizesJury.js" />

                  <h4 className="font-bold text-navy-blue text-lg" data-id="ec0kyazlu" data-path="components/PrizesJury.js">{member.name}</h4>
                  <p className="text-gray-600 italic mb-3" data-id="xn55faaq2" data-path="components/PrizesJury.js">{member.title}</p>
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-navy-blue" data-id="zxyxxb3bs" data-path="components/PrizesJury.js">
                    {member.expertise}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-12 text-center" data-id="42l32t8it" data-path="components/PrizesJury.js">
            <p className="text-gray-600" data-id="ak4ysfxhv" data-path="components/PrizesJury.js">
              * Additional jury members and industry mentors will be announced closer to the event.
            </p>
          </div>
        </div>
      </div>
    </section>);

}