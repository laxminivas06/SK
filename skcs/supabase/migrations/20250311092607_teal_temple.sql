/*
  # Add phone number to contact submissions

  1. Changes
    - Add phone column to contact_submissions table
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'contact_submissions' 
    AND column_name = 'phone'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN phone text;
  END IF;
END $$;