function Registration() {
  const [formData, setFormData] = React.useState({
    teamName: '',
    category: '',
    institution: '',
    teamLeaderName: '',
    teamLeaderEmail: '',
    teamLeaderPhone: '',
    member2Name: '',
    member2Email: '',
    member3Name: '',
    member3Email: '',
    referralCode: '',
    agreeTerms: false
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation would go here
    console.log('Form submitted:', formData);
    // In a real app, you would send this data to your backend
    setSubmitted(true);
  };

  const categories = [
  { value: "stock-trading", label: "Stock Trading Simulation" },
  { value: "financial-analysis", label: "Financial Analysis Case Competition" },
  { value: "investment-strategy", label: "Investment Strategy Challenge" }];


  const fees = {
    "stock-trading": "₹3,000 per team",
    "financial-analysis": "₹3,500 per team",
    "investment-strategy": "₹3,200 per team"
  };

  return (
    <section id="registration" className="py-20 bg-gray-50" data-id="1hrlnybot" data-path="components/Registration.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="o5y108q9n" data-path="components/Registration.js">
        <div className="text-center" data-id="y5yabl151" data-path="components/Registration.js">
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl" data-id="hcxgwjzqh" data-path="components/Registration.js">
            Registration
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto" data-id="6of5yli6n" data-path="components/Registration.js">
            Secure your spot in Stock Summit 2025 - Registration open until December 20, 2024
          </p>
        </div>
        
        <div className="mt-16 md:flex md:gap-12" data-id="o1iscuthv" data-path="components/Registration.js">
          <div className="md:w-1/3 mb-10 md:mb-0" data-id="dxy73eon0" data-path="components/Registration.js">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8" data-id="uttjvdfmv" data-path="components/Registration.js">
              <h3 className="text-xl font-bold text-navy-blue mb-4" data-id="ulbipg6uv" data-path="components/Registration.js">Registration Fees</h3>
              <ul className="space-y-4" data-id="04h1xvr96" data-path="components/Registration.js">
                {categories.map((category) =>
                <li key={category.value} className="flex justify-between pb-2 border-b border-gray-100" data-id="f2w2aq8go" data-path="components/Registration.js">
                    <span className="font-medium text-gray-700" data-id="om0ta0iek" data-path="components/Registration.js">{category.label}</span>
                    <span className="font-semibold text-navy-blue" data-id="4jjzg9czw" data-path="components/Registration.js">{fees[category.value]}</span>
                  </li>
                )}
              </ul>
              <p className="mt-4 text-sm text-gray-500" data-id="r67kc73t6" data-path="components/Registration.js">
                * Early bird discount (15%) available until November 30, 2024
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6" data-id="g6yefqeow" data-path="components/Registration.js">
              <h3 className="text-xl font-bold text-navy-blue mb-4" data-id="1ek9gew36" data-path="components/Registration.js">Payment Methods</h3>
              <div className="space-y-4" data-id="902zrmqa1" data-path="components/Registration.js">
                <div data-id="fw14srrxw" data-path="components/Registration.js">
                  <h4 className="font-semibold text-navy-blue mb-2" data-id="cvyjo07tg" data-path="components/Registration.js">Bank Transfer</h4>
                  <p className="text-gray-600 text-sm mb-1" data-id="n3ko1pa9o" data-path="components/Registration.js">Bank: National Bank of Finance</p>
                  <p className="text-gray-600 text-sm mb-1" data-id="p9nt4y4z6" data-path="components/Registration.js">Account: CMSC University of Indonesia</p>
                  <p className="text-gray-600 text-sm" data-id="adivnxluj" data-path="components/Registration.js">Account Number: 1234-5678-9012</p>
                </div>
                
                <div data-id="f6263sx3t" data-path="components/Registration.js">
                  <h4 className="font-semibold text-navy-blue mb-2" data-id="3gxq2i3f6" data-path="components/Registration.js">QR Payment</h4>
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CMSC_UI_PAYMENT"
                    alt="Payment QR Code"
                    className="w-32 h-32 mx-auto my-2" data-id="rq7116i6w" data-path="components/Registration.js" />

                  <p className="text-sm text-gray-500 text-center" data-id="mikgbtwcv" data-path="components/Registration.js">
                    Scan to pay with any UPI app
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3" data-id="vksxlp5jj" data-path="components/Registration.js">
            {!submitted ?
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8" data-id="glkuqoo1q" data-path="components/Registration.js">
                <h3 className="text-xl font-bold text-navy-blue mb-6" data-id="5przc7d7n" data-path="components/Registration.js">Registration Form</h3>
                
                <form onSubmit={handleSubmit} className="registration-form" data-id="6a54uj8mt" data-path="components/Registration.js">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" data-id="gn2un69hs" data-path="components/Registration.js">
                    <div data-id="y1tmmt1yt" data-path="components/Registration.js">
                      <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 mb-1" data-id="k03v7jics" data-path="components/Registration.js">
                        Team Name *
                      </label>
                      <input
                      type="text"
                      id="teamName"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue"
                      required data-id="3jv7dvwx6" data-path="components/Registration.js" />

                    </div>
                    
                    <div data-id="5zqxpowx1" data-path="components/Registration.js">
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1" data-id="74f77y6pa" data-path="components/Registration.js">
                        Competition Category *
                      </label>
                      <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue"
                      required data-id="b5kfnftq1" data-path="components/Registration.js">

                        <option value="" data-id="swjo4tsui" data-path="components/Registration.js">Select a category</option>
                        {categories.map((category) =>
                      <option key={category.value} value={category.value} data-id="e7uvkt339" data-path="components/Registration.js">
                            {category.label}
                          </option>
                      )}
                      </select>
                    </div>
                    
                    <div data-id="6lp4r6khr" data-path="components/Registration.js">
                      <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1" data-id="adi9kg73x" data-path="components/Registration.js">
                        Institution/University *
                      </label>
                      <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue"
                      required data-id="l1xrw0g34" data-path="components/Registration.js" />

                    </div>
                  </div>
                  
                  <div className="mb-6" data-id="xsxro0spr" data-path="components/Registration.js">
                    <h4 className="font-semibold text-navy-blue mb-3" data-id="rmr2s7res" data-path="components/Registration.js">Team Leader Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="k90t5ssk2" data-path="components/Registration.js">
                      <div data-id="dgiquhkyj" data-path="components/Registration.js">
                        <label htmlFor="teamLeaderName" className="block text-sm font-medium text-gray-700 mb-1" data-id="v4rp9wthg" data-path="components/Registration.js">
                          Full Name *
                        </label>
                        <input
                        type="text"
                        id="teamLeaderName"
                        name="teamLeaderName"
                        value={formData.teamLeaderName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue"
                        required data-id="ux9wkpx5e" data-path="components/Registration.js" />

                      </div>
                      
                      <div data-id="zzo1wr22m" data-path="components/Registration.js">
                        <label htmlFor="teamLeaderEmail" className="block text-sm font-medium text-gray-700 mb-1" data-id="e2qjrgbwg" data-path="components/Registration.js">
                          Email *
                        </label>
                        <input
                        type="email"
                        id="teamLeaderEmail"
                        name="teamLeaderEmail"
                        value={formData.teamLeaderEmail}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue"
                        required data-id="avh6efnob" data-path="components/Registration.js" />

                      </div>
                      
                      <div data-id="bp5ybpb3b" data-path="components/Registration.js">
                        <label htmlFor="teamLeaderPhone" className="block text-sm font-medium text-gray-700 mb-1" data-id="v3ic65wnk" data-path="components/Registration.js">
                          Phone Number *
                        </label>
                        <input
                        type="tel"
                        id="teamLeaderPhone"
                        name="teamLeaderPhone"
                        value={formData.teamLeaderPhone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue"
                        required data-id="qpmla1bl6" data-path="components/Registration.js" />

                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6" data-id="d6gjs1uat" data-path="components/Registration.js">
                    <h4 className="font-semibold text-navy-blue mb-3" data-id="2jymeuixg" data-path="components/Registration.js">Team Members Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="vkl74cqa3" data-path="components/Registration.js">
                      <div data-id="89zsxz1me" data-path="components/Registration.js">
                        <label htmlFor="member2Name" className="block text-sm font-medium text-gray-700 mb-1" data-id="84g6uyfl2" data-path="components/Registration.js">
                          Member 2 - Full Name *
                        </label>
                        <input
                        type="text"
                        id="member2Name"
                        name="member2Name"
                        value={formData.member2Name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue"
                        required data-id="fyde2ci46" data-path="components/Registration.js" />

                      </div>
                      
                      <div data-id="15u0eem2b" data-path="components/Registration.js">
                        <label htmlFor="member2Email" className="block text-sm font-medium text-gray-700 mb-1" data-id="z2v5nzu9d" data-path="components/Registration.js">
                          Member 2 - Email *
                        </label>
                        <input
                        type="email"
                        id="member2Email"
                        name="member2Email"
                        value={formData.member2Email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue"
                        required data-id="ohukwcmki" data-path="components/Registration.js" />

                      </div>
                      
                      <div data-id="w9eosvrnd" data-path="components/Registration.js">
                        <label htmlFor="member3Name" className="block text-sm font-medium text-gray-700 mb-1" data-id="l6ukg9auz" data-path="components/Registration.js">
                          Member 3 - Full Name
                        </label>
                        <input
                        type="text"
                        id="member3Name"
                        name="member3Name"
                        value={formData.member3Name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue" data-id="bnscn33d0" data-path="components/Registration.js" />

                      </div>
                      
                      <div data-id="xy9j9dzke" data-path="components/Registration.js">
                        <label htmlFor="member3Email" className="block text-sm font-medium text-gray-700 mb-1" data-id="3as1d3fbe" data-path="components/Registration.js">
                          Member 3 - Email
                        </label>
                        <input
                        type="email"
                        id="member3Email"
                        name="member3Email"
                        value={formData.member3Email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue" data-id="drp6omz4j" data-path="components/Registration.js" />

                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6" data-id="xhrp0ydrn" data-path="components/Registration.js">
                    <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700 mb-1" data-id="qhii0o798" data-path="components/Registration.js">
                      Referral Code (if any)
                    </label>
                    <input
                    type="text"
                    id="referralCode"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue"
                    placeholder="Enter your referral code for discount" data-id="ztzxk81ao" data-path="components/Registration.js" />

                  </div>
                  
                  <div className="mb-6" data-id="goroeggfw" data-path="components/Registration.js">
                    <div className="flex items-start" data-id="bqg2vfxir" data-path="components/Registration.js">
                      <div className="flex items-center h-5" data-id="vwlmp4rpb" data-path="components/Registration.js">
                        <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="focus:ring-soft-blue h-4 w-4 text-soft-blue border-gray-300 rounded"
                        required data-id="kk6wscjwg" data-path="components/Registration.js" />

                      </div>
                      <div className="ml-3 text-sm" data-id="66kvmexp9" data-path="components/Registration.js">
                        <label htmlFor="agreeTerms" className="font-medium text-gray-700" data-id="bjti76oem" data-path="components/Registration.js">
                          I agree to the <a href="#" className="text-soft-blue hover:underline" data-id="tbk59usw6" data-path="components/Registration.js">terms and conditions</a> and <a href="#" className="text-soft-blue hover:underline" data-id="1yaxvksbl" data-path="components/Registration.js">privacy policy</a> *
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8" data-id="ia14xoskd" data-path="components/Registration.js">
                    <button
                    type="submit"
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-accent-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-green font-medium" data-id="0x535gttu" data-path="components/Registration.js">

                      Submit Registration
                    </button>
                  </div>
                </form>
              </div> :

            <div className="bg-white rounded-xl shadow-md p-8 text-center" data-id="epe3tbkkt" data-path="components/Registration.js">
                <div className="w-16 h-16 mx-auto bg-accent-green rounded-full flex items-center justify-center mb-6" data-id="2hfzfxmwy" data-path="components/Registration.js">
                  <i className="fas fa-check text-white text-2xl" data-id="5p14yptmi" data-path="components/Registration.js"></i>
                </div>
                <h3 className="text-2xl font-bold text-navy-blue mb-4" data-id="eeapvuy2r" data-path="components/Registration.js">Registration Submitted!</h3>
                <p className="text-gray-600 mb-6" data-id="g200brn1g" data-path="components/Registration.js">
                  Thank you for registering for Stock Summit 2025. We've sent a confirmation email to {formData.teamLeaderEmail} with further instructions.
                </p>
                <p className="text-gray-600 mb-6" data-id="bo30pc3hl" data-path="components/Registration.js">
                  Please complete the payment within 48 hours to secure your spot. Your team ID is: <span className="font-semibold" data-id="kql91w88w" data-path="components/Registration.js">SS2025-{Math.floor(1000 + Math.random() * 9000)}</span>
                </p>
                <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-blue hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-blue" data-id="fz538kjhr" data-path="components/Registration.js">

                  <i className="fas fa-arrow-left mr-2" data-id="rr1hras89" data-path="components/Registration.js"></i> Back to form
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </section>);

}