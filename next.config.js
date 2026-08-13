const fs = require('fs');
const path = require('path');

// Execute logo copy script automatically on Next.js startup
try {
  const scriptPath = path.join(__dirname, 'copy_logo.js');
  if (fs.existsSync(scriptPath)) {
    require(scriptPath);
  }
} catch (err) {
  console.warn('[Next Config] Logo auto-sync hook:', err.message);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
