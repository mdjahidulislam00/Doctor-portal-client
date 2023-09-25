import  { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-pink-400">
      <div className="container mx-auto flex items-center justify-around h-28">
        <div className="flex items-center">
          <div className="text-white text-4xl font-black">BDDoctor Portal</div>
        </div>
        <div className="hidden md:flex space-x-8 text-xl ">
          <button  className="text-white hover:text-gray-200">
            Home
          </button>
          <button  className="text-white hover:text-gray-200">
            About
          </button>
          <button  className="text-white hover:text-gray-200">
            Dental Services 
          </button>
          <button  className="text-white hover:text-gray-200">
            Reviews
          </button>
          <button  className="text-white hover:text-gray-200">
            Blog
          </button>
          <button  className="text-white hover:text-gray-200">
            Contract
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.293 5.293a1 1 0 011.414 0L12 13.586l7.293-7.293a1 1 0 111.414 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 010-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 100 2h14a1 1 0 100-2H4a1 1 0 100 0zM3 15a1 1 0 110-2h14a1 1 0 110 2H3z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <button  className="block text-white hover:text-gray-200 py-2">
            Home
          </button>
          <button  className="block text-white hover:text-gray-200 py-2">
            About
          </button>
          <button  className="block text-white hover:text-gray-200 py-2">
            Services
          </button>
          <button  className="block text-white hover:text-gray-200 py-2">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
