import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sec-color text-main-color py-12 px-10 shadow-xl border-t-2 border">
      <div className="flex flex-col md:flex-row justify-between h-20">
        {/* Left Section: Logo */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <img src="images/logo-color.png" alt="Codorium Logo" className="h-40 mt-9" />
        </div>

        {/* Center Section: Address, Email, and Company Name */}
       

        {/* Right Section: About the Website and Social Icons */}
        
      </div>

      {/* Footer Bottom Text */}
      <h3 className="text-center h-5 mt-16 pb-0 text-lm font-medium border-t-2 border-gray-300 pt-4">
        © Copyright 2024 Alchemist 
      </h3>
    </footer>
  );
};

export default Footer;
