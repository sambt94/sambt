# Pulss Web App

A Remix-based web application for Pulss Data Analyzer.

## Features

- React 18 with TypeScript
- Remix for server-side rendering and routing
- Tailwind CSS for styling
- Environment variable validation with Zod

## Development

From your terminal:

```sh
# Install dependencies (from repo root)
pnpm install

# Start the development server
pnpm --filter web dev
```

The development server will start at [http://localhost:3000](http://localhost:3000)

## Environment Variables

The app requires the following environment variables:

- `SUPABASE_URL` - URL of the Supabase instance
- `SUPABASE_ANON_KEY` - Anonymous key for Supabase

Optional variables (with defaults):
- `NODE_ENV` - Environment name (default: "development")
- `PORT` - Server port (default: 3000)

Copy `.env.example` to `.env.local` and update with your values.

## Deployment

Build your app for production:

```sh
pnpm --filter web build
```

Then run the app in production mode:

```sh
pnpm --filter web start
```

## Styling

This app uses [Tailwind CSS](https://tailwindcss.com/) for styling.