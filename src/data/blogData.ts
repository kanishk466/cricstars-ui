export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Academy News' | 'Match Updates' | 'Player Spotlight' | 'Training Tips' | 'Tournament News';
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'elite-academy-expansion-2024',
    title: 'Elite Cricket Academy Announces Major Expansion with Indoor Training Facility',
    excerpt: "Mumbai's premier cricket academy unveils plans for a state-of-the-art indoor training complex spanning 15,000 sq ft.",
    content: "Elite Cricket Academy has announced a significant expansion of its training infrastructure with the construction of a brand-new indoor training facility. The 15,000 sq ft complex will feature six indoor nets with synthetic and turf pitches, a dedicated bowling machine area, and a cutting-edge video analysis suite.\n\nThe expansion is expected to be completed by mid-2024 and will allow the academy to train players year-round, regardless of weather conditions. \"This is a game-changer for our students,\" said academy director Vikram Mehta. \"We've always believed in providing world-class infrastructure, and this new facility puts us on par with international training centers.\"\n\nThe indoor complex will also include a sports science lab for biomechanical analysis, helping coaches fine-tune player techniques with data-driven insights.",
    category: 'Academy News',
    author: 'CricStars Editorial',
    date: 'February 25, 2026',
    readTime: '4 min read',
    featured: true,
  },
  {
    id: 'u19-championship-recap',
    title: 'Under-19 Championship 2024: Champion Cricket Hub Dominates with Unbeaten Run',
    excerpt: "Delhi's Champion Cricket Hub clinches the U-19 title with an impressive unbeaten streak across all matches.",
    content: "Champion Cricket Hub from Delhi has emerged victorious in the Under-19 Championship 2024, completing the tournament without a single loss. The team displayed exceptional all-round cricket throughout the competition.\n\nCaptain Arjun Verma led from the front with 342 runs in the tournament, including two centuries. Fast bowler Deepak Singh was named Player of the Tournament for his 18 wickets at an average of just 12.5.\n\n\"This victory is a testament to the quality of coaching and the hard work our boys have put in over the past year,\" said head coach Ramesh Gupta. \"We are proud of every single player who represented us.\"",
    category: 'Tournament News',
    author: 'Sports Desk',
    date: 'February 20, 2026',
    readTime: '3 min read',
    featured: true,
  },
  {
    id: 'priya-patel-coaching-masterclass',
    title: 'Coach Priya Patel Launches Online Fast Bowling Masterclass Series',
    excerpt: "Former India women's team player brings her expertise to aspiring fast bowlers through a comprehensive online program.",
    content: "Renowned fast bowling coach Priya Patel has launched an innovative online masterclass series aimed at aspiring fast bowlers across the country. The 12-week program covers everything from basic bowling mechanics to advanced variations and match strategies.\n\nThe masterclass leverages video analysis technology, allowing students to submit their bowling footage for personalized feedback from Priya herself. \"Not every talented bowler has access to top-tier coaching,\" Priya explained. \"This program bridges that gap and makes professional coaching accessible to everyone.\"\n\nThe series also includes live Q&A sessions, fitness routines specifically designed for fast bowlers, and injury prevention guidelines.",
    category: 'Player Spotlight',
    author: 'CricStars Editorial',
    date: 'February 15, 2026',
    readTime: '3 min read',
  },
  {
    id: 'victory-school-karnataka-champions',
    title: 'Victory Cricket School Students Dominate Karnataka State Selection Trials',
    excerpt: 'Five students from Victory Cricket School selected for Karnataka state under-16 team in recent trials.',
    content: "Victory Cricket School in Bangalore has once again proved its credentials as a top-tier cricket academy, with five of its students earning selection for the Karnataka state under-16 team.\n\nThe selected players - Kiran Rao, Aditya Hegde, Nikhil Shetty, Varun Kumar, and Sneha Reddy - impressed selectors with their performances during the week-long trials held at the M. Chinnaswamy Stadium.\n\n\"Our holistic approach to player development, which includes sports psychology and mental conditioning, gives our students an edge in high-pressure selection scenarios,\" said academy head Deepa Krishnan.",
    category: 'Academy News',
    author: 'Bangalore Bureau',
    date: 'February 10, 2026',
    readTime: '3 min read',
  },
  {
    id: 'night-cricket-festival-preview',
    title: "Night Cricket Festival 2024: Everything You Need to Know About Hyderabad's Biggest Cricket Event",
    excerpt: 'A comprehensive preview of the upcoming Night Cricket Festival featuring 24 teams under floodlights.',
    content: "The much-anticipated Night Cricket Festival is set to kick off in Hyderabad next month, promising an electrifying week of cricket under floodlights. Here is everything you need to know about the event.\n\n24 teams from across South India have confirmed participation, making this the largest edition yet. The tournament will be played in T20 format with day-night scheduling - matches beginning at 6 PM and concluding by 11 PM.\n\nNew this year is the \"Fan Zone,\" featuring cricket simulators, autograph sessions with former players, and food stalls from popular Hyderabadi eateries. Entry for spectators is free for league-stage matches.",
    category: 'Tournament News',
    author: 'Sports Desk',
    date: 'February 5, 2026',
    readTime: '4 min read',
  },
  {
    id: 'spin-bowling-tips-mohammed-khan',
    title: '5 Essential Spin Bowling Drills Every Young Cricketer Should Practice Daily',
    excerpt: 'Master spin bowler coach Mohammed Khan shares his top training drills for developing deadly spin.',
    content: "Coach Mohammed Khan, one of India's most respected spin bowling coaches, shares five essential drills that every aspiring spinner should incorporate into their daily practice routine.\n\n1. The Target Drill: Place a coin on a good length and try to hit it consistently. This develops accuracy and muscle memory.\n\n2. The Blindfold Spin: Practice spinning the ball with eyes closed to develop feel and finger strength.\n\n3. The Wall Bounce: Bowl against a wall from 10 meters to work on revolutions and drift.\n\n4. The Variation Set: Bowl six different deliveries in an over - leg break, top spinner, googly, flipper, slider, and arm ball.\n\n5. The Pressure Simulation: Set a target of hitting a specific area 8 out of 10 times before you can finish practice.\n\n\"Consistency is key,\" says Khan. \"These drills take just 30 minutes but will transform your bowling within weeks.\"",
    category: 'Training Tips',
    author: 'Mohammed Khan',
    date: 'January 28, 2026',
    readTime: '5 min read',
  },
  {
    id: 'corporate-cricket-cup-registrations',
    title: 'Corporate Cricket Cup 2024: Registration Now Open with Early Bird Discounts',
    excerpt: "Delhi's premier corporate cricket tournament opens registrations with special pricing for early entries.",
    content: "Registration for the Corporate Cricket Cup 2024 is now officially open, and the organizers are offering attractive early bird discounts for teams that sign up before March 15.\n\nThe T10 format tournament, scheduled for May 1-10 in Delhi, welcomes teams from all corporate organizations. Each team can register up to 15 players, with a minimum of 11 required per match.\n\nThis year's edition introduces a women's category alongside the men's division, reflecting the growing popularity of cricket among women professionals. The registration fee includes team jerseys, match balls, and refreshments during match days.",
    category: 'Tournament News',
    author: 'CricStars Editorial',
    date: 'January 20, 2026',
    readTime: '3 min read',
  },
  {
    id: 'star-institute-spin-camp',
    title: "Star Cricket Institute's Annual Spin Bowling Camp Attracts Record 200 Participants",
    excerpt: "Chennai's Star Cricket Institute reports unprecedented demand for its signature spin bowling camp.",
    content: "Star Cricket Institute in Chennai has reported record participation in its annual spin bowling camp, with over 200 aspiring spinners enrolling for the two-week intensive program.\n\nFounded by former first-class cricketer Rajan Kumar, the camp is renowned for producing quality spin bowlers and has become a must-attend event for young cricketers across South India.\n\n\"The demand this year has been phenomenal,\" said Kumar. \"We have had to add extra batches to accommodate everyone. It shows that spin bowling is alive and thriving in Indian cricket.\"\n\nThe camp covers leg spin, off spin, left-arm orthodox, and chinaman bowling, with specialized tracks for each discipline.",
    category: 'Academy News',
    author: 'Chennai Bureau',
    date: 'January 15, 2026',
    readTime: '3 min read',
  },
];
