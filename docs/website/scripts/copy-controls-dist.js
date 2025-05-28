// 빌드 후 controls/dist/index.js를 public 폴더로 복사하는 스크립트
import { copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, '../../../packages/controls/dist/index.js');
const dest = resolve(__dirname, '../public/controls-dist-index.js');

copyFileSync(src, dest);
console.log(`Copied: ${src} -> ${dest}`);
