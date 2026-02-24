# install.ps1 - Install CookieGang Army app dependencies and build (Windows)
# Run in PowerShell

$ErrorActionPreference = "Stop"

Write-Host "=== CookieGang Army - Windows Installer ===" -ForegroundColor Cyan

# Check for Node.js
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js not found. Please install Node.js v18+ from https://nodejs.org/" -ForegroundColor Red
    Write-Host "After installing, restart PowerShell and run this script again."
    exit 1
}

$nodeVersion = (node -v)
Write-Host "Found Node.js $nodeVersion" -ForegroundColor Green

# Check for npm
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "npm not found. It should come with Node.js. Please reinstall Node.js." -ForegroundColor Red
    exit 1
}

$npmVersion = (npm -v)
Write-Host "Found npm v$npmVersion" -ForegroundColor Green

# Check for PostgreSQL (psql)
if (Get-Command psql -ErrorAction SilentlyContinue) {
    $psqlVersion = (psql --version)
    Write-Host "Found $psqlVersion" -ForegroundColor Green
} else {
    Write-Host "WARNING: PostgreSQL (psql) not found in PATH." -ForegroundColor Yellow
    Write-Host "Please install PostgreSQL from https://www.postgresql.org/download/windows/"
    Write-Host "Make sure to add PostgreSQL bin directory to your PATH."
    Write-Host "Continuing with npm install anyway..."
}

# Install Node.js dependencies
Write-Host ""
Write-Host "Installing Node.js dependencies..." -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "npm install failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== Installation Complete ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Install PostgreSQL if not already installed"
Write-Host "  2. Create a database: createdb cookiegangarmy"
Write-Host "  3. Set DATABASE_URL in a .env file:"
Write-Host "     DATABASE_URL=postgresql://localhost/cookiegangarmy"
Write-Host "  4. Run the app: npm run dev"
Write-Host ""
