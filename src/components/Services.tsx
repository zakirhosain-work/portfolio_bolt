import React from 'react';
import { Calculator, Atom, Code, Clock, Users, Trophy, ArrowRight } from 'lucide-react';
import { useContentContext } from '../contexts/ContentContext';

const Services = () => {
  const { content } = useContentContext();
  const { services } = content;

  const handleGetStarted = (serviceName: string) => {
    const message = `Hi! I'm interested in ${serviceName} tutoring. Can we discuss the details?`;
    const whatsappUrl = `https://wa.me/8801575342467?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getIconForService = (serviceName: string) => {
    if (serviceName.toLowerCase().includes('math')) return Calculator;
    if (serviceName.toLowerCase().includes('physics')) return Atom;
    if (serviceName.toLowerCase().includes('programming') || serviceName.toLowerCase().includes('code')) return Code;
    return Calculator;
  };

  const subjects = services.map(service => ({
    ...service,
    icon: getIconForService(service.name)
  }));

  const features = [
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Online and in-person sessions available 7 days a week',
    },
    {
      icon: Users,
      title: 'Personalized Approach',
      description: 'Customized lesson plans based on your learning style and goals',
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: '95% of students improve their grades within 3 months',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tutoring Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tutoring that makes complex subjects accessible and engaging
          </p>
        </div>

        {/* Subjects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`p-3 bg-${subject.color}-100 rounded-lg w-fit mb-6`}>
                <subject.icon className={`w-8 h-8 text-${subject.color}-600`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{subject.name}</h3>
              <ul className="space-y-2 mb-6">
                {subject.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="text-gray-600 flex items-center">
                    <div className={`w-2 h-2 bg-${subject.color}-500 rounded-full mr-3`}></div>
                    {topic}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-gray-900 mb-2">{subject.price}</div>
              <p className="text-gray-600 text-sm mb-4">{subject.discount}</p>
              <button 
                onClick={() => handleGetStarted(subject.name)}
                className={`w-full ${
                subject.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                subject.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' :
                subject.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' :
                'bg-purple-600 hover:bg-purple-700'
              } text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center group cursor-pointer`}>
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 md:p-12 mt-16 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Excel in Your Studies?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of students who've improved their understanding and grades
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const message = "Hi! I'm interested in your tutoring services. Can we schedule a free consultation?";
              const whatsappUrl = `https://wa.me/8801575342467?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center group"
          >
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;