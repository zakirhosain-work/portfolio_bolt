import React from 'react';
import { Code2, Calculator, Atom, Laptop, BookOpen, Brain } from 'lucide-react';
import { useContentContext } from '../contexts/ContentContext';

const Skills = () => {
  const { content } = useContentContext();
  const { skills } = content;

  const getIconForSkill = (skillName: string, category: string) => {
    if (category === 'technical') {
      if (skillName.toLowerCase().includes('react') || skillName.toLowerCase().includes('css')) return Code2;
      return Laptop;
    }
    if (category === 'academic') {
      if (skillName.toLowerCase().includes('physics') || skillName.toLowerCase().includes('quantum')) return Atom;
      return Calculator;
    }
    if (skillName.toLowerCase().includes('curriculum') || skillName.toLowerCase().includes('visual')) return BookOpen;
    return Brain;
  };

  const technicalSkills = skills.filter(skill => skill.category === 'technical').map(skill => ({
    ...skill,
    icon: getIconForSkill(skill.name, skill.category)
  }));

  const academicSkills = skills.filter(skill => skill.category === 'academic').map(skill => ({
    ...skill,
    icon: getIconForSkill(skill.name, skill.category)
  }));

  const teachingSkills = skills.filter(skill => skill.category === 'teaching').map(skill => ({
    ...skill,
    icon: getIconForSkill(skill.name, skill.category)
  }));

  const SkillBar = ({ skill }: { skill: any }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <skill.icon className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-gray-800">{skill.name}</span>
        </div>
        <span className="text-blue-600 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-600 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A unique combination of technical proficiency and academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Technical Skills */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
            </div>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          {/* Academic Expertise */}
          <div className="bg-emerald-50 p-8 rounded-xl">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Calculator className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Academic Expertise</h3>
            </div>
            {academicSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          {/* Teaching Skills */}
          <div className="bg-orange-50 p-8 rounded-xl">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-orange-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Teaching Skills</h3>
            </div>
            {teachingSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;