# Authentication Setup Guide

## Overview

Authentication has been migrated from Supabase Auth to NextAuth.js v5 (Auth.js) with PostgreSQL backend.

## What Was Set Up

### 1. Database Schema
- **Users table**: Stores user accounts with email/password authentication
- **Accounts table**: For OAuth providers (future use)
- **Sessions table**: Manages user sessions
- **Verification tokens table**: For email verification (future use)

### 2. Authentication Configuration
- **File**: `lib/auth.ts`
- Uses PostgreSQL adapter for database storage
- Credentials provider for email/password login
- JWT session strategy

### 3. API Routes
- `/api/auth/[...nextauth]` - Main NextAuth handler
- `/api/auth/signup` - User registration endpoint

### 4. Pages
- `/auth/signin` - Sign in page
- `/auth/signup` - Sign up page

### 5. Components
- `components/providers.tsx` - SessionProvider wrapper
- `lib/auth-helpers.tsx` - React hooks for auth

## Environment Variables Required

Add these to your DigitalOcean App Platform environment variables:

```bash
# Database connection (already set)
DATABASE_URL=postgresql://...

# NextAuth secret (generate a random string)
AUTH_SECRET=your-random-secret-key-here

# Optional: For production, you can also use
NEXTAUTH_SECRET=your-random-secret-key-here
```

### Generating AUTH_SECRET

You can generate a secure random secret using:

```bash
openssl rand -base64 32
```

Or use any secure random string generator.

## Usage

### Sign Up
1. Navigate to `/auth/signup`
2. Enter email, password (min 8 characters), and optional name
3. Account is created and you're automatically signed in

### Sign In
1. Navigate to `/auth/signin`
2. Enter email and password
3. You're redirected to the home page

### Using Auth in Components

```tsx
"use client";

import { useAuth } from "@/lib/auth-helpers";

export default function MyComponent() {
  const { user, isAuthenticated, isLoading, signOut } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  
  if (!isAuthenticated) return <div>Please sign in</div>;

  return (
    <div>
      <p>Welcome, {user?.email}!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

### Server-Side Auth

```tsx
import { auth } from "@/lib/auth";

export default async function ServerComponent() {
  const session = await auth();
  
  if (!session) {
    return <div>Not authenticated</div>;
  }

  return <div>Hello {session.user.email}</div>;
}
```

## Database Tables Created

All tables are created automatically on first use via `ensureTables()` function:

- `users` - User accounts
- `accounts` - OAuth account links
- `sessions` - Active sessions
- `verification_tokens` - Email verification tokens
- `leads` - Contact form submissions (existing)

## Security Features

- Passwords are hashed using bcryptjs (10 rounds)
- JWT tokens for session management
- Secure session storage in database
- CSRF protection via NextAuth

## Next Steps

1. **Set AUTH_SECRET**: Add the environment variable in DigitalOcean
2. **Test Sign Up**: Create your first admin account
3. **Add Protected Routes**: Use middleware or server components to protect admin pages
4. **Optional**: Add OAuth providers (Google, GitHub, etc.) if needed

## Migration Notes

- Supabase Auth has been completely replaced
- All authentication now uses PostgreSQL
- No data migration needed (fresh start for auth)
- Existing contact form submissions (leads) are unaffected
