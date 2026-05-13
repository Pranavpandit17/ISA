/**
 * After `ng build`, artifacts live under <repo>/target/isa-angular-out/browser/
 * (see angular.json outputPath — outside static/ to avoid Windows EBUSY locks on dist/).
 * Copy browser output next to src/ so a local Spring run can pick up the latest build.
 */
const fs = require("fs");
const path = require("path");

const staticRoot = path.join(__dirname, "..");
const repoRoot = path.join(__dirname, "..", "..", "..", "..", "..");
const browserDir = path.join(repoRoot, "target", "isa-angular-out", "browser");

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
