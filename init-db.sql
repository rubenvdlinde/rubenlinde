-- Council of LLMs - Database Initialization Script
-- This script sets up the PostgreSQL database with pgvector for code embeddings

-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create schema for council data
CREATE SCHEMA IF NOT EXISTS council;

-- Code embeddings table voor vector similarity search
CREATE TABLE IF NOT EXISTS council.code_embeddings (
    id SERIAL PRIMARY KEY,
    file_path TEXT NOT NULL,
    code_chunk TEXT NOT NULL,
    embedding vector(1536), -- OpenAI/local embedding dimension
    chunk_index INTEGER NOT NULL,
    language TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index voor snelle vector similarity search
CREATE INDEX IF NOT EXISTS code_embeddings_vector_idx 
ON council.code_embeddings 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Index voor file lookups
CREATE INDEX IF NOT EXISTS code_embeddings_file_idx 
ON council.code_embeddings (file_path);

-- Agent activity log
CREATE TABLE IF NOT EXISTS council.agent_activity (
    id SERIAL PRIMARY KEY,
    agent_name TEXT NOT NULL, -- Anita, Henk, Johnie, Ingrid, Boris, Linda, Geert, Saskia, Thierry
    activity_type TEXT NOT NULL, -- code_generation, review, testing, planning
    description TEXT,
    file_path TEXT,
    status TEXT, -- started, completed, failed
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    metadata JSONB
);

-- Index voor agent activity queries
CREATE INDEX IF NOT EXISTS agent_activity_agent_idx 
ON council.agent_activity (agent_name);

CREATE INDEX IF NOT EXISTS agent_activity_timestamp_idx 
ON council.agent_activity (started_at DESC);

-- Sprint tracking
CREATE TABLE IF NOT EXISTS council.sprints (
    id SERIAL PRIMARY KEY,
    sprint_name TEXT NOT NULL,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    status TEXT, -- planning, in_progress, review, completed
    goal TEXT,
    user_stories JSONB,
    metrics JSONB
);

-- Pull Requests tracking
CREATE TABLE IF NOT EXISTS council.pull_requests (
    id SERIAL PRIMARY KEY,
    pr_number INTEGER,
    title TEXT NOT NULL,
    description TEXT,
    author_agent TEXT, -- which agent created this PR
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    merged_at TIMESTAMP,
    status TEXT, -- open, in_review, approved, rejected, merged
    reviewers JSONB, -- Boris, Linda, peer agent reviews
    review_comments JSONB
);

-- Agent metrics voor performance tracking
CREATE TABLE IF NOT EXISTS council.agent_metrics (
    id SERIAL PRIMARY KEY,
    agent_name TEXT NOT NULL,
    metric_date DATE DEFAULT CURRENT_DATE,
    tasks_completed INTEGER DEFAULT 0,
    average_response_time_seconds NUMERIC,
    code_lines_generated INTEGER DEFAULT 0,
    reviews_performed INTEGER DEFAULT 0,
    bugs_found INTEGER DEFAULT 0,
    metadata JSONB
);

-- Create function voor automatic updated_at timestamp
CREATE OR REPLACE FUNCTION council.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger voor code_embeddings updated_at
CREATE TRIGGER update_code_embeddings_updated_at 
BEFORE UPDATE ON council.code_embeddings
FOR EACH ROW
EXECUTE FUNCTION council.update_updated_at_column();

-- Grant permissions to council user
GRANT ALL PRIVILEGES ON SCHEMA council TO council;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA council TO council;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA council TO council;

-- Insert initial test data (optional)
INSERT INTO council.sprints (sprint_name, status, goal) VALUES
('Sprint 0 - Setup', 'completed', 'Setup Council infrastructure and verify all agents can communicate');

INSERT INTO council.agent_activity (agent_name, activity_type, description, status) VALUES
('Saskia', 'planning', 'Initial sprint planning', 'completed'),
('Geert', 'planning', 'User story creation', 'completed');

-- Success message
DO $$
BEGIN
    RAISE NOTICE 'Council database initialized successfully!';
    RAISE NOTICE 'Created schema: council';
    RAISE NOTICE 'Enabled extension: pgvector';
    RAISE NOTICE 'Created tables: code_embeddings, agent_activity, sprints, pull_requests, agent_metrics';
END $$;

