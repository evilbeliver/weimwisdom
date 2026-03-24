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
        title="Adoption and readiness guidance"
        description={`So, you've read the warnings, seen the "raptor" gaze, and you still want to invite a silver-coated chaos agent into your home? Wow. Consider yourself officially warned: once a Weimaraner glides into your world, there is no turning back. They won't just move into your house; they will staging a hostile takeover of your heart (and your favorite armchair). It's a bittersweet reality that many of these phantoms find themselves in rescues across the country. Too often, humans are bewitched by their majestic beauty, only to realize they've actually adopted a high-octane velociraptor in a velvet suit. The "teenager" phase—between 8 and 18 months—is when many owners find themselves waving the white flag of surrender, overwhelmed by a dog that has more energy than a nuclear reactor and the demanding nature of a spoiled monarch. By choosing adoption, you aren't just getting a dog; you're recruiting a brilliant, silver-clad sidekick who was just waiting for a human brave enough to handle the hustle.`}
      />
      <SectionBlock
        title="Live adoptable Weimaraners"
        description="These live listings are pulled from participating Weimaraner rescue organizations so visitors can see currently adoptable dogs. If no resutls are showing you may have to turn off your VPN if you are using one."
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
