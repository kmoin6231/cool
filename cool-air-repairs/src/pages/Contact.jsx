import { Link } from "react-router-dom";

{Link}
const Contact = () => {
  return (
    <div className="py-8 sm:py-12 lg:py-16 container mx-auto px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10 text-center text-gray-800">
          Contact Us
        </h1>
        
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-md sm:shadow-lg">
          <form className="space-y-4 sm:space-y-6" action>
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Name
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Email
              </label>
              <input 
                type="email" 
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Message
              </label>
              <textarea 
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                rows="4"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button 
              
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-6 rounded-md transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <Link 
          to="/" 
          className="text-xl md:text-2xl font-bold transform hover:scale-105 transition-transform duration-300"
        >
          Submit
        </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;