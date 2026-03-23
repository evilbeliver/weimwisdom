import { PageHero } from '@/components/PageHero';
import { SectionBlock } from '@/components/SectionBlock';
import { SiteLayout } from '@/components/SiteLayout';
import { SpotlightGrid } from '@/components/SpotlightGrid';
import { fallbackMessage, trainingGuides } from '@/data/siteContent';
import { Typography } from '@mui/material';

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
        title="Training Videos"
        description=""
        hasContent
      >
        <Typography variant="h5" color="text.secondary" align="center">
          Coming Soon
        </Typography>
      </SectionBlock>
    </SiteLayout>
  );
}
