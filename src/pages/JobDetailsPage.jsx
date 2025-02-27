import React from 'react'
import { useParams } from 'react-router-dom'

const jobDetails = {
  1: {
    title: 'Software Engineer',
    company: 'Tech Innovators',
    location: 'Dhaka, Bangladesh',
    salary: '৳80,000 - ৳120,000',
    type: 'Full-time',
    description: 'Tech Innovators is seeking a talented Software Engineer to join our innovative team. The ideal candidate will have a passion for developing cutting-edge web applications and a strong foundation in modern programming practices.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in software development',
      'Proficiency in JavaScript, React, and Node.js',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Strong problem-solving skills and attention to detail',
    ],
    benefits: [
      'Competitive salary package',
      'Health and dental insurance',
      'Flexible working hours and remote work options',
      'Professional development budget',
      'Modern office with recreational facilities',
    ],
  },
}

const JobDetailsPage = () => {
  const { id } = useParams()
  const job = jobDetails[id]

  if (!job) {
    return <div className="container mx-auto px-4 py-8">Job not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <div className="mb-6">
          <p className="text-xl text-gray-600 mb-2">{job.company}</p>
          <p className="text-gray-600 mb-2"><i className="bi bi-geo-alt mr-2"></i>{job.location}</p>
          <p className="text-gray-600 mb-2"><i className="bi bi-cash mr-2"></i>{job.salary}</p>
          <p className="text-gray-600"><i className="bi bi-clock mr-2"></i>{job.type}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
          <p className="text-gray-700">{job.description}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
          <ul className="list-disc list-inside text-gray-700">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">Apply Now</button>
      </div>
    </div>
  )
}

export default JobDetailsPage
