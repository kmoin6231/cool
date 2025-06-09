import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const allServices = [
    {
      title: "Residential AC Repair",
      description: "Fix all home air conditioning issues"
    },
    {
      title: "Commercial AC Service",
      description: "For businesses and offices"
    },
    {
      title: "Emergency Repairs",
      description: "24/7 service for urgent issues"
    },
    {
      title: "Preventive Maintenance",
      description: "Avoid breakdowns with regular checkups"
    },
    {
      title: "AC Installation",
      description: "Professional installation services"
    },
    {
      title: "Duct Cleaning",
      description: "Improve your air quality"
    }
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 container mx-auto px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            All Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your cooling needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allServices.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title}
              description={service.description}
              className="hover:transform hover:-translate-y-1 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;