# Admin & Member Portal - Integrated Application

This is the integrated Spring Boot backend with Angular frontend application. The frontend code is included in the `frontend/` directory and is automatically served by Spring Boot.

## Features

- RESTful API with Spring Boot 3.2.0
- JWT-based authentication
- MySQL database integration
- Spring Security for authorization
- CORS configuration for Angular frontend
- Role-based access control (Admin/Member)

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- Node.js 18+ and npm (for building frontend)
- MySQL 8.0+
- Database schema created (see `../database/schema.sql`)

## Quick Start

**For Spring Tool Suite users:** See `QUICK_START_STS.md` for 3-step setup.

**For command line users:** See `BUILD_INSTRUCTIONS.md` for detailed build steps.

## Setup Instructions

### 1. Database Setup

First, create the database using the schema file:

```bash
mysql -u root -p < ../database/schema.sql
```

### 2. Configure Database

Update `src/main/resources/application.properties` with your MySQL credentials:

```properties
spring.datasource.username=root
spring.datasource.password=your_password
```

### 3. Build and Run

**Option A: Command Line**
```bash
# Build frontend first (one-time or when frontend changes)
cd frontend
npm install
npm run build -- --configuration production

# Build and run backend
cd ..
mvn clean package
java -jar target/admin-member-portal-1.0.0.jar
```

**Option B: Spring Tool Suite (STS)**
1. Import as Maven project
2. Build frontend: `cd frontend && npm run build -- --configuration production`
3. Right-click `AdminMemberPortalApplication.java` → **Run As → Spring Boot App**
4. See `STS_RUN_GUIDE.md` for detailed instructions

**Option C: Use Build Script**
```bash
# Windows
build-integrated.bat

# Linux/Mac
./build-integrated.sh
```

The API will be available at: `http://localhost:8080/api`

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login and get JWT token

### Events (Admin)
- `GET /api/events` - Get all events
- `GET /api/events/published` - Get published events
- `GET /api/events/{id}` - Get event by ID
- `POST /api/events` - Create event (Admin only)
- `PUT /api/events/{id}` - Update event (Admin only)

### Notifications
- `GET /api/notifications` - Get user notifications
- `GET /api/notifications/unread-count` - Get unread count
- `PUT /api/notifications/{id}/read` - Mark as read
- `PUT /api/notifications/mark-all-read` - Mark all as read

### Membership (Admin)
- `GET /api/membership/applications` - Get all applications
- `GET /api/membership/applications/{id}` - Get application by ID
- `PUT /api/membership/applications/{id}/approve` - Approve application
- `PUT /api/membership/applications/{id}/reject` - Reject application

### Jobs
- `GET /api/jobs` - Get published jobs
- `GET /api/jobs/{id}` - Get job by ID
- `POST /api/jobs` - Create job posting
- `GET /api/jobs/pending` - Get pending jobs (Admin)

## Authentication

All endpoints except `/api/auth/login` require JWT authentication.

Include the token in the Authorization header:
```
Authorization: Bearer <token>
```

## Default Users (from seed data)

**Admin:**
- Username: `admin`
- Password: `password` (hashed in database)

**Member:**
- Username: `member`
- Password: `password` (hashed in database)

## Project Structure

```
src/main/java/com/portal/
├── config/          # Configuration classes
├── controller/      # REST controllers
├── dto/            # Data Transfer Objects
├── entity/         # JPA entities
├── repository/     # Spring Data repositories
├── security/       # Security configuration
└── service/        # Business logic services
```

## Technologies Used

- Spring Boot 3.2.0
- Spring Security
- Spring Data JPA
- MySQL Connector
- JWT (jjwt)
- Lombok
- Maven

## Development

Run with development profile:
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

## Production

Set environment variables:
- `DB_URL` - Database URL
- `DB_USERNAME` - Database username
- `DB_PASSWORD` - Database password
- `JWT_SECRET` - JWT secret key (minimum 256 bits)

Run with production profile:
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=prod
```

