import { Alert, Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { GalleryGrid } from '@/components/GalleryGrid';
import { HeroSection } from '@/components/HeroSection';
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
        description="The Weimaraner is a striking, high-energy &quot;Gray Ghost&quot; prized for its intense loyalty, intelligence, and need for significant daily activity. Often described as a &quot;Velcro dog&quot; that shadows owners, this versatile breed requires dedicated training and an active lifestyle to thrive."
        hasContent={homeHighlights.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={homeHighlights} />
      </SectionBlock>
      <SectionBlock
        eyebrow="Fast facts"
        title="Fun facts for future running buddies"
        description="From their famous silver coat to their love of closeness, these quick facts help visitors understand the breed at a glance."
        hasContent={breedFacts.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={breedFacts} />
      </SectionBlock>
      <SectionBlock
        eyebrow="Photo gallery"
        title="Pictures that capture the silver-shadow vibe"
        description="The site stays photo-rich while still handling missing assets gracefully with a friendly fallback state."
        hasContent={galleryImages.length > 0}
        fallback={fallbackMessage}
      >
        <GalleryGrid items={galleryImages} />
      </SectionBlock>
      <Box sx={{ py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Stack spacing={2.5}>
                <Typography variant="h2">Plan your next visit</Typography>
                <Typography color="text.secondary">
                  Jump into detailed breed facts, training guidance, or rescue support depending on where you are in your Weimaraner journey.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button component={Link} href="/activities" variant="contained">
                    Browse activities
                  </Button>
                  <Button component={Link} href="/rescue" variant="outlined">
                    View rescue resources
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Alert severity="success">Mobile-friendly layouts, accessible navigation, and static export support are built in site-wide.</Alert>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </SiteLayout>
  );
}
