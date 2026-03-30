@echo off
REM Build and copy frontend for STS - Run this from STS Terminal or project root
echo Building frontend and copying to static resources...
echo.

cd frontend
if not exist "node_modules" (
    echo Installing npm dependencies...
    call npm install
    if errorlevel 1 (
        echo npm install failed!
        pause
        exit /b 1
    )
)

echo.
echo Building Angular application...
call npm run build -- --configuration production
if errorlevel 1 (
    echo Angular build failed!
    pause
    exit /b 1
)

cd ..
echo.
echo Copying built files to src/main/resources/static/...
if exist "src\main\resources\static" (
    rmdir /S /Q "src\main\resources\static"
)
xcopy /E /I /Y "frontend\dist\isa-angular\*" "src\main\resources\static\"

echo.
echo Copying to target/classes/static/ for immediate use...
if exist "target\classes\static" (
    rmdir /S /Q "target\classes\static"
)
if not exist "target\classes" (
    mkdir "target\classes"
)
xcopy /E /I /Y "frontend\dist\isa-angular\*" "target\classes\static\"

echo.
echo ========================================
echo Frontend built and copied successfully!
echo.
echo Next steps in STS:
echo 1. Right-click project -^> Refresh (F5)
echo 2. Restart Spring Boot application
echo.
echo The application should now be accessible at:
echo   http://localhost:8080/
echo.
pause
