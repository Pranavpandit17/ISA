# Frontend-Backend Integration Guide

This guide explains how to build and run the integrated application where the Angular frontend is served by the Spring Boot backend as a single application.

## Overview

The application is configured to:
- Serve the Angular frontend from the root URL (`http://localhost:8080/`)
- Serve API endpoints from `/api/**` (e.g., `http://localhost:8080/api/auth/login`)
- Handle Angular client-side routing by serving `index.html` for all non-API routes

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- Node.js 18+ and npm (installed automatically by Maven plugin)
- MySQL 8.0+

## Building the Integrated Application

### Option 1: Build with Maven (Recommended)

Maven will automatically:
1. Install Node.js and npm (if not present)
2. Install Angular dependencies
3. Build the Angular application for production
4. Copy the Angular build output to Spring Boot's static resources
5. Build the Spring Boot JAR with embedded frontend

```bash
cd ISAConnect-Backend
mvn clean install
```

**Note:** If you get an error about missing `index.html`, you need to build the Angular app first. See Option 2 below, or use the provided build scripts.

The final JAR file will be created at:
```
ISAConnect-Backend/target/admin-member-portal-1.0.0.jar
```

### Option 1b: Use Build Scripts (Easiest)

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
1. Check if Angular is built, and build it if needed
2. Build the Spring Boot application with Maven
3. Create the integrated JAR file

### Option 2: Manual Build (For Development)

If you prefer to build manually:

```bash
# 1. Build Angular frontend (now inside backend project)
cd ISAConnect-Backend/frontend
npm install
npm run build -- --configuration production

# 2. Build Spring Boot (Maven will automatically copy the built files)
cd ..
mvn clean package
```

**Note:** The frontend source code is now located inside the backend project at `ISAConnect-Backend/frontend/`. This makes it a truly integrated single application.

## Running the Application

### Development Mode (Separate Frontend/Backend)

For development, you can still run them separately:

**Terminal 1 - Backend:**
```bash
cd ISAConnect-Backend
mvn spring-boot:run
```
Backend runs at: `http://localhost:8080/api`

**Terminal 2 - Frontend:**
```bash
cd ISAConnect-Backend/frontend
npm install  # First time only
npm start
```
Frontend runs at: `http://localhost:4200` (proxies API calls to backend)

**Note:** The frontend code is now inside the backend project at `frontend/` directory.

### Production Mode (Integrated)

Run the integrated JAR:

```bash
cd ISAConnect-Backend
java -jar target/admin-member-portal-1.0.0.jar
```

Or use Maven:

```bash
cd ISAConnect-Backend
mvn spring-boot:run
```

The application will be available at:
- **Frontend:** `http://localhost:8080/`
- **API:** `http://localhost:8080/api/**`

## Configuration

### Application Properties

The `application.properties` file has been configured for integrated deployment:
- `server.port=8080` - Application runs on port 8080
- Context path removed - API endpoints are at `/api/**` and frontend at root

### Security Configuration

- API endpoints require authentication (except `/api/auth/**`)
- Static resources (Angular app) are publicly accessible
- CORS is configured for both `localhost:4200` (dev) and `localhost:8080` (integrated)

### Static Resource Configuration

The `StaticResourceConfig` class:
- Serves static files from `classpath:/static/`
- Handles Angular client-side routing by serving `index.html` for non-API routes
- Excludes `/api/**` paths from static resource handling

## Troubleshooting

### Frontend Not Loading / Missing index.html Error

**Error:** `class path resource [static/index.html] cannot be resolved to URL because it does not exist`

**Solution:** The Angular frontend hasn't been built yet. You need to build it first:

```bash
# Build Angular frontend
cd ISAConnect-frontend
npm install
npm run build -- --configuration production

# Then build Spring Boot
cd ../ISAConnect-Backend
mvn clean package
```

Or use the provided build scripts (`build-integrated.bat` or `build-integrated.sh`) which will handle this automatically.

**After building:**
1. Check that files exist in `target/classes/static/` after Maven build
2. Verify `index.html` exists in `target/classes/static/index.html`
3. The `StaticResourceConfig` will now serve the frontend correctly

### API Calls Failing

1. Check that API endpoints are prefixed with `/api/`
2. Verify CORS configuration in `SecurityConfig`
3. Check browser console for CORS errors

### 404 Errors on Angular Routes

1. Ensure `StaticResourceConfig` is serving `index.html` for non-API routes
2. Check that `addViewControllers` is configured to forward root to `index.html`

### Maven Build Fails on Frontend

1. Ensure Node.js 18+ is available (or let Maven install it)
2. Check network connection for npm install
3. Try building Angular manually first: `cd frontend && npm install && npm run build`
4. Verify frontend code exists in `ISAConnect-Backend/frontend/` directory

## Development Workflow

For active development:
- Use separate frontend/backend servers (development mode)
- Frontend at `http://localhost:4200` with proxy to backend
- Backend at `http://localhost:8080/api`

For testing integrated deployment:
- Build with Maven: `mvn clean install`
- Run JAR: `java -jar target/admin-member-portal-1.0.0.jar`
- Test at `http://localhost:8080`

## Production Deployment

1. Build the integrated JAR:
   ```bash
   mvn clean install -DskipTests
   ```

2. Run with production profile:
   ```bash
   java -jar target/admin-member-portal-1.0.0.jar --spring.profiles.active=prod
   ```

3. Configure environment variables:
   - Database credentials
   - JWT secret
   - Email/SMS API keys
   - Razorpay credentials

## File Structure

After building, the Angular files are copied to:
```
ISAConnect-Backend/target/classes/static/
├── index.html
├── main-*.js
├── polyfills-*.js
├── styles-*.css
└── assets/
    └── gallery/
        └── *.png
```

These files are packaged into the JAR and served by Spring Boot at runtime.
