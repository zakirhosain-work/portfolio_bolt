import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Save, RotateCcw, Eye, Settings, FileText, ArrowLeft, Database, Wifi, WifiOff, Check } from 'lucide-react';
import { useContentContext } from '../../contexts/ContentContext';
import HeroEditor from './editors/HeroEditor';
import AboutEditor from './editors/AboutEditor';
import SkillsEditor from './editors/SkillsEditor';
import ServicesEditor from './editors/ServicesEditor';
import PortfolioEditor from './editors/PortfolioEditor';
import TestimonialsEditor from './editors/TestimonialsEditor';
import ContactEditor from './editors/ContactEditor';
import RatingEditor from './editors/RatingEditor';
import { SiteContent } from '../../types/content';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const { content, updateContent, resetContent, loading, error } = useContentContext();
  const [activeTab, setActiveTab] = useState('hero');
  const [localContent, setLocalContent] = useState<SiteContent>(content);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const tabs = [
    { id: 'hero', label: 'Hero Section', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '🎯' },
    { id: 'services', label: 'Services', icon: '📚' },
    { id: 'portfolio', label: 'Portfolio', icon: '💼' },
    { id: 'testimonials', label: 'Testimonials', icon: '⭐' },
    { id: 'contact', label: 'Contact', icon: '📞' },
    { id: 'rating', label: 'Rating Display', icon: '📊' },
  ];

  // Update local content when database content changes
  React.useEffect(() => {
    setLocalContent(content);
    setHasUnsavedChanges(false);
  }, [content]);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      setSaveSuccess(false);
      console.log('🔄 Admin Dashboard: Saving all 8 content sections to database...');
      console.log('📋 Sections being saved: Hero, About, Skills, Services, Portfolio, Testimonials, Contact, Rating');
      await updateContent(localContent);
      setHasUnsavedChanges(false);
      setSaveSuccess(true);
      console.log('✅ Admin Dashboard: All content sections saved successfully to database');
      console.log('🌐 Changes are now live and will sync to all user devices');
      
      // Hide success message after 3 seconds
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      console.error('❌ Admin Dashboard: Failed to save content sections:', err);
      alert('Failed to save content to database. Please check your connection and try again.');
    } finally {
      setIsSaving(false);
    }
  };
  const handleReset = () => {
    if (confirm('Are you sure you want to reset all content to defaults? This cannot be undone.')) {
      resetContent();
      setHasUnsavedChanges(false);
    }
  };

  const handleContentUpdate = (newContent: SiteContent) => {
    console.log(`🔄 Admin Dashboard: Updating local content for ${activeTab} section`);
    console.log(`📝 ${activeTab} content:`, activeTab === 'hero' ? newContent.hero : 
                                          activeTab === 'about' ? newContent.about :
                                          activeTab === 'skills' ? newContent.skills :
                                          activeTab === 'services' ? newContent.services :
                                          activeTab === 'portfolio' ? newContent.portfolio :
                                          activeTab === 'testimonials' ? newContent.testimonials :
                                          activeTab === 'contact' ? newContent.contact :
                                          activeTab === 'rating' ? newContent.rating : 'unknown');
    setLocalContent(newContent);
    setHasUnsavedChanges(true);
  };
  const renderEditor = () => {
    switch (activeTab) {
      case 'hero':
        return <HeroEditor content={localContent.hero} onChange={(hero) => handleContentUpdate({ ...localContent, hero })} />;
      case 'about':
        return <AboutEditor content={localContent.about} onChange={(about) => handleContentUpdate({ ...localContent, about })} />;
      case 'skills':
        return <SkillsEditor skills={localContent.skills} onChange={(skills) => handleContentUpdate({ ...localContent, skills })} />;
      case 'services':
        return <ServicesEditor services={localContent.services} onChange={(services) => handleContentUpdate({ ...localContent, services })} />;
      case 'portfolio':
        return <PortfolioEditor projects={localContent.portfolio} onChange={(portfolio) => handleContentUpdate({ ...localContent, portfolio })} />;
      case 'testimonials':
        return <TestimonialsEditor testimonials={localContent.testimonials} onChange={(testimonials) => handleContentUpdate({ ...localContent, testimonials })} />;
      case 'contact':
        return <ContactEditor contact={localContent.contact} onChange={(contact) => handleContentUpdate({ ...localContent, contact })} />;
      case 'rating':
        return <RatingEditor rating={localContent.rating} onChange={(rating) => handleContentUpdate({ ...localContent, rating })} />;
      default:
        return <div>Select a section to edit</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Settings className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600">Edit your website content</p>
                  {error ? (
                    <div className="flex items-center space-x-1 text-orange-600">
                      <WifiOff className="w-4 h-4" />
                      <span className="text-xs">Local Mode - Changes won't sync</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1 text-emerald-600">
                      <Database className="w-4 h-4" />
                      <span className="text-xs">Database Connected - Changes sync to all devices</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Website</span>
              </Link>
              
              {saveSuccess && (
                <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg">
                  <Check className="w-4 h-4" />
                  <span>All Sections Saved to Database!</span>
                </div>
              )}
              
              <button
                onClick={handleSave}
                disabled={!hasUnsavedChanges || isSaving}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  hasUnsavedChanges && !isSaving
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Save className="w-4 h-4" />
                <span>
                  {isSaving ? 'Saving All Sections...' : hasUnsavedChanges ? 'Save All Changes' : 'All Saved'}
                </span>
              </button>
              
              <button
                onClick={handleReset}
                className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
              
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {error && (
            <div className="mb-6 p-4 bg-orange-100 border border-orange-300 rounded-lg">
              <div className="flex items-center space-x-2 text-orange-800">
                <WifiOff className="w-5 h-5" />
                <div>
                  <p className="font-semibold">Database Connection Failed</p>
                  <p className="text-sm">Using local storage. Changes won't sync across devices.</p>
                  <p className="text-xs mt-1">Please set up Supabase connection for full functionality.</p>
                </div>
              </div>
            </div>
          )}
          
          {hasUnsavedChanges && (
            <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
              <div className="flex items-center justify-between text-yellow-800">
                <div className="flex items-center space-x-2">
                  <Save className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">You have unsaved changes in {activeTab} section</p>
                    <p className="text-sm">Click "Save All Changes" to sync all modifications to the database and other devices.</p>
                  </div>
                </div>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors duration-200 disabled:opacity-50"
                >
                  {isSaving ? 'Saving All...' : 'Save All Now'}
                </button>
              </div>
            </div>
          )}
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            {renderEditor()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;