import React, { useState } from 'react';
import { Briefcase, Building2, MapPin, Clock, Search, Filter, MessageSquare, Send, Plus, X, DollarSign } from 'lucide-react';

const Jobs = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showPostJobModal, setShowPostJobModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'Remote',
      type: 'Full-time',
      category: 'tech',
      postedBy: 'Alumni',
      description: 'Looking for an experienced software engineer to join our team working on cutting-edge AI technologies.',
      requirements: [
        '5+ years of experience in software development',
        'Strong knowledge of React and Node.js',
        'Experience with cloud platforms (AWS/GCP)',
        'Machine Learning experience preferred'
      ],
      salary: '$120,000 - $150,000',
      postedDate: '2025-03-15',
      contactEmail: 'sarah.ahmed@google.com',
      fullDescription: 'We are seeking a Senior Software Engineer to join our AI Research team at Google. You will be working on next-generation search technologies and machine learning algorithms that impact billions of users worldwide. This role offers the opportunity to work with cutting-edge technology and collaborate with some of the brightest minds in the industry.'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Microsoft',
      location: 'Seattle, WA',
      type: 'Full-time',
      category: 'tech',
      postedBy: 'Company',
      description: 'Lead product strategy and development for our cloud computing platform.',
      requirements: [
        '3+ years of product management experience',
        'Strong analytical and communication skills',
        'Experience with cloud technologies',
        'MBA preferred'
      ],
      salary: '$110,000 - $140,000',
      postedDate: '2025-03-10',
      contactEmail: 'careers@microsoft.com',
      fullDescription: 'Join Microsoft as a Product Manager for our Azure cloud platform. You will be responsible for defining product roadmaps, working with engineering teams, and driving product strategy for enterprise customers. This role requires strong leadership skills and the ability to work in a fast-paced environment.'
    },
    {
      id: 3,
      title: 'Investment Analyst',
      company: 'Goldman Sachs',
      location: 'New York, NY',
      type: 'Full-time',
      category: 'finance',
      postedBy: 'Alumni',
      description: 'Analyze investment opportunities and support senior analysts in portfolio management.',
      requirements: [
        'Bachelor\'s degree in Finance or Economics',
        'Strong analytical and quantitative skills',
        'CFA Level 1 preferred',
        'Proficiency in Excel and financial modeling'
      ],
      salary: '$85,000 - $110,000',
      postedDate: '2025-03-08',
      contactEmail: 'ahmed.hassan@gs.com',
      fullDescription: 'Goldman Sachs is looking for a talented Investment Analyst to join our equity research team. You will be responsible for conducting financial analysis, building financial models, and supporting senior analysts in making investment recommendations. This is an excellent opportunity to start your career in investment banking.'
    },
    {
      id: 4,
      title: 'Marketing Manager',
      company: 'Unilever',
      location: 'Karachi, Pakistan',
      type: 'Full-time',
      category: 'marketing',
      postedBy: 'Company',
      description: 'Lead marketing campaigns for consumer goods across Pakistan market.',
      requirements: [
        '4+ years of marketing experience',
        'Experience in FMCG industry',
        'Strong project management skills',
        'Digital marketing expertise'
      ],
      salary: 'PKR 800,000 - 1,200,000',
      postedDate: '2025-03-12',
      contactEmail: 'careers@unilever.com',
      fullDescription: 'Unilever Pakistan is seeking a Marketing Manager to lead brand marketing initiatives for our personal care products. You will be responsible for developing marketing strategies, managing advertising campaigns, and working with cross-functional teams to drive brand growth in the Pakistani market.'
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'Netflix',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      category: 'tech',
      postedBy: 'Company',
      description: 'Build machine learning models to improve content recommendation systems.',
      requirements: [
        'PhD in Computer Science or related field',
        'Experience with Python and R',
        'Strong background in machine learning',
        'Experience with big data technologies'
      ],
      salary: '$130,000 - $180,000',
      postedDate: '2025-03-14',
      contactEmail: 'datascience@netflix.com',
      fullDescription: 'Netflix is looking for a Data Scientist to join our recommendation algorithms team. You will work on improving our content recommendation systems using advanced machine learning techniques. This role offers the opportunity to impact the viewing experience of over 200 million subscribers worldwide.'
    }
  ];

  const filteredJobs = jobs.filter(job => 
    (filter === 'all' || job.category === filter) &&
    (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     job.company.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleApply = (job: any) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const handleContactRecruiter = (job: any) => {
    setSelectedJob(job);
    setShowMessageModal(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Opportunities</h1>
            <p className="text-xl mb-8">Discover job opportunities posted by fellow alumni and partner companies.</p>
            <button 
              onClick={() => setShowPostJobModal(true)}
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-md transition-colors flex items-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              Post a Job
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search jobs by title or company"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center flex-wrap gap-2">
              <Filter className="h-5 w-5 text-green-800" />
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'all' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Jobs
              </button>
              <button 
                onClick={() => setFilter('tech')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'tech' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tech
              </button>
              <button 
                onClick={() => setFilter('finance')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'finance' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Finance
              </button>
              <button 
                onClick={() => setFilter('marketing')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'marketing' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Marketing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {filteredJobs.map(job => (
              <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-800 mb-2">{job.title}</h3>
                    <div className="flex items-center mt-2 text-gray-600 mb-2">
                      <Building2 className="h-4 w-4 mr-2" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span className="font-medium text-green-600">{job.salary}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      {job.postedBy}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Posted on {new Date(job.postedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <div className="flex-shrink-0 h-4 w-4 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold mr-2 mt-0.5">✓</div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => handleApply(job)}
                    className="px-6 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                  >
                    Apply Now
                  </button>
                  <button 
                    onClick={() => setSelectedJob(job)}
                    className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors font-medium"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => handleContactRecruiter(job)}
                    className="px-6 py-2 bg-yellow-500 text-green-900 rounded-md hover:bg-yellow-600 transition-colors flex items-center font-medium"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Recruiter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && !showApplicationModal && !showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-green-800">{selectedJob.title}</h2>
                <button onClick={() => setSelectedJob(null)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Building2 className="h-5 w-5 mr-3" />
                  <span className="font-medium">{selectedJob.company}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>{selectedJob.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-5 w-5 mr-3" />
                  <span className="font-medium text-green-600">{selectedJob.salary}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Job Description</h3>
                <p className="text-gray-600">{selectedJob.fullDescription}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold mr-3 mt-0.5">✓</div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => handleApply(selectedJob)}
                  className="flex-1 px-6 py-3 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => handleContactRecruiter(selectedJob)}
                  className="flex-1 px-6 py-3 bg-yellow-500 text-green-900 rounded-md hover:bg-yellow-600 transition-colors font-medium"
                >
                  Contact Recruiter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Modal */}
      {showApplicationModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-green-800">Apply for Position</h2>
                <button onClick={() => setShowApplicationModal(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800">{selectedJob.title}</h3>
                <p className="text-gray-600">{selectedJob.company}</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF)</label>
                  <input
                    type="file"
                    accept=".pdf"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {showMessageModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-green-800">Contact Recruiter</h2>
                <button onClick={() => setShowMessageModal(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800">{selectedJob.title}</h3>
                <p className="text-gray-600">{selectedJob.company}</p>
                <p className="text-sm text-gray-500">Contact: {selectedJob.contactEmail}</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Hi, I'm interested in the position and would like to learn more..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-500 text-green-900 rounded-md hover:bg-yellow-600 transition-colors font-medium flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Post Job Modal */}
      {showPostJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-green-800">Post a Job</h2>
                <button onClick={() => setShowPostJobModal(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Internship</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
                  <input
                    type="text"
                    placeholder="e.g., $80,000 - $120,000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="List the key requirements for this position..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                >
                  Post Job
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;