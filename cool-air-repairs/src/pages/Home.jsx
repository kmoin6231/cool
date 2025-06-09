import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      title: "AC Repair",
      description: "Fast and reliable air conditioner repair services"
    },
    {
      title: "Maintenance",
      description: "Regular maintenance to keep your AC running smoothly"
    },
    {
      title: "Installation",
      description: "Professional installation of new AC units"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 sm:py-24 lg:py-32 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Expert AC Repair Services
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-90">
            Fast, reliable, and affordable solutions
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-16 lg:py-20 container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;