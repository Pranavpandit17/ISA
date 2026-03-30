# Quick Start: Running in Spring Tool Suite

## 🚀 Fast Setup (3 Steps)

### 1. Import Project
- **File → Import → Maven → Existing Maven Projects**
- Select: `C:\Users\prana\ISA\ISAConnect-Backend`
- Click **Finish**

### 2. Build Frontend (First Time) ⚠️ REQUIRED

**Option A: Use the helper script (Easiest)**
In STS Terminal, run:
```bash
build-frontend-for-sts.bat
```

**Option B: Manual build**
```bash
cd frontend
npm install
npm run build -- --configuration production
cd ..
xcopy /E /I /Y frontend\dist\isa-angular\* src\main\resources\static\
```

**Then refresh project:** Right-click project → Refresh (F5)

### 3. Run Application
- Right-click: `AdminMemberPortalApplication.java`
- **Run As → Spring Boot App**
- Open browser: http://localhost:8080/

## ✅ That's It!

The application is now running with:
- **Frontend:** http://localhost:8080/
- **API:** http://localhost:8080/api/

## 🔄 When Frontend Code Changes

Rebuild frontend:
```bash
cd frontend
npm run build -- --configuration production
```

Then restart the Spring Boot app in STS.

## 🐛 Debugging

- Set breakpoints in Java files
- **Debug As → Spring Boot App** (instead of Run As)
- Execution pauses at breakpoints

## 📝 Notes

- **Console view** shows application logs
- **Spring Boot DevTools** auto-restarts on Java code changes
- Frontend changes require manual rebuild

For detailed instructions, see `STS_RUN_GUIDE.md`
