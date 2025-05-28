// themes/dist/index.css를 public 폴더로 복사하는 스크립트
import { copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, '../../../packages/themes/dist/index.css');
const dest = resolve(__dirname, '../public/themes-dist-index.css');

copyFileSync(src, dest);
console.log(`Copied: ${src} -> ${dest}`);
