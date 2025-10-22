@echo off
REM Post-build script to copy necessary files for SPA routing

echo Copying SPA routing files...

REM Copy .htaccess file to dist directory
if exist ".htaccess" (
    copy ".htaccess" "dist\" >nul
    echo ✓ Copied .htaccess to dist/
) else (
    echo ⚠ .htaccess not found in root
)

REM Copy _redirects file to dist directory
if exist "_redirects" (
    copy "_redirects" "dist\" >nul
    echo ✓ Copied _redirects to dist/
) else (
    echo ⚠ _redirects not found in root
)

echo SPA routing setup complete!
pause
