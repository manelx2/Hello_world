/*
  # Create Contact Messages Table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text) - Name of the person sending the message
      - `email` (text) - Email address of the sender
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp when the message was sent
      - `read` (boolean) - Whether the message has been read (default: false)
  
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for public insert access (anyone can submit contact forms)
    - Restrict read access to authenticated users only (for admin purposes)
  
  3. Important Notes
    - Public users can only insert messages (submit the form)
    - Only authenticated administrators can read messages
    - Automatic timestamp tracking for message submission time
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can read messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);