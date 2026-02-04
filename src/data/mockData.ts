import { Academy, Coach, Tournament } from '@/types';

export const academies: Academy[] = [
  {
    id: 'elite-cricket-academy',
    name: 'Elite Cricket Academy',
    location: 'Mumbai, Maharashtra',
    shortDescription: 'Premier cricket training facility with world-class infrastructure and expert coaches.',
    fullDescription: 'Elite Cricket Academy is one of the leading cricket training institutions in India. Established in 2005, we have trained over 5,000 aspiring cricketers, with many going on to represent state and national teams. Our state-of-the-art facility spans 10 acres and includes indoor practice nets, outdoor pitches, gym, and video analysis rooms.',
    programs: [
      {
        name: 'Junior Stars',
        level: 'Beginner',
        description: 'Foundation program for ages 8-12, focusing on basic techniques and love for the game.',
      },
      {
        name: 'Rising Champions',
        level: 'Intermediate',
        description: 'For ages 13-17, emphasizing advanced techniques, match awareness, and fitness.',
      },
      {
        name: 'Pro Elite',
        level: 'Advanced',
        description: 'Professional training for serious players aiming for state and national selection.',
      },
    ],
    achievements: [
      '15+ players selected for state teams',
      '3 players represented national U-19 team',
      'Best Academy Award 2022',
      'BCCI affiliated since 2010',
    ],
    contact: {
      phone: '+91 98765 43210',
      email: 'info@elitecricket.com',
      address: '123 Sports Complex, Andheri East, Mumbai 400093',
    },
  },
  {
    id: 'champion-cricket-hub',
    name: 'Champion Cricket Hub',
    location: 'Delhi, NCR',
    shortDescription: 'Modern training facility with experienced coaches and proven track record.',
    fullDescription: 'Champion Cricket Hub has been nurturing cricket talent since 2010. Our academy combines traditional coaching methods with modern technology to provide comprehensive cricket education. With 6 international-standard turf pitches and advanced bowling machines, we offer the best training environment.',
    programs: [
      {
        name: 'Little Champions',
        level: 'Beginner',
        description: 'Entry-level program introducing cricket fundamentals to young enthusiasts.',
      },
      {
        name: 'Skill Masters',
        level: 'Intermediate',
        description: 'Focus on skill refinement, tactical understanding, and competitive play.',
      },
      {
        name: 'Professional Pathway',
        level: 'Advanced',
        description: 'Intensive training program for players pursuing professional cricket careers.',
      },
    ],
    achievements: [
      '20+ players in IPL franchises',
      'Best Infrastructure Award 2021',
      'Ranji Trophy players produced: 12',
      'International standard practice facility',
    ],
    contact: {
      phone: '+91 98765 12345',
      email: 'contact@championhub.com',
      address: '456 Stadium Road, Dwarka, New Delhi 110075',
    },
  },
  {
    id: 'victory-cricket-school',
    name: 'Victory Cricket School',
    location: 'Bangalore, Karnataka',
    shortDescription: 'Holistic cricket development with focus on mental and physical conditioning.',
    fullDescription: 'Victory Cricket School offers a unique approach to cricket training that emphasizes both mental and physical development. Our sports psychologists work alongside cricket coaches to develop well-rounded players. Located in the IT hub of India, we cater to working professionals and students alike.',
    programs: [
      {
        name: 'Foundation Course',
        level: 'Beginner',
        description: 'Perfect start for beginners with emphasis on correct technique from day one.',
      },
      {
        name: 'Excellence Program',
        level: 'Intermediate',
        description: 'Balanced program combining skills training with match practice.',
      },
      {
        name: 'Elite Warriors',
        level: 'Advanced',
        description: 'For serious cricketers with aspirations of playing at the highest level.',
      },
    ],
    achievements: [
      'Karnataka state champions 2023',
      'Best Coaching Methods Award',
      'Sports psychology integration pioneer',
      '500+ successful alumni',
    ],
    contact: {
      phone: '+91 98765 67890',
      email: 'hello@victorycricket.in',
      address: '789 Whitefield Sports Zone, Bangalore 560066',
    },
  },
  {
    id: 'star-cricket-institute',
    name: 'Star Cricket Institute',
    location: 'Chennai, Tamil Nadu',
    shortDescription: 'Traditional coaching excellence combined with modern training methods.',
    fullDescription: 'Star Cricket Institute brings together the best of traditional coaching wisdom and modern sports science. Founded by former first-class cricketer Rajan Kumar, our academy has a proven track record of producing quality cricketers. Our specialized batting and bowling camps are renowned across South India.',
    programs: [
      {
        name: 'Cricket Cubs',
        level: 'Beginner',
        description: 'Fun-filled introduction to cricket for children aged 6-11.',
      },
      {
        name: 'Development Squad',
        level: 'Intermediate',
        description: 'Structured training program focusing on all aspects of the game.',
      },
      {
        name: 'Performance Academy',
        level: 'Advanced',
        description: 'High-performance training with video analysis and personalized coaching.',
      },
    ],
    achievements: [
      'Tamil Nadu Premier League contributors',
      '8 players in TNCA teams',
      'Best Spin Bowling Academy 2022',
      'Annual talent hunt program',
    ],
    contact: {
      phone: '+91 98765 11111',
      email: 'info@starcricket.com',
      address: '321 Marina Sports Complex, Chennai 600005',
    },
  },
];

export const coaches: Coach[] = [
  {
    id: 'rajesh-sharma',
    name: 'Rajesh Sharma',
    experience: '15 years',
    specialization: 'Batting & Wicket-keeping',
    shortBio: 'Former Ranji Trophy player with expertise in batting techniques and wicket-keeping.',
    fullBio: 'Rajesh Sharma brings 15 years of coaching experience to CricStars. A former Ranji Trophy player for Maharashtra, he has specialized in developing batting techniques and wicket-keeping skills. He has trained over 200 students, with many going on to play at state and national levels. His methodical approach and ability to identify and nurture talent has made him one of the most sought-after coaches in the region.',
    achievements: [
      'Former Maharashtra Ranji Team player',
      'Coached 3 India U-19 players',
      'BCCI Level 3 certified coach',
      '20+ state-level players trained',
    ],
    contact: {
      phone: '+91 98765 22222',
      email: 'rajesh.sharma@cricstars.com',
    },
  },
  {
    id: 'priya-patel',
    name: 'Priya Patel',
    experience: '12 years',
    specialization: 'Fast Bowling',
    shortBio: 'International cricket experience with focus on fast bowling techniques and fitness.',
    fullBio: 'Priya Patel is a renowned fast bowling coach with international playing experience. Having played for the Indian Women\'s Cricket Team, she brings invaluable insights into high-performance cricket. Her specialized training programs focus on bowling action, speed development, and injury prevention. She has helped numerous bowlers increase their pace and accuracy significantly.',
    achievements: [
      'Former India Women\'s Team player',
      'BCCI certified bowling coach',
      'Specialty in fast bowling biomechanics',
      '50+ fast bowlers trained professionally',
    ],
    contact: {
      phone: '+91 98765 33333',
      email: 'priya.patel@cricstars.com',
    },
  },
  {
    id: 'mohammed-khan',
    name: 'Mohammed Khan',
    experience: '20 years',
    specialization: 'Spin Bowling',
    shortBio: 'Legendary spin bowling coach with two decades of professional coaching experience.',
    fullBio: 'Mohammed Khan is a master spin bowling coach with 20 years of professional coaching experience. Known for developing some of the finest spinners in Indian cricket, his coaching philosophy emphasizes the art of deception, flight variations, and reading batsmen. His comprehensive understanding of spin bowling mechanics has helped bowlers develop unique styles while maintaining effectiveness.',
    achievements: [
      'Trained 5 IPL spinners',
      'BCCI Level 4 certified',
      'Author of "The Art of Spin"',
      'National Coaching Excellence Award 2020',
    ],
    contact: {
      phone: '+91 98765 44444',
      email: 'mohammed.khan@cricstars.com',
    },
  },
  {
    id: 'sunil-nair',
    name: 'Sunil Nair',
    experience: '10 years',
    specialization: 'Fielding & Fitness',
    shortBio: 'Sports science expert specializing in cricket-specific fitness and fielding techniques.',
    fullBio: 'Sunil Nair combines sports science expertise with cricket coaching to deliver exceptional fielding and fitness training. With a Master\'s degree in Sports Science and 10 years of cricket coaching experience, he has developed innovative training methods that have revolutionized how players approach fitness and fielding. His programs are designed to improve agility, reaction time, and overall athleticism.',
    achievements: [
      'Masters in Sports Science',
      'Fielding coach for IPL teams',
      'Developed proprietary fitness protocols',
      'Transformed 100+ players\' fielding abilities',
    ],
    contact: {
      phone: '+91 98765 55555',
      email: 'sunil.nair@cricstars.com',
    },
  },
  {
    id: 'anita-desai',
    name: 'Anita Desai',
    experience: '8 years',
    specialization: 'Youth Development',
    shortBio: 'Passionate about nurturing young talent with age-appropriate training methods.',
    fullBio: 'Anita Desai specializes in youth cricket development with a focus on age-appropriate training methods. Her background in child psychology combined with cricket coaching qualifications allows her to create engaging and effective training programs for young cricketers. She believes in making cricket fun while building strong fundamentals that will serve players throughout their careers.',
    achievements: [
      'Child Psychology certified',
      'Youth Development Specialist',
      'BCCI Level 2 coach',
      'Best Youth Coach Award 2023',
    ],
    contact: {
      phone: '+91 98765 66666',
      email: 'anita.desai@cricstars.com',
    },
  },
];

export const tournaments: Tournament[] = [
  {
    id: 'cricket-premier-league-2024',
    name: 'Cricket Premier League 2024',
    date: 'March 15-30, 2024',
    location: 'Mumbai, Maharashtra',
    shortDescription: 'The biggest inter-academy tournament of the year with teams from across India.',
    fullDescription: 'Cricket Premier League 2024 is the flagship tournament organized by CricStars, bringing together the best academy teams from across India. This two-week extravaganza features competitive matches, talent scouting by IPL franchises, and a grand prize of ₹10 lakhs for the winning team. The tournament follows T20 format with league stage followed by knockouts.',
    organizer: {
      name: 'CricStars Foundation',
      contact: 'tournaments@cricstars.com',
    },
    format: 'T20 - League + Knockout',
    registrationDeadline: 'February 28, 2024',
  },
  {
    id: 'under-19-championship',
    name: 'Under-19 Championship',
    date: 'April 5-15, 2024',
    location: 'Bangalore, Karnataka',
    shortDescription: 'Premier under-19 tournament for discovering young cricket talent.',
    fullDescription: 'The Under-19 Championship is designed to discover and showcase young cricket talent. This prestigious tournament attracts scouts from state associations and IPL franchises looking for the next generation of cricket stars. Players get exposure to competitive cricket while representing their academies on a grand stage.',
    organizer: {
      name: 'Karnataka State Cricket Association',
      contact: 'u19@ksca.org',
    },
    format: '50-over format',
    registrationDeadline: 'March 20, 2024',
  },
  {
    id: 'corporate-cricket-cup',
    name: 'Corporate Cricket Cup',
    date: 'May 1-10, 2024',
    location: 'Delhi, NCR',
    shortDescription: 'Fun-filled cricket tournament for corporate teams and working professionals.',
    fullDescription: 'The Corporate Cricket Cup brings together teams from various corporate organizations for a week of competitive yet fun cricket. This tournament promotes work-life balance and team building through sport. With modified rules to ensure maximum participation, it\'s the perfect platform for corporate cricket enthusiasts.',
    organizer: {
      name: 'Corporate Sports League',
      contact: 'info@cslcricket.com',
    },
    format: 'T10 format',
    registrationDeadline: 'April 15, 2024',
  },
  {
    id: 'womens-cricket-challenge',
    name: 'Women\'s Cricket Challenge',
    date: 'June 10-20, 2024',
    location: 'Chennai, Tamil Nadu',
    shortDescription: 'Empowering women in cricket through competitive tournament play.',
    fullDescription: 'The Women\'s Cricket Challenge is a premier tournament dedicated to promoting women\'s cricket. This tournament provides a platform for female cricketers to showcase their skills and compete at a high level. With categories for different age groups and skill levels, it welcomes participants from beginners to advanced players.',
    organizer: {
      name: 'Women in Cricket Foundation',
      contact: 'wcc@wicf.org',
    },
    format: 'T20 format',
    registrationDeadline: 'May 25, 2024',
  },
  {
    id: 'night-cricket-festival',
    name: 'Night Cricket Festival',
    date: 'July 5-12, 2024',
    location: 'Hyderabad, Telangana',
    shortDescription: 'Exciting night cricket tournament under floodlights.',
    fullDescription: 'Experience the thrill of night cricket at the Night Cricket Festival! Played under world-class floodlights, this tournament offers a unique cricket experience. The evening matches combined with entertainment and food stalls create a festival atmosphere that brings cricket lovers together for a week of excitement.',
    organizer: {
      name: 'Hyderabad Cricket Foundation',
      contact: 'ncf@hcf.org',
    },
    format: 'T20 Night matches',
    registrationDeadline: 'June 20, 2024',
  },
];
