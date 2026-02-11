#!/bin/bash
# install.sh - Install CookieGang Army app dependencies and build
set -e

# Update and install dependencies
sudo apt update && sudo apt install -y git curl nodejs npm postgresql

# Clone repo if not present (run from parent dir)
if [ ! -d "cookiegangarmy" ]; then
  git clone https://github.com/YOUR_GITHUB/cookiegangarmy.git
  cd cookiegangarmy
else
  cd cookiegangarmy
fi

# Install Node.js dependencies
npm install

# Build the app (if needed)
# npm run build  # Uncomment if you have a build step

# Setup database (optional, comment out if not needed)
# sudo -u postgres createdb cookiegangarmy || true
# npx drizzle-kit push

# Done
