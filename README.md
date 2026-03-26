# WeimWisdom

WeimWisdom is a sleek, accessible, mobile-ready Next.js static site for Weimaraner breed info, training, activities, and adoption resources. Built with Next.js 14, Material-UI, and TypeScript, optimized for Apache hosting.

## Features

- 🐕 **Comprehensive Breed Information**: Detailed Weimaraner characteristics, temperament, and care essentials
- 🎓 **Training Resources**: Professional training tips and YouTube community
- 🏃 **Activities**: Exercise recommendations and purpose-driven work ideas for high-energy Weimaraners
- 👪 **Adoption Guidance**: Complete adoption process, preparation guides, and rescue resources
- ♿ **Fully Accessible**: WCAG compliant with comprehensive accessibility testing (100% pass rate)
- 📱 **Mobile-First Design**: Responsive typography optimized for iPhone and all screen sizes
- 🎨 **Modern UI**: Clean, professional design with Material-UI components
- 🔒 **HTTPS Ready**: Automatic SSL redirect configured via .htaccess
- 🚀 **Static Export**: Fully static HTML for fast loading and reliable hosting

## Tech Stack

- **Framework**: Next.js 14.2.35 with TypeScript and Static Export
- **UI Library**: Material-UI (MUI) v7.0.1
- **Testing**: Jest 30.0.2, React Testing Library 16.1.0, Playwright 1.53.0
- **Accessibility**: jest-axe 9.0.2 for automated WCAG compliance testing
- **Linting**: ESLint with Next.js configuration
- **Deployment**: Static HTML export for Apache/SiteGround hosting

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── GalleryGrid.tsx
│   ├── HeroSection.tsx
│   ├── PageHero.tsx
│   ├── ResponsiveImage.tsx
│   ├── SectionBlock.tsx
│   ├── SiteFooter.tsx
│   ├── SiteHeader.tsx
│   ├── SiteLayout.tsx
│   └── SpotlightGrid.tsx
├── data/            # Content and configuration
│   └── siteContent.ts
├── pages/           # Next.js pages/routes
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── breed-info.tsx
│   ├── training.tsx
│   ├── activities.tsx   # Combined Activities & Jobs page
│   └── adoption.tsx     # Combined Adoption & Rescue page
├── styles/          # Global styles
│   └── globals.css
└── theme/           # MUI theme configuration
    └── theme.ts
```

## Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

## Quality Checks

- **Lint code:**
  ```bash
  npm run lint
  ```

- **Run unit & integration tests:**
  ```bash
  npm run test
  ```

- **Run E2E tests:**
  ```bash
  npm run test:e2e
  ```

- **Build for production:**
  ```bash
  npm run build
  ```

## Deployment

### Static Export for SiteGround

The site uses Next.js static export configured in `next.config.mjs` with `output: 'export'`. This generates a fully static site suitable for Apache hosting.

**Build for production:**
```bash
npm run build:siteground
```

This command:
1. Runs Next.js build with static export to `out/` directory
2. Executes `scripts/prepare-siteground.mjs` to copy files to `build/production/`
3. Creates `.htaccess` file with URL rewriting and HTTPS redirect

**Output includes:**
- 6 pre-rendered HTML pages (index, breed-info, training, activities, adoption, 404)
- Optimized static assets in `_next/` directory
- Image assets in `images/` folder
- `.htaccess` configuration for Apache server

### .htaccess Configuration

The build automatically creates `.htaccess` with:
- **HTTPS Redirect**: Forces all traffic to use SSL
- **URL Rewriting**: Serves `.html` files without the extension (e.g., `/breed-info` serves `breed-info.html`)
- **404 Handling**: Redirects missing pages to custom 404.html

**Example rules:**
```apache
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Serve HTML files without .html extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]
```

### Deployment to SiteGround

1. **Build the site:**
   ```bash
   npm run build:siteground
   ```

2. **Upload to server:**
   - Upload entire `build/production/` folder contents to your public_html directory
   - Ensure `.htaccess` file is included (enable "Show Hidden Files" in file manager)

3. **Enable SSL:**
   - In SiteGround control panel, navigate to Security → SSL Manager
   - Install Let's Encrypt SSL certificate for your domain
   - HTTPS redirect will activate automatically via .htaccess

4. **Verify deployment:**
   - Test all pages load correctly
   - Verify HTTPS redirect works
   - Check that URLs work without .html extension
   - Test 404 page by visiting non-existent URL

### Local Testing

To test the production build locally before deployment:

```bash
# Install serve globally if not already installed
npm install -g serve

# Serve the production build
npx serve@latest build/production -p 3000
```

Visit `http://localhost:3000` to test the production build.

## Recent Updates

### March 2026 - Production Optimization & Mobile Enhancements

#### Mobile Typography Optimization
- ✅ **Responsive Hero Section**: Reduced hero headline from 2.6rem to 2rem on mobile (xs breakpoint) to prevent text cutoff on iPhone 16
- ✅ **Page Headers**: Optimized PageHero component with mobile-first sizing (xs: 1.85rem → sm: 2.5rem → md: 4rem)
- ✅ **Section Headings**: Reduced SectionBlock h2 sizing for mobile (xs: 1.5rem → sm: 2rem → md: 2.5rem)
- ✅ **Consistent Body Text**: Standardized body text sizing across all pages (xs/sm: 1rem → md: 1.125rem)
- ✅ **YouTube Section**: Matched training page YouTube section styling with rest of site
- ✅ **Home Page Consistency**: Applied responsive sizing to "Continue at your own Risk" section

#### Page Consolidation
- ✅ **Removed Jobs Page**: Consolidated job content into Activities page (was separate earlier)
- ✅ **Removed Rescue Page**: Consolidated rescue resources into Adoption page
- ✅ **Final Site Structure**: 5 main pages (Home, Breed Info, Training, Activities, Adoption) + 404 page

#### Production Build Improvements
- ✅ **Clean Build Process**: Implemented `rm -rf build/production && npm run build:siteground` to prevent duplicate files
- ✅ **No Duplicates**: Eliminated macOS "file 2" and "file 3" artifacts from production builds
- ✅ **Build Verification**: 40 total files, 6 HTML pages, 16 images in production folder

#### Apache Configuration
- ✅ **URL Rewriting**: Created .htaccess with RewriteEngine rules to serve .html files without extension
- ✅ **HTTPS Redirect**: Automatic redirect from HTTP to HTTPS for SSL security
- ✅ **404 Handling**: Custom 404 page for missing resources
- ✅ **SiteGround Ready**: Production build fully configured for Apache hosting

#### Testing & Validation
- ✅ **All Tests Passing**: 12 Jest tests (4 suites) + 2 Playwright E2E tests with 100% pass rate
- ✅ **Accessibility**: jest-axe validation confirms WCAG compliance across all pages
- ✅ **Local Server Testing**: Verified production build with static server on localhost:3000

### Previous Updates

#### Content & Structure
- ✅ **Combined Activities & Jobs pages** into single comprehensive page with two sections
- ✅ **Page content separation**: Created independent content arrays (homeHighlights, breedInfoHistory, breedInfoCare, breedInfoGallery) for cleaner page management
- ✅ **Added Fun Facts cards**: Velvet ears and nooking behavior to home page
- ✅ **Enhanced Breed Info page**: Added detailed history/temperament and care sections with multi-paragraph support
- ✅ **Expanded activity ideas**: Added Barn Hunts card (5 total activities)
- ✅ **Expanded job ideas**: Added Search and Rescue (SAR), Field Trials, and Detection Work cards (6 total jobs)

#### Technical Improvements
- ✅ Updated home page breed description with detailed "Gray Ghost" and "Velcro dog" characteristics
- ✅ Image format conversions: Converted SVG placeholders to PNG/JPG formats throughout site
- ✅ Fixed 404 errors by updating all image references to match actual file extensions
- ✅ Improved header layout with left-justified branding to support future logo integration
- ✅ Enhanced navigation spacing and added `whiteSpace: 'nowrap'` to prevent wrapping
- ✅ Multi-paragraph description support: SectionBlock component accepts string | string[] for descriptions
- ✅ MUI Grid v2 migration: Updated components to use size prop instead of deprecated item/xs/md

## Contributing

This project follows best practices for Next.js development, Material-UI theming, and accessibility standards. When contributing:

1. **Maintain TypeScript strict mode compliance**
2. **Follow the established component structure**
3. **Add tests for new features** - All tests must pass before deployment
4. **Ensure accessibility standards are met** - Run `npm test` to verify jest-axe compliance
5. **Test mobile responsiveness** - Verify typography and layouts on small screens (xs/sm breakpoints)
6. **Update this README** with significant changes
7. **Clean builds** - Always delete `build/production` before rebuilding to avoid duplicates

### Build Process

Before deploying:
```bash
# Run all tests
npm test
npm run test:e2e

# Clean build for production
rm -rf build/production
npm run build:siteground

# Verify build locally
npx serve@latest build/production -p 3000
```

### Mobile-First Typography Guidelines

All text components use responsive sizing with breakpoints:
- **xs** (mobile): Smaller sizes optimized for iPhone and small screens
- **sm** (tablet): Medium sizes for tablet portrait
- **md** (desktop): Full sizes for desktop displays

Example:
```tsx
<Typography
  variant="h2"
  sx={{
    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
    lineHeight: { xs: 1.2, md: 1.3 }
  }}
>
  Heading Text
</Typography>
```

## Project Statistics

- **Pages**: 5 main + 1 error page (6 total HTML files)
- **Components**: 9 reusable React components
- **Images**: 16 optimized assets
- **Tests**: 12 unit/integration + 2 E2E tests
- **Test Coverage**: 100% pass rate on all accessibility and functionality tests
- **Production Build**: ~40 files total (HTML, JS chunks, CSS, images, config)

## License

All rights reserved.
