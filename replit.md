# Dead Zone Survivors - 7 Days to Die Community Website

## Overview
A community website for a 7 Days to Die gaming group called "Dead Zone Survivors". Features a dark survival/gaming aesthetic with multiple pages for server listings, rules, community info, joining guides, and contact.

## Recent Changes
- Feb 2026: Initial build - all pages, dark theme, database with seed data

## Project Architecture
- **Frontend**: React + Vite + Tailwind CSS + shadcn/ui components
- **Backend**: Express.js with PostgreSQL database via Drizzle ORM
- **Routing**: wouter for client-side routing
- **Font**: Oxanium (gaming/tech font)
- **Theme**: Dark survival aesthetic with warm orange-red primary color

### Pages
- `/` - Home (hero, intro, stats, navigation blocks)
- `/servers` - Server listings with search/filter
- `/rules` - Collapsible rule sections by topic
- `/community` - Mission, staff profiles, social links
- `/join` - Discord invite, joining guide, requirements
- `/contact` - Contact form + info cards

### Key Files
- `shared/schema.ts` - Database schema (users, servers, contactMessages)
- `server/routes.ts` - API endpoints (GET /api/servers, POST /api/contact)
- `server/seed.ts` - Seeds server data on first startup
- `client/src/components/navbar.tsx` - Top navigation bar
- `client/src/components/footer.tsx` - Global footer

## User Preferences
- Dark gaming aesthetic
- No content copied from cookiegangarmy.com
- Original placeholders throughout
