const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-blue-600">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;