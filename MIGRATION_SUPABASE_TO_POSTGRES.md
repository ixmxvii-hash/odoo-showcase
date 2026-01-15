# Migration from Supabase to PostgreSQL

## Summary

This project has been migrated from Supabase to DigitalOcean Managed PostgreSQL database (`icit-website-db`).

## Changes Made

1. **Database Connection**
   - Created `lib/db.ts` with PostgreSQL connection pool using `pg` library
   - Added automatic table creation function `ensureLeadsTable()`

2. **API Route Updated**
   - Updated `app/api/contact/route.ts` to use PostgreSQL instead of Supabase
   - Maintains the same API interface and data structure

3. **Dependencies**
   - Added: `pg` and `@types/pg` for PostgreSQL connectivity
   - Removed: `@supabase/supabase-js` (no longer needed)

4. **Files Removed**
   - `lib/supabase.ts` (replaced by `lib/db.ts`)

## Database Schema

The `leads` table structure:

```sql
CREATE TABLE leads (
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
```

Indexes created:
- `idx_leads_email` on `email`
- `idx_leads_status` on `status`
- `idx_leads_created_at` on `created_at`

## Environment Variables

### Required for DigitalOcean Apps Platform

Set the following environment variable in your DigitalOcean App Platform settings:

```
DATABASE_URL=postgresql://doadmin:YOUR_DB_PASSWORD@icit-website-db-do-user-13595416-0.d.db.ondigitalocean.com:25060/defaultdb?sslmode=require
```

**Note:** For production, use the private connection URL if your app is in the same VPC:
```
DATABASE_URL=postgresql://doadmin:YOUR_DB_PASSWORD@private-icit-website-db-do-user-13595416-0.d.db.ondigitalocean.com:25060/defaultdb?sslmode=require
```

### Removed Environment Variables

The following Supabase environment variables are no longer needed:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Setup Instructions

1. **Set Environment Variable in DigitalOcean**
   - Go to your App Platform dashboard
   - Navigate to Settings → App-Level Environment Variables
   - Add `DATABASE_URL` with the connection string from your PostgreSQL database
   - Use the private connection URL if your app is in the same VPC

2. **Deploy**
   - The table will be created automatically on first API call
   - No manual database migration needed

3. **Verify**
   - Submit a test contact form
   - Check the database to confirm the lead was saved

## Database Connection Details

- **Database Name:** `icit-website-db`
- **Engine:** PostgreSQL 17
- **Region:** nyc1
- **Connection:** Uses SSL/TLS encryption

## Migration Notes

- The table is created automatically on first use (idempotent)
- All existing data structure is preserved
- No changes needed to the frontend contact form
- API endpoint remains the same: `/api/contact`
