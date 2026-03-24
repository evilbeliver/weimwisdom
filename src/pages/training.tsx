import { PageHero } from '@/components/PageHero';
import { SectionBlock } from '@/components/SectionBlock';
import { SiteLayout } from '@/components/SiteLayout';
import { SpotlightGrid } from '@/components/SpotlightGrid';
import { fallbackMessage, trainingGuides } from '@/data/siteContent';
import { Box, Button, Stack, Typography } from '@mui/material';
import { YouTube as YouTubeIcon } from '@mui/icons-material';

export default function TrainingPage() {
  return (
    <SiteLayout title="Training | WeimWisdom" description="Training guides and enrichment plans for energetic, intelligent Weimaraners.">
      <PageHero
        title="Training plans for bright dogs with big engines"
        description="Use short sessions, clear reinforcement, and daily decompression to turn energy into teamwork."
      />
      <SectionBlock
        title="Guides that fit the breed"
        description="Each guide focuses on practical structure: impulse control, recall, and mental workouts that support emotional balance."
        hasContent={trainingGuides.length > 0}
        fallback={fallbackMessage}
      >
        <SpotlightGrid items={trainingGuides} />
      </SectionBlock>
      <SectionBlock
        title="Training Videos- Coming Soon"
        description="Watch detailed training demonstrations and learn proven techniques."
        hasContent
      >
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Stack spacing={3} alignItems="center">
            <YouTubeIcon sx={{ fontSize: 64, color: '#FF0000' }} />
            <Typography variant="h6" gutterBottom>
              Subscribe to our YouTube channel Balanced Leash for exclusive training content
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
              Get access to step-by-step training videos, behavior tips, and expert guidance.
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="https://www.youtube.com/channel/UCqxGrAMtxPi3zwihJAySn2A?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<YouTubeIcon />}
              sx={{ 
                bgcolor: '#FF0000',
                '&:hover': { bgcolor: '#CC0000' }
              }}
            >
              Subscribe & Watch Videos
            </Button>
          </Stack>
        </Box>
      </SectionBlock>
    </SiteLayout>
  );
}
