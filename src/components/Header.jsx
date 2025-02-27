import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">TKJOBS</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/jobs" className="hover:text-blue-200">Jobs</Link></li>
            <li><Link to="#" className="hover:text-blue-200">Employers</Link></li>
            <li><Link to="#" className="hover:text-blue-200">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
