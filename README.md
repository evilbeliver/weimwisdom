# WeimWisdom

WeimWisdom is a sleek, accessible, mobile-ready Next.js static site for Weimaraner breed info, training, activities, and adoption resources. Built with Next.js 14, Material-UI, and TypeScript, optimized for Apache hosting.

## Features

- 🐕 **Comprehensive Breed Information**: Detailed Weimaraner characteristics, temperament, care essentials, and breed variants
- 🎓 **Training Resources**: Professional training tips and YouTube community
- 🏃 **Activities**: Exercise recommendations and purpose-driven work ideas for high-energy Weimaraners
- 👪 **Adoption Guidance**: Complete adoption process, preparation guides, rescue resources, and live Petfinder integration
- 📝 **Blog Platform**: Markdown-based blog with featured images, custom ordering, and dynamic routing (8 published posts)
- 🐾 **Live Adoptable Pet Listings**: Integrated Petfinder widget displaying real-time adoptable Weimaraners from rescue partners
- 🤝 **Rescue Partnerships**: Featured rescues with donation links, volunteer opportunities, and event calendars
- ♿ **Fully Accessible**: WCAG compliant with comprehensive accessibility testing (100% pass rate)
- 📱 **Mobile-First Design**: Responsive typography and images optimized for all screen sizes
- 🎨 **Modern UI**: Clean, professional design with Material-UI v7 components
- 🔒 **HTTPS Ready**: Automatic SSL redirect configured via .htaccess
- 🚀 **Static Export**: Fully static HTML for fast loading and reliable hosting

## Tech Stack

- **Framework**: Next.js 14.2.35 with TypeScript and Static Export
- **UI Library**: Material-UI (MUI) v7.0.1
- **Content**: Markdown blog posts with gray-matter 4.0.3 for frontmatter parsing
- **Markdown Rendering**: react-markdown 9.0.1 with remark-gfm 4.0.0 for GitHub Flavored Markdown
- **Testing**: Jest 30.0.2, React Testing Library 16.1.0, Playwright 1.53.0
- **Accessibility**: jest-axe 9.0.2 for automated WCAG compliance testing
- **Linting**: ESLint with Next.js configuration
- **Deployment**: Static HTML export for Apache/SiteGround hosting

## Project Structure

```
content/
└── blog/            # Markdown blog posts
    ├── welcome-to-weim-wisdom.md
    ├── the-gray-ghost-chronicles.md
    ├── divas-of-the-backyard.md
    ├── training-oops-or-wow.md
    ├── the-morning-the-farm-girl-flipped-the-script.md
    ├── losing-the-walkie-walkie-privileges.md
    ├── weimaraner-shadow-demon.md
    └── three-years-with-tri-ceri-hops.md
src/
├── components/      # Reusable UI components
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
├── lib/             # Utility functions
│   └── blog.ts      # Blog post utilities (getPostBySlug, getAllPosts)
├── pages/           # Next.js pages/routes
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── breed-info.tsx
│   ├── training.tsx
│   ├── activities.tsx
│   ├── adoption.tsx
│   ├── blog.tsx     # Blog listing page
│   └── blog/
│       └── [slug].tsx  # Dynamic blog post pages
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
- 6 main HTML pages (index, breed-info, training, activities, adoption, blog)
- 404 error page
- 8 dynamic blog post pages (generated from markdown files in content/blog/)
- Petfinder widget integration for live adoptable pet listings
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

## Blog System

### Creating Blog Posts

Blog posts are markdown files stored in `content/blog/` directory. Each post requires YAML frontmatter with metadata.

**Create a new post:**

1. **Create markdown file:**
   ```bash
   touch content/blog/my-new-post.md
   ```

2. **Add frontmatter and content:**
   ```markdown
   ---
   title: "My Post Title"
   date: "2026-03-27"
   author: "Author Name"
   excerpt: "Short description for the listing page"
   order: 3
   image: "/images/my-featured-image.jpg"
   ---

   # Main Content

   Your markdown content here with **bold**, *italic*, and more.
   ```

3. **Required fields:**
   - `title`: Post title (string)
   - `date`: Publication date in YYYY-MM-DD format (parsed as local timezone)
   - `author`: Author name (string)
   - `excerpt`: Brief description (string)

4. **Optional fields:**
   - `order`: Numeric value for custom sorting (lower numbers appear first, posts without order are sorted by date)
   - `image`: Path to featured image (displays in card thumbnail and post hero)

### Blog Features

- **Markdown Rendering**: Full GitHub Flavored Markdown support (tables, strikethrough, task lists, autolinks)
- **Featured Images**: Responsive images in listing cards and post headers with `objectFit: 'contain'`
- **Custom Ordering**: Control post sequence with `order` field, fallback to date sorting
- **Dynamic Routes**: Each post gets its own URL (`/blog/post-slug`)
- **Breadcrumbs**: Navigation path showing Home → Blog → Post Title
- **Responsive Design**: Mobile-optimized typography and images with breakpoint scaling
- **Static Generation**: All blog pages pre-rendered at build time for fast loading

### Blog URL Structure

- Listing page: `/blog` or `/blog.html`
- Individual posts: `/blog/post-slug` or `/blog/post-slug.html`
- URL slugs generated from markdown filename (e.g., `welcome-to-weim-wisdom.md` → `/blog/welcome-to-weim-wisdom`)



### April 2026 - New Blog Content & Production Testing

#### New Blog Posts
- ✅ **"From 3 Months to 3 Years: Our Resident Tri-Ceri-Hops"**: Heartwarming cancer survival story about Loki's journey from diagnosis through three years post-amputation
- ✅ **"The Weimaraner Shadow Demon"**: Added as 7th blog post in the collection
- ✅ **8 Published Blog Posts**: Expanded collection with personal stories of resilience, training, and breed experiences

#### Production Build & Testing
- ✅ **Static Server Testing**: Validated production builds using Python's http.server for pre-deployment testing
- ✅ **Duplicate File Prevention**: Ensured clean builds with no duplicate files in production folder
- ✅ **Build Process**: Streamlined `build:siteground` command with automated .htaccess generation

### March 2026 - Blog Platform & Enhanced Features

#### Blog Implementation
- ✅ **Markdown-Based Blog**: Implemented full blog platform using markdown files with YAML frontmatter
- ✅ **Featured Images**: Added image support for blog posts with responsive display in cards and hero sections
- ✅ **Custom Post Ordering**: Implemented `order` field in frontmatter for manual post sequencing
- ✅ **Dynamic Routing**: Created `/blog/[slug]` route for individual blog posts with static generation
- ✅ **Blog Listing Page**: Grid layout showing post cards with images, excerpts, dates, and authors
- ✅ **GitHub Flavored Markdown**: Full markdown rendering with remark-gfm for tables, strikethrough, task lists
- ✅ **Date Handling**: Fixed timezone issues with local date parsing for accurate display
- ✅ **Breadcrumb Navigation**: Added breadcrumbs to blog posts for improved UX
- ✅ **Renamed Blog**: Changed from "Blog" to "Wondering Weim Blog" for branding consistency
- ✅ **Initial Blog Posts**: Complete collection covering training stories, breed insights, and owner experiences

#### Adoption Page Enhancements
- ✅ **Petfinder Integration**: Live widget displaying real-time adoptable Weimaraners from rescue partners (AL48, NC26, GA544)
- ✅ **Rescue Partner Spotlights**: Dedicated sections for Weim Friends Rescue (Cincinnati, OH) and Tarheel Weimaraner Rescue (NC/SC/VA)
- ✅ **3-3-3 Rule**: Comprehensive adoption transition guide (First 3 Days, 3 Weeks, 3 Months)
- ✅ **Community Involvement**: Links to volunteer opportunities, donation pages, and rescue events
- ✅ **Preparation Guidance**: Detailed information about Weimaraner readiness, space requirements, and family considerations
- ✅ **Event Listings**: Cincinnati Flying Pig Marathon, My Furry Valentine adoption event, WagsPark Reunion, Walk for Weims
- ✅ **Donation Links**: Direct links to Kroger Community Rewards and rescue donation pages

#### Blog Post Features
Each blog post supports:
- `title`: Post title
- `date`: Publication date (YYYY-MM-DD format, parsed as local time)
- `author`: Author name
- `excerpt`: Short description for listing page
- `order`: Optional numeric ordering (lower numbers appear first)
- `image`: Optional featured image path (displayed in cards and post header)

Example frontmatter:
```yaml
---
title: "Welcome to WeimWisdom"
date: "2026-03-27"
author: "Weim Wisdom Team"
excerpt: "Welcome to our new blog!"
order: 1
image: "/images/weim-logo.png"
---
```

#### Breed Info Enhancements
- ✅ **Weim Variants Section**: Added comprehensive section covering coat colors (Silver-Gray, Mouse-Gray, Blue), coat types (short-haired, long-haired), and tail variations
- ✅ **Updated Page Flow**: Modified hero description to include variants section in logical order (history → variants → daily life → care)

#### Mobile Typography Optimization
- ✅ **Responsive Hero Section**: Reduced hero headline from 2.6rem to 2rem on mobile (xs breakpoint) to prevent text cutoff on iPhone 16
- ✅ **Page Headers**: Optimized PageHero component with mobile-first sizing (xs: 1.85rem → sm: 2.5rem → md: 4rem)
- ✅ **Section Headings**: Reduced SectionBlock h2 sizing for mobile (xs: 1.5rem → sm: 2rem → md: 2.5rem)
- ✅ **Consistent Body Text**: Standardized body text sizing across all pages (xs/sm: 1rem → md: 1.125rem)
- ✅ **YouTube Section**: Matched training page YouTube section styling with rest of site
- ✅ **Home Page Consistency**: Applied responsive sizing to "Continue at your own Risk" section

#### Page Consolidation
- ✅ **Removed Jobs Page**: Consolidated job content into Activities page
- ✅ **Removed Rescue Page**: Consolidated rescue resources into Adoption page
- ✅ **Final Site Structure**: 6 main pages (Home, Breed Info, Training, Activities, Adoption, Blog) + 404 page

#### Production Build Improvements
- ✅ **Clean Build Process**: Implemented automated cleanup to prevent duplicate files
- ✅ **No Duplicates**: Eliminated macOS artifacts from production builds
- ✅ **Build Verification**: Production build includes all pages, blog posts, images, and static assets
- ✅ **Static Server Testing**: Validated production builds using local static server (npx serve)
- ✅ **Content Formatting**: Resolved HTML entity rendering issues for proper quote display

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

- **Pages**: 6 main pages + blog listing + dynamic blog posts + 1 error page
- **Blog Posts**: 8 published posts (welcome-to-weim-wisdom, the-gray-ghost-chronicles, divas-of-the-backyard, training-oops-or-wow, the-morning-the-farm-girl-flipped-the-script, losing-the-walkie-walkie-privileges, weimaraner-shadow-demon, three-years-with-tri-ceri-hops)
- **Components**: 9 reusable React components
- **Rescue Partners**: 2 featured organizations (Weim Friends Rescue, Tarheel Weimaraner Rescue)
- **Live Integrations**: Petfinder API widget for real-time adoptable pet listings
- **Images**: 17+ optimized assets (including blog featured images)
- **Tests**: 12 unit/integration + 2 E2E tests
- **Test Coverage**: 100% pass rate on all accessibility and functionality tests
- **Production Build**: Static HTML export with all pages, blog posts, assets, and Apache configuration

## License

All rights reserved.
