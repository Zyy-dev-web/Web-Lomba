const { Link } = ReactRouterDOM;

function Hero() {
  return (
    <div className="hero-gradient text-white pt-20" data-id="j5i1rlwi5" data-path="components/Hero.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32" data-id="k6ua5km7e" data-path="components/Hero.js">
        <div className="md:flex md:items-center md:justify-between" data-id="f1ampmvvv" data-path="components/Hero.js">
          <div className="md:w-1/2 space-y-6 text-center md:text-left" data-id="thoqxu5rl" data-path="components/Hero.js">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight" data-id="jpvrwcy2p" data-path="components/Hero.js">
              Stock Summit 
              <span className="block text-accent-green" data-id="137xlll8r" data-path="components/Hero.js">2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-soft-blue" data-id="5qo6misgw" data-path="components/Hero.js">
              The premier national competition for future financial leaders
            </p>
            <div className="pt-4" data-id="m5f0jowdx" data-path="components/Hero.js">
              <Link
                to="/register"
                className="inline-block px-8 py-4 rounded-lg bg-accent-green hover:bg-green-600 text-white font-bold text-lg transition duration-300 transform hover:scale-105 shadow-lg" data-id="m1o2cyw6o" data-path="components/Hero.js">

                Register Now
              </Link>
              <Link
                to="/competition"
                className="inline-block ml-4 px-8 py-4 rounded-lg bg-white hover:bg-gray-100 text-navy-blue font-bold text-lg transition duration-300" data-id="7o8mfiaoc" data-path="components/Hero.js">

                Learn More
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block md:w-1/2 mt-10 md:mt-0" data-id="dav05mj73" data-path="components/Hero.js">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Stock market visualization"
              className="w-full h-auto rounded-lg shadow-2xl transform rotate-1" data-id="ejnv9jo6y" data-path="components/Hero.js" />

          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center" data-id="0vpl7a6mm" data-path="components/Hero.js">
          <div className="p-4 rounded-lg bg-navy-blue bg-opacity-30" data-id="li7zp3xbx" data-path="components/Hero.js">
            <h3 className="text-3xl font-bold text-accent-green" data-id="4wlrw8i8w" data-path="components/Hero.js">250+</h3>
            <p className="text-soft-blue" data-id="3qqw379cm" data-path="components/Hero.js">Participants</p>
          </div>
          <div className="p-4 rounded-lg bg-navy-blue bg-opacity-30" data-id="hf27uh6zm" data-path="components/Hero.js">
            <h3 className="text-3xl font-bold text-accent-green" data-id="x2aosrd9j" data-path="components/Hero.js">₹500K</h3>
            <p className="text-soft-blue" data-id="6sexunjyr" data-path="components/Hero.js">Prize Pool</p>
          </div>
          <div className="p-4 rounded-lg bg-navy-blue bg-opacity-30" data-id="cxhmrrk7d" data-path="components/Hero.js">
            <h3 className="text-3xl font-bold text-accent-green" data-id="rv16p3rdi" data-path="components/Hero.js">3</h3>
            <p className="text-soft-blue" data-id="6dru7cnet" data-path="components/Hero.js">Competition Tracks</p>
          </div>
          <div className="p-4 rounded-lg bg-navy-blue bg-opacity-30" data-id="iy9rkwt8x" data-path="components/Hero.js">
            <h3 className="text-3xl font-bold text-accent-green" data-id="woz42kfmf" data-path="components/Hero.js">15+</h3>
            <p className="text-soft-blue" data-id="o9u8gut9f" data-path="components/Hero.js">Expert Judges</p>
          </div>
        </div>
      </div>
      
      <div className="w-full" data-id="4kc9asic1" data-path="components/Hero.js">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" data-id="4wfaf5qsb" data-path="components/Hero.js">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" data-id="01css7p4k" data-path="components/Hero.js">
          </path>
        </svg>
      </div>
    </div>);

}