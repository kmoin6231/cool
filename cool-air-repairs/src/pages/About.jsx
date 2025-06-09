const About = () => {
  return (
    <div className="py-8 sm:py-12 lg:py-16 container mx-auto px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
          About Us
        </h1>
        
        <div className="space-y-4 sm:space-y-5 text-gray-600">
          <p className="text-base sm:text-lg leading-relaxed">
            CoolAC Repairs has been serving the community since 2010 with top-quality 
            air conditioning repair and maintenance services.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed">
            Our team of <span className="font-semibold text-blue-600">certified technicians</span> has the 
            experience and knowledge to handle any AC problem, big or small.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed">
            We pride ourselves on <span className="font-semibold text-blue-600">honest service</span>, 
            <span className="font-semibold text-blue-600"> fair pricing</span>, and 
            <span className="font-semibold text-blue-600"> customer satisfaction</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;