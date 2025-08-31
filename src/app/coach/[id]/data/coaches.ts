export interface Testimonial {
  name: string;
  role?: string;
  content: string;
  rating: number;
}

export interface Coach {
  id: string;
  name: string;
  title: string;
  dupr: number;
  specialties: string[];
  experience: string;
  students: number;
  image: string;
  color: string;
  contact: {
    messenger: string;
    email: string;
    phone: string;
  };
  programs: Array<{
    name: string;
  }>;
  achievements: string[];
  background: string;
  teaching_style: string;
  certifications: string[];
  testimonials: Testimonial[];
}

export const coaches: Coach[] = [
  {
    id: 'maria',
    name: 'Maria',
    title: 'HEAD COACH',
    dupr: 5.2,
    specialties: ['Singles Strategy', 'Mental Game', 'Tournament Prep'],
    experience: '15+ Years',
    students: 200,
    image: '/coaches/maria.jpg',
    color: 'from-orange-500 to-red-600',
    contact: {
      messenger: 'https://m.me/mariasantos.pickleball',
      email: 'maria@pickleballhub.ph',
      phone: '+63 917 123 4567'
    },
    programs: [
      { name: 'Elite Singles Mastery' },
      { name: 'Tournament Prep' },
      { name: 'Private Coaching' }
    ],
    achievements: [
      'Philippine National Pickleball Champion 2023',
      'Gold Medalist - Mixed Doubles, Asian Pickleball Championship 2022',
      'Former Tennis Professional with ATP Tour Experience'
    ],
    background: 'With over 15 years of coaching experience and a professional tennis background, Coach Maria brings world-class expertise to pickleball. Her unique approach combines technical precision with mental game mastery, helping players of all levels achieve breakthrough performance.',
    teaching_style: 'Focuses on developing strong fundamentals while adapting to each player\'s unique style. Specializes in tournament preparation and high-performance training.',
    certifications: [
      'IPTPA Level 3 Certified Coach',
      'PTR Professional Tennis Coach',
      'Sports Psychology Certification'
    ],
    testimonials: [
      {
        name: 'Michael Chen',
        role: 'National Team Player',
        content: 'Coach Maria transformed my game completely. Her focus on mental preparation and strategy helped me win my first national title.',
        rating: 5
      },
      {
        name: 'Sarah Garcia',
        role: 'Competitive Player',
        content: 'The technical insights and tournament preparation strategies I learned from Coach Maria were game-changing. She has an incredible ability to identify and fix weaknesses.',
        rating: 5
      },
      {
        name: 'David Lee',
        content: 'Started as a complete beginner and now competing in tournaments, thanks to Coach Maria\'s patient and systematic approach to teaching.',
        rating: 5
      }
    ]
  },
  {
    id: 'james',
    name: 'James',
    title: 'TECHNICAL SPECIALIST',
    dupr: 4.8,
    specialties: ['Fundamentals', 'Youth Development', 'Beginners'],
    experience: '10+ Years',
    students: 150,
    image: '/coaches/james.jpg',
    color: 'from-blue-500 to-purple-600',
    contact: {
      messenger: 'https://m.me/jamesrodriguez.pickleball',
      email: 'james@pickleballhub.ph',
      phone: '+63 917 234 5678'
    },
    programs: [
      { name: 'Beginner Bootcamp' },
      { name: 'Youth Program' },
      { name: 'Technique Clinic' }
    ],
    achievements: [
      'Developed 20+ Junior National Team Players',
      'Youth Coach of the Year 2023',
      'Pioneer of Pickleball Youth Development in the Philippines'
    ],
    background: 'Coach James specializes in youth development and beginner training. His innovative teaching methods have helped hundreds of new players fall in love with pickleball while developing solid technical foundations.',
    teaching_style: 'Patient, methodical approach with emphasis on proper technique and enjoyment of the game. Creates fun, engaging sessions that keep students motivated.',
    certifications: [
      'IPTPA Level 2 Certified Coach',
      'Youth Sports Development Specialist',
      'First Aid & Sports Safety Certified'
    ],
    testimonials: [
      {
        name: 'Emily Santos',
        role: 'Parent',
        content: 'My kids love Coach James! He makes learning pickleball so much fun while ensuring they develop proper technique. The improvement in their skills has been remarkable.',
        rating: 5
      },
      {
        name: 'John Martinez',
        role: 'Beginner Player',
        content: 'As someone who never played racquet sports before, I was nervous about starting. Coach James made the learning process enjoyable and built my confidence from day one.',
        rating: 5
      },
      {
        name: 'Lisa Wong',
        role: 'School Team Coach',
        content: 'The youth program Coach James developed for our school team is exceptional. His ability to connect with young players and develop their skills is outstanding.',
        rating: 5
      }
    ]
  },
  {
    id: 'lisa',
    name: 'Lisa',
    title: 'DOUBLES EXPERT',
    dupr: 5.0,
    specialties: ['Doubles Strategy', 'Team Dynamics', 'Mixed Doubles'],
    experience: '12+ Years',
    students: 180,
    image: '/coaches/lisa.jpg',
    color: 'from-green-500 to-teal-600',
    contact: {
      messenger: 'https://m.me/lisachen.pickleball',
      email: 'lisa@pickleballhub.ph',
      phone: '+63 917 345 6789'
    },
    programs: [
      { name: 'Doubles Domination' },
      { name: 'Partner Synergy' },
      { name: 'Mixed Doubles' }
    ],
    achievements: [
      'Mixed Doubles Gold - Southeast Asian Championships 2023',
      'Women\'s Doubles National Champion 2022 - 2023',
      'Led 30+ Teams to Tournament Victories'
    ],
    background: 'A doubles specialist with an exceptional understanding of team dynamics, Coach Lisa excels in teaching partnership strategies and court positioning. Her experience in high-level tournament play brings valuable insights to her coaching.',
    teaching_style: 'Emphasizes communication, court awareness, and smart shot selection. Specializes in helping partners develop better chemistry and strategic play.',
    certifications: [
      'IPTPA Level 3 Certified Coach',
      'Advanced Doubles Strategy Certification',
      'Mental Game Coaching Professional'
    ],
    testimonials: [
      {
        name: 'Mark and Jane Thompson',
        role: 'Mixed Doubles Team',
        content: 'Coach Lisa helped us develop amazing court chemistry. Her insights into doubles strategy and positioning have taken our game to the next level.',
        rating: 5
      },
      {
        name: 'Patricia Cruz',
        role: 'Women\'s Doubles Player',
        content: 'The Partner Synergy program was exactly what we needed. Coach Lisa\'s expertise in doubles play is unmatched. She taught us strategies we\'d never even considered.',
        rating: 5
      },
      {
        name: 'Robert Tan',
        role: 'Recreational Player',
        content: 'Even as a casual player, Coach Lisa helped me and my partner improve dramatically. Her ability to explain complex strategies in simple terms is remarkable.',
        rating: 5
      }
    ]
  },
  {
    id: 'miguel',
    name: 'Miguel',
    title: 'FITNESS COACH',
    dupr: 4.5,
    specialties: ['Conditioning', 'Injury Prevention', 'Performance'],
    experience: '8+ Years',
    students: 120,
    image: '/coaches/miguel.jpg',
    color: 'from-purple-500 to-pink-600',
    contact: {
      messenger: 'https://m.me/miguel.pickleball',
      email: 'miguel@pickleballhub.ph',
      phone: '+63 917 456 7890'
    },
    programs: [
      { name: 'Peak Performance' },
      { name: 'Injury Prevention' },
      { name: 'Speed & Agility' }
    ],
    achievements: [
      'Certified Strength & Conditioning Specialist',
      'Developed Fitness Programs for National Team',
      'Sports Medicine Conference Speaker 2023'
    ],
    background: 'Coach Miguel combines his expertise in sports science with pickleball coaching to create comprehensive training programs. His approach focuses on building the physical foundation needed for peak performance.',
    teaching_style: 'Holistic training approach combining technical skills with physical conditioning. Specializes in injury prevention and performance enhancement.',
    certifications: [
      'IPTPA Level 2 Certified Coach',
      'NSCA Certified Strength & Conditioning Specialist',
      'Sports Nutrition Specialist'
    ],
    testimonials: [
      {
        name: 'Carlos Reyes',
        role: 'Tournament Player',
        content: 'Coach Miguel\'s fitness program completely transformed my game. I\'m faster, stronger, and can play longer without fatigue. His focus on injury prevention has been invaluable.',
        rating: 5
      },
      {
        name: 'Anna Lee',
        role: 'Senior Player',
        content: 'At 60, I was worried about starting pickleball. Coach Miguel designed a program that improved my fitness while protecting my joints. I feel younger and more energetic!',
        rating: 5
      },
      {
        name: 'James Wu',
        role: 'Competitive Player',
        content: 'The combination of technical training and physical conditioning in Coach Miguel\'s program is perfect. My endurance and court coverage have improved dramatically.',
        rating: 5
      }
    ]
  },
  {
    id: 'sarah',
    name: 'Sarah',
    title: 'JUNIOR DEVELOPMENT',
    dupr: 4.6,
    specialties: ['Kids Programs', 'Teen Training', 'School Teams'],
    experience: '7+ Years',
    students: 95,
    image: '/coaches/sarah.jpg',
    color: 'from-yellow-500 to-orange-600',
    contact: {
      messenger: 'https://m.me/sarah.pickleball',
      email: 'sarah@pickleballhub.ph',
      phone: '+63 917 567 8901'
    },
    programs: [
      { name: 'Little Champions' },
      { name: 'Teen Excellence' },
      { name: 'School Team Training' }
    ],
    achievements: [
      'Developed Junior Training Curriculum for 5 Schools',
      'Youth Sports Excellence Award 2023',
      'Led Junior Team to National Championship'
    ],
    background: 'With a background in education and sports psychology, Coach Sarah specializes in developing young players. Her programs focus on building confidence and skills while making learning fun and engaging.',
    teaching_style: 'Age-appropriate, fun-focused approach that builds skills progressively. Creates supportive environment for young players to thrive.',
    certifications: [
      'IPTPA Level 2 Certified Coach',
      'Child Development Specialist',
      'Physical Education Teaching License'
    ],
    testimonials: [
      {
        name: 'Maria and Jose Rodriguez',
        role: 'Parents',
        content: 'Our kids have flourished under Coach Sarah\'s guidance. She has a special way of making learning fun while building their confidence and skills.',
        rating: 5
      },
      {
        name: 'Tommy Chen',
        role: 'Junior Player',
        content: 'Coach Sarah makes every lesson exciting! I\'ve learned so much and made great friends in her program. She always believes in us.',
        rating: 5
      },
      {
        name: 'Principal Santos',
        role: 'School Administrator',
        content: 'Coach Sarah\'s junior program has been a fantastic addition to our school. Her curriculum is well-structured and the students are always eager to participate.',
        rating: 5
      }
    ]
  },
  {
    id: 'alex',
    name: 'Alex',
    title: 'STRATEGY COACH',
    dupr: 4.9,
    specialties: ['Game Analysis', 'Mental Training', 'Competition Prep'],
    experience: '11+ Years',
    students: 130,
    image: '/coaches/alex.jpg',
    color: 'from-indigo-500 to-blue-600',
    contact: {
      messenger: 'https://m.me/alex.pickleball',
      email: 'alex@pickleballhub.ph',
      phone: '+63 917 678 9012'
    },
    programs: [
      { name: 'Strategic Mindset' },
      { name: 'Competition Ready' },
      { name: 'Video Analysis Pack' }
    ],
    achievements: [
      'Men\'s Singles National Champion 2023',
      'Coach of 3 National Team Players',
      'International Tournament Strategy Consultant'
    ],
    background: 'Coach Alex is known for his analytical approach to the game. His expertise in game analysis and strategic planning has helped numerous players excel in competitive play.',
    teaching_style: 'Data-driven approach focusing on strategic development and game analysis. Helps players develop tactical awareness and decision-making skills.',
    certifications: [
      'IPTPA Level 3 Certified Coach',
      'Advanced Game Analysis Certification',
      'Performance Psychology Specialist'
    ],
    testimonials: [
      {
        name: 'Richard Lim',
        role: 'Professional Player',
        content: 'Coach Alex\'s analytical approach to the game is unmatched. His strategic insights and game analysis have helped me win multiple tournaments.',
        rating: 5
      },
      {
        name: 'Michelle Tan',
        role: 'Competitive Player',
        content: 'The video analysis sessions with Coach Alex were eye-opening. He helped me understand and improve aspects of my game I didn\'t even know needed work.',
        rating: 5
      },
      {
        name: 'Kevin Santos',
        role: 'Tournament Player',
        content: 'Coach Alex\'s strategic approach to training has completely changed how I think about the game. His focus on tactical awareness has made me a much smarter player.',
        rating: 5
      }
    ]
  }
];
