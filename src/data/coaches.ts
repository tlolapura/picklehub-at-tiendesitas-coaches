import { Coach } from '@/types/coach';

export const coaches: Coach[] = [
  {
    id: '1',
    name: 'Coach Maria Santos',
    title: 'Head Coach & Director',
    specialties: ['Advanced Strategy', 'Tournament Preparation', 'Mental Game'],
    experience: '8+ years',
    bio: 'Former Philippine national team player with extensive international competition experience. Specializes in developing advanced players and tournament preparation.',
    image: '/images/coaches/maria-santos.jpg',
    rating: 4.9,
    certifications: ['USAPA Certified', 'IFP Level 3', 'Sports Psychology'],
    achievements: [
      'Philippine National Champion 2019-2021',
      'SEA Games Silver Medalist',
      'Trained 15+ professional players'
    ],
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'],
      times: ['9:00 AM - 12:00 PM', '2:00 PM - 6:00 PM']
    },
    contact: {
      email: 'maria@picklehub.ph',
      phone: '+63 917 123 4567'
    }
  },
  {
    id: '2',
    name: 'Coach James Rodriguez',
    title: 'Technical Specialist',
    specialties: ['Fundamentals', 'Technique Refinement', 'Beginner Training'],
    experience: '6+ years',
    bio: 'Expert in breaking down complex techniques into easy-to-understand fundamentals. Perfect for beginners and intermediate players looking to improve their form.',
    image: '/images/coaches/james-rodriguez.jpg',
    rating: 4.8,
    certifications: ['USAPA Certified', 'IFP Level 2', 'Youth Development'],
    achievements: [
      'Developed 200+ beginner players',
      'Regional Tournament Champion',
      'Youth Program Developer'
    ],
    availability: {
      days: ['Monday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
      times: ['8:00 AM - 11:00 AM', '1:00 PM - 5:00 PM']
    },
    contact: {
      email: 'james@picklehub.ph',
      phone: '+63 917 234 5678'
    }
  },
  {
    id: '3',
    name: 'Coach Lisa Chen',
    title: 'Strategy & Doubles Expert',
    specialties: ['Doubles Strategy', 'Court Positioning', 'Game Analysis'],
    experience: '7+ years',
    bio: 'Doubles specialist with a keen eye for strategy and positioning. Helps players understand the mental and tactical aspects of competitive doubles play.',
    image: '/images/coaches/lisa-chen.jpg',
    rating: 4.9,
    certifications: ['USAPA Certified', 'IFP Level 3', 'Video Analysis'],
    achievements: [
      'Doubles National Champion',
      'Strategy Consultant for Pro Teams',
      'Published Pickleball Tactics Guide'
    ],
    availability: {
      days: ['Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['10:00 AM - 1:00 PM', '3:00 PM - 7:00 PM']
    },
    contact: {
      email: 'lisa@picklehub.ph',
      phone: '+63 917 345 6789'
    }
  },
  {
    id: '4',
    name: 'Coach Miguel Dela Cruz',
    title: 'Fitness & Conditioning',
    specialties: ['Athletic Performance', 'Injury Prevention', 'Conditioning'],
    experience: '5+ years',
    bio: 'Sports science graduate specializing in pickleball-specific fitness and injury prevention. Helps players build the physical foundation for peak performance.',
    image: '/images/coaches/miguel-delacruz.jpg',
    rating: 4.7,
    certifications: ['Sports Science Degree', 'NSCA Certified', 'Injury Prevention'],
    achievements: [
      'Reduced player injuries by 60%',
      'Developed PB Fitness Protocol',
      'Trained Olympic athletes'
    ],
    availability: {
      days: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Sunday'],
      times: ['6:00 AM - 9:00 AM', '4:00 PM - 8:00 PM']
    },
    contact: {
      email: 'miguel@picklehub.ph',
      phone: '+63 917 456 7890'
    }
  },
  {
    id: '5',
    name: 'Coach Sarah Kim',
    title: 'Youth Development Specialist',
    specialties: ['Youth Training', 'Skill Development', 'Fun-based Learning'],
    experience: '4+ years',
    bio: 'Passionate about introducing young players to pickleball through engaging, skill-building activities. Creates a positive learning environment for kids and teens.',
    image: '/images/coaches/sarah-kim.jpg',
    rating: 4.8,
    certifications: ['Youth Sports Certified', 'Child Development', 'Safety First Aid'],
    achievements: [
      'Developed 100+ young players',
      'Created Youth Academy Program',
      'Regional Youth Champion'
    ],
    availability: {
      days: ['Wednesday', 'Thursday', 'Saturday', 'Sunday'],
      times: ['3:00 PM - 6:00 PM', '9:00 AM - 12:00 PM (weekends)']
    },
    contact: {
      email: 'sarah@picklehub.ph',
      phone: '+63 917 567 8901'
    }
  },
  {
    id: '6',
    name: 'Coach Roberto Fernandez',
    title: 'Senior Pro & Mentor',
    specialties: ['Advanced Techniques', 'Mental Toughness', 'Competition Prep'],
    experience: '10+ years',
    bio: 'Veteran player and coach with over a decade of professional experience. Mentors both players and fellow coaches in advanced techniques and competition strategies.',
    image: '/images/coaches/roberto-fernandez.jpg',
    rating: 5.0,
    certifications: ['Master Professional', 'IFP Level 4', 'Coaching Certification'],
    achievements: [
      'International Tournament Winner',
      'Coach of the Year 2022',
      'Trained 5+ professional coaches'
    ],
    availability: {
      days: ['Tuesday', 'Friday', 'Saturday'],
      times: ['10:00 AM - 2:00 PM', '5:00 PM - 8:00 PM']
    },
    contact: {
      email: 'roberto@picklehub.ph',
      phone: '+63 917 678 9012'
    }
  }
];
