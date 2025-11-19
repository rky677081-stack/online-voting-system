@echo off
echo Starting Indian Online Voting System...
echo.

echo Installing backend dependencies...
cd backend
call npm install
echo.

echo Starting MongoDB (make sure MongoDB is installed)...
echo If MongoDB is not running, please start it manually
echo.

echo Seeding database with sample data...
node seed.js
echo.

echo Starting backend server...
start cmd /k "npm start"
echo.

echo Backend server started on http://localhost:5000
echo.

cd ../frontend
echo Starting frontend server...
echo Opening frontend in browser...
start http://localhost:3000
echo.

echo Frontend will be available at http://localhost:3000
echo.

echo Setup complete! 
echo.
echo Login Credentials:
echo Admin - Voter ID: ADM0000001, Password: admin123
echo Voter - Voter ID: DEL1234567, Password: voter123
echo.
pause