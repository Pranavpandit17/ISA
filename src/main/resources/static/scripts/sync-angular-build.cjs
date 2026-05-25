/**
 * Copy latest ng build from target/isa-angular-out/browser to:
 * 1) src/main/resources/static/dist/isa-angular/browser (classpath SPA for Spring)
 * 2) src/main/resources/static/ (flat copy used by build:spring legacy path)
 */
const fs = require("fs");
const path = require("path");

const staticRoot = path.join(__dirname, "..");
const repoRoot = path.join(__dirname, "..", "..", "..", "..", "..");
const browserDir = path.join(repoRoot, "target", "isa-angular-out", "browser");
const distBrowserDir = path.join(staticRoot, "dist", "isa-angular", "browser");

if (!fs.existsSync(browserDir)) {
  console.error(
    "Missing build output:",
    browserDir,
    "\nRun from static/: npm run build"
  );
  process.exit(1);
}

function copyTree(fromDir, toDir) {
  fs.mkdirSync(toDir, { recursive: true });
  for (const name of fs.readdirSync(fromDir)) {
    const from = path.join(fromDir, name);
    const to = path.join(toDir, name);
    fs.cpSync(from, to, { recursive: true, force: true });
  }
}

copyTree(browserDir, distBrowserDir);
copyTree(browserDir, staticRoot);

console.log("Synced Angular build to:");
console.log(" -", distBrowserDir);
console.log(" -", staticRoot);
