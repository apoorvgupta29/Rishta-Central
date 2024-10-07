const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <p>&copy; 2024 Your Company Name. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
      </div>
    </footer>
  );
};

export default Footer;
