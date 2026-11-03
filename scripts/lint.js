// Минимальный "линтер": проверка синтаксиса всех .js файлов
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.name === 'node_modules' || e.name.startsWith('.') ? [] :
  e.isDirectory() ? walk(path.join(d, e.name)) :
  e.name.endsWith('.js') ? [path.join(d, e.name)] : []);

for (const f of walk('.')) execFileSync(process.execPath, ['--check', f], { stdio: 'inherit' });
console.log('lint ok');
