import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const sourceDir = path.join(process.cwd(), 'out');
const targetDir = path.join(process.cwd(), 'build', 'production');

await rm(targetDir, { recursive: true, force: true });
await mkdir(targetDir, { recursive: true });
await cp(sourceDir, targetDir, { recursive: true });

console.log(`Copied static export from ${sourceDir} to ${targetDir}`);
