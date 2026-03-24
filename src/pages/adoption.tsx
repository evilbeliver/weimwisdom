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
        description="Find your perfect Weimaraner companion through rescue organizations and learn how to prepare for this energetic breed."
      />
      <SectionBlock
        title="Are you ready for the Gray Ghost?"
        description={`So, you've read the warnings, seen the "raptor" gaze, and you still want to invite a silver-coated chaos agent into your home? Wow. Consider yourself officially warned: once a Weimaraner glides into your world, there is no turning back. They won't just move into your house; they will staging a hostile takeover of your heart (and your favorite armchair). It's a bittersweet reality that many of these phantoms find themselves in rescues across the country. Too often, humans are bewitched by their majestic beauty, only to realize they've actually adopted a high-octane velociraptor in a velvet suit. The "teenager" phase—between 8 and 18 months—is when many owners find themselves waving the white flag of surrender, overwhelmed by a dog that has more energy than a nuclear reactor and the demanding nature of a spoiled monarch. By choosing adoption, you aren't just getting a dog; you're recruiting a brilliant, silver-clad sidekick who was just waiting for a human brave enough to handle the hustle.`}
        hasContent
      />
      <SectionBlock
        title="Adoptable Weimaraners"
        description={[
          `These live listings are pulled from participating Weimaraner rescue organizations so visitors can see currently adoptable dogs. If no resutls are showing you may have to turn off your VPN if you are using one.`,
          `Imagine a spirited, long-legged explorer bounding into your life, ready to transform your world into a whirlwind of joy! To keep these energetic souls happy, a vast, securely fenced kingdom is ideal for their zoomies; however, they can adapt to a cozy apartment life as long as they get plenty of exhilarating, off-leash adventures to tire out those tireless paws. While they are incredibly tender-hearted with tiny humans, their "bull-in-a-china-shop" enthusiasm means they might accidentally tumble a toddler during play, and their keen eyes are always on the lookout for a "chase," so smaller furry friends should be introduced with extra care.`,
          `To help your new companion settle into this fairytale, follow the magical 3-3-3 rule: The First 3 Days: This is the "hibernation" phase. Your pup may feel overwhelmed or shy, so give them a quiet space to decompress and realize they are finally safe. The First 3 Weeks: The "learning the ropes" phase. As their true personality begins to peek through, they'll start to figure out your daily rhythm, from breakfast time to the best spot on the rug. The First 3 Months: The "happily ever after" phase. By now, the bond is sealed; they fully trust their environment, feel a true sense of belonging, and realize they aren't just visiting—they are finally home.`
        ]}
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
