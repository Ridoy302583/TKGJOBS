import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl font-bold mb-4">Welcome to TKJOBS</h1>
          <p className="text-xl">Your gateway to exciting career opportunities</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <form className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <input type="text" placeholder="Job title or keyword" className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <input type="text" placeholder="Location" className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="w-full md:w-1/3 px-2">
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Find Jobs</button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <i className="bi bi-search text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Explore Opportunities</h3>
            <p className="text-gray-600">Discover a wide range of job openings across various industries</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <i className="bi bi-person-badge text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Build Your Profile</h3>
            <p className="text-gray-600">Create a compelling profile to showcase your skills and experience</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <i className="bi bi-briefcase text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Apply with Ease</h3>
            <p className="text-gray-600">Streamlined application process for your dream job</p>
          </div>
        </div>
        <div className="text-center">
          <Link to="/jobs" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Browse All Jobs</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
