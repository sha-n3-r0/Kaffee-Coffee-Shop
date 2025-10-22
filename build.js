#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting custom build process...');

try {
  // Try different methods to run vite build
  const vitePath = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');
  
  console.log('Attempting to run vite build...');
  execSync(`node "${vitePath}" build`, { 
    stdio: 'inherit',
    cwd: __dirname 
  });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
