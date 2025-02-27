import React from 'react'
import { Link } from 'react-router-dom'

const jobListings = [
  { id: 1, title: 'Software Engineer', company: 'Tech Innovators', location: 'Dhaka, Bangladesh', salary: '৳80,000 - ৳120,000', type: 'Full-time' },
  { id: 2, title: 'Marketing Specialist', company: 'Global Brands', location: 'Chittagong, Bangladesh', salary: '৳70,000 - ৳90,000', type: 'Full-time' },
  { id: 3, title: 'Data Analyst', company: 'Insights Co.', location: 'Sylhet, Bangladesh', salary: '৳60,000 - ৳80,000', type: 'Remote' },
  { id: 4, title: 'Customer Success Manager', company: 'Service Pro', location: 'Khulna, Bangladesh', salary: '৳50,000 - ৳70,000', type: 'Full-time' },
  { id: 5, title: 'UX/UI Designer', company: 'Creative Solutions', location: 'Rajshahi, Bangladesh', salary: '৳70,000 - ৳100,000', type: 'Freelance' },
]

const JobListingsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Explore Job Opportunities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobListings.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.company}</p>
            <p className="text-gray-600 mb-2"><i className="bi bi-geo-alt mr-2"></i>{job.location}</p>
            <p className="text-gray-600 mb-2"><i className="bi bi-cash mr-2"></i>{job.salary}</p>
            <p className="text-gray-600 mb-4"><i className="bi bi-clock mr-2"></i>{job.type}</p>
            <Link to={`/jobs/${job.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobListingsPage
