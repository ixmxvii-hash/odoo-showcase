import { Pool } from 'pg';

// Create a connection pool for PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Test the connection
pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export { pool };

// Helper function to ensure all tables exist
export async function ensureTables() {
  const createTablesQuery = `
    -- Leads table
    CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      company VARCHAR(255),
      status VARCHAR(50) DEFAULT 'new',
      source VARCHAR(100) DEFAULT 'odoo-showcase',
      notes TEXT,
      tags TEXT[],
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
    CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
    CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);

    -- Users table for authentication
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE NOT NULL,
      email_verified TIMESTAMP,
      password VARCHAR(255),
      image VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

    -- NextAuth.js required tables
    CREATE TABLE IF NOT EXISTS accounts (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      type VARCHAR(255) NOT NULL,
      provider VARCHAR(255) NOT NULL,
      provider_account_id VARCHAR(255) NOT NULL,
      refresh_token TEXT,
      access_token TEXT,
      expires_at INTEGER,
      token_type VARCHAR(255),
      scope TEXT,
      id_token TEXT,
      session_state TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(provider, provider_account_id)
    );

    CREATE INDEX IF NOT EXISTS idx_accounts_user_id ON accounts(user_id);

    CREATE TABLE IF NOT EXISTS sessions (
      id SERIAL PRIMARY KEY,
      session_token VARCHAR(255) UNIQUE NOT NULL,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      expires TIMESTAMP NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
    CREATE INDEX IF NOT EXISTS idx_sessions_session_token ON sessions(session_token);

    CREATE TABLE IF NOT EXISTS verification_tokens (
      identifier VARCHAR(255) NOT NULL,
      token VARCHAR(255) NOT NULL,
      expires TIMESTAMP NOT NULL,
      PRIMARY KEY (identifier, token)
    );
  `;

  try {
    await pool.query(createTablesQuery);
    console.log('All tables ensured');
  } catch (error) {
    console.error('Error creating tables:', error);
    throw error;
  }
}

// Legacy function name for backwards compatibility
export async function ensureLeadsTable() {
  await ensureTables();
}
