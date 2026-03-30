# Build Instructions

## Quick Start

The frontend build is now **manual** to avoid Maven plugin compatibility issues. Follow these steps:

### Step 1: Build Frontend (One-time or when frontend code changes)

```bash
cd ISAConnect-Backend/frontend
npm install
npm run build -- --configuration production
```

This will create the built files in `frontend/dist/isa-angular/`

### Step 2: Build Backend

```bash
cd ISAConnect-Backend
mvn clean package
```

Maven will automatically copy the built frontend files from `frontend/dist/isa-angular/` to `target/classes/static/`

### Step 3: Run Application

```bash
java -jar target/admin-member-portal-1.0.0.jar
```

Or:

```bash
mvn spring-boot:run
```

## Alternative: Use Build Scripts

**Windows:**
```bash
cd ISAConnect-Backend
build-integrated.bat
```

**Linux/Mac:**
```bash
cd ISAConnect-Backend
chmod +x build-integrated.sh
./build-integrated.sh
```

These scripts will:
1. Check if frontend is built
2. Build it if needed
3. Build the Spring Boot application

## Development Mode

For development, you can run frontend and backend separately:

**Terminal 1 - Backend:**
```bash
cd ISAConnect-Backend
mvn spring-boot:run
```

**Terminal 2 - Frontend:**
```bash
cd ISAConnect-Backend/frontend
npm install  # First time only
npm start
```

Frontend will run at `http://localhost:4200` and proxy API calls to `http://localhost:8080/api`

## Troubleshooting

### "frontend/dist/isa-angular not found"

**Solution:** Build the frontend first:
```bash
cd ISAConnect-Backend/frontend
npm install
npm run build -- --configuration production
```

### "Maven plugin requires Maven 3.6.0"

**Solution:** The frontend-maven-plugin has been removed. Build frontend manually as shown above.

### Frontend changes not reflected

**Solution:** Rebuild the frontend:
```bash
cd ISAConnect-Backend/frontend
npm run build -- --configuration production
```

Then rebuild the backend:
```bash
cd ISAConnect-Backend
mvn clean package
```

## File Locations

- **Frontend Source:** `ISAConnect-Backend/frontend/src/`
- **Frontend Build Output:** `ISAConnect-Backend/frontend/dist/isa-angular/`
- **Static Resources (Runtime):** `ISAConnect-Backend/target/classes/static/`
- **Final JAR:** `ISAConnect-Backend/target/admin-member-portal-1.0.0.jar`
