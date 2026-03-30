#!/bin/bash
# Build script for integrated frontend-backend application (Linux/Mac)

echo "Building integrated application..."
echo

# Check if Angular dist exists
if [ ! -f "frontend/dist/isa-angular/index.html" ]; then
    echo "Angular frontend not built yet. Building now..."
    echo
    cd frontend
    if [ ! -d "node_modules" ]; then
        echo "Installing npm dependencies..."
        npm install
        if [ $? -ne 0 ]; then
            echo "npm install failed!"
            exit 1
        fi
    else
        echo "npm dependencies already installed. Skipping..."
    fi
    echo
    echo "Building Angular application..."
    npm run build -- --configuration production
    if [ $? -ne 0 ]; then
        echo "Angular build failed!"
        exit 1
    fi
    cd ..
    echo
    echo "Angular frontend built successfully!"
    echo
else
    echo "Angular frontend already built. Skipping..."
    echo
fi

# Build Spring Boot with Maven
echo "Building Spring Boot application..."
mvn clean package -DskipTests

if [ $? -ne 0 ]; then
    echo "Maven build failed!"
    exit 1
fi

echo
echo "========================================"
echo "Build completed successfully!"
echo
echo "Run the application with:"
echo "  java -jar target/admin-member-portal-1.0.0.jar"
echo
echo "Or use Maven:"
echo "  mvn spring-boot:run"
echo
