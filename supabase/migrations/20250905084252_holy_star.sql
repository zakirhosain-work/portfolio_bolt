/*
  # Grant anon role permissions for site_content table

  1. Table Permissions
    - Grant INSERT permission to anon role on site_content table
    - Grant UPDATE permission to anon role on site_content table
    - Grant SELECT permission to anon role on site_content table (if not already granted)

  2. Security Notes
    - This allows the admin dashboard to work without authentication
    - RLS policies still apply to control access
    - Consider adding proper authentication for production use
*/

-- Grant necessary permissions to anon role for site_content table
GRANT SELECT, INSERT, UPDATE ON site_content TO anon;

-- Grant usage on the sequence if it exists (for auto-generated IDs)
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;