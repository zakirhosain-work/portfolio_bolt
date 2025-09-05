/*
  # Verify Site Content Database Structure

  1. Database Schema
    - Verify `site_content` table exists with correct structure
    - Check all required columns and constraints
    - Verify RLS policies are properly configured

  2. Content Keys
    - Ensure all content sections can be stored:
      - hero: Main landing section
      - about: About me information
      - skills: Technical and teaching skills
      - services: Tutoring services offered
      - portfolio: Development projects
      - testimonials: Student reviews
      - contact: Contact information
      - rating: Rating display settings

  3. Security
    - Public read access for website visitors
    - Authenticated write access for admin updates
*/

-- Verify table structure
SELECT 
  column_name, 
  data_type, 
  is_nullable, 
  column_default
FROM information_schema.columns 
WHERE table_name = 'site_content' 
  AND table_schema = 'public';

-- Check if RLS is enabled
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'site_content';

-- Verify policies exist
SELECT policyname, cmd, roles, qual 
FROM pg_policies 
WHERE tablename = 'site_content';

-- Test data insertion for all content sections
INSERT INTO site_content (content_key, content_data) VALUES
  ('hero', '{"title": "Test Hero", "subtitle": "Test"}'),
  ('about', '{"title": "Test About", "description": ["Test paragraph"]}'),
  ('skills', '[{"name": "Test Skill", "level": 90, "category": "technical"}]'),
  ('services', '[{"name": "Test Service", "price": "$50/hour", "topics": ["Test Topic"]}]'),
  ('portfolio', '[{"title": "Test Project", "description": "Test description"}]'),
  ('testimonials', '[{"name": "Test Student", "content": "Great tutor!", "rating": 5}]'),
  ('contact', '{"email": "test@example.com", "phone": "+1234567890"}'),
  ('rating', '{"averageRating": 4.9, "totalReviews": 50, "showRatingSection": true}')
ON CONFLICT (content_key) DO UPDATE SET
  content_data = EXCLUDED.content_data,
  updated_at = now();

-- Verify all content sections are stored
SELECT content_key, 
       jsonb_pretty(content_data) as content_preview,
       created_at,
       updated_at
FROM site_content 
ORDER BY content_key;