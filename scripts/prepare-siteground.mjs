import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const sourceDir = path.join(process.cwd(), 'out');
const targetDir = path.join(process.cwd(), 'build', 'production');

await rm(targetDir, { recursive: true, force: true });
await mkdir(targetDir, { recursive: true });
await cp(sourceDir, targetDir, { recursive: true });

// Create .htaccess file for Apache/SiteGround
const htaccessContent = `# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# If the requested file exists, serve it directly
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# If the request doesn't have .html, try to serve the .html file
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Handle 404 errors
ErrorDocument 404 /404.html
`;

await writeFile(path.join(targetDir, '.htaccess'), htaccessContent);

console.log(`Copied static export from ${sourceDir} to ${targetDir}`);
console.log('Created .htaccess file for URL rewriting');
