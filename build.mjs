import { cpSync, mkdirSync } from 'node:fs';

// Копируем только файлы сайта. Исходники остаются рядом с готовой сборкой.
mkdirSync('dist', { recursive: true });
for (const entry of ['index.html', 'fonts', 'styles', 'scripts']) {
  cpSync(entry, `dist/${entry}`, { recursive: true });
}
console.log('Статический сайт подготовлен в dist/');
