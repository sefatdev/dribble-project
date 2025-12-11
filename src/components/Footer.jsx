import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm text-gray-600">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-600 font-serif italic">Dribble</h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Dribbble is the world's leading <br />
            community for creatives to share, grow, <br />
            and get hired.
          </p>
          {/* <div className="flex items-center space-x-4 mt-4 text-gray-500 text-lg">
            <a href="#" className="hover:text-purple-600">📨</a>
            <a href="#" className="hover:text-purple-600">📸</a>
            <a href="#" className="hover:text-purple-600">🎵</a>
            <a href="#" className="hover:text-purple-600">📍</a>
            <a href="#" className="hover:text-purple-600">💬</a>
          </div> */}
        </div>

        {/* For designers */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">For designers</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-600">Go Pro!</a></li>
            <li><a href="#" className="hover:text-purple-600">Design blog</a></li>
            <li><a href="#" className="hover:text-purple-600">Overtime podcast</a></li>
            <li><a href="#" className="hover:text-purple-600">Playoffs</a></li>
            <li><a href="#" className="hover:text-purple-600">Refer a Friend</a></li>
            <li><a href="#" className="hover:text-purple-600">Code of conduct</a></li>
          </ul>
        </div>

        {/* Hire designers */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Hire designers</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-600">Post a job opening</a></li>
            <li><a href="#" className="hover:text-purple-600">Post a freelance project</a></li>
            <li><a href="#" className="hover:text-purple-600">Search for designers</a></li>
          </ul>
          <h3 className="font-semibold text-gray-900 mt-5 mb-3">Brands</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-600">Advertise with us</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-600">About</a></li>
            <li><a href="#" className="hover:text-purple-600">Careers</a></li>
            <li><a href="#" className="hover:text-purple-600">Support</a></li>
            <li><a href="#" className="hover:text-purple-600">Media kit</a></li>
            <li><a href="#" className="hover:text-purple-600">Testimonials</a></li>
            <li><a href="#" className="hover:text-purple-600">API</a></li>
          </ul>
        </div>

        {/* Directories + Design Resources */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Directories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-600">Design jobs</a></li>
            <li><a href="#" className="hover:text-purple-600">Designers for hire</a></li>
            <li><a href="#" className="hover:text-purple-600">Freelance designers for hire</a></li>
            <li><a href="#" className="hover:text-purple-600">Tags</a></li>
            <li><a href="#" className="hover:text-purple-600">Places</a></li>
            <li><a href="#" className="hover:text-purple-600">How to use</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
