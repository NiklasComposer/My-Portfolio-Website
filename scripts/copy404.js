// scripts/copy404.js
import fs from "fs";

const source = "dist/index.html";   // dein build-output von Vite
const destination = "dist/404.html";

// index.html kopieren → 404.html
fs.copyFileSync(source, destination);

console.log("✅ 404.html wurde erstellt!");
