import { useState, useEffect } from 'react';
import { SiteContent } from '../types/content';
import { supabase } from '../lib/supabase';
import { defaultContent } from '../data/defaultContent';

export const useSupabaseContent = () => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load content from Supabase
  const loadContent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Check if Supabase is available
      if (!supabase) {
        console.log('📱 Supabase not configured, using default content');
        setContent(defaultContent);
        setLoading(false);
        return;
      }
      
      console.log('🔄 Loading content from Supabase...');

      const { data, error: supabaseError } = await supabase
        .from('site_content')
        .select('content_key, content_data');

      if (supabaseError) {
        console.error('Error loading content:', supabaseError);
        setError('Failed to load content from database');
        console.log('❌ Supabase error, falling back to default content');
        return;
      }

      console.log('📊 Raw data from Supabase:', data);

      if (data && data.length > 0) {
        // Convert database format to SiteContent format
        const loadedContent: any = {};
        
        data.forEach((item) => {
          loadedContent[item.content_key] = item.content_data;
        });

        console.log('🔄 Processing loaded content:', loadedContent);

        // Merge with default content to ensure all properties exist
        const mergedContent: SiteContent = {
          hero: { ...defaultContent.hero, ...loadedContent.hero },
          about: { 
            ...defaultContent.about, 
            ...loadedContent.about,
            description: Array.isArray(loadedContent.about?.description) 
              ? loadedContent.about.description 
              : defaultContent.about.description,
            qualifications: Array.isArray(loadedContent.about?.qualifications) 
              ? loadedContent.about.qualifications 
              : defaultContent.about.qualifications,
          },
          skills: Array.isArray(loadedContent.skills) ? loadedContent.skills : defaultContent.skills,
          services: Array.isArray(loadedContent.services) ? loadedContent.services : defaultContent.services,
          portfolio: Array.isArray(loadedContent.portfolio) 
            ? loadedContent.portfolio.map(project => ({
                ...project,
                tech: Array.isArray(project.tech) ? project.tech : []
              }))
            : defaultContent.portfolio,
          testimonials: Array.isArray(loadedContent.testimonials) ? loadedContent.testimonials : defaultContent.testimonials,
          contact: { ...defaultContent.contact, ...loadedContent.contact },
          rating: { ...defaultContent.rating, ...loadedContent.rating },
        };

        console.log('✅ Merged content ready:', mergedContent);
        setContent(mergedContent);
        console.log('🎉 Content loaded successfully from database');
      } else {
        console.log('📝 No data found in database, using default content');
        setContent(defaultContent);
      }
    } catch (err) {
      console.error('Error loading content:', err);
      setError('Failed to load content');
      setContent(defaultContent);
    } finally {
      setLoading(false);
    }
  };

  // Save content to Supabase
  const updateContent = async (newContent: SiteContent) => {
    try {
      setError(null);
      
      // Check if Supabase is available
      if (!supabase) {
        console.log('📱 Supabase not configured, saving to localStorage only');
        setContent(newContent);
        localStorage.setItem('siteContent', JSON.stringify(newContent));
        return;
      }
      
      console.log('💾 Starting to save all content sections to database...');
      console.log('📊 Content to save:', newContent);

      // Update each section in the database
      const updates = [
        { content_key: 'hero', content_data: newContent.hero },
        { content_key: 'about', content_data: newContent.about },
        { content_key: 'skills', content_data: newContent.skills },
        { content_key: 'services', content_data: newContent.services },
        { content_key: 'portfolio', content_data: newContent.portfolio },
        { content_key: 'testimonials', content_data: newContent.testimonials },
        { content_key: 'contact', content_data: newContent.contact },
        { content_key: 'rating', content_data: newContent.rating },
      ];

      for (const update of updates) {
        console.log(`💾 Saving ${update.content_key}:`, update.content_data);
        
        const { error: updateError } = await supabase
          .from('site_content')
          .upsert(update, { 
            onConflict: 'content_key',
            ignoreDuplicates: false 
          });

        if (updateError) {
          console.error(`Error updating ${update.content_key}:`, updateError);
          throw updateError;
        }

        console.log(`✅ Successfully saved ${update.content_key} to database`);
      }

      // Update local state
      setContent(newContent);
      
      // Also save to localStorage as backup
      localStorage.setItem('siteContent', JSON.stringify(newContent));
      console.log('🎉 All 8 content sections saved successfully to database and localStorage');
      console.log('🔄 Changes will now sync to all devices accessing the website');
      
    } catch (err) {
      console.error('Error updating content:', err);
      setError('Failed to save content to database');
      console.log('❌ Database save failed, content saved to localStorage only');
      
      // Still update local state and localStorage even if database fails
      setContent(newContent);
      localStorage.setItem('siteContent', JSON.stringify(newContent));
      throw err;
    }
  };

  // Reset content to defaults
  const resetContent = async () => {
    try {
      console.log('🔄 Resetting content to defaults...');
      
      if (!supabase) {
        console.log('📱 Supabase not configured, resetting localStorage only');
        setContent(defaultContent);
        localStorage.removeItem('siteContent');
        return;
      }
      
      await updateContent(defaultContent);
      localStorage.removeItem('siteContent');
      console.log('✅ Content reset successfully');
    } catch (err) {
      console.error('Error resetting content:', err);
      setError('Failed to reset content');
    }
  };

  // Load content on mount
  useEffect(() => {
    loadContent();
  }, []);

  return {
    content,
    updateContent,
    resetContent,
    loading,
    error,
    reload: loadContent,
  };
};