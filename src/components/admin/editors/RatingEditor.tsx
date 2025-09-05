import React from 'react';
import { RatingInfo } from '../../../types/content';

interface RatingEditorProps {
  rating: RatingInfo;
  onChange: (rating: RatingInfo) => void;
}

const RatingEditor: React.FC<RatingEditorProps> = ({ rating, onChange }) => {
  const handleChange = (field: keyof RatingInfo, value: any) => {
    onChange({ ...rating, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Rating Display</h2>
        <p className="text-gray-600">Control the average rating section shown below testimonials</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={rating.showRatingSection}
                onChange={(e) => handleChange('showRatingSection', e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-sm font-semibold text-gray-700">Show Rating Section</span>
            </label>
            <p className="text-xs text-gray-500 mt-1">Toggle to show/hide the average rating display</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Average Rating
            </label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={rating.averageRating}
              onChange={(e) => handleChange('averageRating', parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="4.9"
            />
            <p className="text-xs text-gray-500 mt-1">Rating out of 5 (e.g., 4.9)</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Total Reviews
            </label>
            <input
              type="number"
              min="0"
              value={rating.totalReviews}
              onChange={(e) => handleChange('totalReviews', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="47"
            />
            <p className="text-xs text-gray-500 mt-1">Total number of reviews received</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-4">Preview</h4>
          {rating.showRatingSection ? (
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{rating.averageRating}/5</div>
              <div className="text-gray-600 mb-2">Average Rating</div>
              <div className="flex justify-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-xl ${
                      star <= Math.round(rating.averageRating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500">Based on {rating.totalReviews} reviews</p>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p>Rating section is hidden</p>
              <p className="text-sm">Enable "Show Rating Section" to display</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RatingEditor;