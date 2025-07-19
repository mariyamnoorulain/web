const mongoose = require('mongoose');
const User = require('../models/User');
const Event = require('../models/Event');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected for seeding');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

const seedUsers = async () => {
  try {
    // Clear existing users
    await User.deleteMany({});
    
    const users = [
      {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@namal.edu.pk',
        password: 'admin123',
        role: 'admin',
        membershipType: 'Lifetime',
        graduationYear: 2015,
        degreeProgram: 'BS Computer Science',
        currentPosition: 'System Administrator',
        currentLocation: 'Mianwali, Pakistan',
        isActive: true,
        emailVerified: true
      },
      {
        firstName: 'Sarah',
        lastName: 'Ahmed',
        email: 'sarah@example.com',
        password: 'password123',
        membershipType: 'Premium',
        graduationYear: 2018,
        degreeProgram: 'BS Computer Science',
        currentPosition: 'Software Engineer at Google',
        currentLocation: 'San Francisco, USA',
        isActive: true,
        emailVerified: true
      },
      {
        firstName: 'Ali',
        lastName: 'Hassan',
        email: 'ali@example.com',
        password: 'password123',
        membershipType: 'Basic',
        graduationYear: 2020,
        degreeProgram: 'BS Electrical Engineering',
        currentPosition: 'Junior Engineer',
        currentLocation: 'Lahore, Pakistan',
        isActive: true,
        emailVerified: true
      },
      {
        firstName: 'Fatima',
        lastName: 'Khan',
        email: 'fatima@example.com',
        password: 'password123',
        membershipType: 'Premium',
        graduationYear: 2017,
        degreeProgram: 'BBA',
        currentPosition: 'Marketing Manager',
        currentLocation: 'Karachi, Pakistan',
        isActive: true,
        emailVerified: true
      }
    ];

    const createdUsers = await User.create(users);
    console.log(`✅ Created ${createdUsers.length} users`);
    return createdUsers;
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

const seedEvents = async (users) => {
  try {
    // Clear existing events
    await Event.deleteMany({});
    
    const events = [
      {
        title: 'Annual Alumni Reunion 2025',
        description: 'Join us for our biggest alumni gathering of the year! Reconnect with old friends, make new connections, and celebrate our shared Namal experience.',
        date: new Date('2025-06-25'),
        time: '10:00 AM',
        location: 'Namal University Campus, Mianwali',
        type: 'Reunion',
        capacity: 500,
        registeredCount: 0,
        isVirtual: false,
        organizer: {
          name: 'Alumni Relations Office',
          email: 'alumni@namal.edu.pk',
          phone: '+92 459 236995'
        },
        createdBy: users[0]._id,
        status: 'Published'
      },
      {
        title: 'Career Development Workshop',
        description: 'Enhance your professional skills with our expert-led workshop on leadership, communication, and career advancement strategies.',
        date: new Date('2025-07-10'),
        time: '3:00 PM',
        location: 'Virtual Event',
        type: 'Workshop',
        capacity: 100,
        registeredCount: 0,
        isVirtual: true,
        meetingLink: 'https://zoom.us/j/example',
        organizer: {
          name: 'Professional Development Team',
          email: 'careers@namal.edu.pk',
          phone: '+92 459 236996'
        },
        createdBy: users[0]._id,
        status: 'Published'
      },
      {
        title: 'Tech Industry Networking Dinner',
        description: 'An exclusive networking dinner for alumni working in the technology sector. Share experiences, discuss trends, and build valuable connections.',
        date: new Date('2025-08-18'),
        time: '7:00 PM',
        location: 'Pearl Continental Hotel, Lahore',
        type: 'Networking',
        capacity: 50,
        registeredCount: 0,
        isVirtual: false,
        organizer: {
          name: 'Tech Alumni Chapter',
          email: 'tech@namal.edu.pk',
          phone: '+92 42 123 4567'
        },
        createdBy: users[1]._id,
        status: 'Published'
      }
    ];

    const createdEvents = await Event.create(events);
    console.log(`✅ Created ${createdEvents.length} events`);
    return createdEvents;
  } catch (error) {
    console.error('Error seeding events:', error);
  }
};

const seedDatabase = async () => {
  try {
    await connectDB();
    
    console.log('🌱 Starting database seeding...');
    
    const users = await seedUsers();
    const events = await seedEvents(users);
    
    console.log('✅ Database seeding completed successfully!');
    console.log(`📊 Summary:`);
    console.log(`   - Users: ${users?.length || 0}`);
    console.log(`   - Events: ${events?.length || 0}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Database seeding failed:', error);
    process.exit(1);
  }
};

// Run seeding if this file is executed directly
if (require.main === module) {
  seedDatabase();
}

module.exports = { seedDatabase };