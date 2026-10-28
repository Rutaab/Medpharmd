const fs = require('fs');
const path = 'D:\\ME\\Pharmacy\\drug-reference-app\\src\\data\\chapterContent.js';
const content = fs.readFileSync(path, 'utf8');

// Find pharmaceutical-chemistry-ii section and print first/last few items of each chapter
const lines = content.split('\n');
let inSection = false;
let currentCh = null;
let firstPrinted = false;
let lastLines = [];
let totalLines = 0;
let collecting = false;

for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  
  if (l.includes("'pharmaceutical-chemistry-ii'")) { inSection = true; continue; }
  if (inSection && l.includes("'pharmacognosy-ii'")) break;
  if (!inSection) continue;
  
  // Detect chapter start: e.g., "    0: {"
  const chMatch = l.match(/^\s+(\d+):\s*\{/);
  if (chMatch) {
    if (currentCh !== null) {
      console.log(`Ch ${currentCh}: total ${totalLines} items, last: "${lastLines.slice(-1)[0]?.replace(/'/g,'')?.slice(0,80)}"`);
    }
    currentCh = parseInt(chMatch[1]);
    totalLines = 0;
    lastLines = [];
    firstPrinted = false;
    collecting = false;
  }
  
  if (l.includes("content: [")) { collecting = true; continue; }
  if (l.trim().startsWith('],')) { collecting = false; continue; }
  
  if (collecting) {
    const match = l.match(/'([^']*)'/);
    if (match) {
      totalLines++;
      if (totalLines <= 3 && !firstPrinted) {
        console.log(`Ch ${currentCh}: first: "${match[1].slice(0,80)}"`);
        firstPrinted = true;
      }
      lastLines.push(match[1]);
      if (lastLines.length > 5) lastLines.shift();
    }
  }
}

// Print last chapter
if (currentCh !== null) {
  console.log(`Ch ${currentCh}: total ${totalLines} items, last: "${lastLines.slice(-1)[0]?.slice(0,80)}"`);
}
