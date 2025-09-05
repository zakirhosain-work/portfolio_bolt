import React from 'react';
import { Code2, BookOpen, ArrowRight } from 'lucide-react';
import { useContentContext } from '../contexts/ContentContext';

const Hero = () => {
  const { content } = useContentContext();
  const { hero } = content;

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 text-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="flex justify-center space-x-4 mb-6">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <Code2 className="w-8 h-8" />
              </div>
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <BookOpen className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-line">
              {hero.title.split('&').map((part, index) => (
                <React.Fragment key={index}>
                  {index > 0 && '&'}
                  {index === 1 ? (
                    <span className="text-emerald-300">{part}</span>
                  ) : (
                    part
                  )}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              {hero.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#services"
              className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center group"
            >
              {hero.primaryButtonText}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              {hero.secondaryButtonText}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2">{hero.stats.experience}</div>
              <div className="text-blue-100">Years Teaching Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2">{hero.stats.students}</div>
              <div className="text-blue-100">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2">{hero.stats.successRate}</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;