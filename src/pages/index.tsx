import { Alert, Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { GalleryGrid } from '@/components/GalleryGrid';
import { HeroSection } from '@/components/HeroSection';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { SectionBlock } from '@/components/SectionBlock';
import { SiteLayout } from '@/components/SiteLayout';
import { SpotlightGrid } from '@/components/SpotlightGrid';
import { breedFacts, fallbackMessage, galleryImages, homeHighlights } from '@/data/siteContent';

export default function HomePage() {
  return (
    <SiteLayout
      title="WeimWisdom | Sleek and modern Weimaraner guide"
      description="Explore Weimaraner breed info, training tips, rescue resources, activities, jobs, and adoption guidance."
    >
      <HeroSection />
      <SectionBlock
        id="breed-overview"
        eyebrow="Core breed info"
        title="What makes Weimaraners unforgettable"
        description={[
          "With over 25 years of experience living with Weimaraner's, I've learned that these \"Gray Ghosts\" are far more than just pets—they are highly intelligent, \"human-like\" companions with the mental energy and sass of a perpetual toddler. Possessing an uncanny ability to understand their families, Weims thrive on deep bonds but require a strong, caring leader to navigate their unique personalities. They are notorious \"Velcro dogs\" who want to be involved in everything you do, and without proper training, their intense desire to please can quickly manifest as separation anxiety or a series of clever \"Weim Crimes.\"",
          "Living with a Weimaraner is an acquired taste; they are equivalent to a 3-to-5-year-old child who is constantly learning, challenging boundaries, and prone to the occasional temper tantrum. Because they are elite puzzle solvers—capable of opening everything from doors, refrigerators, to 12-packs of beer—they require constant mental and physical stimulation. If they aren't given a job, they will surely \"hire themselves\" for one you won't like, often resulting in the destruction of furniture or other precious items. While I often find myself talking people out of the breed to ensure a proper match, there is truly nothing more stunning than seeing a Weimaraner in their element. Whether they are hunting or working, their grace and focus make every challenge of the breed entirely worth it."
        ]}
        hasContent={homeHighlights.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={homeHighlights} />
      </SectionBlock>
      <SectionBlock
        eyebrow="Fun facts"
        title="Fun facts about your future companion"
        description={`Draped in shimmering silver velvet, the Weimaraner is a "Gray Ghost" with a heart of pure gold—and just a dash of drama. These velvety-eared adventurers are a "ready-to-go" starter pack for anyone seeking a shadow, as they are famously human-oriented and might actually believe they are tiny lap dogs. While they are wickedly fast learners, they come with a side of big, sensitive feelings; one stern look and you'll see those soulful eyes crumble! To soothe their inner "savage beast" after a long day of questing, you'll often find them "nooking"—a whimsical, rhythmic suckling on their favorite blanket that turns these fierce hunters back into adorable, oversized babies.`}
        hasContent={breedFacts.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={breedFacts} />
      </SectionBlock>
      <SectionBlock
        eyebrow="Photo gallery"
        title="Pictures that capture the Gray Ghost vibe"
        description={[
          `Step into the world of the "Gray Ghost," where a silvery shadow dances through the mist with the grace of a phantom. It all begins with those enchanting Blue Caspian sea puppy eyes—a fleeting, oceanic gaze that eventually transforms into the iconic, piercing amber stare of a soulful adult.`,
          `In these snapshots, you'll see their athleticism in full flight, whether they are following a faint trail with a masterful nose or holding a steady, patient point built on a foundation of absolute trust. But don't let the elegance fool you; behind those velvet ears lurks a mischievous spirit prone to the ever-eccentric "Weim Crimes." Whether they're stealing your sandwich or your spot on the couch, they do it with a charm that makes every "crime" mostly just adorable.`
        ]}
        hasContent={galleryImages.length > 0}
        fallback={fallbackMessage}
      >
        <GalleryGrid items={galleryImages} />
      </SectionBlock>
      <Box sx={{ py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={2.5}>
                <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>Continue at your own Risk</Typography>
                <Typography color="text.secondary" sx={{ fontSize: { xs: '1rem', sm: '1rem', md: '1.125rem' } }}>
                  I warned you, turn back now..progressing further will lead you futher down the weim rabbit hole, and you may never look at dogs the same way again. But if you&apos;re ready to embrace the chaos, click through to explore training tips, activities, rescue resources, and more to keep your Weimaraner happy and fulfilled.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button component={Link} href="/activities" variant="contained">
                    Browse activities
                  </Button>
                  <Button component={Link} href="/adoption" variant="outlined">
                    View available adoptions
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <ResponsiveImage 
                src="/images/weim-beware.jpg" 
                alt="Weimaraner warning sign"
                caption="Fair warning for the uninitiated"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </SiteLayout>
  );
}
