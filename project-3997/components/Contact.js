function Contact() {
  const [contactForm, setContactForm] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // In a real app, you would send this data to your backend
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20" data-id="2yekjgmhu" data-path="components/Contact.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="o85vs65ws" data-path="components/Contact.js">
        <div className="text-center" data-id="zw34xofqq" data-path="components/Contact.js">
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl" data-id="a51qf7sel" data-path="components/Contact.js">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto" data-id="615sjxdzu" data-path="components/Contact.js">
            Have questions or need assistance? We're here to help!
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12" data-id="pqakcs91h" data-path="components/Contact.js">
          <div data-id="af7lmgn04" data-path="components/Contact.js">
            <div className="bg-white rounded-xl shadow-md p-8" data-id="32g50ztns" data-path="components/Contact.js">
              <h3 className="text-2xl font-bold text-navy-blue mb-6" data-id="bb9yjg17c" data-path="components/Contact.js">Get in Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-id="uiwctawej" data-path="components/Contact.js">
                <div data-id="qqhebywpf" data-path="components/Contact.js">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1" data-id="8nan3lyru" data-path="components/Contact.js">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue focus:border-soft-blue"
                    required data-id="dp68v1jtx" data-path="components/Contact.js" />

                </div>
                
                <div data-id="086qn26g0" data-path="components/Contact.js">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" data-id="thi1kc94y" data-path="components/Contact.js">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue focus:border-soft-blue"
                    required data-id="9at5wyl1a" data-path="components/Contact.js" />

                </div>
                
                <div data-id="dnq9rjd86" data-path="components/Contact.js">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1" data-id="2ygdumhrb" data-path="components/Contact.js">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue focus:border-soft-blue"
                    required data-id="kyb2d95x8" data-path="components/Contact.js" />

                </div>
                
                <div data-id="t2i0d0135" data-path="components/Contact.js">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1" data-id="khfeofmhk" data-path="components/Contact.js">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={contactForm.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-soft-blue focus:border-soft-blue"
                    required data-id="m8mrghgym" data-path="components/Contact.js">
                  </textarea>
                </div>
                
                <div data-id="p9w5kam0a" data-path="components/Contact.js">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-accent-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-green font-medium"
                    disabled={submitted} data-id="sy1zrz7up" data-path="components/Contact.js">

                    {submitted ?
                    <span className="flex items-center justify-center" data-id="h63ub2olb" data-path="components/Contact.js">
                        <i className="fas fa-check mr-2" data-id="fkuql2vc9" data-path="components/Contact.js"></i> Message Sent!
                      </span> :

                    'Send Message'
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div data-id="x9d60mpz5" data-path="components/Contact.js">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8" data-id="aq5bsyl49" data-path="components/Contact.js">
              <h3 className="text-2xl font-bold text-navy-blue mb-6" data-id="2vts3w1cw" data-path="components/Contact.js">Contact Information</h3>
              
              <div className="space-y-6" data-id="j0juei8zo" data-path="components/Contact.js">
                <div className="flex items-start" data-id="9e72pqt5v" data-path="components/Contact.js">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-soft-blue bg-opacity-20 flex items-center justify-center text-soft-blue" data-id="qxcpmk7xk" data-path="components/Contact.js">
                    <i className="fas fa-envelope" data-id="h0bwrk2im" data-path="components/Contact.js"></i>
                  </div>
                  <div className="ml-4" data-id="rryb9evxz" data-path="components/Contact.js">
                    <h4 className="text-lg font-semibold text-navy-blue" data-id="d0eqgoziy" data-path="components/Contact.js">Email</h4>
                    <a href="mailto:stocksummit@cmscui.org" className="text-gray-600 hover:text-soft-blue" data-id="qs4o4k3c6" data-path="components/Contact.js">
                      stocksummit@cmscui.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start" data-id="ggclkn9eq" data-path="components/Contact.js">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-soft-blue bg-opacity-20 flex items-center justify-center text-soft-blue" data-id="8rj0lw3me" data-path="components/Contact.js">
                    <i className="fas fa-phone" data-id="eya51pf33" data-path="components/Contact.js"></i>
                  </div>
                  <div className="ml-4" data-id="p9bicxskl" data-path="components/Contact.js">
                    <h4 className="text-lg font-semibold text-navy-blue" data-id="25bhl4yr1" data-path="components/Contact.js">Phone</h4>
                    <a href="tel:+6221987654321" className="text-gray-600 hover:text-soft-blue" data-id="nyg8vxrac" data-path="components/Contact.js">
                      +62 21 9876 54321
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start" data-id="8lulu32cg" data-path="components/Contact.js">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-soft-blue bg-opacity-20 flex items-center justify-center text-soft-blue" data-id="jb1cs2m6c" data-path="components/Contact.js">
                    <i className="fas fa-map-marker-alt" data-id="uthjgey4i" data-path="components/Contact.js"></i>
                  </div>
                  <div className="ml-4" data-id="oosayndaf" data-path="components/Contact.js">
                    <h4 className="text-lg font-semibold text-navy-blue" data-id="qbt7ls21p" data-path="components/Contact.js">Address</h4>
                    <p className="text-gray-600" data-id="w0akj7c4c" data-path="components/Contact.js">
                      Faculty of Economics & Business<br data-id="q5z1hiaep" data-path="components/Contact.js" />
                      University of Indonesia<br data-id="jdd6blu21" data-path="components/Contact.js" />
                      Depok, West Java, Indonesia 16424
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8" data-id="1ys2pjizi" data-path="components/Contact.js">
              <h3 className="text-2xl font-bold text-navy-blue mb-6" data-id="hurg51ivf" data-path="components/Contact.js">Follow Us</h3>
              
              <div className="grid grid-cols-2 gap-4" data-id="1qamst81b" data-path="components/Contact.js">
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-50" data-id="6y0i0w5pw" data-path="components/Contact.js">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white" data-id="z9m1l1lki" data-path="components/Contact.js">
                    <i className="fab fa-facebook-f" data-id="g4ihwbvii" data-path="components/Contact.js"></i>
                  </div>
                  <span className="ml-3 font-medium text-gray-700" data-id="illbyznc9" data-path="components/Contact.js">Facebook</span>
                </a>
                
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-50" data-id="hmz9vkoho" data-path="components/Contact.js">
                  <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white" data-id="q34oeiusq" data-path="components/Contact.js">
                    <i className="fab fa-instagram" data-id="py3qawpeh" data-path="components/Contact.js"></i>
                  </div>
                  <span className="ml-3 font-medium text-gray-700" data-id="6ipnq1e6r" data-path="components/Contact.js">Instagram</span>
                </a>
                
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-50" data-id="0fr0c84r3" data-path="components/Contact.js">
                  <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white" data-id="2lv6gfpoh" data-path="components/Contact.js">
                    <i className="fab fa-twitter" data-id="rcg55tmzb" data-path="components/Contact.js"></i>
                  </div>
                  <span className="ml-3 font-medium text-gray-700" data-id="x30uedpt5" data-path="components/Contact.js">Twitter</span>
                </a>
                
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-50" data-id="qd2elbidr" data-path="components/Contact.js">
                  <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white" data-id="6vt8b4zfd" data-path="components/Contact.js">
                    <i className="fab fa-linkedin-in" data-id="q415plc6b" data-path="components/Contact.js"></i>
                  </div>
                  <span className="ml-3 font-medium text-gray-700" data-id="likb0jiec" data-path="components/Contact.js">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}