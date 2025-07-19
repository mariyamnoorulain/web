import React, { useState } from 'react';
import { Search, Award, Briefcase, GraduationCap, Filter, MapPin, Calendar } from 'lucide-react';
import StoryModal from '../components/StoryModal';

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState<null | any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const stories = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      batch: '2015',
      title: 'Senior Software Engineer at Google',
      story: 'Sarah\'s journey from a computer science student to a tech leader at one of the world\'s most innovative companies.',
      achievements: [
        'Led development of Google\'s AI-powered search features',
        'Published 15+ research papers in top-tier conferences',
        'Mentored 50+ junior engineers across different teams',
        'Received Google\'s Excellence in Engineering Award 2023',
        'Speaker at major tech conferences worldwide'
      ],
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Technology',
      location: 'San Francisco, USA',
      fullStory: 'Sarah Ahmed graduated from Namal University in 2015 with a degree in Computer Science. During her time at university, she was passionate about artificial intelligence and machine learning. After graduation, she started as a junior developer at a local tech company in Lahore, where she quickly distinguished herself through her innovative problem-solving approach and dedication to learning. Within two years, she had moved to a senior position and was leading a small team of developers. Her breakthrough came when she developed an innovative algorithm for natural language processing that caught the attention of Google recruiters. In 2018, she joined Google as a Software Engineer and has since risen through the ranks to become a Senior Software Engineer, leading critical projects in AI-powered search technologies. Sarah is also passionate about giving back to the community and regularly mentors students from Pakistan through virtual sessions.'
    },
    {
      id: 2,
      name: 'Dr. Imran Khan',
      batch: '2012',
      title: 'Founder & CEO of TechVentures',
      story: 'From engineering student to successful entrepreneur, Dr. Imran built a multi-million dollar renewable energy company.',
      achievements: [
        'Founded TechVentures with $50M+ valuation',
        'Developed 20+ renewable energy projects across Pakistan',
        'Created 500+ jobs in the clean energy sector',
        'Received Young Entrepreneur Award 2022',
        'PhD in Renewable Energy from MIT'
      ],
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Entrepreneurship',
      location: 'Islamabad, Pakistan',
      fullStory: 'Dr. Imran Khan\'s entrepreneurial journey began during his final year at Namal University when he participated in a renewable energy competition. His innovative solar panel design won first place and sparked his passion for clean energy solutions. After completing his electrical engineering degree in 2012, he pursued a PhD at MIT, focusing on renewable energy systems. During his doctoral studies, he identified a significant gap in Pakistan\'s renewable energy market. In 2017, he returned to Pakistan and founded TechVentures, starting with a small team of five engineers. The company initially focused on residential solar installations but quickly expanded to large-scale commercial projects. Under his leadership, TechVentures has become one of Pakistan\'s leading renewable energy companies, with projects spanning from Karachi to Lahore. Dr. Khan is also a strong advocate for sustainable development and frequently speaks at international conferences about the role of renewable energy in developing countries.'
    },
    {
      id: 3,
      name: 'Fatima Malik',
      batch: '2017',
      title: 'Research Scientist at MIT',
      story: 'Fatima\'s groundbreaking research in biotechnology has earned her international recognition and multiple awards.',
      achievements: [
        'Developed breakthrough cancer treatment protocol',
        'Published in Nature and Science journals',
        'Received MIT Excellence in Research Award',
        'Patent holder for 3 biotech innovations',
        'Youngest researcher to receive NIH grant at MIT'
      ],
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Research',
      location: 'Boston, USA',
      fullStory: 'Dr. Fatima Malik\'s passion for biotechnology was ignited during her undergraduate studies at Namal University, where she majored in biological sciences. Her exceptional academic performance and research aptitude earned her a full scholarship to pursue her PhD at MIT. Her doctoral research focused on developing novel approaches to cancer treatment using nanotechnology. Her breakthrough came when she successfully developed a targeted drug delivery system that significantly reduced side effects while improving treatment efficacy. This research was published in Nature Medicine and has been cited over 500 times. Currently, she leads a research team of 12 scientists and has secured over $2 million in research funding. Dr. Malik is also committed to promoting STEM education among young women and regularly conducts virtual workshops for students in Pakistan. She plans to return to Pakistan in the future to establish a world-class biotechnology research center.'
    },
    {
      id: 4,
      name: 'Ahmed Hassan',
      batch: '2014',
      title: 'Investment Director at Goldman Sachs',
      story: 'Ahmed\'s expertise in financial markets has made him one of the youngest directors in Goldman Sachs\' history.',
      achievements: [
        'Managed $500M+ investment portfolio',
        'Youngest Director in company\'s Pakistan operations',
        'Led 15+ successful IPO transactions',
        'CFA Charter holder and MBA from Wharton',
        'Featured in Forbes 30 Under 30 Finance list'
      ],
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Finance',
      location: 'New York, USA',
      fullStory: 'Ahmed Hassan graduated with a BBA from Namal University in 2014, where he was actively involved in the investment club and consistently ranked among the top students. His analytical skills and passion for financial markets led him to secure an internship at a leading investment bank in Karachi. After graduation, he worked for two years gaining valuable experience in equity research and corporate finance. His exceptional performance earned him a scholarship to pursue an MBA at Wharton School, University of Pennsylvania. During his MBA, he interned at Goldman Sachs and impressed senior management with his market insights and client relationship skills. Upon graduation, he joined Goldman Sachs full-time as an Associate and rapidly progressed through the ranks. In 2022, at the age of 30, he was promoted to Director, making him one of the youngest directors in the firm\'s history. Ahmed specializes in emerging markets and has been instrumental in several high-profile transactions involving Pakistani companies. He is also passionate about financial literacy and regularly conducts workshops for young professionals.'
    },
    {
      id: 5,
      name: 'Dr. Ayesha Siddiqui',
      batch: '2016',
      title: 'Chief Medical Officer at WHO',
      story: 'Dr. Ayesha\'s dedication to global health has led her to become one of the youngest CMOs in WHO\'s history.',
      achievements: [
        'Led COVID-19 response in South Asia region',
        'Implemented vaccination programs in 15+ countries',
        'Published 25+ papers in medical journals',
        'Received WHO Excellence in Public Health Award',
        'MD from Harvard Medical School'
      ],
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Healthcare',
      location: 'Geneva, Switzerland',
      fullStory: 'Dr. Ayesha Siddiqui\'s journey in medicine began with her pre-medical studies at Namal University, where she excelled in biological sciences and chemistry. Her commitment to serving underserved communities was evident from her volunteer work in rural health clinics during university breaks. After completing her degree in 2016, she was accepted into Harvard Medical School, where she specialized in infectious diseases and public health. During medical school, she conducted research on tropical diseases affecting developing countries and published several papers in prestigious journals. After completing her residency, she joined Doctors Without Borders and worked in refugee camps and conflict zones across Africa and Asia. Her field experience and research background caught the attention of WHO recruiters. She joined WHO in 2021 as a Medical Officer and quickly rose through the ranks due to her exceptional leadership during the COVID-19 pandemic. In 2023, she was appointed as Chief Medical Officer for the South Asia region, making her one of the youngest CMOs in WHO\'s history. Dr. Siddiqui continues to advocate for equitable healthcare access and regularly collaborates with Pakistani medical institutions to improve healthcare delivery.'
    }
  ];

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || story.category.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni Success Stories</h1>
            <p className="text-xl">Celebrating the remarkable achievements of our graduates who are making a difference around the world.</p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search success stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-green-800" />
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'all' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Stories
              </button>
              <button 
                onClick={() => setFilter('technology')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'technology' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Technology
              </button>
              <button 
                onClick={() => setFilter('entrepreneurship')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'entrepreneurship' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Business
              </button>
              <button 
                onClick={() => setFilter('research')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'research' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Research
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-green-700 mb-4">
                    {story.category === "Technology" && <Briefcase className="w-5 h-5" />}
                    {story.category === "Entrepreneurship" && <Award className="w-5 h-5" />}
                    {story.category === "Research" && <GraduationCap className="w-5 h-5" />}
                    {story.category === "Finance" && <Briefcase className="w-5 h-5" />}
                    {story.category === "Healthcare" && <Award className="w-5 h-5" />}
                    <span className="text-sm font-medium">{story.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <p className="text-green-600 font-semibold mb-1">{story.title}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Class of {story.batch}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{story.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {story.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <div className="flex-shrink-0 h-4 w-4 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold mr-2 mt-0.5">✓</div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedStory(story)}
                    className="w-full px-4 py-2 bg-green-800 hover:bg-green-700 text-white font-bold rounded-md transition-colors"
                  >
                    Read Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      {selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
};

export default SuccessStories;