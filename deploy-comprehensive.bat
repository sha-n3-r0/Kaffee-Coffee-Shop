@echo off
REM Comprehensive Deployment Script for Kaffee's React App
REM This script provides multiple deployment options

echo ========================================
echo   Kaffee's React App Deployment Tool
echo ========================================
echo.

echo Building React application...
call npm run build

echo.
echo Choose deployment method:
echo 1. XAMPP Root Deployment (Recommended)
echo 2. Express Server (Port 3000)
echo 3. Python Server (Port 3000)
echo 4. All Methods
echo.

set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" goto xampp_deploy
if "%choice%"=="2" goto express_deploy
if "%choice%"=="3" goto python_deploy
if "%choice%"=="4" goto all_deploy
goto invalid_choice

:xampp_deploy
echo.
echo Deploying to XAMPP root...
xcopy "dist\*" "..\..\..\kaffees-react\" /E /I /Y
echo.
echo ✅ XAMPP deployment complete!
echo.
echo Access your app at: http://localhost/kaffees-react/
echo All routes should work: /menu, /deals, /favourite
goto end

:express_deploy
echo.
echo Starting Express server...
echo Make sure to run: npm install express
node server.js
goto end

:python_deploy
echo.
echo Starting Python server...
cd dist
python -m http.server 3000
goto end

:all_deploy
echo.
echo Deploying to all methods...
xcopy "dist\*" "..\..\..\kaffees-react\" /E /I /Y
echo ✅ XAMPP deployment complete!
echo.
echo For Express server, run: npm run serve
echo For Python server, run: cd dist && python -m http.server 3000
goto end

:invalid_choice
echo Invalid choice. Please run the script again.
goto end

:end
echo.
echo Deployment complete!
pause
