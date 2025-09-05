import React from 'react';
import { BookOpen, ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';

const BlogPreview = () => {
  const blogUrl = "https://blogsajidhasan-me.netlify.app/";

  const handleBlogClick = () => {
    window.open(blogUrl, '_blank');
  };

  const featuredPosts = [
    {
      title: "5 Study Techniques That Actually Work",
      excerpt: "Discover the proven methods that helped my students improve their grades by 40% in just 6 weeks.",
      readTime: "3 min read",
      category: "Study Tips",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
      popular: true
    },
    {
      title: "Why Students Struggle with Math (And How to Fix It)",
      excerpt: "The #1 reason students find math difficult isn't what you think. Here's how to overcome it.",
      readTime: "4 min read",
      category: "Mathematics",
      image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400",
      popular: false
    }
  ];

  const stats = [
    { icon: TrendingUp, number: "25+", label: "Study Guides" },
    { icon: Users, number: "500+", label: "Students Helped" },
    { icon: BookOpen, number: "95%", label: "Success Rate" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Free Study Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven tips and strategies to help you excel in your studies
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-10 max-w-md mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="p-2 bg-white rounded-lg shadow-sm mb-2 mx-auto w-fit">
                  <stat.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                onClick={handleBlogClick}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {post.popular && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        ⭐ Popular
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <span className="text-xs text-gray-600">{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="text-xs text-blue-600 font-semibold mb-2">{post.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button 
              onClick={handleBlogClick}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 flex items-center space-x-2 mx-auto group cursor-pointer"
            >
              <span>Explore All Study Tips</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <p className="text-sm text-gray-500 mt-3">
              Join 500+ students who improved their grades with our free resources
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;