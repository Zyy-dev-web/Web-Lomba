const { Link, useLocation } = ReactRouterDOM;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Competition", path: "/competition" },
  { name: "Register", path: "/register" },
  { name: "FAQ", path: "/faq" }];


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50" data-id="sqbx4uyqi" data-path="components/Navbar.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="gqk0mt0cv" data-path="components/Navbar.js">
        <div className="flex justify-between h-16" data-id="6ymcujec8" data-path="components/Navbar.js">
          <div className="flex" data-id="ka81yfn8y" data-path="components/Navbar.js">
            <div className="flex-shrink-0 flex items-center" data-id="h0r994xxj" data-path="components/Navbar.js">
              <Link to="/" className="text-navy-blue font-bold text-xl" data-id="mce0aig4v" data-path="components/Navbar.js">
                CMSC UI
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8" data-id="v1111e5vu" data-path="components/Navbar.js">
              {links.map((link) =>
              <Link
                key={link.path}
                to={link.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                location.pathname === link.path ?
                "border-accent-green text-navy-blue" :
                "border-transparent text-gray-500 hover:border-soft-blue hover:text-gray-700"}`
                } data-id="qkm7b9h9z" data-path="components/Navbar.js">

                  {link.name}
                </Link>
              )}
            </div>
          </div>
          
          <div className="flex items-center sm:hidden" data-id="uoh0s9bva" data-path="components/Navbar.js">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none" data-id="2hsbc4god" data-path="components/Navbar.js">

              <span className="sr-only" data-id="nwhthiy1i" data-path="components/Navbar.js">Open main menu</span>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} data-id="wo07nw8ls" data-path="components/Navbar.js"></i>
            </button>
          </div>
          
          <div className="hidden sm:flex items-center" data-id="xdrezfb17" data-path="components/Navbar.js">
            <Link
              to="/register"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent-green hover:bg-green-600" data-id="9jr24kdjw" data-path="components/Navbar.js">

              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`} data-id="zrlx748a7" data-path="components/Navbar.js">
        <div className="pt-2 pb-3 space-y-1" data-id="nx2g2dh7d" data-path="components/Navbar.js">
          {links.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
            location.pathname === link.path ?
            "border-accent-green text-navy-blue bg-soft-blue bg-opacity-10" :
            "border-transparent text-gray-500 hover:bg-gray-50 hover:border-soft-blue hover:text-gray-700"}`
            }
            onClick={() => setIsMenuOpen(false)} data-id="iykqi6syi" data-path="components/Navbar.js">

              {link.name}
            </Link>
          )}
          <Link
            to="/register"
            className="block text-center mx-4 my-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent-green hover:bg-green-600"
            onClick={() => setIsMenuOpen(false)} data-id="jjioa6zc6" data-path="components/Navbar.js">

            Register Now
          </Link>
        </div>
      </div>
    </nav>);

}