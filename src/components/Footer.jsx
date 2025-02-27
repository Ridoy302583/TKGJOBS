import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">TKJOBS</h3>
            <p className="text-sm">Your trusted partner in finding the perfect career opportunity.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Contact</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-blue-400"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-2xl hover:text-blue-400"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-2xl hover:text-blue-400"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-2xl hover:text-blue-400"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 TKJOBS. All rights reserved.</p>
          <p className="mt-2">Designed by WebSparks AI</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
