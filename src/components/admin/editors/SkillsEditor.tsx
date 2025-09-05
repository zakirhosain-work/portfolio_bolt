import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Skill } from '../../../types/content';

interface SkillsEditorProps {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

const SkillsEditor: React.FC<SkillsEditorProps> = ({ skills, onChange }) => {
  const addSkill = (category: Skill['category']) => {
    const newSkill: Skill = {
      name: '',
      level: 80,
      category,
    };
    onChange([...skills, newSkill]);
  };

  const updateSkill = (index: number, field: keyof Skill, value: any) => {
    const newSkills = [...skills];
    newSkills[index] = { ...newSkills[index], [field]: value };
    onChange(newSkills);
  };

  const removeSkill = (index: number) => {
    onChange(skills.filter((_, i) => i !== index));
  };

  const getSkillsByCategory = (category: Skill['category']) => {
    return skills
      .map((skill, index) => ({ ...skill, originalIndex: index }))
      .filter(skill => skill.category === category);
  };

  const categories = [
    { id: 'technical' as const, title: 'Technical Skills', color: 'blue' },
    { id: 'academic' as const, title: 'Academic Expertise', color: 'emerald' },
    { id: 'teaching' as const, title: 'Teaching Skills', color: 'orange' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Skills & Expertise</h2>
        <p className="text-gray-600">Manage your skills across different categories</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              <button
                onClick={() => addSkill(category.id)}
                className={`flex items-center space-x-1 text-${category.color}-600 hover:text-${category.color}-800 text-sm`}
              >
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </button>
            </div>

            <div className="space-y-3">
              {getSkillsByCategory(category.id).map((skill) => (
                <div key={skill.originalIndex} className={`p-4 border-2 border-${category.color}-100 rounded-lg`}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => updateSkill(skill.originalIndex, 'name', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm mr-2"
                        placeholder="Skill name"
                      />
                      <button
                        onClick={() => removeSkill(skill.originalIndex)}
                        className="p-1 text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-600">Proficiency Level</span>
                        <span className="text-xs font-semibold text-gray-900">{skill.level}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={skill.level}
                        onChange={(e) => updateSkill(skill.originalIndex, 'level', parseInt(e.target.value))}
                        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-${category.color}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsEditor;