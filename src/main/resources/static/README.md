# Frontend Application

This directory contains the Angular frontend application source code, now integrated into the Spring Boot backend project.

## Structure

```
frontend/
├── src/              # Angular source code (TypeScript, HTML, CSS)
├── angular.json      # Angular CLI configuration
├── package.json      # Node.js dependencies
├── tsconfig.json     # TypeScript configuration
└── proxy.conf.json   # Development proxy configuration
```

## Development

To run the frontend separately for development:

```bash
cd frontend
npm install  # First time only
npm start
```

This will start the Angular dev server at `http://localhost:4200` with proxy to the backend API.

## Building for Production

The frontend is automatically built by Maven when you run:

```bash
mvn clean install
```

Or build manually:

```bash
cd frontend
npm install
npm run build -- --configuration production
```

The built files will be in `frontend/dist/isa-angular/` and automatically copied to `target/classes/static/` during the Maven build process.

## Integration

- **Source Code**: Located in `frontend/src/`
- **Build Output**: `frontend/dist/isa-angular/`
- **Static Resources**: Copied to `src/main/resources/static/` during Maven build
- **Runtime**: Served by Spring Boot from `classpath:/static/`
