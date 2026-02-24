@echo off
REM install.bat - Install CookieGang Army app dependencies (Windows CMD)
echo === CookieGang Army - Windows Installer ===

REM Check for Node.js
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Node.js not found. Please install Node.js v18+ from https://nodejs.org/
    echo After installing, restart your terminal and run this script again.
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo Found Node.js %NODE_VERSION%

REM Check for npm
where npm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo npm not found. It should come with Node.js. Please reinstall Node.js.
    exit /b 1
)

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo Found npm v%NPM_VERSION%

REM Check for PostgreSQL
where psql >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo WARNING: PostgreSQL ^(psql^) not found in PATH.
    echo Please install PostgreSQL from https://www.postgresql.org/download/windows/
    echo Continuing with npm install anyway...
) else (
    for /f "tokens=*" %%i in ('psql --version') do echo Found %%i
)

REM Install dependencies
echo.
echo Installing Node.js dependencies...
call npm install
if %ERRORLEVEL% neq 0 (
    echo npm install failed!
    exit /b 1
)

echo.
echo === Installation Complete ===
echo.
echo Next steps:
echo   1. Install PostgreSQL if not already installed
echo   2. Create a database: createdb cookiegangarmy
echo   3. Set DATABASE_URL in a .env file:
echo      DATABASE_URL=postgresql://localhost/cookiegangarmy
echo   4. Run the app: npm run dev
echo.
