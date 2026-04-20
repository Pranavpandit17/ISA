/**
 * After `ng build`, artifacts live under dist/isa-angular/browser/.
 * Spring Boot serves the SPA from src/main/resources/static/ (classpath:/static/).
 * Copy browser output to the static root so http://localhost:8080/ picks up the latest build.
 */
const fs = require("fs");
const path = require("path");

const staticRoot = path.join(__dirname, "..");
const browserDir = path.join(staticRoot, "dist", "isa-angular", "browser");

if (!fs.existsSync(browserDir)) {
  console.error(
    "Missing build output:",
    browserDir,
    "\nRun: npm run build (or npm run build:spring)"
  );
  process.exit(1);
}

for (const name of fs.readdirSync(browserDir)) {
  const from = path.join(browserDir, name);
  const to = path.join(staticRoot, name);
  fs.cpSync(from, to, { recursive: true });
}

console.log("Copied Angular browser build to Spring static root:", staticRoot);
