# Running from Spring Tool Suite (STS)

This guide explains how to run the integrated frontend-backend application from Spring Tool Suite.

## Prerequisites

1. **Spring Tool Suite 4** (or Eclipse with Spring Tools)
2. **Java 17+** installed and configured
3. **Maven** installed (or use embedded Maven)
4. **Node.js and npm** installed (for building frontend)

## Step 1: Import Project into STS

1. Open Spring Tool Suite
2. Go to **File → Import**
3. Select **Maven → Existing Maven Projects**
4. Click **Next**
5. Browse to your project root: `C:\Users\prana\ISA\ISAConnect-Backend`
6. Click **Finish**

STS will automatically:
- Import the Maven project
- Download dependencies
- Configure the project structure

## Step 2: Build Frontend (First Time or When Frontend Changes)

**⚠️ IMPORTANT:** You MUST build the frontend before running, otherwise you'll get a 404 error.

Before running from STS, you need to build the frontend:

### Option A: Using STS Terminal

1. In STS, go to **Window → Show View → Terminal**
2. In the terminal, navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies (first time only):
   ```bash
   npm install
   ```
4. Build the frontend:
   ```bash
   npm run build -- --configuration production
   ```

### Option B: Using External Terminal/Command Prompt

1. Open Command Prompt or PowerShell
2. Navigate to the project:
   ```bash
   cd C:\Users\prana\ISA\ISAConnect-Backend\frontend
   ```
3. Install and build:
   ```bash
   npm install
   npm run build -- --configuration production
   ```

## Step 3: Run from STS

### Method 1: Run as Spring Boot App (Recommended)

1. In **Package Explorer**, locate the main class:
   - `src/main/java/com/portal/AdminMemberPortalApplication.java`

2. Right-click on `AdminMemberPortalApplication.java`

3. Select **Run As → Spring Boot App**

4. The application will start and you'll see output in the **Console** view

5. Access the application at:
   - **Frontend:** http://localhost:8080/
   - **API:** http://localhost:8080/api/**

### Method 2: Create Run Configuration

1. Go to **Run → Run Configurations...**

2. Right-click **Spring Boot App** → **New Configuration**

3. Configure:
   - **Name:** `Admin Member Portal`
   - **Project:** `admin-member-portal`
   - **Main type:** `com.portal.AdminMemberPortalApplication`
   - **Working directory:** `${workspace_loc:/admin-member-portal}`

4. Go to **Arguments** tab:
   - **VM arguments:** (optional, for JVM settings)
   - **Program arguments:** (leave empty)

5. Go to **Classpath** tab:
   - Ensure all Maven dependencies are included

6. Click **Apply** then **Run**

## Step 4: Verify It's Running

1. Check the **Console** view for:
   ```
   Started AdminMemberPortalApplication in X.XXX seconds
   ```

2. Open a browser and navigate to:
   - http://localhost:8080/ (should show the Angular frontend)
   - http://localhost:8080/api/auth/login (API endpoint)

## Troubleshooting

### "No static resource" or 404 Error on Root Path

**Problem:** Frontend hasn't been built yet, or files aren't in the right location.

**Solution:** 
1. Build the frontend:
   ```bash
   cd frontend
   npm install
   npm run build -- --configuration production
   ```

2. Copy built files to static resources (if running from STS):
   ```bash
   # From project root in terminal
   xcopy /E /I /Y frontend\dist\isa-angular\* src\main\resources\static\
   ```
   
   Or manually copy `frontend/dist/isa-angular/*` to `src/main/resources/static/`

3. **Refresh the project in STS:** Right-click project → Refresh (F5)

4. Restart the Spring Boot application

### Port 8080 Already in Use

**Problem:** Another application is using port 8080.

**Solution:** 
1. Stop the other application, OR
2. Change the port in `src/main/resources/application.properties`:
   ```properties
   server.port=8081
   ```

### Frontend Changes Not Reflecting

**Problem:** Frontend code changed but changes aren't visible.

**Solution:** Rebuild the frontend:
```bash
cd frontend
npm run build -- --configuration production
```
Then restart the Spring Boot application in STS.

### Maven Dependencies Not Downloading

**Problem:** STS can't download Maven dependencies.

**Solution:**
1. Right-click project → **Maven → Update Project**
2. Check **Force Update of Snapshots/Releases**
3. Click **OK**

### Node.js Not Found

**Problem:** STS terminal can't find npm/node.

**Solution:**
1. Ensure Node.js is installed and in your PATH
2. Or use external terminal/command prompt
3. Verify with: `node --version` and `npm --version`

## Development Workflow

### For Backend Development:

1. Make changes to Java files
2. Save files (STS auto-compiles)
3. Restart Spring Boot App (or use Spring Boot DevTools for auto-restart)

### For Frontend Development:

**Option A: Integrated (Production-like)**
1. Make changes to files in `frontend/src/`
2. Rebuild frontend: `cd frontend && npm run build -- --configuration production`
3. Restart Spring Boot App in STS

**Option B: Separate Servers (Recommended for Active Development)**
1. Run backend from STS (as Spring Boot App)
2. In external terminal, run frontend dev server:
   ```bash
   cd ISAConnect-Backend/frontend
   npm start
   ```
3. Frontend runs at http://localhost:4200 (proxies to backend API)
4. Backend runs at http://localhost:8080/api

## Debugging

### Set Breakpoints

1. Open any Java file in `src/main/java/com/portal/`
2. Click in the left margin to set a breakpoint
3. Run as **Debug As → Spring Boot App** (instead of Run As)
4. Execution will pause at breakpoints

### View Logs

- **Console** view shows application logs
- Check `src/main/resources/application.properties` for log levels:
  ```properties
  logging.level.org.springframework.security=DEBUG
  logging.level.org.hibernate.SQL=DEBUG
  ```

## Project Structure in STS

```
admin-member-portal (Maven Project)
├── src/main/java/com/portal/
│   ├── AdminMemberPortalApplication.java  ← Main class (Run this)
│   ├── config/
│   ├── controller/
│   ├── service/
│   └── ...
├── src/main/resources/
│   ├── application.properties
│   └── static/  ← Frontend build output copied here
├── frontend/  ← Frontend source code
│   ├── src/
│   ├── package.json
│   └── dist/isa-angular/  ← Built frontend files
└── pom.xml
```

## Quick Reference

| Task | Command/Action |
|------|----------------|
| Build frontend | `cd frontend && npm run build -- --configuration production` |
| Run Spring Boot | Right-click `AdminMemberPortalApplication.java` → Run As → Spring Boot App |
| Debug Spring Boot | Right-click `AdminMemberPortalApplication.java` → Debug As → Spring Boot App |
| Update Maven | Right-click project → Maven → Update Project |
| View Console | Window → Show View → Console |
| Open Terminal | Window → Show View → Terminal |

## Tips

1. **Use Spring Boot DevTools** (already in dependencies) for automatic restart on code changes
2. **Enable auto-build**: Project → Build Automatically (checked)
3. **Use separate frontend server** during active development for hot-reload
4. **Check Console view** for any startup errors or warnings
5. **Verify database connection** in `application.properties` before running
