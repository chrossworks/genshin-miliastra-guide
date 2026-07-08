import fs from 'fs/promises';
import path from 'path';

const root = path.resolve('..');
const from = path.join(root, 'assets');
const to = path.join(root, 'website', 'public', 'assets');

await fs.rm(to, { recursive: true, force: true });
await fs.cp(from, to, { recursive: true });

console.log('Copied assets to website/public/assets');