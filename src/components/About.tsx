import React from 'react';
import { GraduationCap, Award, Users, Heart } from 'lucide-react';
import { useContentContext } from '../contexts/ContentContext';

const About = () => {
  const { content } = useContentContext();
  const { about } = content;

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{about.title}</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {about.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap gap-4 pt-4">
                {about.qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center space-x-2 text-blue-700">
                    {index === 0 ? <GraduationCap className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                    <span className="font-semibold">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Student-Centered</h3>
                <p className="text-gray-600">Tailored approach for each student's learning style and pace</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Heart className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Passionate</h3>
                <p className="text-gray-600">Genuine love for teaching and seeing students succeed</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 col-span-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700 mb-2">{about.experience}</div>
                  <p className="text-gray-600">
                    Teaching experience across high school and university levels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;