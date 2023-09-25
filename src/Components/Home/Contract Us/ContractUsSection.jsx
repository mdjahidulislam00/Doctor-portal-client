const ContractUsSection = () => {
  return (
    <div className="mt-10 container mx-auto bg-gray-800">
      <header className="text-center">
        <h2 className="text-2xl font-bold text-pink-400 py-5">Contract Us</h2>
        <h3 className="text-4xl font-bold text-white ">
          Always Connect With Us
        </h3>
      </header>
      <div className="py-10 flex items-center justify-center">
        <div className="shadow-md rounded px-8 py-8 w-full sm:w-1/2 md:w-1/3 lg:w-7/12">
          <form>
            <div className="mb-4">
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContractUsSection;
