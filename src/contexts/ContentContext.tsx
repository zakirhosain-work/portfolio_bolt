import React, { createContext, useContext, ReactNode } from 'react';
import { SiteContent } from '../types/content';
import { useContent } from '../hooks/useContent';

interface ContentContextType {
  content: SiteContent;
  updateContent: (content: SiteContent) => void;
  resetContent: () => void;
  loading?: boolean;
  error?: string | null;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const contentHook = useContent();

  return (
    <ContentContext.Provider value={contentHook}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContentContext must be used within a ContentProvider');
  }
  return context;
};