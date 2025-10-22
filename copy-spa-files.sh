#!/bin/bash
# Post-build script to copy necessary files for SPA routing

echo "Copying SPA routing files..."

# Copy .htaccess file to dist directory
if [ -f ".htaccess" ]; then
    cp .htaccess dist/
    echo "✓ Copied .htaccess to dist/"
else
    echo "⚠ .htaccess not found in root"
fi

# Copy _redirects file to dist directory
if [ -f "_redirects" ]; then
    cp _redirects dist/
    echo "✓ Copied _redirects to dist/"
else
    echo "⚠ _redirects not found in root"
fi

echo "SPA routing setup complete!"
