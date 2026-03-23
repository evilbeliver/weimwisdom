# WeimWisdom

WeimWisdom is a sleek, accessible, mobile-ready Next.js site for Weimaraner breed info, training, activities, jobs, rescue, and adoption resources. Built with Next.js 14, Material-UI, and TypeScript.

## Features

- 🐕 **Comprehensive Breed Information**: Detailed Weimaraner characteristics, temperament, and care essentials
- 🎓 **Training Resources**: Professional training tips and guidance
- 🏃 **Activities & Jobs**: Exercise recommendations and purpose-driven work ideas for high-energy Weimaraners
- 🏠 **Rescue Resources**: Rescue organization listings and support information
- 👪 **Adoption Guidance**: Complete adoption process and preparation guides
- ♿ **Fully Accessible**: WCAG compliant with comprehensive accessibility testing
- 📱 **Mobile-First Design**: Responsive layouts optimized for all screen sizes
- 🎨 **Modern UI**: Clean, professional design with Material-UI components

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **UI Library**: Material-UI (MUI) v6
- **Testing**: Jest, React Testing Library, Playwright
- **Accessibility**: jest-axe for automated a11y testing
- **Linting**: ESLint with Next.js configuration

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
│   ├── rescue.tsx
│   └── adoption.tsx
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

### Static Export for Siteground

```bash
npm run build:siteground
```

This command exports the static site and copies it into `build/production` for Siteground-style static hosting. The output includes:
- Pre-rendered HTML pages
- Optimized static assets
- Client-side JavaScript bundles

## Recent Updates

### Content & Structure
- ✅ **Combined Activities & Jobs pages** into single comprehensive page with two sections
- ✅ **Page content separation**: Created independent content arrays (homeHighlights, breedInfoHistory, breedInfoCare, breedInfoGallery) for cleaner page management
- ✅ **Added Fun Facts cards**: Velvet ears and nooking behavior to home page
- ✅ **Enhanced Breed Info page**: Added detailed history/temperament and care sections with multi-paragraph support
- ✅ **Expanded activity ideas**: Added Barn Hunts card (5 total activities)
- ✅ **Expanded job ideas**: Added Search and Rescue (SAR), Field Trials, and Detection Work cards (6 total jobs)

### Technical Improvements
- ✅ Updated home page breed description with detailed "Gray Ghost" and "Velcro dog" characteristics
- ✅ Image format conversions: Converted SVG placeholders to PNG/JPG formats throughout site
- ✅ Fixed 404 errors by updating all image references to match actual file extensions
- ✅ Improved header layout with left-justified branding to support future logo integration
- ✅ Enhanced navigation spacing and added `whiteSpace: 'nowrap'` to prevent wrapping
- ✅ Multi-paragraph description support: SectionBlock component accepts string | string[] for descriptions
- ✅ MUI Grid v2 migration: Updated components to use size prop instead of deprecated item/xs/md

## Contributing

This project follows best practices for Next.js development, Material-UI theming, and accessibility standards. When contributing:

1. Maintain TypeScript strict mode compliance
2. Follow the established component structure
3. Add tests for new features
4. Ensure accessibility standards are met
5. Update this README with significant changes

## License

All rights reserved.
