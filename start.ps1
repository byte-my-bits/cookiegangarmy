# start.ps1 - Start CookieGang Army in development mode (Windows)

$ErrorActionPreference = "Stop"

# Load .env file if it exists
if (Test-Path ".env") {
    Write-Host "Loading .env file..." -ForegroundColor Cyan
    Get-Content ".env" | ForEach-Object {
        if ($_ -match '^\s*([^#][^=]+)=(.*)$') {
            $name = $matches[1].Trim()
            $value = $matches[2].Trim()
            [System.Environment]::SetEnvironmentVariable($name, $value, "Process")
        }
    }
}

if (-not $env:DATABASE_URL) {
    Write-Host "WARNING: DATABASE_URL is not set. The app may not start correctly." -ForegroundColor Yellow
    Write-Host 'Set it in a .env file or run: $env:DATABASE_URL="postgresql://localhost/cookiegangarmy"'
    Write-Host ""
}

Write-Host "Starting CookieGang Army (dev mode)..." -ForegroundColor Cyan
npm run dev
