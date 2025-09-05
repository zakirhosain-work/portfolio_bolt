import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase environment variables not found. Using offline mode.');
  console.log('To enable database features, please set up your Supabase connection:');
  console.log('1. Create a Supabase project at https://supabase.com');
  console.log('2. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file');
  console.log('3. Restart the development server');
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Database types
export interface Database {
  public: {
    Tables: {
      site_content: {
        Row: {
          id: string;
          content_key: string;
          content_data: any;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          content_key: string;
          content_data: any;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          content_key?: string;
          content_data?: any;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}