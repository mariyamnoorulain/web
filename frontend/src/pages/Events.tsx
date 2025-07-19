import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Filter, Plus } from 'lucide-react';
import { EventRegistrationModal } from '../components/EventRegistrationModal';
import { EventIdeaModal } from '../components/EventIdeaModal';
import EventCountdown from '../components/EventCountdown';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showEventIdeaModal, setShowEventIdeaModal] = useState(false);
  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Annual Alumni Reunion 2025',
      description: 'Join us for our biggest alumni gathering of the year! Reconnect with old friends, make new connections, and celebrate our shared Namal experience.',
      date: '2025-06-25',
      time: '10:00 AM',
      location: 'Namal University Campus, Mianwali',
      type: 'Reunion',
      capacity: 500,
      registered: 127,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Career Development Workshop',
      description: 'Enhance your professional skills with our expert-led workshop on leadership, communication, and career advancement strategies.',
      date: '2025-07-10',
      time: '3:00 PM',
      location: 'Virtual Event',
      type: 'Workshop',
      capacity: 100,
      registered: 45,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Tech Industry Networking Dinner',
      description: 'An exclusive networking dinner for alumni working in the technology sector. Share experiences, discuss trends, and build valuable connections.',
      date: '2025-08-18',
      time: '7:00 PM',
      location: 'Pearl Continental Hotel, Lahore',
      type: 'Networking',
      capacity: 50,
      registered: 32,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'Entrepreneurship Summit 2025',
      description: 'Learn from successful alumni entrepreneurs about starting and scaling businesses. Includes pitch sessions and investor meetings.',
      date: '2025-09-15',
      time: '9:00 AM',
      location: 'Expo Centre, Karachi',
      type: 'Conference',
      capacity: 300,
      registered: 89,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      title: 'Alumni Sports Tournament',
      description: 'Annual sports tournament featuring cricket, football, and badminton competitions. Open to all alumni and their families.',
      date: '2025-10-05',
      time: '8:00 AM',
      location: 'Namal Sports Complex',
      type: 'Sports',
      capacity: 200,
      registered: 67,
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      title: 'Global Alumni Virtual Meetup',
      description: 'Connect with Namal alumni from around the world in our monthly virtual meetup. Share updates and discuss global opportunities.',
      date: '2025-11-20',
      time: '8:00 PM',
      location: 'Virtual Event',
      type: 'Virtual',
      capacity: 500,
      registered: 234,
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 7,
      title: 'Women in Leadership Conference',
      description: 'Empowering women alumni through leadership workshops, panel discussions, and networking opportunities with industry leaders.',
      date: '2025-12-08',
      time: '10:00 AM',
      location: 'Serena Hotel, Islamabad',
      type: 'Conference',
      capacity: 150,
      registered: 78,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const upcomingEvents = events.slice(0, 3).map(event => ({
    id: event.id,
    title: event.title,
    date: `${event.date}T${event.time.replace(' ', '')}:00.000Z`
  }));

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.type.toLowerCase() === filter.toLowerCase()
  );

  const handleRegister = (event: any) => {
    setSelectedEvent(event);
    setShowRegistrationModal(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni Events & Reunions</h1>
            <p className="text-xl mb-8">Connect, learn, and grow with fellow Namal alumni through our exciting events and gatherings.</p>
            <button 
              onClick={() => setShowEventIdeaModal(true)}
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-md transition-colors flex items-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              Suggest an Event
            </button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <EventCountdown key={event.id} title={event.title} date={event.date} />
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 flex-wrap gap-2">
            <Filter className="h-5 w-5 text-green-800" />
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md ${
                filter === 'all' 
                  ? 'bg-green-800 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Events
            </button>
            <button 
              onClick={() => setFilter('reunion')}
              className={`px-4 py-2 rounded-md ${
                filter === 'reunion' 
                  ? 'bg-green-800 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Reunions
            </button>
            <button 
              onClick={() => setFilter('workshop')}
              className={`px-4 py-2 rounded-md ${
                filter === 'workshop' 
                  ? 'bg-green-800 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Workshops
            </button>
            <button 
              onClick={() => setFilter('networking')}
              className={`px-4 py-2 rounded-md ${
                filter === 'networking' 
                  ? 'bg-green-800 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Networking
            </button>
            <button 
              onClick={() => setFilter('conference')}
              className={`px-4 py-2 rounded-md ${
                filter === 'conference' 
                  ? 'bg-green-800 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Conferences
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {event.registered}/{event.capacity}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-green-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleRegister(event)}
                    className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-md transition-colors"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration Modal */}
      {showRegistrationModal && selectedEvent && (
        <EventRegistrationModal
          isOpen={showRegistrationModal}
          onClose={() => setShowRegistrationModal(false)}
          eventTitle={selectedEvent.title}
          eventDate={selectedEvent.date}
        />
      )}

      {/* Event Idea Modal */}
      <EventIdeaModal 
        isOpen={showEventIdeaModal} 
        onClose={() => setShowEventIdeaModal(false)} 
      />
    </div>
  );
};

export default Events;