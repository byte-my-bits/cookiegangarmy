# CookieGang Army

A multi-game community platform with a modern UI, server listings, shop, and more.

## Features
- Multi-game server listings
- Community/team pages
- Shop with PayPal integration
- Responsive UI (React, Tailwind, shadcn/ui)
- PostgreSQL database (Drizzle ORM)
- Automated install and systemd service support (Linux)

---

## Quick Start (Linux/Ubuntu)

### 1. Clone the repository
```
git clone https://github.com/YOUR_USERNAME/cookiegangarmy.git
cd cookiegangarmy
```

### 2. Run the install script
This will install Node.js, npm, PostgreSQL, dependencies, and set up the database.
```
bash install.sh
```

### 3. Configure environment variables
Set your database URL (default is local):
```
export DATABASE_URL="postgresql://localhost/cookiegangarmy"
```
Or add it to a `.env` file:
```
DATABASE_URL=postgresql://localhost/cookiegangarmy
```

### 4. Start the app (development)
```
npm run dev
```

---

## Running as a systemd Service (Linux)

1. Copy the service file:
   ```
sudo cp cookiegangarmy.service /etc/systemd/system/
   ```
2. Reload systemd:
   ```
sudo systemctl daemon-reload
   ```
3. Enable and start the service:
   ```
sudo systemctl enable cookiegangarmy
sudo systemctl start cookiegangarmy
   ```
4. Check status:
   ```
systemctl status cookiegangarmy
   ```

---

## Manual Setup (Advanced)

1. Install Node.js (v18+), npm, and PostgreSQL.
2. Create the database:
   ```
createdb cookiegangarmy
   ```
3. Install dependencies:
   ```
npm install
   ```
4. Set up the database URL as above.
5. Start the app:
   ```
npm run dev
   ```

---

## Folder Structure
- `client/` — Frontend React app
- `server/` — Express backend
- `shared/` — Shared schema/types
- `install.sh` — Automated install script
- `cookiegangarmy.service` — systemd service file

---

## Support
For issues or questions, open an issue or contact the maintainer.
