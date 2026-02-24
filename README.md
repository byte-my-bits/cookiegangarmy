# CookieGang Army

A multi-game community platform with a modern UI, server listings, shop, and more.

## Features
- Multi-game server listings
- Community/team pages
- Shop with PayPal integration
- Responsive UI (React, Tailwind, shadcn/ui)
- PostgreSQL database (Drizzle ORM)
- Automated install and service support (Linux & Windows)

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

## Quick Start (Windows)

### Prerequisites
- **Node.js v18+** — Download from [https://nodejs.org/](https://nodejs.org/)
- **PostgreSQL** — Download from [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)
  - During installation, make sure to add the PostgreSQL `bin` directory to your system PATH

### 1. Clone the repository
```
git clone https://github.com/YOUR_USERNAME/cookiegangarmy.git
cd cookiegangarmy
```

### 2. Run the install script

**PowerShell (recommended):**
```powershell
.\install.ps1
```

If you get an execution policy error, run this first:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Command Prompt alternative:**
```cmd
install.bat
```

### 3. Set up the database
Open a terminal and create the database:
```
createdb cookiegangarmy
```

> **Note:** If `createdb` is not recognized, make sure the PostgreSQL `bin` directory (e.g., `C:\Program Files\PostgreSQL\16\bin`) is in your system PATH.

### 4. Configure environment variables
Create a `.env` file in the project root:
```
DATABASE_URL=postgresql://localhost/cookiegangarmy
```

Or set it in PowerShell for the current session:
```powershell
$env:DATABASE_URL="postgresql://localhost/cookiegangarmy"
```

### 5. Start the app (development)

**Using npm directly:**
```
npm run dev
```

**Or use the start script (PowerShell):**
```powershell
.\start.ps1
```

**Or use the start script (CMD):**
```cmd
start.bat
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

## Running as a Windows Service (Optional)

To run the app as a background service on Windows, you can use [NSSM (Non-Sucking Service Manager)](https://nssm.cc/):

1. Download NSSM from [https://nssm.cc/download](https://nssm.cc/download)
2. Open an **Administrator** command prompt
3. Install the service:
   ```cmd
   nssm install CookieGangArmy "C:\Program Files\nodejs\node.exe" "C:\path\to\cookiegangarmy\dist\index.cjs"
   nssm set CookieGangArmy AppDirectory "C:\path\to\cookiegangarmy"
   nssm set CookieGangArmy AppEnvironmentExtra "DATABASE_URL=postgresql://localhost/cookiegangarmy" "NODE_ENV=production" "PORT=3050"
   ```
4. Start the service:
   ```cmd
   nssm start CookieGangArmy
   ```
5. Check status:
   ```cmd
   nssm status CookieGangArmy
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

## Building for Production

```
npm run build
```

This outputs the bundled client to `dist/public` and the server to `dist/index.cjs`.

**Linux / macOS:**
```
NODE_ENV=production node dist/index.cjs
```

**Windows (PowerShell):**
```powershell
$env:NODE_ENV="production"
node dist\index.cjs
```

**Windows (CMD):**
```cmd
set NODE_ENV=production
node dist\index.cjs
```

---

## Folder Structure
- `client/` — Frontend React app
- `server/` — Express backend
- `shared/` — Shared schema/types
- `install.sh` — Automated install script (Linux)
- `install.ps1` — Automated install script (Windows PowerShell)
- `install.bat` — Automated install script (Windows CMD)
- `start.ps1` — Dev start script (Windows PowerShell)
- `start.bat` — Dev start script (Windows CMD)
- `cookiegangarmy.service` — systemd service file (Linux)

---

## Support
For issues or questions, open an issue or contact the maintainer.
