import React from 'react';
import { HeroContent } from '../../../types/content';

interface HeroEditorProps {
  content: HeroContent;
  onChange: (content: HeroContent) => void;
}

const HeroEditor: React.FC<HeroEditorProps> = ({ content, onChange }) => {
  const handleChange = (field: keyof HeroContent, value: any) => {
    onChange({ ...content, [field]: value });
  };

  const handleStatsChange = (field: keyof HeroContent['stats'], value: string) => {
    onChange({
      ...content,
      stats: { ...content.stats, [field]: value }
    });
  };

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Hero Section</h2>
        <p className="text-gray-600">Edit the main landing section of your website</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Main Title
            </label>
            <textarea
              value={content.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={2}
              placeholder="Your main headline"
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
              placeholder="Brief tagline"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={content.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={3}
              placeholder="Detailed description of your services"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Primary Button Text
            </label>
            <input
              type="text"
              value={content.primaryButtonText}
              onChange={(e) => handleChange('primaryButtonText', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Main call-to-action"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Secondary Button Text
            </label>
            <input
              type="text"
              value={content.secondaryButtonText}
              onChange={(e) => handleChange('secondaryButtonText', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Secondary action"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Statistics</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Years Experience
                </label>
                <input
                  type="text"
                  value={content.stats.experience}
                  onChange={(e) => handleStatsChange('experience', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                  placeholder="5+"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Students Helped
                </label>
                <input
                  type="text"
                  value={content.stats.students}
                  onChange={(e) => handleStatsChange('students', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                  placeholder="200+"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Success Rate
                </label>
                <input
                  type="text"
                  value={content.stats.successRate}
                  onChange={(e) => handleStatsChange('successRate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                  placeholder="95%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEditor;