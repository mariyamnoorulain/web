import React, { useState } from 'react';
import { Shield, TrendingUp, Users, Briefcase, LineChart, BookOpen, Mail, Phone, MapPin, MessageSquare, Star, Award } from 'lucide-react';

const ConnectingWithAlumni = () => {
  const [selectedMentor, setSelectedMentor] = useState<any>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Ahmed',
      title: 'Senior Software Engineer at Google',
      batch: '2015',
      expertise: ['Software Engineering', 'AI/ML', 'Career Development', 'Tech Leadership'],
      experience: '8+ years',
      location: 'San Francisco, USA',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4.9,
      mentees: 45,
      bio: 'Leading AI research at Google with expertise in machine learning and software architecture. Passionate about mentoring the next generation of tech professionals.',
      achievements: [
        'Led development of Google\'s AI-powered search features',
        'Published 15+ research papers',
        'Google Excellence in Engineering Award 2023'
      ],
      availability: 'Weekends',
      preferredContact: 'Video Call'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      title: 'Investment Director at Goldman Sachs',
      batch: '2014',
      expertise: ['Investment Banking', 'Financial Analysis', 'Portfolio Management', 'Career Strategy'],
      experience: '10+ years',
      location: 'New York, USA',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4.8,
      mentees: 32,
      bio: 'Investment Director specializing in emerging markets. Helps young professionals navigate finance careers and investment strategies.',
      achievements: [
        'Managed $500M+ investment portfolio',
        'Youngest Director in company history',
        'Forbes 30 Under 30 Finance'
      ],
      availability: 'Evenings',
      preferredContact: 'Phone Call'
    },
    {
      id: 3,
      name: 'Dr. Imran Khan',
      title: 'Founder & CEO of TechVentures',
      batch: '2012',
      expertise: ['Entrepreneurship', 'Renewable Energy', 'Business Strategy', 'Startup Funding'],
      experience: '12+ years',
      location: 'Islamabad, Pakistan',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4.9,
      mentees: 28,
      bio: 'Serial entrepreneur with successful exits. Specializes in clean energy solutions and helps aspiring entrepreneurs build sustainable businesses.',
      achievements: [
        'Founded TechVentures with $50M+ valuation',
        'Young Entrepreneur Award 2022',
        'PhD in Renewable Energy from MIT'
      ],
      availability: 'Flexible',
      preferredContact: 'Video Call'
    },
    {
      id: 4,
      name: 'Dr. Fatima Malik',
      title: 'Research Scientist at MIT',
      batch: '2017',
      expertise: ['Biotechnology', 'Research Methodology', 'Academic Career', 'Scientific Writing'],
      experience: '6+ years',
      location: 'Boston, USA',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4.7,
      mentees: 22,
      bio: 'Leading biotechnology researcher with breakthrough innovations in cancer treatment. Guides students pursuing research careers.',
      achievements: [
        'Published in Nature and Science journals',
        'MIT Excellence in Research Award',
        'Patent holder for 3 biotech innovations'
      ],
      availability: 'Weekdays',
      preferredContact: 'Email'
    },
    {
      id: 5,
      name: 'Ayesha Khan',
      title: 'VP Marketing at Microsoft',
      batch: '2013',
      expertise: ['Digital Marketing', 'Brand Strategy', 'Product Marketing', 'Leadership'],
      experience: '9+ years',
      location: 'Seattle, USA',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4.8,
      mentees: 38,
      bio: 'Marketing executive with expertise in tech product launches and brand building. Passionate about developing marketing talent.',
      achievements: [
        'Led successful Azure marketing campaigns',
        'Marketing Executive of the Year 2023',
        'Built marketing teams across 3 continents'
      ],
      availability: 'Weekends',
      preferredContact: 'Video Call'
    }
  ];

  const handleContactMentor = (mentor: any) => {
    setSelectedMentor(mentor);
    setShowContactModal(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect with Alumni Mentors</h1>
            <p className="text-xl">Get guidance from experienced alumni who are leaders in their fields. Access exclusive mentorship and professional development opportunities.</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Premium Alumni Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access exclusive tools and resources designed for career advancement and professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Executive Advisory Board Portal */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Executive Advisory Board Portal</h3>
              <p className="text-gray-600 mb-6">Connect with C-level alumni who provide strategic guidance and mentorship.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">One-on-one mentorship sessions</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Career strategy planning</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Industry-specific guidance</span>
                </li>
              </ul>
              <button className="w-full px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors">
                Access Portal
              </button>
            </div>

            {/* Alumni Venture Capital Network */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Alumni Venture Capital Network</h3>
              <p className="text-gray-600 mb-6">Connect with alumni investors and access funding opportunities.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Startup pitch opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Investment networking events</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Deal flow platform access</span>
                </li>
              </ul>
              <button className="w-full px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors">
                Join Network
              </button>
            </div>

            {/* Industry Intelligence Hub */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <LineChart className="h-8 w-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Industry Intelligence Hub</h3>
              <p className="text-gray-600 mb-6">Access real-time market insights and industry analysis.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Market trend reports</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Industry expert insights</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Exclusive research papers</span>
                </li>
              </ul>
              <button className="w-full px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors">
                Access Hub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Mentors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Connect with Expert Mentors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get personalized guidance from successful alumni who are leaders in their industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map(mentor => (
              <div key={mentor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{mentor.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-green-800">{mentor.name}</h3>
                    <span className="text-sm text-gray-500">Class of {mentor.batch}</span>
                  </div>
                  
                  <p className="text-green-600 font-semibold mb-2">{mentor.title}</p>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{mentor.location}</span>
                    <span className="mx-2">•</span>
                    <span>{mentor.experience}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{mentor.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.slice(0, 3).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                      {mentor.expertise.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{mentor.expertise.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{mentor.mentees} mentees</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      <span>{mentor.achievements.length} achievements</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Availability:</span>
                      <span className="font-medium">{mentor.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Preferred Contact:</span>
                      <span className="font-medium">{mentor.preferredContact}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleContactMentor(mentor)}
                    className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-md transition-colors flex items-center justify-center"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Mentor
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Mentor Modal */}
      {showContactModal && selectedMentor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-green-800">Contact Mentor</h2>
                <button 
                  onClick={() => setShowContactModal(false)} 
                  className="text-gray-500 hover:text-gray-700"
                >
                  <span className="sr-only">Close</span>
                  ✕
                </button>
              </div>

              <div className="flex items-center mb-6">
                <img 
                  src={selectedMentor.image} 
                  alt={selectedMentor.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{selectedMentor.name}</h3>
                  <p className="text-gray-600 text-sm">{selectedMentor.title}</p>
                  <div className="flex items-center text-yellow-500 text-sm">
                    <Star className="h-4 w-4 mr-1" />
                    <span>{selectedMentor.rating} rating</span>
                  </div>
                </div>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Career Guidance</option>
                    <option>Industry Insights</option>
                    <option>Job Search Help</option>
                    <option>Skill Development</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Hi, I would like to connect with you for mentorship regarding..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Meeting Time</label>
                  <input
                    type="text"
                    placeholder="e.g., Weekends, Evenings, Flexible"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl mb-8">Join our premium membership to access these exclusive features and connect with industry leaders.</p>
          <button className="px-8 py-4 bg-yellow-500 text-green-900 rounded-md hover:bg-yellow-600 transition-colors font-bold text-lg">
            Upgrade to Premium
          </button>
        </div>
      </section>
    </div>
  );
};

export default ConnectingWithAlumni;