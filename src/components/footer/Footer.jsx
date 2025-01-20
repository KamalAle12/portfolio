import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div id="contact" className="container mx-auto px-4">
        {/* Contact Us Section */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold mb-2">Contact Me</h2>
          <p className="text-sm">
            Email: <a href="mailto:www.kiranale@gmail.com" className="text-blue-400 underline">www.kiranale@gmail.com</a>
          </p>
        </div>
        {/* All Rights Reserved */}
        <div className="text-center border-t border-gray-700 pt-4">
          <p className="text-xs">&copy; Kamal Ale. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
