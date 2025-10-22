@echo off
REM Deployment script for Kaffee's React App
REM This script builds the React app and deploys it to XAMPP

echo Building React application...
call npm run build

echo.
echo Deploying to XAMPP...
xcopy "dist\*" "..\kaffees-react\" /E /I /Y

echo.
echo Deployment complete!
echo.
echo Access your app at: http://localhost/kaffees-react/
echo.
echo All routes should now work properly:
echo - http://localhost/kaffees-react/
echo - http://localhost/kaffees-react/menu
echo - http://localhost/kaffees-react/deals
echo - http://localhost/kaffees-react/favourite
echo.
pause
