import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { AboutContent } from '../../../types/content';

interface AboutEditorProps {
  content: AboutContent;
  onChange: (content: AboutContent) => void;
}

const AboutEditor: React.FC<AboutEditorProps> = ({ content, onChange }) => {
  const handleChange = (field: keyof AboutContent, value: any) => {
    onChange({ ...content, [field]: value });
  };

  const addDescription = () => {
    handleChange('description', [...content.description, '']);
  };

  const updateDescription = (index: number, value: string) => {
    const newDescription = [...content.description];
    newDescription[index] = value;
    handleChange('description', newDescription);
  };

  const removeDescription = (index: number) => {
    const newDescription = content.description.filter((_, i) => i !== index);
    handleChange('description', newDescription);
  };

  const addQualification = () => {
    handleChange('qualifications', [...content.qualifications, '']);
  };

  const updateQualification = (index: number, value: string) => {
    const newQualifications = [...content.qualifications];
    newQualifications[index] = value;
    handleChange('qualifications', newQualifications);
  };

  const removeQualification = (index: number) => {
    const newQualifications = content.qualifications.filter((_, i) => i !== index);
    handleChange('qualifications', newQualifications);
  };

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">About Section</h2>
        <p className="text-gray-600">Edit your personal information and background</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Section Title
            </label>
            <input
              type="text"
              value={content.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="About Me"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Subtitle
            </label>
            <input
              type="text"
              value={content.subtitle}
              onChange={(e) => handleChange('subtitle', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Brief description"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Years of Experience
            </label>
            <input
              type="text"
              value={content.experience}
              onChange={(e) => handleChange('experience', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="5 Years"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-gray-700">
                Description Paragraphs
              </label>
              <button
                onClick={addDescription}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add Paragraph</span>
              </button>
            </div>
            <div className="space-y-3">
              {content.description.map((paragraph, index) => (
                <div key={index} className="flex space-x-2">
                  <textarea
                    value={paragraph}
                    onChange={(e) => updateDescription(index, e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                    placeholder={`Paragraph ${index + 1}`}
                  />
                  <button
                    onClick={() => removeDescription(index)}
                    className="p-2 text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-gray-700">
                Qualifications
              </label>
              <button
                onClick={addQualification}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </button>
            </div>
            <div className="space-y-2">
              {content.qualifications.map((qualification, index) => (
                <div key={index} className="flex space-x-2">
                  <input
                    type="text"
                    value={qualification}
                    onChange={(e) => updateQualification(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                    placeholder="Qualification"
                  />
                  <button
                    onClick={() => removeQualification(index)}
                    className="p-2 text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEditor;