import React from 'react';
import { Star, Quote, Share2 } from 'lucide-react';
import { useContentContext } from '../contexts/ContentContext';

const Testimonials = () => {
  const { content } = useContentContext();
  const { testimonials } = content;

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  const handleShare = async (testimonial: any) => {
    const shareText = `"${testimonial.content}" - ${testimonial.name}, ${testimonial.role}`;
    const shareUrl = window.location.href;
    
    if (navigator.share) {
      try {
        // Use native sharing on mobile devices
        await navigator.share({
          title: 'Student Testimonial - Sajid Hasan Tutoring',
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        // Fallback to clipboard if native sharing fails
        navigator.clipboard.writeText(`${shareText}\n\nCheck out more at: ${shareUrl}`).then(() => {
          alert('Testimonial copied to clipboard!');
        });
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${shareText}\n\nCheck out more at: ${shareUrl}`).then(() => {
        alert('Testimonial copied to clipboard!');
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from students who've transformed their understanding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <StarRating rating={testimonial.rating} />
                      <button
                        onClick={() => handleShare(testimonial)}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                        title="Share this testimonial"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {testimonial.subject}
                  </span>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {content.rating.showRatingSection && (
          <div className="text-center mt-12">
            <div className="inline-block bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{content.rating.averageRating}/5</div>
              <div className="text-gray-600 mb-2">Average Rating</div>
              <StarRating rating={Math.round(content.rating.averageRating)} />
              <p className="text-sm text-gray-500 mt-2">Based on {content.rating.totalReviews} reviews</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;