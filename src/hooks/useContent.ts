import { useState, useEffect } from 'react';
import { SiteContent } from '../types/content';
import { defaultContent } from '../data/defaultContent';
import { useSupabaseContent } from './useSupabaseContent';

export const useContent = () => {
  // Try to use Supabase first, fallback to localStorage
  const supabaseHook = useSupabaseContent();
  
  // Fallback to localStorage if Supabase fails
  const [localContent, setLocalContent] = useState<SiteContent>(defaultContent);
  const [useLocalStorage, setUseLocalStorage] = useState(false);

  useEffect(() => {
    // If Supabase has an error, fallback to localStorage
    if (supabaseHook.error) {
      console.warn('⚠️ Supabase unavailable, using localStorage:', supabaseHook.error);
      setUseLocalStorage(true);
      loadLocalContent();
    }
  }, [supabaseHook.error]);

  const loadLocalContent = () => {
    console.log('📱 Loading content from localStorage...');
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        console.log('📱 Parsed localStorage content:', parsedContent);
        // Deep merge with defaultContent to ensure all properties exist
        const mergedContent: SiteContent = {
          hero: { ...defaultContent.hero, ...parsedContent.hero },
          about: { 
            ...defaultContent.about, 
            ...parsedContent.about,
            description: Array.isArray(parsedContent.about?.description) ? parsedContent.about.description : defaultContent.about.description,
            qualifications: Array.isArray(parsedContent.about?.qualifications) ? parsedContent.about.qualifications : defaultContent.about.qualifications,
          },
          skills: Array.isArray(parsedContent.skills) ? parsedContent.skills : defaultContent.skills,
          services: Array.isArray(parsedContent.services) ? parsedContent.services : defaultContent.services,
          portfolio: Array.isArray(parsedContent.portfolio) 
            ? parsedContent.portfolio.map(project => ({
                ...project,
                tech: Array.isArray(project.tech) ? project.tech : []
              }))
            : defaultContent.portfolio,
          testimonials: Array.isArray(parsedContent.testimonials) ? parsedContent.testimonials : defaultContent.testimonials,
          contact: { ...defaultContent.contact, ...parsedContent.contact },
          rating: { ...defaultContent.rating, ...parsedContent.rating },
        };
        setLocalContent(mergedContent);
        console.log('✅ localStorage content loaded successfully');
      } catch (error) {
        console.error('Error loading saved content:', error);
        setLocalContent(defaultContent);
      }
    }
  };

  const updateLocalContent = (newContent: SiteContent) => {
    setLocalContent(newContent);
    localStorage.setItem('siteContent', JSON.stringify(newContent));
    console.log('✅ Content saved to localStorage');
  };

  const resetLocalContent = () => {
    setLocalContent(defaultContent);
    localStorage.removeItem('siteContent');
    console.log('✅ localStorage content reset');
  };

  // Return appropriate hook based on availability
  if (useLocalStorage || supabaseHook.error) {
    console.log('📱 Using localStorage mode - changes will NOT sync across devices');
    console.log('⚠️ To enable cross-device sync, please set up Supabase connection');
    return {
      content: localContent,
      updateContent: updateLocalContent,
      resetContent: resetLocalContent,
      loading: false,
      error: null,
    };
  };

  console.log('🗄️ Using Supabase database mode - changes will sync across all devices');
  return supabaseHook;
};