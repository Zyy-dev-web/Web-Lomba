function Referral() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [referralCode, setReferralCode] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a random referral code
    const generatedCode = 'SS25-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setReferralCode(generatedCode);
    setSubmitted(true);
  };

  return (
    <section id="referral" className="py-20" data-id="931hmwzmd" data-path="components/Referral.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="cv7a900le" data-path="components/Referral.js">
        <div className="bg-gradient-to-r from-navy-blue to-soft-blue rounded-2xl overflow-hidden shadow-xl" data-id="ahcunnis5" data-path="components/Referral.js">
          <div className="md:flex" data-id="us5hcm3t2" data-path="components/Referral.js">
            <div className="md:w-1/2 p-8 md:p-12 text-white" data-id="i0ta7tntj" data-path="components/Referral.js">
              <h2 className="text-3xl font-bold mb-6" data-id="72k1z3k53" data-path="components/Referral.js">
                Refer Friends & Get Discounts
              </h2>
              <p className="mb-6 text-blue-100" data-id="b882nwywt" data-path="components/Referral.js">
                Spread the word about Stock Summit 2025 and earn discounts on your registration fees. For each successful referral, both you and your friend get 10% off!
              </p>
              
              <div className="space-y-4 mb-8" data-id="jkjnuiwe7" data-path="components/Referral.js">
                <div className="flex items-start" data-id="uie9z99ju" data-path="components/Referral.js">
                  <div className="flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-accent-green font-bold" data-id="130fw3398" data-path="components/Referral.js">
                    1
                  </div>
                  <div className="ml-4" data-id="frygqigop" data-path="components/Referral.js">
                    <h3 className="text-lg font-semibold" data-id="m6ghb7min" data-path="components/Referral.js">Get Your Referral Code</h3>
                    <p className="text-blue-100 text-sm" data-id="gt3p7sb3x" data-path="components/Referral.js">Enter your email to generate your unique referral code</p>
                  </div>
                </div>
                
                <div className="flex items-start" data-id="edmjxsl9c" data-path="components/Referral.js">
                  <div className="flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-accent-green font-bold" data-id="1vg4ta9s7" data-path="components/Referral.js">
                    2
                  </div>
                  <div className="ml-4" data-id="uulwy1viy" data-path="components/Referral.js">
                    <h3 className="text-lg font-semibold" data-id="tv7duy5s4" data-path="components/Referral.js">Share With Friends</h3>
                    <p className="text-blue-100 text-sm" data-id="b8rvpyjnr" data-path="components/Referral.js">Share your code with friends interested in finance competitions</p>
                  </div>
                </div>
                
                <div className="flex items-start" data-id="3ojgn133u" data-path="components/Referral.js">
                  <div className="flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-accent-green font-bold" data-id="3w5dbkfai" data-path="components/Referral.js">
                    3
                  </div>
                  <div className="ml-4" data-id="jjsuoaicb" data-path="components/Referral.js">
                    <h3 className="text-lg font-semibold" data-id="b10chslq1" data-path="components/Referral.js">Earn Discounts</h3>
                    <p className="text-blue-100 text-sm" data-id="cdx751maq" data-path="components/Referral.js">Both you and your friend get 10% off registration fees</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-6" data-id="68i9ewmyy" data-path="components/Referral.js">
                <h4 className="font-semibold text-accent-green mb-2" data-id="3qedji8x3" data-path="components/Referral.js">Referral Benefits:</h4>
                <ul className="text-blue-100 space-y-1 text-sm" data-id="xjmt791wl" data-path="components/Referral.js">
                  <li className="flex items-start" data-id="whpi0dyoj" data-path="components/Referral.js">
                    <i className="fas fa-check text-accent-green mt-1 mr-2" data-id="md1fgt86o" data-path="components/Referral.js"></i>
                    <span data-id="uc29mx9zk" data-path="components/Referral.js">10% discount per referral (up to 50% off)</span>
                  </li>
                  <li className="flex items-start" data-id="vabvpfhd1" data-path="components/Referral.js">
                    <i className="fas fa-check text-accent-green mt-1 mr-2" data-id="p09f2y2h2" data-path="components/Referral.js"></i>
                    <span data-id="0pnc69rfs" data-path="components/Referral.js">Exclusive access to networking events</span>
                  </li>
                  <li className="flex items-start" data-id="e4yjq1ozs" data-path="components/Referral.js">
                    <i className="fas fa-check text-accent-green mt-1 mr-2" data-id="e8wxy2dij" data-path="components/Referral.js"></i>
                    <span data-id="e22t846c3" data-path="components/Referral.js">Special recognition at the awards ceremony</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-white p-8 md:p-12" data-id="y6ljzr25j" data-path="components/Referral.js">
              {!submitted ?
              <div data-id="5gv3wjo95" data-path="components/Referral.js">
                  <h3 className="text-2xl font-bold text-navy-blue mb-6" data-id="eu95hcgur" data-path="components/Referral.js">
                    Get Your Referral Code
                  </h3>
                  <p className="text-gray-600 mb-6" data-id="n5uog6tfh" data-path="components/Referral.js">
                    Enter your email address below to generate your unique referral code. We'll also send you 
                    easy sharing options and track your successful referrals.
                  </p>
                  
                  <form onSubmit={handleSubmit} data-id="55aznchq4" data-path="components/Referral.js">
                    <div className="mb-4" data-id="uh1x29vsq" data-path="components/Referral.js">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" data-id="3603f9tdw" data-path="components/Referral.js">
                        Email Address *
                      </label>
                      <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue focus:border-soft-blue"
                      placeholder="Your email address"
                      required data-id="cee3f4vzt" data-path="components/Referral.js" />

                    </div>
                    
                    <button
                    type="submit"
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-accent-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-green font-medium" data-id="bjn8kzx2a" data-path="components/Referral.js">

                      Generate Referral Code
                    </button>
                  </form>
                </div> :

              <div className="text-center" data-id="01a22tgjh" data-path="components/Referral.js">
                  <div className="w-16 h-16 mx-auto bg-accent-green rounded-full flex items-center justify-center mb-6" data-id="60yznc2o3" data-path="components/Referral.js">
                    <i className="fas fa-link text-white text-2xl" data-id="ca5wf6o8j" data-path="components/Referral.js"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-blue mb-4" data-id="nsbkh43lt" data-path="components/Referral.js">
                    Your Referral Code
                  </h3>
                  <div className="bg-gray-100 p-4 rounded-lg mb-6" data-id="7m2wsdll9" data-path="components/Referral.js">
                    <p className="text-navy-blue text-2xl font-mono font-bold tracking-wider" data-id="ueo9662qf" data-path="components/Referral.js">
                      {referralCode}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6" data-id="p8s2v1zfj" data-path="components/Referral.js">
                    Share this code with your friends. When they use it during registration, 
                    both you and they will receive a 10% discount!
                  </p>
                  
                  <div className="flex justify-center space-x-4 mb-8" data-id="dykathd2l" data-path="components/Referral.js">
                    <button className="p-3 bg-blue-600 text-white rounded-full" data-id="kgzsxq7qu" data-path="components/Referral.js">
                      <i className="fab fa-facebook-f" data-id="f5v1f6ouy" data-path="components/Referral.js"></i>
                    </button>
                    <button className="p-3 bg-blue-400 text-white rounded-full" data-id="exa4o7975" data-path="components/Referral.js">
                      <i className="fab fa-twitter" data-id="w0l3y0tb1" data-path="components/Referral.js"></i>
                    </button>
                    <button className="p-3 bg-green-500 text-white rounded-full" data-id="25j0mpa8u" data-path="components/Referral.js">
                      <i className="fab fa-whatsapp" data-id="bclg7beri" data-path="components/Referral.js"></i>
                    </button>
                    <button className="p-3 bg-blue-700 text-white rounded-full" data-id="tum4pcc51" data-path="components/Referral.js">
                      <i className="fab fa-linkedin-in" data-id="bh6pqe8rp" data-path="components/Referral.js"></i>
                    </button>
                  </div>
                  
                  <button
                  onClick={() => {
                    navigator.clipboard.writeText(referralCode);
                    alert('Referral code copied to clipboard!');
                  }}
                  className="inline-flex items-center px-4 py-2 border border-navy-blue rounded-md shadow-sm text-sm font-medium text-navy-blue bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-blue" data-id="288wt32b5" data-path="components/Referral.js">

                    <i className="fas fa-copy mr-2" data-id="66nc55og8" data-path="components/Referral.js"></i> Copy Code
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>);

}