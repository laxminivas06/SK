-- Create the contact submissions table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'::text
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
  DROP POLICY IF EXISTS "Users can view own submissions" ON contact_submissions;
END $$;

-- Create policy to allow public submissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow users to view their own submissions
CREATE POLICY "Users can view own submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt()->>'email');