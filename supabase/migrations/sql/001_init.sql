-- Create tables with proper relationships and RLS

-- User Profiles (extends auth.users)
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  display_name TEXT,
  avatar_url TEXT,
  organization TEXT,
  job_title TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Uploaded Files
CREATE TABLE uploaded_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id),
  filename TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  mime_type TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status TEXT NOT NULL DEFAULT 'pending',
  error_message TEXT
);

-- Processed Files (parsed and cleaned data)
CREATE TABLE processed_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_id UUID NOT NULL REFERENCES uploaded_files(id),
  user_id UUID NOT NULL REFERENCES user_profiles(id),
  data JSONB NOT NULL,
  schema_info JSONB NOT NULL,
  row_count INTEGER NOT NULL,
  column_count INTEGER NOT NULL,
  processed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  issues JSONB
);

-- Indexes for performance
CREATE INDEX idx_uploads_user_id ON uploaded_files(user_id);
CREATE INDEX idx_processed_file_id ON processed_files(file_id);
CREATE INDEX idx_processed_user_id ON processed_files(user_id);

-- Enable Row Level Security (RLS)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE uploaded_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE processed_files ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- User Profiles: Users can only view/edit their own profile
CREATE POLICY user_profiles_select ON user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY user_profiles_insert ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY user_profiles_update ON user_profiles
  FOR UPDATE USING (auth.uid() = id);

-- Uploaded Files: Users can only access their own files
CREATE POLICY uploaded_files_select ON uploaded_files
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY uploaded_files_insert ON uploaded_files
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY uploaded_files_update ON uploaded_files
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY uploaded_files_delete ON uploaded_files
  FOR DELETE USING (auth.uid() = user_id);

-- Processed Files: Users can only access processed data from their own files
CREATE POLICY processed_files_select ON processed_files
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY processed_files_insert ON processed_files
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY processed_files_update ON processed_files
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY processed_files_delete ON processed_files
  FOR DELETE USING (auth.uid() = user_id);

-- Triggers for updated_at
CREATE OR REPLACE FUNCTION trigger_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_profiles_updated_at
BEFORE UPDATE ON user_profiles
FOR EACH ROW EXECUTE FUNCTION trigger_updated_at();