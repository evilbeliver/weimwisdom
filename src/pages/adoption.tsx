import { Box, Typography } from '@mui/material';
import Script from 'next/script';
import { PageHero } from '@/components/PageHero';
import { SectionBlock } from '@/components/SectionBlock';
import { SiteLayout } from '@/components/SiteLayout';
import { fallbackMessage } from '@/data/siteContent';

export default function AdoptionPage() {
  return (
    <SiteLayout title="Adoption | WeimWisdom" description="Adoption spotlights and preparation guidance for Weimaraner families.">
      <Script src="https://www.petfinder.com/pet-scroller.bundle.js" strategy="afterInteractive" />
      <PageHero
        title="Adoption stories and readiness guidance"
        description="Help families find the right match with transparent spotlights, realistic routines, and breed-aware expectations."
      />
      <SectionBlock
        title="Live adoptable Weimaraners"
        description="These live listings are pulled from participating Weimaraner rescue organizations so visitors can see currently adoptable dogs."
        hasContent
        fallback={fallbackMessage}
      >
        <Box sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 4, p: { xs: 2, md: 3 }, bgcolor: 'background.paper' }}>
          <pet-scroller
            s3Url="https://dbw3zep4prcju.cloudfront.net/"
            apiBase="https://psl.petfinder.com/graphql"
            organization='["AL48", "NC26", "GA544"]'
            status="adoptable"
            petfinderUrl="https://www.petfinder.com/"
            hideBreed="false"
            limit="24"
            petListTitle=""
          />
          <Typography component="p" variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            If listings do not load, please refresh or visit Petfinder directly to browse adoptable Weimaraners.
          </Typography>
        </Box>
      </SectionBlock>
    </SiteLayout>
  );
}
