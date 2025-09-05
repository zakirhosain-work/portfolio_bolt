import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const sampleContent = {
  hero: {
    title: "Expert Tutor &\nSoftware Developer",
    subtitle: "Transforming complex concepts into simple understanding",
    description: "Professional educator with 8+ years of experience helping students master mathematics, physics, and programming. From calculus to quantum mechanics, from Python to React - I make learning engaging and effective.",
    primaryButtonText: "Start Learning Today",
    secondaryButtonText: "Explore My Projects",
    stats: {
      experience: "8+",
      students: "500+",
      successRate: "98%"
    }
  },
  
  about: {
    title: "About Sajid Hasan",
    subtitle: "Dedicated educator passionate about making complex subjects accessible and enjoyable",
    description: [
      "With a Master's degree in Computer Science from MIST and over 8 years of teaching experience, I specialize in making difficult subjects understandable and engaging. My unique background combines academic excellence with real-world software development experience.",
      "I've helped over 500 students improve their grades and understanding across mathematics, physics, and programming. My teaching philosophy centers on building confidence through clear explanations, practical examples, and personalized learning approaches.",
      "As a full-stack developer, I bring modern technology into my teaching methods, creating interactive learning experiences that resonate with today's digital-native students. I believe every student can excel with the right guidance and support."
    ],
    qualifications: [
      "M.S. Computer Science - MIST",
      "B.S. Software Engineering - BUET", 
      "Certified Mathematics Instructor",
      "Google Developer Certified"
    ],
    experience: "8+ Years"
  },

  skills: [
    { name: 'React & Next.js', level: 96, category: 'technical' },
    { name: 'TypeScript & JavaScript', level: 98, category: 'technical' },
    { name: 'Python & Django', level: 94, category: 'technical' },
    { name: 'Node.js & Express', level: 92, category: 'technical' },
    { name: 'Database Design (SQL/NoSQL)', level: 89, category: 'technical' },
    { name: 'AWS & Cloud Architecture', level: 87, category: 'technical' },
    { name: 'Calculus & Real Analysis', level: 97, category: 'academic' },
    { name: 'Linear Algebra & Statistics', level: 95, category: 'academic' },
    { name: 'Differential Equations', level: 93, category: 'academic' },
    { name: 'Classical & Modern Physics', level: 91, category: 'academic' },
    { name: 'Quantum Mechanics', level: 88, category: 'academic' },
    { name: 'Thermodynamics & E&M', level: 90, category: 'academic' },
    { name: 'Personalized Learning Plans', level: 96, category: 'teaching' },
    { name: 'Interactive Teaching Methods', level: 94, category: 'teaching' },
    { name: 'Student Progress Tracking', level: 92, category: 'teaching' },
    { name: 'Exam Preparation Strategies', level: 95, category: 'teaching' },
    { name: 'Visual Learning Tools', level: 90, category: 'teaching' },
    { name: 'Online Teaching Platforms', level: 93, category: 'teaching' }
  ],

  services: [
    {
      name: 'Mathematics Tutoring',
      topics: ['Calculus I, II, III', 'Linear Algebra', 'Differential Equations', 'Statistics & Probability', 'Discrete Mathematics', 'Real Analysis'],
      price: '$50/hour',
      discount: 'First session FREE',
      color: 'blue'
    },
    {
      name: 'Physics Tutoring', 
      topics: ['Classical Mechanics', 'Electromagnetism', 'Thermodynamics', 'Quantum Physics', 'Modern Physics', 'Optics & Waves'],
      price: '$50/hour',
      discount: 'First session FREE',
      color: 'emerald'
    },
    {
      name: 'Programming & CS',
      topics: ['Python Programming', 'JavaScript & React', 'Data Structures & Algorithms', 'Database Design', 'Web Development', 'Software Engineering'],
      price: '$55/hour',
      discount: 'First session FREE', 
      color: 'orange'
    },
    {
      name: 'Exam Preparation',
      topics: ['SAT Math', 'GRE Quantitative', 'University Entrance', 'Professional Certifications', 'Coding Interviews', 'Academic Projects'],
      price: '$60/hour',
      discount: 'Package deals available',
      color: 'purple'
    }
  ],

  portfolio: [
    {
      title: 'Quantum Mechanics Visualizer',
      description: 'Interactive web application that visualizes quantum mechanical concepts including wave functions, probability distributions, and particle behavior in various potential wells.',
      image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Three.js', 'WebGL', 'D3.js', 'Mathematical.js'],
      category: 'Educational',
      githubUrl: 'https://github.com/sajidhasan/quantum-visualizer',
      liveUrl: 'https://quantum-viz.netlify.app'
    },
    {
      title: 'Calculus Learning Hub',
      description: 'Comprehensive learning platform with step-by-step calculus problem solving, interactive graphs, and personalized practice problems with instant feedback.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Chart.js', 'MathJax'],
      category: 'Educational',
      githubUrl: 'https://github.com/sajidhasan/calculus-hub',
      liveUrl: 'https://calculus-hub.vercel.app'
    },
    {
      title: 'Student Progress Tracker',
      description: 'Advanced analytics dashboard for tracking student performance, identifying learning gaps, and generating detailed progress reports for parents and educators.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'TypeScript', 'Firebase', 'Chart.js', 'Material-UI', 'PDF Generation'],
      category: 'Educational',
      githubUrl: 'https://github.com/sajidhasan/progress-tracker',
      liveUrl: 'https://student-tracker.firebase.app'
    },
    {
      title: 'Physics Lab Simulator',
      description: 'Virtual physics laboratory allowing students to conduct experiments in mechanics, optics, and electromagnetism with realistic simulations and data collection.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Three.js', 'Physics.js', 'WebGL', 'Chart.js', 'Export Tools'],
      category: 'Educational',
      githubUrl: 'https://github.com/sajidhasan/physics-lab',
      liveUrl: 'https://physics-lab-sim.netlify.app'
    },
    {
      title: 'E-Learning Management System',
      description: 'Full-featured LMS with course management, video streaming, assignment submission, grading system, and integrated video conferencing for online classes.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS S3', 'WebRTC', 'Stripe API'],
      category: 'Commercial',
      githubUrl: 'https://github.com/sajidhasan/lms-platform',
      liveUrl: 'https://edulearn-pro.com'
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Interactive tool for visualizing sorting algorithms, graph traversals, and data structures with step-by-step animations and complexity analysis.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'TypeScript', 'D3.js', 'Algorithms', 'Animation Libraries'],
      category: 'Educational',
      githubUrl: 'https://github.com/sajidhasan/algo-visualizer',
      liveUrl: 'https://algo-viz.herokuapp.com'
    }
  ],

  testimonials: [
    {
      name: 'Aisha Rahman',
      role: 'University Student',
      subject: 'Calculus',
      content: 'Sajid sir transformed my understanding of calculus completely! I was struggling with limits and derivatives, but his visual explanations and real-world examples made everything click. My grade improved from D+ to A- in just one semester. Highly recommend!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Rafiq Ahmed',
      role: 'Engineering Student',
      subject: 'Physics',
      content: 'The quantum physics sessions were absolutely brilliant! Sajid sir has this incredible gift of making the most complex concepts seem simple. His interactive simulations helped me visualize wave functions and probability distributions. Got an A+ in my quantum mechanics course!',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Fatima Khan',
      role: 'Computer Science Student',
      subject: 'Programming',
      content: 'Learning React and JavaScript with Sajid sir was a game-changer for my career! His hands-on approach and real project examples gave me the confidence to build full-stack applications. Now I have internship offers from top tech companies. Thank you so much!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Mohammad Hassan',
      role: 'High School Student',
      subject: 'Mathematics',
      content: 'I used to hate math, but Sajid sir made it fun and interesting! His step-by-step approach and patience helped me understand algebra and geometry. My confidence has improved so much, and I actually enjoy solving math problems now. Amazing teacher!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Nusrat Jahan',
      role: 'Medical Student',
      subject: 'Physics',
      content: 'The physics concepts for MCAT preparation were so challenging until I found Sajid sir. His clear explanations of mechanics and thermodynamics helped me score in the 95th percentile. His teaching methods are simply outstanding!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Abdullah Al Mamun',
      role: 'Parent',
      subject: 'General',
      content: "My daughter was struggling with mathematics and physics, but after just 3 months with Sajid sir, her grades improved dramatically. He doesn't just teach subjects, he builds confidence and critical thinking skills. Excellent mentor!",
      rating: 5,
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ],

  contact: {
    email: 'sajidhasan.mist@gmail.com',
    phone: '+880 1575 342 467',
    location: 'Dhaka, Bangladesh',
    availability: 'Mon-Sun, 9AM-10PM BST',
    officeHours: 'Monday - Sunday\n9:00 AM - 10:00 PM BST\n\nWeekend sessions available\nFlexible scheduling for international students'
  },

  rating: {
    averageRating: 4.9,
    totalReviews: 127,
    showRatingSection: true
  }
};

async function populateDatabase() {
  console.log('🚀 Starting database population...');
  
  try {
    // Populate each section
    const sections = Object.keys(sampleContent);
    
    for (const section of sections) {
      console.log(`💾 Saving ${section} to database...`);
      
      const { error } = await supabase
        .from('site_content')
        .upsert({
          content_key: section,
          content_data: sampleContent[section]
        }, { 
          onConflict: 'content_key' 
        });

      if (error) {
        console.error(`❌ Error saving ${section}:`, error);
        throw error;
      }
      
      console.log(`✅ Successfully saved ${section} to database`);
    }
    
    console.log('🎉 Database population completed successfully!');
    console.log('\n📊 Sample content added:');
    console.log('✅ Hero Section - Professional title, stats, and call-to-actions');
    console.log('✅ About - Detailed background, qualifications, and experience');
    console.log('✅ Skills - 18 skills across technical, academic, and teaching categories');
    console.log('✅ Services - 4 tutoring services with topics and pricing');
    console.log('✅ Portfolio - 6 educational and commercial projects');
    console.log('✅ Testimonials - 6 student reviews with ratings and photos');
    console.log('✅ Contact - Complete contact information and availability');
    console.log('✅ Rating Display - Average rating and review count');
    console.log('\n🎯 You can now edit or delete any content via your admin dashboard!');
    
  } catch (error) {
    console.error('❌ Database population failed:', error);
    process.exit(1);
  }
}

populateDatabase();