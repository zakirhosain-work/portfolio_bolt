import { SiteContent } from '../types/content';

export const defaultContent: SiteContent = {
  hero: {
    title: "Frontend Engineer &\nMath & Physics Instructor",
    subtitle: "Combining technical expertise with passionate teaching",
    description: "Combining technical expertise with passionate teaching to help students excel in mathematics, physics, and programming",
    primaryButtonText: "Book a Tutoring Session",
    secondaryButtonText: "View My Work",
    stats: {
      experience: "5+",
      students: "200+",
      successRate: "95%"
    }
  },
  about: {
    title: "About Me",
    subtitle: "Passionate about bridging the gap between complex concepts and student understanding",
    description: [
      "With a Master's degree in Computer Science and extensive experience in frontend development, I bring a unique perspective to teaching mathematics and physics. My approach combines theoretical knowledge with practical applications, helping students see the real-world relevance of what they're learning.",
      "I've worked with leading tech companies developing user interfaces and web applications, giving me insights into how mathematical and physical principles apply in modern technology. This experience allows me to make abstract concepts tangible and engaging for my students."
    ],
    qualifications: [
      "M.S. Computer Science",
      "Certified Math Tutor"
    ],
    experience: "5 Years"
  },
  skills: [
    { name: 'React & TypeScript', level: 95, category: 'technical' },
    { name: 'JavaScript/ES6+', level: 98, category: 'technical' },
    { name: 'CSS/Tailwind', level: 92, category: 'technical' },
    { name: 'Node.js', level: 88, category: 'technical' },
    { name: 'Calculus & Analysis', level: 96, category: 'academic' },
    { name: 'Linear Algebra', level: 94, category: 'academic' },
    { name: 'Classical Mechanics', level: 92, category: 'academic' },
    { name: 'Quantum Physics', level: 89, category: 'academic' },
    { name: 'Curriculum Development', level: 93, category: 'teaching' },
    { name: 'Student Assessment', level: 91, category: 'teaching' },
    { name: 'Problem-Solving Methods', level: 96, category: 'teaching' },
    { name: 'Visual Learning Aids', level: 88, category: 'teaching' },
  ],
  services: [
    {
      name: 'Mathematics',
      topics: ['Calculus', 'Linear Algebra', 'Statistics', 'Discrete Math'],
      price: '$45/hour',
      discount: 'First session 50% off',
      color: 'blue'
    },
    {
      name: 'Physics',
      topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Quantum Physics'],
      price: '$45/hour',
      discount: 'First session 50% off',
      color: 'emerald'
    },
    {
      name: 'Programming',
      topics: ['JavaScript', 'React', 'Python', 'Data Structures'],
      price: '$45/hour',
      discount: 'First session 50% off',
      color: 'orange'
    }
  ],
  portfolio: [
    {
      title: 'Interactive Physics Simulator',
      description: 'A web-based physics simulation tool for visualizing wave mechanics and particle interactions',
      image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Three.js', 'WebGL', 'Physics Engine'],
      category: 'Educational',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Math Learning Platform',
      description: 'A comprehensive online platform for calculus students with interactive problem solving',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'MongoDB', 'D3.js'],
      category: 'Educational',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Modern admin dashboard for e-commerce analytics with real-time data visualization',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'TypeScript', 'Chart.js', 'REST API'],
      category: 'Commercial',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Student Progress Tracker',
      description: 'Web application for tracking student performance and generating detailed progress reports',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Firebase', 'Material-UI', 'Analytics'],
      category: 'Educational',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ],
  testimonials: [
    {
      name: 'Sarah Johnson',
      role: 'High School Student',
      subject: 'Calculus',
      content: 'Alex made calculus actually make sense! His way of explaining derivatives and integrals with real-world examples was incredible. My grade went from C+ to A- in just 2 months.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      role: 'University Student',
      subject: 'Physics',
      content: 'The quantum mechanics sessions were mind-blowing. Alex has this amazing ability to break down complex concepts into understandable parts. Highly recommend!',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'College Student',
      subject: 'Programming',
      content: 'Learning React with Alex was fantastic. His teaching style is patient and thorough. I now feel confident building web applications!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Kim',
      role: 'Parent',
      subject: 'General',
      content: "My son's confidence in math has completely transformed. Alex is not just knowledgeable but also genuinely cares about his students' success.",
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ],
  contact: {
    email: 'sajidhasan.mist@gmail.com',
    phone: '+880 1575 342 467',
    location: 'San Francisco Bay Area',
    availability: 'Mon-Sun, 9AM-9PM PST',
    officeHours: 'Monday - Sunday\n9:00 AM - 9:00 PM PST'
  },
  rating: {
    averageRating: 4.9,
    totalReviews: 47,
    showRatingSection: true
  },
};