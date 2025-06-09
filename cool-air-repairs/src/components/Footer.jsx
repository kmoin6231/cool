const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 text-xs py-3">
    <div className="container mx-auto px-2">
      <div className="flex flex-wrap justify-between items-center">
        
        <div className="w-full mt-1 text-center border-t border-gray-800 pt-1">
          © {new Date().getFullYear()} CoolAC
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;