@echo off
REM Build script for integrated frontend-backend application (Windows)
echo Building integrated application...
echo.

REM Check if Angular dist exists
if not exist "frontend\dist\isa-angular\index.html" (
    echo Angular frontend not built yet. Building now...
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
    ) else (
        echo npm dependencies already installed. Skipping...
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
    echo Angular frontend built successfully!
    echo.
) else (
    echo Angular frontend already built. Skipping...
    echo.
)

REM Build Spring Boot with Maven
echo Building Spring Boot application...
mvn clean package -DskipTests

if errorlevel 1 (
    echo Maven build failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo Build completed successfully!
echo.
echo Run the application with:
echo   java -jar target\admin-member-portal-1.0.0.jar
echo.
echo Or use Maven:
echo   mvn spring-boot:run
echo.
pause
